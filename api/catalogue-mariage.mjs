// api/catalogue-mariage.mjs — Fonction serverless Vercel (Node.js)
//
// Sert le catalogue tarifaire mariage au configurateur /salon-du-mariage,
// en le lisant EN TEMPS RÉEL depuis PlanniFlow.
//
// Pourquoi un proxy côté mgr-site plutôt qu'un fetch direct depuis la page ?
//  - même origine : pas de CORS, pas de CSP à élargir
//  - cache CDN : PlanniFlow n'est pas frappé à chaque visiteur
//  - repli : si PlanniFlow tombe ou change, la page garde les tarifs connus
//    (elle n'affiche JAMAIS un prix vide ou une erreur au client)
//
// Variables d'environnement Vercel (optionnelles) :
//   CATALOGUE_URL    = URL exacte de la route PlanniFlow renvoyant le JSON
//                      (si absente, on essaie les candidats ci-dessous)
//   CATALOGUE_TOKEN  = jeton Bearer, si la route est protégée
//
// La réponse contient toujours "source" : "planniflow" (temps réel) ou
// "fallback" (repli), + "reason" en cas de repli — pratique pour diagnostiquer
// en ouvrant /api/catalogue-mariage dans le navigateur.

const PF = "https://planniflow-4jrm.vercel.app";

// Essayés dans l'ordre, le premier qui renvoie du JSON exploitable gagne.
const CANDIDATS = [
  process.env.CATALOGUE_URL,
  `${PF}/api/wedding/catalogue`,
  `${PF}/api/wedding/catalogue?format=json`,
  `${PF}/wedding/catalogue?format=json`,
].filter(Boolean);

// Tarifs de référence = ceux actuellement affichés sur le salon.
// Ils ne servent QUE de filet de sécurité.
const FALLBACK = {
  formules: [
    { id: "economic", prix: 999,  remise: 0 },
    { id: "basic",    prix: 1899, remise: 0 },
    { id: "beau",     prix: 2699, remise: 100 },
    { id: "sublime",  prix: 3999, remise: 200 },
    { id: "vip",      prix: 5490, remise: 250 },
  ],
  options: [
    { id: "sono_facade", prix: 650 }, { id: "sono_grande", prix: 990 },
    { id: "sono_cocktail_ext", prix: 350 }, { id: "point_sup", prix: 180 },
    { id: "ceremonie", prix: 350 }, { id: "micro_hf", prix: 90 },
    { id: "micro_hf2", prix: 60 }, { id: "lumiere_piste", prix: 350 },
    { id: "lumiere_premium", prix: 590 }, { id: "uplighting", prix: 290 },
    { id: "djbooth", prix: 250 }, { id: "fumee", prix: 150 },
    { id: "etincelles2", prix: 250 }, { id: "etincelles4", prix: 420 },
    { id: "confettis", prix: 90 }, { id: "bulles", prix: 110 },
    { id: "photobooth", prix: 490 }, { id: "videoproj", prix: 180 },
  ],
};

const num = v => {
  if (v === null || v === undefined || v === "") return null;
  // accepte 1 899, "1899€", "1 899,00"
  const n = Number(String(v).replace(/[^\d.,-]/g, "").replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? Math.round(n) : null;
};
const str = (...v) => { for (const x of v) if (typeof x === "string" && x.trim()) return x.trim(); return null; };

// PlanniFlow peut nommer ses champs de plusieurs façons : on reste tolérant
// plutôt que d'imposer un contrat qui casserait au premier renommage.
function ligne(o) {
  if (!o || typeof o !== "object") return null;
  const id = str(o.id, o.slug, o.code, o.key, o.identifiant);
  if (!id) return null;
  return {
    id,
    nom:    str(o.nom, o.name, o.label, o.titre, o.title),
    desc:   str(o.desc, o.description, o.ds, o.tag, o.sous_titre),
    prix:   num(o.prix ?? o.price ?? o.montant ?? o.amount ?? o.prix_ttc ?? o.pr),
    remise: num(o.remise ?? o.discount ?? o.remise_salon ?? o.reduction),
  };
}

// Accepte : {formules,options} · {packs,...} · un tableau brut · options groupées par catégorie
function normalise(raw) {
  const root = (raw && (raw.catalogue || raw.data || raw)) || {};
  const brutF = root.formules || root.packs || root.packages || root.forfaits ||
                (Array.isArray(root) ? root : []);
  let brutO = root.options || root.suppléments || root.supplements || root.extras || [];
  // options éventuellement groupées : [{cat, items:[...]}]
  if (Array.isArray(brutO) && brutO.some(c => c && Array.isArray(c.items))) {
    brutO = brutO.flatMap(c => (Array.isArray(c.items) ? c.items : []));
  }
  const clean = arr => (Array.isArray(arr) ? arr.map(ligne).filter(l => l && l.prix !== null) : []);
  return { formules: clean(brutF), options: clean(brutO) };
}

export default async function handler(req, res) {
  // 60 s de cache CDN : un changement de tarif se propage en moins d'une minute,
  // sans exposer PlanniFlow au trafic du salon.
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=600");

  const headers = { Accept: "application/json" };
  if (process.env.CATALOGUE_TOKEN) headers.Authorization = `Bearer ${process.env.CATALOGUE_TOKEN}`;

  const essais = [];
  for (const url of CANDIDATS) {
    try {
      const r = await fetch(url, { headers, signal: AbortSignal.timeout(4000) });
      if (!r.ok) { essais.push(`${url} → HTTP ${r.status}`); continue; }
      // une page HTML renvoie 200 : on refuse tout ce qui n'est pas du JSON
      if (!String(r.headers.get("content-type") || "").includes("json")) {
        essais.push(`${url} → pas du JSON (page HTML ?)`); continue;
      }
      const cat = normalise(await r.json());
      if (!cat.formules.length && !cat.options.length) { essais.push(`${url} → JSON sans tarifs`); continue; }
      return res.status(200).json({ ...cat, source: "planniflow", url, maj: new Date().toISOString() });
    } catch (e) {
      essais.push(`${url} → ${String((e && e.message) || e)}`);
    }
  }

  // Aucun candidat exploitable : la page garde les tarifs connus.
  return res.status(200).json({ ...FALLBACK, source: "fallback", essais });
}

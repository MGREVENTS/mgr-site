// api/lead.js — Fonction serverless Vercel (Node.js)
// Reçoit le formulaire du configurateur et envoie 2 emails via Resend :
//  1) la fiche lead à MGR Wedding
//  2) un accusé de réception au couple
//
// ⚠️ La clé API n'est JAMAIS dans le code. Elle est lue depuis les
// variables d'environnement Vercel : RESEND_API_KEY.
//
// Variables d'environnement à définir sur Vercel :
//   RESEND_API_KEY   = (ta clé Resend, commence par re_...)
//   LEAD_TO          = adresse qui reçoit les leads        (def. contact@mgrevents.fr)
//   LEAD_FROM        = expéditeur vérifié sur Resend        (def. MGR Wedding <devis@mgrevents.fr>)
//
// Le domaine de LEAD_FROM doit être vérifié dans ton compte Resend.

const eur = n => Math.round(Number(n) || 0).toLocaleString("fr-FR");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const KEY = process.env.RESEND_API_KEY;
  if (!KEY) {
    return res.status(500).json({ error: "RESEND_API_KEY manquante" });
  }

  const TO   = process.env.LEAD_TO   || "contact@mgrevents.fr";
  const FROM = process.env.LEAD_FROM || "MGR Wedding <devis@mgrevents.fr>";

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const c = (body && body.contact) || {};

  if (!c.prenom || !c.nom || !c.email) {
    return res.status(400).json({ error: "Champs requis manquants" });
  }

  const optsLignes = (body.options || [])
    .map(o => `<tr><td style="padding:4px 12px 4px 0">${o.nom}</td><td style="padding:4px 0;text-align:right;font-family:monospace">${o.prix === null ? "sur devis" : "+ " + eur(o.prix) + " €"}</td></tr>`)
    .join("");

  const interne = `
    <div style="font-family:Arial,sans-serif;color:#2E2320;max-width:560px">
      <h2 style="color:#E11A5B;margin:0 0 4px">Nouveau lead — Salon du Mariage</h2>
      <p style="color:#8C7B70;margin:0 0 16px">${c.prenom} ${c.nom}</p>
      <table style="font-size:14px;border-collapse:collapse;width:100%">
        <tr><td style="padding:4px 12px 4px 0;color:#8C7B70">Email</td><td><a href="mailto:${c.email}">${c.email}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#8C7B70">Téléphone</td><td>${c.tel || "—"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#8C7B70">Date du mariage</td><td>${c.date || "—"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#8C7B70">Invités</td><td>${c.invites || "—"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#8C7B70">Lieu</td><td>${c.lieu || "—"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#8C7B70;vertical-align:top">Message</td><td>${(c.message || "—").replace(/</g,"&lt;")}</td></tr>
      </table>
      <h3 style="margin:18px 0 6px">Formule : ${body.formule} — ${eur(body.prixFormule)} €</h3>
      ${body.remiseSalon ? `<p style="margin:0 0 8px;color:#E11A5B">Remise partenariat Salon : − ${eur(body.remiseSalon)} €</p>` : ""}
      <table style="font-size:14px;border-collapse:collapse;width:100%">${optsLignes || '<tr><td style="color:#8C7B70">Aucune option</td></tr>'}</table>
      <p style="font-size:18px;margin:14px 0 0"><b>Total estimé : <span style="color:#E11A5B">${eur(body.totalTTC)} € TTC</span></b></p>
    </div>`;

  const couple = `
    <div style="font-family:Arial,sans-serif;color:#2E2320;max-width:540px">
      <h2 style="color:#E11A5B">Merci ${c.prenom} ✦</h2>
      <p>Nous avons bien reçu votre demande pour l'animation de votre mariage. Voici le récapitulatif de votre estimation :</p>
      <div style="background:#FCF7EC;border:1px solid #E7DAC4;border-radius:12px;padding:14px 16px;margin:14px 0">
        <p style="margin:0 0 8px"><b>Formule ${body.formule}</b> — ${eur(body.prixFormule)} €</p>
        ${body.remiseSalon ? `<p style="margin:0 0 8px;color:#E11A5B">Offre spéciale Salon du Mariage : − ${eur(body.remiseSalon)} €</p>` : ""}
        <table style="font-size:14px;width:100%">${optsLignes}</table>
        <p style="margin:10px 0 0;font-size:17px"><b>Total estimé : <span style="color:#E11A5B">${eur(body.totalTTC)} € TTC</span></b></p>
      </div>
      <p>Un membre de l'équipe MGR Wedding vous recontacte très vite pour affiner tout ça ensemble.</p>
      <p style="color:#8C7B70;font-size:13px">MGR Wedding · DJ &amp; Production mariage · Île-de-France</p>
    </div>`;

  async function send(payload) {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!r.ok) throw new Error("Resend " + r.status + " " + (await r.text()));
    return r.json();
  }

  try {
    await send({ from: FROM, to: [TO], reply_to: c.email,
      subject: `Lead mariage — ${c.prenom} ${c.nom} (${eur(body.totalTTC)} €)`, html: interne });
    // accusé au couple (silencieux si échec)
    try { await send({ from: FROM, to: [c.email],
      subject: "Votre devis MGR Wedding", html: couple }); } catch (_) {}
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ error: String(e.message || e) });
  }
}

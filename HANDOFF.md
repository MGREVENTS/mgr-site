# MGR Events — Handoff

_État du repo au 21/04/2026_

## 1. Où on en est

Le site vitrine `mgrevents.fr` est **en prod**, stable, one-page. La dernière vague de commits a porté sur :
- La refonte du copy hero (ton "Porsche" — exigence, confidence, understatement).
- La normalisation de toutes les photos DJs (600×800, `object-position: top`, pas de crop de tête).
- Le responsive mode paysage (hero, stats, grid DJs, marques, modales).
- L'UX des modales marques (back button navigateur ferme la modale au lieu de sortir du site).
- L'ajout dans `vercel.json` des rewrites vers l'app PlanniFlow (`/partner`, `/admin`, `/wedding`, `/crm`, `/marketing`, `/nomames`, `/booking`, `/onboarding`).

## 2. Branches

- `main` : prod.
- `claude/mgr-site-handoff-O94J0` : branche courante, **1 commit d'avance** sur `main` (`4ca8dcb feat(rewrites): ajouter partner, onboarding, admin, wedding, crm, marketing, nomames, booking`).

Rien d'autre en attente côté git, working tree clean.

## 3. Architecture — rappel

Site statique, zéro build, zéro framework.

```
index.html       # 674 lignes — structure + CSS inline + JS qui lit C = SITE_CONFIG
config.js        # TOUT le contenu éditable (DJs, textes, marques, photos, partenaires)
mentions.html    # page mentions légales
assets/
  djs/           # photos DJs (.png originales + .webp optimisées)
  photos/        # photos sections / galeries marques (.webp)
  waveform.*     # logo
vercel.json      # headers de sécurité + rewrites vers PlanniFlow
deploy.sh        # déploiement Hostinger via rsync/SSH (placeholders non remplis)
sitemap.xml, robots.txt
```

Pour modifier du contenu : **toujours `config.js`**. `index.html` ne contient que du template.

## 4. Contenu actuel

### DJs (12 actifs dans `config.js`)
Logan, Jem, Stevis, Ny Aina, Krislay, Deloums, Benka, Lixx, West, Opal, Nigelen, Real.
Toutes les photos existent en `.webp` dans `assets/djs/`.

### Marques
4 marques définies dans `config.brands` mais **seulement 3 affichées sur la home** :
```js
// index.html:418
const brandKeys = ['events','wedding','nomames'];
```
`school` (MGR School) est **configuré mais masqué**. Pour la réactiver il suffit d'ajouter `'school'` au tableau `brandKeys`. À noter : `config.photos.school_hero` pointe vers `assets/photos/school-hero.jpg` qui **n'existe pas encore** dans le repo — à ajouter avant de réactiver.

### Stats home
120+ bookings/mois, 25 DJs résidents, 15 établissements, 8 ans d'expérience.

### Partenaires
Duplex Paris, Seguin Sound Club, Fluctuart, Quai de la Photo, Gastby.

### Galeries
- Events : 7 photos (gatsby1/2, fluctuart, duplex-1→4).
- No Mames : 5 photos (bichotas ×3, sinlimites ×2).
- Wedding : pas de galerie — à la place, un embed YouTube (aftermovie `Iy-Wbd6jF5c`).

## 5. Formulaire de contact

Le formulaire POST vers `/api/send-contact` (`index.html:623`). Il n'y a **pas de handler local** — ça passe par la rewrite Vercel :
```json
{ "source": "/api/:path*", "destination": "https://planniflow-4jrm.vercel.app/api/:path*" }
```
→ l'endpoint vit donc dans le projet PlanniFlow. À garder en tête : si PlanniFlow tombe ou que la route change, le formulaire casse silencieusement. Le bouton affiche alors "Erreur — Réessayer".

`CLAUDE.md` mentionne encore Formspree et une variable `FORM_ENDPOINT` dans `config.js` — **c'est obsolète**, il n'y a plus de `FORM_ENDPOINT` dans le code.

## 6. Déploiement

**Deux chemins coexistent**, c'est le principal point d'ambiguïté du repo :

| Chemin | Fichier | État |
|---|---|---|
| Hostinger via rsync/SSH | `deploy.sh` | Placeholders non remplis (`u123456789`, `ssh.mgrevents.fr`). Pas utilisable en l'état. |
| Vercel | `vercel.json` | Configuré avec headers de sécurité + rewrites. C'est ce qui sert la prod aujourd'hui. |

→ **Le déploiement réel se fait via Vercel** (push sur `main`). Le `deploy.sh` et la mention Hostinger dans `CLAUDE.md` sont du legacy à nettoyer si on confirme qu'on ne revient pas dessus.

## 7. Sécurité

`vercel.json` + meta CSP dans `index.html` posent :
- CSP stricte (scripts self + unsafe-inline/eval, connect-src whitelist Supabase + PlanniFlow).
- `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`.
- `frame-ancestors 'none'`, `form-action 'self'`.

La `connect-src` autorise `spsnpknxqmogwymutvqu.supabase.co` — prévu pour un éventuel branchement Supabase (évoqué dans `CLAUDE.md` comme alternative à Formspree).

## 8. À faire / points ouverts

**Bloquants — aucun.** Le site tourne.

**Nettoyage recommandé** :
1. Décider du destin de `deploy.sh` : soit remplir les variables Hostinger, soit le supprimer et corriger `CLAUDE.md` (qui dit encore "hébergé sur Hostinger").
2. Corriger `CLAUDE.md` sur le formulaire : plus de Formspree, plus de `FORM_ENDPOINT`, c'est PlanniFlow `/api/send-contact`.
3. Décider du sort de MGR School : soit ajouter `school-hero.jpg` et réactiver dans `brandKeys`, soit retirer `brands.school` et `photos.school_hero` de `config.js`.
4. Merger `claude/mgr-site-handoff-O94J0` → `main` pour que les rewrites PlanniFlow partent en prod (actuellement seulement sur la branche).
5. `sitemap.xml` a des `lastmod: 2026-04-10` figés — à mettre à jour ou à générer.
6. Poids PNG : les originaux DJ (`Stevis.png` = 1.1 Mo, `real.png` = 1.4 Mo) sont dans le repo à côté des `.webp`. `index.html` ne sert que les `.webp`, les PNG pourraient sortir du repo (ou au moins du déploiement) pour alléger.

**Pistes produit** (non démarrées) :
- Brancher le formulaire sur Supabase directement au lieu de passer par PlanniFlow (la CSP l'autorise déjà).
- Ouvrir MGR School publiquement quand le contenu est prêt.

## 9. Commandes utiles

```bash
# Dev local
python3 -m http.server 8000   # puis http://localhost:8000

# Optimisation photo
sips -Z 800 photo.jpg
cwebp -q 80 photo.png -o photo.webp

# Déploiement
git push origin main          # Vercel déploie automatiquement
```

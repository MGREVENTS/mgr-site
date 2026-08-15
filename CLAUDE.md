# MGR Events — Site vitrine

## Convention de prompts (deux projets, un seul repo de référence)

Deux projets coexistent, et les demandes peuvent concerner l'un ou l'autre.
Pour éviter les allers-retours entre conversations, les prompts utilisent
toujours un préfixe explicite :

| Préfixe | Projet ciblé | Repo / déploiement |
|---|---|---|
| **« change le site … »** | `mgr-site` (vitrine `mgrevents.fr`) | ce repo, déploiement Vercel via push `main` |
| **« change sur planning … »** | `planniflow` (app interne, planning, CRM, booking, etc.) | repo séparé, déployé sur `planniflow-4jrm.vercel.app` |

→ Si le prompt commence par **« change le site »**, toutes les modifs se font
dans **ce repo** (`mgr-site`).
→ Si le prompt commence par **« change sur planning »**, la cible est le
projet **PlanniFlow** (autre repo). Depuis ce repo on ne peut rien y faire ;
il faut basculer sur le repo planniflow.

## Lien entre les deux projets — les proxies (`vercel.json`)

`mgrevents.fr` proxifie un grand nombre de routes vers l'app PlanniFlow via
les `rewrites` de `vercel.json`. Concrètement, l'utilisateur ne quitte jamais
le domaine `mgrevents.fr`, mais les pages servies viennent de PlanniFlow.

### Ce qui est proxifié aujourd'hui : **tout, par défaut**

Depuis le passage au *catch-all*, `vercel.json` ne liste plus les routes une
par une. La dernière rewrite envoie **toute URL non gérée par le site
statique** vers PlanniFlow :

```json
{ "source": "/:path*", "destination": "https://planniflow-4jrm.vercel.app/:path*" }
```

→ **Une nouvelle page PlanniFlow est immédiatement accessible sur
`mgrevents.fr`, sans rien ajouter ici.**

### Ordre de résolution Vercel (à connaître avant de modifier `vercel.json`)

1. **`redirects`** — les 301 historiques (`/real`, `/dj-*`…)
2. **Fichiers statiques et fonctions `api/`** — `index.html`, `mariage.html`,
   `blog.html`, `article.html`, `mentions.html`, `assets/*`, `robots.txt`,
   `sitemap.xml`, `/api/lead`, `/api/catalogue-mariage`.
   Ils sont servis **ici**, donc aucune rewrite ne peut les intercepter.
3. **`rewrites`**, dans l'ordre — la première qui correspond gagne :
   - `/mariage`, `/blog`, `/blog/:slug` → pages statiques du site
   - `/app`, `/app/*` → PlanniFlow **en retirant le préfixe** `/app`
     (seules règles qui transforment le chemin : à conserver)
   - `/:path*` → **catch-all PlanniFlow**

### Ce qui appartient au site vs à l'app

| URL | Servie par |
|---|---|
| `/`, `/mariage`, `/blog`, `/blog/:slug`, `/mentions.html` | site statique (ce repo) |
| `/api/lead`, `/api/catalogue-mariage` | fonctions serverless de **ce** repo |
| `/salon-du-mariage` | **PlanniFlow** (l'ancienne page statique est dans `archive/`, non déployée — voir `.vercelignore`) |
| tout le reste | **PlanniFlow** |

### Conséquences à garder en tête

1. **Une URL inexistante affiche le 404 de PlanniFlow**, plus celui du site.
   C'est le prix du catch-all.
2. **Pour rendre une URL au site statique** : ajouter le fichier
   correspondant (le filesystem passe avant les rewrites), ou une rewrite
   placée **avant** le catch-all.
3. **Collision de noms `/api/`** : si PlanniFlow crée une route nommée
   `lead` ou `catalogue-mariage`, elle sera masquée par la fonction locale.
4. **Le formulaire de contact** (`POST /api/send-contact`) part vers
   PlanniFlow. Si la route change côté planning, le formulaire casse
   silencieusement (bouton « Erreur — Réessayer »).
5. **CSP** (`index.html`) autorise déjà `planniflow-4jrm.vercel.app` et
   `spsnpknxqmogwymutvqu.supabase.co` dans `connect-src`.
6. **`vercel.json` n'accepte pas de clé de commentaire** (`"//"`) : Vercel
   valide le schéma et fait échouer le build. La doc vit ici.

### Workflow type
- « **change sur planning** ajoute une page `/devis` » → modif côté repo
  PlanniFlow **uniquement**. Le catch-all s'en charge, rien à faire ici.
- « **change le site** mets à jour la photo de Logan » → uniquement ce repo.

## Architecture
Site statique one-page (HTML/CSS/JS) hébergé sur Hostinger.
- `index.html` — le site complet, lit tout depuis `config.js`
- `config.js` — **TOUT le contenu éditable** (DJs, textes, stats, photos, marques)
- `assets/` — images (logo, photos DJs, photos sections)
- `deploy.sh` — déploiement vers Hostinger via rsync/SSH

## Règles

### Pour modifier du contenu
- **TOUJOURS éditer `config.js`**, jamais `index.html`
- Ajouter/retirer un DJ → modifier le tableau `djs` dans config.js
- Changer une photo → remplacer le fichier dans `assets/` et mettre à jour le chemin dans config.js
- Changer un texte → modifier la propriété correspondante dans config.js

### Pour ajouter un DJ
1. Ajouter la photo dans `assets/djs/prenom.jpg` (ratio 3:4, min 400x533px)
2. Ajouter un bloc dans `SITE_CONFIG.djs` dans config.js :
```js
{
  name: "DJ Prénom",
  photo: "assets/djs/prenom.jpg",
  style: "Genre1 · Genre2",
  venues: "Lieu1, Lieu2",
  instagram: "https://instagram.com/handle",
  soundcloud: "",
},
```

### Pour changer une photo de section
1. Mettre la nouvelle photo dans `assets/photos/`
2. Mettre à jour le chemin dans `SITE_CONFIG.photos` dans config.js

### Photos
- Photos DJs : ratio 3:4, min 400x533px, JPG optimisé
- Photos sections (about, brand heroes) : ratio 4:5, min 600x750px
- Optimiser avec : `sips -Z 800 photo.jpg` ou imagemagick

### Déploiement
```bash
./deploy.sh
```
Ou upload manuel via hPanel → Gestionnaire de fichiers → /public_html/

## Stack
- HTML/CSS/JS vanilla (pas de framework, pas de build)
- Fonts : Google Fonts (DM Sans + Playfair Display)
- Palette : noir #0A0A0A, or #C9A84C, bordeaux #6B0F1A, blanc #F5F0EB
- Hébergement : Hostinger (WordPress désactivé, site statique)

## Formulaire contact
Le formulaire envoie actuellement à Formspree. Pour changer le endpoint :
modifier `FORM_ENDPOINT` dans config.js (ou brancher sur Supabase).

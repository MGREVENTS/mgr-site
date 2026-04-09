# MGR Events — Site vitrine

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

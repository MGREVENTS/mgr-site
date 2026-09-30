# Photos MGR Célébration

La page `/celebration` n'utilise que de **vraies photos MGR** (MGR Prod),
jamais de banque d'images. Celles de ce dossier viennent des soirées envoyées
le 30 septembre 2026 ; la photo du photobooth vient des flyers Célébration.

| Fichier | Où | Ce qu'on voit |
|---|---|---|
| `discours-micro.webp` | premier écran | un invité prend le micro |
| `piste-foule.webp` | premier écran (au centre) | une foule qui danse, en plein air |
| `ambiance-soiree.webp` | premier écran | une invitée danse, lumière rose |
| `dj-jem.webp` | DJ & ambiance | DJ Jem, chemise MGR Events |
| `scene-plein-air.webp` | Son & lumière | tente, son et lumières montés en plein air |
| `photobooth-1.webp` | Photobooth | des invitées déguisées devant le photobooth |
| `danse-plein-air.webp` | Photo & vidéo | tous âges sur la piste, sous les projecteurs |
| `soiree-equipe-*.webp` | Nos réalisations (+ onglet « Entreprises » de l'accueil) | la soirée d'équipe tropicale |
| `dj-jem-platines.webp` | Nos réalisations | DJ Jem derrière la cabine |

## Ce qui manque encore

- **Des fêtes privées** : anniversaires (18, 30, 40, 50 ans…), fiançailles,
  baby showers — le cœur de cible de la page.
- **D'autres photos du photobooth** en situation.
- **Des vidéos courtes** : la galerie « Nos réalisations » accepte des clips
  (`.mp4`, muets, 5 à 15 s, moins de 5 Mo), lus en boucle, sans son,
  seulement quand ils sont à l'écran.

Format web conseillé : **.webp**, côté long ~1500 px, moins de 400 Ko,
qualité ~80. Des originaux (JPG, HEIC, PNG) conviennent : ils seront convertis
(et débarrassés de leurs métadonnées). L'humain d'abord : invités, piste, DJ,
interactions, photobooth, détails. **Pas de mariée à l'image**, et pas de gros
plan sur des visages de mineurs sans autorisation écrite.

Le chemin et la légende de chaque photo se règlent dans `config.js`,
`celebrationPage`. Une légende décrit ce qu'on voit (le lieu, le moment) :
jamais « anniversaire » sur une photo qui n'en est pas un.

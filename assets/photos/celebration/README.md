# Photos MGR Célébration — à déposer ici

La page `/celebration` n'utilise que de **vraies photos MGR** (jamais de banque
d'images). En attendant celles des fêtes, elle emprunte des soirées des autres
pages (clubs, No Mames) : chaque photo déposée ici en remplace une.

Format web conseillé : **.webp**, largeur ~1600 px, moins de 400 Ko, qualité
~80. Des originaux (JPG, HEIC, PNG) conviennent aussi : ils seront convertis.
L'humain d'abord : invités, piste, DJ, interactions, photobooth, détails.
**Pas de mariée à l'image** — la page ne doit pas parler « mariage ».

| Emplacement | Ce qu'il faudrait | Remplace aujourd'hui |
|---|---|---|
| Premier écran (×3) | une fête vue large, des invités qui dansent, le DJ au micro | `wedding/moment-1`, `wedding/moment-2`, `nomames-5` |
| DJ & ambiance | un DJ MGR aux platines pendant une fête privée | `gatsby1` |
| Son & lumière | une salle équipée par MGR, la piste éclairée | `duplex-1` |
| Photobooth | d'autres photos du photobooth en situation | (la photo actuelle vient des flyers) |
| Photo & vidéo | un moment pris sur le vif, ou une image de l'aftermovie | `wedding/moment-7` |
| Nos réalisations (×5 ou plus) | anniversaires, fiançailles, soirées d'entreprise… | soirées Duplex, Fluctuart, No Mames |

**Vidéos courtes** : la galerie « Nos réalisations » accepte aussi des clips
(`.mp4`, muets, 5 à 15 s, moins de 5 Mo) — ils se lisent en boucle, sans son,
seulement quand ils sont à l'écran.

Le chemin et la légende de chaque photo se règlent dans `config.js`,
`celebrationPage`. Une légende décrit ce qu'on voit (le lieu, le moment) :
jamais « anniversaire » sur une photo qui n'en est pas un.

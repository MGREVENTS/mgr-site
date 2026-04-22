# Plan marketing MGR — avril 2026

> **3 marques. 3 voix. 3 looks.** Les confondre = perdre chacun de leur sens.

---

## En 30 secondes

- **MGR Events** → on vend de l'**exigence**. Sobre, "Porsche".
- **Ginger booking** → on vend du **temps gagné**. Direct, utile.
- **MGR Prod** → on vend une **image**. Scène musicale.

**Events ↔ Prod** partagent les prises de vue de soirée.
**Ginger** jamais. Ginger est un outil, pas une marque éditoriale.

---

## Fiches marques

### MGR Events
| | |
|---|---|
| **Ton** | Sobre, "Porsche" |
| **Canal** | Instagram, LinkedIn |
| **Rythme** | 2 posts / semaine |
| **On montre** | Soirées réelles · coulisses · portraits DJ |
| **On évite** | Emojis · "incroyable/magique" · texte sur les photos |

### Ginger booking
| | |
|---|---|
| **Ton** | Direct, utile |
| **Canal** | Instagram, TikTok |
| **Rythme** | 3 posts / semaine |
| **On montre** | Démo app 10 sec · cas concret · FAQ |
| **On évite** | Clichés de soirée · ambiance "cinéma" |

### MGR Prod
| | |
|---|---|
| **Ton** | Scène musicale, culture nuit |
| **Canal** | Instagram Reels, YouTube Shorts |
| **Rythme** | 3 posts / semaine |
| **On montre** | Clichés soirée · aftermovies · reels DJ · teasers |
| **On évite** | Ton corporate · légendes longues |

---

## Semaine type

| Jour | Events | Ginger | Prod |
|---|---|---|---|
| Lun | — | Démo | Reel DJ |
| Mar | Soirée | — | — |
| Mer | — | Cas concret | BTS |
| Jeu | — | — | Reel DJ |
| Ven | Portrait DJ | FAQ | — |
| Sam | Story | — | Reel live |
| Dim | OFF | OFF | OFF |

> **Jeudi 10h–12h** : on prépare toute la semaine d'après. Le reste du temps, on n'y touche pas.

---

## Les 5 règles

1. **80% preuve, 20% ambiance.** Pas l'inverse.
2. **Events ↔ Prod** partagent les visuels. **Ginger jamais.**
3. **Captions courtes** — 2 lignes max.
4. **3 hashtags max.** Le reste, c'est du bruit.
5. **Zéro** "incroyable / magique / exceptionnel".

---

## Prompts Claude Designer (copier-coller)

> Courts exprès = moins de tokens. Réutilise la même conversation par marque toute la semaine.

### MGR Events
```
Brand: MGR Events. Ton: sobre, Porsche, FR.
Post: [1 ligne]
Sors: caption (2 lignes, 0 emoji) + hook 1re sec + 3 hashtags
```

### Ginger
```
Brand: Ginger booking. Ton: direct, utile, FR.
Post: [1 ligne]
Sors: caption (2 lignes, 1 emoji) + CTA + 3 hashtags
```

### MGR Prod
```
Brand: MGR Prod. Ton: scène musicale, FR.
Format: [cliché / aftermovie / reel DJ / teaser]
Post: [1 ligne]
Sors: caption 1 ligne + "shot by MGR Prod" + 3 hashtags scène
```

---

## Ce qu'on mesure (10 min lundi matin)

| Marque | Indicateur unique |
|---|---|
| MGR Events | DM reçus / semaine |
| Ginger | Clics vers l'app |
| MGR Prod | Saves + partages |

Les likes, on s'en fout.

---

# ANNEXE — Colorimétrie DaVinci Resolve

*Section technique pour le monteur vidéo.*

**Base commune** : timeline **Rec.709 Gamma 2.4** · export IG **H.264**, 1080×1920 (reel) ou 1080×1350 (feed), **10–12 Mbps** · **jamais de 4K sur IG** (compression → artefacts).

### MGR Events — "35mm soft gold"
Doré chaud, grain fin, blacks profonds. **Cinéma, pas clip.**

- **Node 1 · Primary** — Lift warm (Y -0.03), Gamma tirée vers or `#D4B56E`, Sat **0.85**, Contrast **1.10**
- **Node 2 · Curves** — S doux, pas de clip
- **Node 3 · Film Grain** (ResolveFX) — preset *35mm 5219 Kodak*, Strength **0.25–0.35**, Size **0.80**
- **Interdits** : flash direct, blancs purs, saturation boostée

### MGR Prod — "backstage clean"
Cousin d'Events, plus propre, plus lisse. Garde un peu d'ADN doré.

- **Node 1 · Primary** — Lift -0.01, Gamma ambre léger, Sat **0.95**, Contrast **1.05**
- **Node 2 · Skin tone** — HSL Qualifier sur peau → +0.05 sat, réchauffer un peu
- **Node 3 · Film Grain** — Strength **0.10** (quasi invisible, juste texture)
- **Astuce cohérence** : applique la LUT Events à **20–30% intensity** en dernier node

### Ginger — "punch, zéro grain"
Net, contrasté, dynamique. **Image qui arrête le scroll.**

- **Node 1 · Primary** — Lift fermé (Y -0.08), Gamma neutre/cool, Sat **1.20**, Contrast **1.25**
- **Node 2 · Curves** — S prononcé + boost midtones (Luma vs Sat)
- **Node 3 · Sharpen** (ResolveFX) — Intensity **0.30** (effet net IG/TikTok)
- **Pas de grain. Jamais.**

### Récap

| Marque | Grain | Sat | Contrast | Look |
|---|---|---|---|---|
| MGR Events | 35mm fin (0.25–0.35) | 0.85 | 1.10 | Doré cinéma |
| MGR Prod | Très léger (0.10) | 0.95 | 1.05 | Clean backstage |
| Ginger | **0** | 1.20 | 1.25 | Punchy scroll-stopper |

**Règle qui sauve** : avant export, preview sur **téléphone**, pas sur moniteur pro. C'est là que la vidéo sera vue.

---

*Maj 22/04/2026 · à revoir fin juin.*

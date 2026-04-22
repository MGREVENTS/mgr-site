# MGR — Handoff Marketing

**Branche** : `claude/install-marketing-skills-GlB9m`
**Dernière mise à jour** : 2026-04-22
**À destination** : section `/marketing` PlanniFlow (ou toute personne qui reprend)

---

## 1. Ce qui est fait

- **Skills marketing installés** (38 skills coreyhaines31/marketingskills v1.8.0) dans `.claude/skills/` — committés & pushés. Ils se déclenchent auto selon les descriptions (copywriting, content-strategy, paid-ads, social-content, page-cro, seo-audit, etc.).
- **Audit complet livré** : site mgrevents.fr, DA (or/noir/Playfair+DM Sans — validée dans `index.html`), 4 comptes Instagram, concurrents Paris.
- **Stratégie 30 jours multi-comptes livrée** : piliers, 3 formats winners, 5 hooks, 3 angles Meta Ads (budget 100€/mois).
- **Timeouts Claude Code augmentés** dans `~/.claude/settings.json` (`ANTHROPIC_TIMEOUT_MS=120000`, `BASH_DEFAULT_TIMEOUT_MS=300000`, `BASH_MAX_TIMEOUT_MS=600000`) → ⚠️ **relancer `claude`** pour prise en compte.

---

## 2. Ce qu'il reste à faire (ordre de priorité)

| # | Tâche | Format | Livrable attendu |
|---|---|---|---|
| 1 | **PDF calendrier Wedding** (en cours — étape 2/6) | PDF A4 | `docs/calendrier-wedding.pdf` stylé DA MGR |
| 2 | **Intégration PlanniFlow** `/marketing` | MD import | `docs/planniflow-marketing-wedding.md` |
| 3 | **PDF calendrier @mgr.prod** | PDF A4 | focus coulisses montage / process / expertise |
| 4 | **PDF calendrier @mgr.events** | PDF A4 | pour validation Jean-Christophe |
| 5 | **PDF calendrier @nomames_paris** | PDF A4 | pour validation Jean-Christophe |
| 6 | **Fichier `.claude/product-marketing-context.md`** | MD | ICP, positionnement, offres, voice — base pour tous les skills marketing |
| 7 | **Installer pixel Meta** sur mgrevents.fr | Code HTML | prérequis pour lancer Angle 1 (Wedding) |
| 8 | **Landing `/wedding` mobile-first** | Check CRO | formulaire en 1er écran |

---

## 3. Stratégie synthétique — 4 comptes

| Compte | Responsable | Audience | Objectif | Ton | Fréquence |
|---|---|---|---|---|---|
| **@mgr.events** | Jean-Christophe | B2B gérants clubs/bars + public nightlife | Lead B2B + recruter DJs | Premium, DA, autorité | 3 posts + 4 Reels / sem |
| **@mgr.wedding** | (à définir) | B2C futurs mariés IDF 28-40 ans | Devis mariage | Émotionnel, chaleureux, testimonials | 2 posts + 2 Reels / sem |
| **@nomames_paris** | Jean-Christophe | B2C communauté latina 22-32 ans | Remplir soirées No Mames | Hype, fiesta, FOMO | 1 post + 3-5 Stories/jour en sem d'event |
| **@mgr.prod** | Jean-Christophe | B2B établissements + event planners | Positionnement expertise/agence comm | Expert, pédagogue, **coulisses montage & process** | 2 posts + 2 Reels / sem |

> ⚠️ **Règle anti-cannibalisation @mgr.events vs @mgr.prod** :
> - **@mgr.events** = ce qu'on **fait** (showreels DJs, lieux, aftermovies).
> - **@mgr.prod** = **comment on pense et on monte** (process, fiches techniques, time-lapse setup, debrief équipe).

---

## 4. Piliers de contenu — @mgr.wedding (détaillé)

| Pilier | % | Formats |
|---|---|---|
| Témoignages couples | 30% | Post vidéo, carousel |
| Moments-clé (1ère danse, ouverture bal, photobooth) | 30% | Reel, carousel |
| Pédagogie / FAQ | 20% | Carousel, Reel éducatif |
| Coulisses / équipe DJ | 15% | Reel behind-the-scenes |
| Offre & formules | 5% | Post feed |

### Calendrier Wedding 30 jours — 16 contenus (2 posts + 2 Reels/sem)

| # | Jour | Format | Pilier | Sujet |
|---|---|---|---|---|
| 1 | S1 Mar | Post | Témoignage | Citation mariée « MGR a fait pleurer ma grand-mère sur le slow » |
| 2 | S1 Jeu | Reel 20s | Moment-clé | Première danse contre-plongée + drop |
| 3 | S1 Dim | Carousel 6 | Pédagogie | « 7 erreurs de playlist mariage » |
| 4 | S1 Mar | Reel 15s | Coulisses | Time-lapse montage régie basic→sublime |
| 5 | S2 Jeu | Post | Témoignage | Vidéo testimonial 60s vertical sous-titré |
| 6 | S2 Dim | Reel 30s | Moment-clé | Ouverture de bal slow-mo |
| 7 | S2 Mar | Carousel 5 | Offre | 3 formules : Economic / Basic / Sublime |
| 8 | S2 Jeu | Reel 20s | Pédagogie | « Le bon timing d'une soirée mariage » (19h→3h) |
| 9 | S3 Dim | Post | Témoignage | Photo cérémonie + citation |
| 10 | S3 Mar | Reel 15s | Moment-clé | Photobooth best-of rires |
| 11 | S3 Jeu | Carousel 7 | Pédagogie | Top 5 premières danses 2026 + QR Spotify |
| 12 | S3 Dim | Reel 25s | Coulisses | Le brief DJ avec les mariés |
| 13 | S4 Mar | Post | Témoignage | Couple raconte 3 mois après |
| 14 | S4 Jeu | Reel 30s | Moment-clé | Dernière danse 4h du mat + étincelles |
| 15 | S4 Dim | Carousel 6 | Offre | Early-bird mariages 2027 : -10% |
| 16 | S4 Mar | Reel 20s | Coulisses | Journée-type d'un DJ MGR Wedding |

---

## 5. Meta Ads — Plan 100€/mois (3 mois rotation)

**Contrainte réaliste** : 100€/mois ≈ 10 000 impressions (CPM France ~10€). **Insuffisant pour split 3 angles** → rotation 1 angle/mois.

| Mois | Angle | Cible | Message | CTA |
|---|---|---|---|---|
| M1 | **Wedding** 🎯 | F 28-40, IDF, fiancée | *« Votre mariage mérite mieux qu'une playlist Spotify. DJ + son + lumières dès 899€. »* | Demander un devis |
| M2 | **No Mames** | 22-32, Paris, reggaeton/Bad Bunny | *« La soirée latina la plus attendue de Paris au Duplex. »* | Réserver |
| M3 | **B2B Établissements** | Gérants bar/resto, Paris, 30-55 | *« Votre prog musicale vous fait perdre des clients. Audit gratuit. »* | Réserver audit |

**Pré-requis avant lancement** :
- [ ] Pixel Meta installé sur mgrevents.fr (événements Lead, ViewContent, CompleteRegistration)
- [ ] UTM systématiques (`utm_source=meta&utm_campaign=wedding-m1`)
- [ ] Landing `/wedding` optimisée mobile
- [ ] Créa shootées en **vertical 9:16**

---

## 6. 5 hooks prêts à produire

1. **B2B** — *« Votre DJ est malade à 22h un samedi. Vous faites quoi ? »* (USP PlanniFlow 2h)
2. **Thought leadership** — *« Un bon DJ ne suffit pas à remplir votre bar. La preuve en 3 chiffres. »*
3. **Mariage** — *« Elle m'a dit : "je ne veux pas que la musique me fasse pleurer, je veux qu'elle me fasse me souvenir." »*
4. **No Mames FOMO** — *« Sold-out en 48h la dernière fois. Billetterie mardi 20h — lis ça avant. »*
5. **Data** — *« 120 soirées / mois. 15 lieux. 25 DJs. Les 3 règles qu'on ne casse jamais. »*

---

## 7. Architecture technique — rappel

- Site vitrine : **mgrevents.fr** (statique HTML/CSS/JS, Hostinger).
- App : **PlanniFlow** (`planniflow-4jrm.vercel.app`) — rewrites depuis mgrevents.fr sur `/marketing`, `/wedding`, `/crm`, `/booking`, `/nomames`, `/partner`, `/admin`, `/onboarding`, `/api/*`.
- Formulaire contact : `/api/send-contact` → vit dans PlanniFlow. Si PlanniFlow tombe, formulaire casse.
- **DA** : noir `#0A0A0A`, or `#C9A84C`, bordeaux `#6B0F1A`, blanc cassé `#F5F0EB`. Typos Playfair Display + DM Sans.

---

## 8. Quick wins à activer cette semaine

1. Shooter **3 aftermovies 15 sec** sur les soirées du weekend → stock S1.
2. **Bloquer 3h tous les lundis** pour batcher les 4 comptes.
3. **Clarifier la bio @mgr.prod** : *« Agence de direction artistique & expertise soirée — les coulisses de @mgr.events »*.
4. **Générer `.claude/product-marketing-context.md`** (ICP + voice) pour aligner tous les skills.
5. **Installer pixel Meta** avant de lancer la première campagne.

---

## 9. Commandes utiles pour reprendre

```bash
# Se remettre dans la branche
git checkout claude/install-marketing-skills-GlB9m
git pull origin claude/install-marketing-skills-GlB9m

# Reprendre la session Claude Code dans ce repo
cd /home/user/mgr-site
claude

# Relancer la génération PDF (si WeasyPrint encore installé)
python3 -c "import weasyprint; print(weasyprint.__version__)"

# Consulter un skill marketing spécifique
ls .claude/skills/
cat .claude/skills/content-strategy/SKILL.md
```

---

## 10. Prompts prêts pour Claude Code (reprendre le travail)

- « Finis le PDF Wedding (étape 2/6 : HTML stylé DA MGR → conversion WeasyPrint → commit). »
- « Fais maintenant le PDF @mgr.prod avec focus coulisses montage / process / expertise. »
- « Génère `.claude/product-marketing-context.md` à partir de `config.js` et de la stratégie dans `HANDOFF-MARKETING.md`. »
- « Audite la page `/wedding` pour préparer le lancement Meta Ads M1 — check mobile, formulaire, CTA, pixel. »

---

*Handoff généré depuis une session Claude Code — voir aussi `HANDOFF.md` pour le contexte technique du site.*

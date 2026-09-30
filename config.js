// ═══════════════════════════════════════════════════
// MGR EVENTS — CONFIGURATION DU SITE
// Modifie ce fichier pour mettre à jour le contenu.
// Pas besoin de toucher à index.html.
// ═══════════════════════════════════════════════════

const SITE_CONFIG = {

  // ── INFOS GÉNÉRALES ──
  brand: {
    name: "MGR Events Paris",
    email: "contact@mgrevents.fr",
    since: 2016,
    // Le logo MGR Events (nouvelle DA, septembre 2026) : « MGR » bordeaux,
    // « EVENTS PARIS » or, fond transparent. Le blog et les articles le lisent
    // ici ; l'accueil et /celebration le posent en dur dans leur en-tête.
    logo: "assets/logo-mgr-events.webp",
    socials: {
      instagram: "https://instagram.com/mgr.events",
      facebook: "https://facebook.com/MGR.Eventsparis",
      soundcloud: "https://soundcloud.com/mgr-events-paris",
    }
  },

  // ── HERO ──
  hero: {
    tagline: "Direction artistique & booking DJ · Paris",
    title: "L'exigence au service<br>de <em>vos événements.</em>",
    subtitle: "Des DJs pour vos établissements, vos soirées et votre mariage. Une équipe pour vous accompagner.",
    // Les trois photos sous le titre, avec leur légende — un lieu, une
    // soirée, jamais un slogan.
    photos: [
      { src: "assets/photos/fluctuart.webp", legende: "Fluctuart · Paris" },
      { src: "assets/photos/duplex-2.webp",  legende: "Duplex · Paris" },
      { src: "assets/photos/nomames-bichotas-1.webp", legende: "No Mames" },
    ],
  },

  // ── LES TROIS PARCOURS (section Savoir-faire) ──
  // Un onglet par type de client. `cta.type` est la valeur envoyée au
  // formulaire ; `cta.href` envoie ailleurs (le devis mariage a sa page).
  parcours: [
    {
      id: "etablissements",
      label: "Établissements",
      title: "Clubs & établissements",
      photo: "assets/photos/duplex-1.webp",
      text: "Une programmation musicale qui tient compte de votre lieu, de votre public et du rythme de vos soirées.",
      points: ["Direction artistique et sélection des DJs", "Programmation régulière", "Suivi des artistes et des prestations"],
      cta: { label: "Parlons de votre établissement", type: "Booking DJ — Établissement" },
    },
    // Les fêtes privées ont leur page (/celebration) : cet onglet garde
    // l'événementiel d'entreprise — MGR Events = clubs, établissements, B2B
    // (brief MGR Célébration, 30 septembre 2026). `type` reste celui que la
    // route de contact connaît.
    {
      id: "evenements",
      label: "Entreprises",
      title: "Soirées d'entreprise & événements",
      photo: "assets/photos/celebration/soiree-equipe-costumes.webp",
      text: "Un DJ et une équipe pour votre soirée d'entreprise, un lancement, un séminaire ou une production comme No Mames, nos soirées latino au Duplex.",
      points: ["Un DJ choisi pour le public et le lieu", "Son et lumière si le lieu n'en a pas", "Coordination avec vous le jour J"],
      cta: { label: "Organiser votre événement", type: "Booking DJ — Événement privé" },
    },
    {
      id: "celebrations",
      label: "Célébrations",
      title: "Anniversaires & fêtes privées",
      photo: "assets/photos/celebration/photobooth-1.webp",
      text: "Anniversaire dès 18 ans, fiançailles, baby shower : MGR Célébration réunit DJ, son, lumière, photobooth et vidéo autour de votre fête.",
      points: ["Un DJ et une musique choisis pour vos invités", "Photobooth et film souvenir", "Un seul interlocuteur, une réponse sous 24 h"],
      cta: { label: "Créer ma célébration", href: "/celebration#devis" },
      lien: { label: "Découvrir MGR Célébration", href: "/celebration" },
    },
    {
      id: "mariages",
      label: "Mariages",
      title: "Mariages",
      photo: "assets/photos/wedding/premiere-danse.webp",
      text: "Du premier slow à la dernière danse, une prestation DJ clé en main : son, lumières, effets. Un devis écrit, chiffré sur votre soirée.",
      points: ["Cérémonie, cocktail, dîner, soirée", "Réponse sous 24 h, sans engagement", "Un seul interlocuteur"],
      cta: { label: "Demander un devis mariage", href: "/devis-mariage" },
      lien: { label: "Découvrir MGR Wedding", href: "/mariage" },
    },
  ],

  // ── RÉALISATIONS (grandes photos, légendes concrètes) ──
  // `format` : "large" prend deux colonnes sur une grille de trois. L'ordre
  // compte : une grande + une petite, trois petites, une grande + une petite
  // — sept photos, trois rangées pleines, aucun trou. Les légendes nomment
  // le lieu et la soirée — pas de chiffre, pas de superlatif.
  realisations: [
    { photo: "assets/photos/duplex-3.webp",            lieu: "Duplex · Paris",           legende: "Résidence DJ, Champs-Élysées", format: "large" },
    { photo: "assets/photos/gatsby1.webp",             lieu: "Gatsby · Paris",           legende: "Soirée en résidence" },
    { photo: "assets/photos/nomames-bichotas-2.webp",  lieu: "No Mames — Bichotas",      legende: "Soirée latino au Duplex" },
    { photo: "assets/photos/wedding/soiree.webp",      lieu: "MGR Wedding",              legende: "Ouverture de bal" },
    { photo: "assets/photos/duplex-4.webp",            lieu: "Duplex · Paris",           legende: "Soirée en résidence" },
    { photo: "assets/photos/nomames-sinlimites-2.webp",lieu: "No Mames — Sin Límites",   legende: "Soirée latino au Duplex", format: "large" },
    { photo: "assets/photos/fluctuart.webp",           lieu: "Fluctuart · Paris",        legende: "Set en résidence sur la Seine" },
  ],

  // ── BANDEAU DÉFILANT (ticker éditorial, page d'accueil) ──
  ticker: ["Paris", "Booking DJ", "Direction artistique", "Clubs & résidences", "Mariages", "Corporate", "No Mames", "MGR School"],

  // ── CHIFFRES CLÉS ──
  stats: [
    { value: "120+", label: "Bookings / mois", icon: "calendar" },
    { value: "25",   label: "DJs résidents",   icon: "music" },
    { value: "15",   label: "Établissements",   icon: "building" },
    { value: "8",    label: "Ans d'expérience", icon: "clock" },
  ],

  // ── DJS ──
  // Pour ajouter un DJ : copie un bloc, change les infos, ajoute la photo dans assets/djs/
  djs: [
    {
      name: "DJ Logan",
      photo: "assets/djs/Logan.webp",
      style: "Open Format · Latino",
      venues: "Fluctuart, Duplex",
      instagram: "https://www.instagram.com/dj_lgn/",
      soundcloud: "",
    },
    {
      name: "DJ Jem",
      photo: "assets/djs/jem.webp",
      style: "Open Format · Caribéen",
      venues: "Duplex, Fluctuart",
      instagram: "https://www.instagram.com/dj_jem_officiel/",
      soundcloud: "",
    },
    {
      name: "DJ Stevis",
      photo: "assets/djs/stevis.webp",
      style: "Open Format · Caribéen · Urban FR · Hip-Hop",
      venues: "Duplex, QG",
      instagram: "https://www.instagram.com/djstevis/",
      soundcloud: "",
    },
    {
      name: "DJ Ny Aina",
      photo: "assets/djs/nyaina.webp",
      style: "Open Format · Urban Music",
      venues: "Duplex, Fluctuart",
      instagram: "https://www.instagram.com/nyaina_vrn/",
      soundcloud: "",
    },
    {
      name: "DJ Krislay",
      photo: "assets/djs/Krislay.webp",
      style: "Open Format · Hip-Hop",
      venues: "",
      instagram: "https://www.instagram.com/djkrislay/",
      soundcloud: "",
    },
    {
      name: "DJ Deloums",
      photo: "assets/djs/Deloums.webp",
      style: "Open Format · Caribéen",
      venues: "",
      instagram: "https://www.instagram.com/djdeloums/",
      soundcloud: "",
    },
    {
      name: "DJ Benka",
      photo: "assets/djs/Benka.webp",
      style: "Open Format · Caribéen",
      venues: "Duplex, Gatsby",
      instagram: "https://www.instagram.com/djbenkaofficiel/",
      soundcloud: "",
    },
    {
      name: "DJ Lixx",
      photo: "assets/djs/Lixx.webp",
      style: "Open Format · Afrobeat · Amapiano",
      venues: "Fluctuart, Gatsby",
      instagram: "https://www.instagram.com/djlixx.official/",
      soundcloud: "",
    },
    {
      name: "DJ West",
      photo: "assets/djs/West.webp",
      style: "Open Format",
      venues: "Fluctuart",
      instagram: "https://www.instagram.com/djwest_paris/",
      soundcloud: "",
    },
    {
      name: "DJ Opal",
      photo: "assets/djs/opal.webp",
      style: "Open Format · Bass House",
      venues: "Fluctuart, Gatsby",
      instagram: "https://www.instagram.com/opal_sound/",
      soundcloud: "",
    },
    {
      name: "DJ Nigelen",
      photo: "assets/djs/Nigelen.webp",
      style: "Open Format",
      venues: "Fluctuart",
      instagram: "https://www.instagram.com/djnigelen/",
      soundcloud: "",
    },
    {
      name: "DJ Real",
      photo: "assets/djs/real.webp",
      style: "Latino · Reggaeton",
      venues: "Radio Latina, Duplex, No Mames",
      instagram: "https://www.instagram.com/dj__real_/",
      soundcloud: "",
    },
  ],

  // ── PARTENAIRES ──
  // Ajouter/retirer un partenaire ici
  partners: [
    "Duplex Paris",
    "Fluctuart",
    "Quai de la Photo",
    "Gatsby",
  ],

  // ── PHOTOS DES SECTIONS ──
  // Remplace les chemins quand tu as les vraies photos
  photos: {
    about: "assets/photos/raphael-wedding.jpg",        // section "Qui sommes-nous"
    events_hero: "assets/photos/events-hero.webp",     // modal MGR Events
    wedding_hero: "assets/photos/wedding.jpg",          // modal MGR Wedding
    nomames_hero: "assets/photos/nomames.jpg",          // modal No Mames
    school_hero: "assets/photos/school-hero.jpg",     // modal MGR School
  },

  // ── CONTENU DES PAGES MARQUES ──
  brands: {
    events: {
      tag: "Nightlife · Booking DJ",
      title: "La <em>direction artistique</em> de vos nuits",
      description: "MGR Events prend en charge l'intégralité de la programmation musicale de votre établissement. De la sélection des DJs à la construction de l'identité sonore, nous créons l'ambiance qui fidélise votre clientèle.",
      description2: "Chaque lieu est unique — nous adaptons le style, l'énergie et la rotation des artistes à votre positionnement.",
      features: [
        { title: "Sélection rigoureuse", desc: "Chaque DJ est auditionné et formé à l'identité de votre lieu avant sa première prestation." },
        { title: "Planning mensuel", desc: "Rotation optimisée et remplacement garanti en 2h via notre application PlanniFlow." },
        { title: "Suivi qualité", desc: "Rapports post-soirée, feedback clients et ajustements permanents de la programmation." },
      ],
      stats: [
        { value: "120+", label: "Sets / mois" },
        { value: "15", label: "Établissements" },
        { value: "25", label: "DJs actifs" },
        { value: "2h", label: "Remplacement garanti" },
      ],
      gallery: [
        "assets/photos/gatsby1.webp",
        "assets/photos/fluctuart.webp",
        "assets/photos/duplex-1.webp",
        "assets/photos/duplex-2.webp",
        "assets/photos/duplex-3.webp",
        "assets/photos/duplex-4.webp",
        "assets/photos/gatsby2.webp",
      ],
      cta: { text: "Demander un audit", action: "contact" },
    },
    wedding: {
      tag: "Mariages · Prestation DJ clé en main",
      title: "L'<em>émotion</em> en musique",
      description: "MGR Wedding sublime chaque instant de votre journée avec une prestation DJ sur mesure. Du premier slow à la dernière danse, nous orchestrons une bande-son à la hauteur de votre amour.",
      description2: "5 formules exclusives de 999€ à 3 999€ — son, lumières, effets pyrotechniques et photobooth. Chaque détail est pensé pour créer l'inoubliable.",
      features: [
        { title: "Economic Wedding — dès 999€", desc: "Votre DJ avec stand, platines et 2 micros HF pour 8h de prestation. L'essentiel pour une soirée réussie." },
        { title: "Basic Wedding — dès 1 899€", desc: "Prestation clé en main 10h : DJ, régie complète, enceintes jusqu'à 200 personnes, lumières haut de gamme, lyres, vidéoprojecteur et écran." },
        { title: "Mon Sublime Mariage — dès 3 999€", desc: "L'excellence absolue : tout le Basic Wedding plus machine à fumée, bulles, 6 pars LED d'ambiance, fumée lourde, étincelles froides et sono extérieure sans fil." },
      ],
      stats: [
        { value: "5★", label: "Note moyenne" },
        { value: "999€", label: "À partir de" },
        { value: "10h", label: "Prestation DJ" },
      ],
      cta: { text: "Demander un devis", action: "contact" },
    },
    nomames: {
      tag: "Événements · Soirées Latino",
      title: "La <em>fiesta</em> parisienne",
      description: "No Mames est notre marque événementielle dédiée aux soirées latines. Nous produisons des événements dans les plus beaux lieux de la capitale.",
      description2: "Une communauté fidèle, une programmation pointue et une ambiance qui ne ressemble à rien d'autre.",
      features: [
        { title: "Soirées signature", desc: "Reggaeton, Dembow, Baile Funk, Salsa — des line-ups curatés pour une énergie maximale." },
        { title: "Communauté", desc: "+500 followers engagés et une base fidèle qui attend chaque édition avec impatience." },
        { title: "Lieu d'exception", desc: "Le Duplex, club mythique des Champs-Élysées — notre résidence exclusive pour des soirées inoubliables." },
      ],
      stats: [
        { value: "12", label: "Événements / an" },
        { value: "500+", label: "Communauté" },
        { value: "100%", label: "Sold out" },
      ],
      gallery: [
        "assets/photos/nomames-bichotas-1.webp",
        "assets/photos/nomames-bichotas-2.webp",
        "assets/photos/nomames-bichotas-3.webp",
        "assets/photos/nomames-sinlimites-1.webp",
        "assets/photos/nomames-sinlimites-2.webp",
      ],
      cta: { text: "Suivre @nomames_paris", action: "https://instagram.com/nomames_paris" },
    },
    school: {
      tag: "Formation · Cours de DJing",
      title: "Devenez <em>DJ</em> avec les pros",
      description: "MGR School propose des formations DJ dispensées par des professionnels en activité dans les clubs parisiens. Vous apprenez en conditions réelles, sur du matériel professionnel.",
      description2: "Du débutant complet au DJ confirmé qui veut affiner sa technique — nous avons un programme adapté à chaque niveau.",
      features: [
        { title: "Formateurs actifs", desc: "Nos profs jouent chaque semaine dans les meilleurs clubs. Ils enseignent ce qu'ils pratiquent." },
        { title: "3 niveaux", desc: "Découverte (débutant), Perfectionnement (intermédiaire), Pro (avancé avec mix en conditions live)." },
        { title: "Matériel CDJ/DJM", desc: "Entraînement sur Pioneer CDJ-3000 et DJM-900NXS2 — le standard de l'industrie." },
      ],
      stats: [
        { value: "200+", label: "Élèves formés" },
        { value: "3", label: "Niveaux" },
        { value: "CDJ-3000", label: "Matériel Pioneer" },
      ],
      cta: { text: "Cours d'essai gratuit", action: "contact" },
    },
  },

  // ═══════════════════════════════════════════════════
  // PAGE MARIAGE — /mariage  (rendue par mariage.html)
  // Remplace les photos par les tiennes dans assets/photos/wedding/
  // et les témoignages "Exemple" par de vrais avis clients.
  // ═══════════════════════════════════════════════════
  weddingPage: {
    // Le premier écran : la composition de l'accueil, en Wedding clair.
    hero: {
      eyebrow: "DJ pour votre mariage",
      title: "L’<em>émotion</em> en musique.",
      subtitle: "Nous préparons avec vous la musique et les temps forts de votre mariage, de la cérémonie à la soirée.",
      // Trois photos, une rangée : une émotion, une ouverture de bal, une piste.
      photos: [
        { src: "assets/photos/wedding/ceremonie.webp",      legende: "La cérémonie, en extérieur" },
        { src: "assets/photos/wedding/premiere-danse.webp", legende: "L’ouverture de bal" },
        { src: "assets/photos/wedding/soiree.webp",         legende: "La soirée" },
      ],
      videoId: "uJQA-2tTGTw",
      poster: "assets/photos/wedding.jpg",
    },

    // Savoir-faire : un moment par onglet. Ce que MGR prépare, concrètement,
    // et « selon la formule » là où c'est le cas.
    moments: [
      { id: "ceremonie", label: "Cérémonie", title: "Une sonorisation discrète, des choix justes.",
        text: "Entrée, échange des vœux, sortie : nous sonorisons la cérémonie quand le lieu le demande, et nous calons chaque musique avec vous.",
        points: ["Micro pour l’officiant et les lectures, selon la formule", "Vos musiques d’entrée et de sortie, préparées ensemble", "Une installation qui ne se voit pas"],
        photo: "assets/photos/wedding/ceremonie.webp", alt: "Cérémonie en extérieur, invités sous des ombrelles blanches" },
      { id: "cocktail", label: "Cocktail", title: "Le ton est donné, tout en douceur.",
        text: "Pendant que vos invités se retrouvent, une ambiance chaleureuse qui laisse parler — et qui prépare la suite.",
        points: ["Volume et sélection adaptés aux conversations", "Sonorisation extérieure possible, selon la formule", "Coordination avec le traiteur et les photographes"],
        photo: "assets/photos/wedding/vin-honneur.webp", alt: "Le cocktail, invités réunis" },
      { id: "diner", label: "Dîner", title: "Les émotions à table.",
        text: "Une playlist feutrée, les discours et animations coordonnés, et une énergie qui monte sans brusquer vers la piste.",
        points: ["Micros sans fil pour les discours", "Les surprises préparées en amont, calées à la seconde", "La transition vers l’ouverture de bal"],
        photo: "assets/photos/wedding/diner.webp", alt: "La salle du dîner, tables et bougies" },
      { id: "ouverture", label: "Ouverture de bal", title: "Votre chanson, votre lumière.",
        text: "La version, la durée, la mise en lumière : nous répétons l’enchaînement avec vous. L’instant est à vous, et il invite vos proches sur la piste.",
        points: ["La version et la durée du titre, travaillées avec vous", "Mise en lumière et effets, selon la formule", "La transition qui fait venir vos invités"],
        photo: "assets/photos/wedding/premiere-danse.webp", alt: "Les mariés enlacés pour l’ouverture de bal" },
      { id: "soiree", label: "Soirée", title: "Lire la piste, tenir la nuit.",
        text: "Open format : le DJ lit la salle, alterne les univers et relance au bon moment — jusqu’à la dernière danse, choisie à l’avance.",
        points: ["Une trame construite ensemble : incontournables et titres à éviter", "Lumières et effets, selon la formule", "Une dernière danse décidée avec vous"],
        photo: "assets/photos/wedding/soiree.webp", alt: "La piste de danse, invités et mariée" },
    ],

    // Réalisations : sept photos, trois rangées pleines comme sur l'accueil.
    // Une légende seulement quand on sait ce qu'on montre.
    realisations: [
      { photo: "assets/photos/wedding/diner.webp",       legende: "Le dîner",   format: "large" },
      { photo: "assets/photos/wedding/moment-1.webp" },
      { photo: "assets/photos/wedding/moment-2.webp" },
      { photo: "assets/photos/wedding/moment-3.webp" },
      { photo: "assets/photos/wedding/moment-4.webp" },
      { photo: "assets/photos/wedding/moment-5.webp" },
      { photo: "assets/photos/wedding/vin-honneur.webp", legende: "Le cocktail", format: "large" },
    ],

    // Les DJs présentés aux couples : une sélection, par leur nom dans `djs`.
    // Lieux et Instagram viennent de la fiche du DJ ; seule la photo
    // change. Les portraits de l'accueil sont ceux des clubs — pour un
    // mariage, on montre les portraits en tenue (assets/djs/wedding/, 3:4,
    // détourés sur fond écru). LA DEMANDE : « photos à rajouter pour la
    // partie DJ dans wedding » (11 septembre 2026), puis « remplace la
    // photo de jem » : le portrait chemise blanche, sourire, remplace celui
    // au casque.
    // Raphaël, le fondateur, n'a pas de fiche à l'accueil : son entrée est
    // complète ici (« c'est moi Raphaël », 11 septembre 2026).
    djs: [
    // `role` s'affiche sous le nom et en tête de la fiche ; `demande: false`
    // retire « Demander ce DJ » de la fiche (« pour moi on peut retirer la
    // réservation DJ — Jem responsable mariage », 11 septembre 2026).
      { name: "Raphaël",    photo: "assets/djs/wedding/raphael.webp", role: "Fondateur de MGR Events", demande: false },
      { name: "DJ Jem",     photo: "assets/djs/wedding/jem.webp", role: "Responsable mariage" },
      { name: "DJ Ny Aina", photo: "assets/djs/wedding/nyaina.webp" },
      { name: "DJ Deloums", photo: "assets/djs/wedding/deloums.webp" },
    ],
    // La photo de groupe au-dessus des portraits (« les autres photos des
    // DJ », 11 septembre 2026) : les trois en veste, détourés. Retirer la
    // ligne pour n'afficher que les portraits.
    equipe: { photo: "assets/photos/wedding/equipe.webp", alt: "DJ Ny Aina, DJ Jem et DJ Deloums, en tenue de soirée" },

    testimonials: [
      { quote: "Un énorme merci à notre DJ qui a été juste incroyable du début à la fin ! 🎉 Grâce à lui, l'ambiance était au rendez-vous toute la soirée. Il a su s'adapter à tous les goûts et faire danser toutes les générations. Super sympa, professionnel et à l'écoute. On le recommande à 1000 %, les yeux fermés. Merci encore pour tous ces magnifiques souvenirs.", name: "Anna O.", event: "Mariage" },
      { quote: "Un grand merci à Jean-Christophe de MGR Events pour l'animation de notre mariage ! Ambiance au top du début à la fin, piste de danse toujours pleine et invités ravis. Professionnel, à l'écoute et très sympathique. Nous recommandons sans hésiter !", name: "Tania S.", event: "Mariage" },
      { quote: "Nous n'avons que des éloges à faire sur Raphaël. Nous l'avons rencontré au Salon du Mariage par hasard et ça a été une connexion instantanée. Il a été le DJ de notre mariage et a dépassé toutes nos attentes. Il a su lire la piste de danse à la perfection, a fait danser tout le monde et a créé exactement l'ambiance dont nous rêvions. Professionnel, ponctuel et avec un goût musical impeccable. Un remerciement tout particulier à Raphaël et son épouse : très attentifs, ils nous ont aidés à organiser le moment surprise où mon père a chanté au mariage — un souvenir INOUBLIABLE. Si vous cherchez un DJ pour votre mariage, Raphaël est LE choix. Merci pour tout ! ❤️", name: "Melissa T.", event: "Mariage" },
      { quote: "Un grand merci à MGR Wedding pour leur superbe prestation lors de notre mariage. Nous avons adoré être accompagnés et suivis par DJ Jem, avec beaucoup de bienveillance. Il a su comprendre et appréhender nos goûts afin de nous proposer une offre sur-mesure adaptée à nos besoins ! Résultat : une ambiance de folie, des effets spectaculaires sur la piste (machines à fumée lourde et étincelles) et des souvenirs pour toujours ! Nous recommandons MGR Wedding à tous les futurs mariés !", name: "Alexandre V.", event: "Mariage" },
    ],
    // Les avis viennent de la fiche Google de MGR Events (le patron, 11
    // septembre 2026). Prénom et initiale seulement.
    testimonialsSource: "Avis publiés sur la fiche Google de MGR Events — prénom et initiale.",

    faq: [
      { q: "Où intervenez-vous ?", a: "Partout. Basés à Paris, nous accompagnons des mariages dans toute la France et à l’étranger. Le déplacement est précisé dans votre devis." },
      { q: "Peut-on choisir les musiques ?", a: "Absolument. Nous construisons ensemble une trame — moments forts, incontournables, titres à éviter — et le DJ adapte en lisant la piste le jour J." },
      { q: "Que se passe-t-il en cas d’imprévu ?", a: "Notre réseau de DJs résidents nous permet de proposer un remplacement en cas d’empêchement. Les modalités figurent dans votre contrat." },
      { q: "Le matériel est-il inclus ?", a: "Oui : sonorisation, éclairage et effets selon la formule choisie. Tout est installé et testé avant l’arrivée de vos invités." },
      { q: "Comment réserver ?", a: "Demandez un devis via le formulaire : nous revenons vers vous sous 24 h avec un échange et une proposition personnalisée." },
    ],
  },

  // ═══════════════════════════════════════════════════
  // PAGE CÉLÉBRATION — /celebration  (rendue par celebration.html)
  // MGR Célébration : la branche de MGR Events pour les fêtes privées —
  // anniversaires dès 18 ans, fiançailles, noces, baby showers — à Paris et
  // en Île-de-France. Plus festive que MGR Wedding, aussi sérieuse que MGR
  // Events. LA DEMANDE : « une nouvelle page ou un nouvel onglet » pour MGR
  // Célébration, puis le brief site du 30 septembre 2026 : les sections de
  // la page suivent son ordre, de 1 à 10.
  //
  // PHOTOS : uniquement de vraies photos MGR (MGR Prod), jamais de banque
  // d'images — celles des soirées envoyées le 30 septembre 2026, dans
  // assets/photos/celebration/. Les légendes décrivent l'image, jamais un
  // faux « anniversaire », et aucune photo où l'on voit une mariée : pas de
  // codes du mariage ici. Ce qui manque encore : README.md du même dossier.
  // ═══════════════════════════════════════════════════
  celebrationPage: {
    hero: {
      eyebrow: "DJ · Photobooth · Son & lumière — Paris & Île-de-France",
      // Les trois phrases du brief, une par ligne.
      title: "Votre événement.<br>Votre ambiance.<br><em>Votre célébration.</em>",
      subtitle: "Anniversaire, fiançailles ou événement privé : MGR Célébration imagine avec vous une soirée qui vous ressemble.",
      // Trois photos, une rangée : la plus large au centre.
      photos: [
        { src: "assets/photos/celebration/discours-micro.webp",  legende: "Le discours" },
        { src: "assets/photos/celebration/piste-foule.webp",     legende: "La piste" },
        { src: "assets/photos/celebration/ambiance-soiree.webp", legende: "L’ambiance" },
      ],
    },

    // Sous le premier écran : ce qu'on comprend en trois secondes — un seul
    // interlocuteur pour tout ça. Chaque mot mène à sa section.
    prestations: [
      { label: "DJ",            cible: "#dj" },
      { label: "Son",           cible: "#son-lumiere" },
      { label: "Lumière",       cible: "#son-lumiere" },
      { label: "Photobooth",    cible: "#photobooth" },
      { label: "Photo & vidéo", cible: "#photo-video" },
    ],

    // 1 — LES ÉVÉNEMENTS. Une carte = une occasion ; au clic, elle se coche
    // dans le formulaire. `id` sert aussi aux liens de campagne :
    // /celebration?occasion=18-ans arrive avec « 18 ans et + » déjà choisi.
    evenements: [
      { id: "anniversaire",            titre: "Anniversaire",            texte: "30, 40, 50 ans et plus : trois générations sur la même piste." },
      { id: "18-ans",                  titre: "18 ans et +",             texte: "Une vraie soirée, avec l’énergie d’un club." },
      { id: "fiancailles",             titre: "Fiançailles",             texte: "Avant le grand jour, la fête entre proches." },
      { id: "anniversaire-de-mariage", titre: "Anniversaire de mariage", texte: "10, 20 ou 25 ans : la musique repart, vos proches avec." },
      { id: "baby-shower",             titre: "Baby shower",             texte: "Une annonce qui se danse, gender reveal compris." },
      { id: "celebration-privee",      titre: "Célébration privée",      texte: "Fête de famille, retrouvailles, soirée entre amis : dites-nous l’occasion." },
    ],

    // 2 — UNE EXPÉRIENCE PENSÉE AUTOUR DE VOUS : ce dont on parle avant de
    // parler matériel.
    experience: [
      { titre: "Votre événement",    texte: "L’occasion, la surprise ou non, le ton de la soirée." },
      { titre: "Vos invités",        texte: "Combien, quels âges : de quoi dimensionner le son et la piste." },
      { titre: "Le lieu",            texte: "Salle, maison, péniche, restaurant privatisé : ce qui est équipé, ce qui manque." },
      { titre: "Vos goûts musicaux", texte: "Vos incontournables, et ce que vous ne voulez pas entendre." },
      { titre: "L’ambiance",         texte: "Un dîner qui glisse vers la piste, ou la fête dès la première heure." },
      { titre: "La technique",       texte: "Sono, lumière, micro, photobooth : seulement ce qui sert votre soirée." },
    ],

    // 3 — DJ & AMBIANCE MUSICALE.
    dj: {
      photo: "assets/photos/celebration/dj-jem.webp", alt: "DJ Jem, en chemise MGR Events, aux platines",
      univers: [
        { titre: "Généraliste", texte: "Les tubes qui rassemblent toutes les générations." },
        { titre: "80’s",        texte: "Pop, disco, funk : les refrains que tout le monde connaît." },
        { titre: "90’s",        texte: "Dance, R&B, hip-hop : l’énergie des années 90." },
        { titre: "2000’s",      texte: "R&B, hip-hop, pop : la décennie qui fait chanter la salle." },
        { titre: "Club",        texte: "Les hits du moment et les tendances : un club, chez vous." },
        { titre: "Latino",      texte: "Reggaeton, salsa, bachata, dembow : la chaleur latine." },
        { titre: "Urbain",      texte: "Rap, afro, amapiano, shatta, R&B : les sons d’aujourd’hui." },
        { titre: "Sur mesure",  texte: "Votre playlist, vos incontournables, vos interdits." },
      ],
      // « Une ambiance pour chaque âge » : les repères des flyers Célébration.
      ages: [
        { age: "18 – 25 ans", ambiance: "Club actuel",       detail: "Hits, rap, afro, latino, shatta" },
        { age: "25 – 35 ans", ambiance: "2000’s & R&B",      detail: "Hip-hop, afro, latino, club" },
        { age: "35 – 50 ans", ambiance: "80’s · 90’s",       detail: "Pop, disco, funk, R&B, club" },
        { age: "50 ans et +", ambiance: "Grands classiques", detail: "Disco, funk, variété, tubes fédérateurs" },
      ],
    },

    // 4 — SON & LUMIÈRE.
    sonLumiere: {
      photo: "assets/photos/celebration/scene-plein-air.webp", alt: "Une scène montée en plein air : tente, son et lumières face au public",
      points: [
        "Une sonorisation dimensionnée pour le lieu et vos invités",
        "La lumière de l’espace et de la piste, qui monte avec la soirée",
        "Un micro pour les discours et les surprises, selon la formule",
        "Tout est installé et testé avant l’arrivée de vos invités",
      ],
    },

    // 5 — PHOTOBOOTH : mis en avant, avec son prix d'appel. Le prix est
    // celui de la communication en cours (flyers, septembre 2026) ; le
    // contenu exact de la prestation se lit dans le devis.
    photobooth: {
      photo: "assets/photos/celebration/photobooth-1.webp", alt: "Des invitées déguisées posent devant le photobooth MGR",
      prix: "599 €", mention: "TTC",
      points: [
        "Des accessoires pour jouer le jeu",
        "Un cadre à vos couleurs, pensé pour votre fête",
        "Vos invités créent leurs souvenirs, et les gardent",
      ],
    },

    // 6 — PHOTO & VIDÉO.
    photoVideo: {
      photo: "assets/photos/celebration/danse-plein-air.webp", alt: "Des invités de tous âges dansent en plein air, sous les projecteurs",
      points: [
        "La captation des temps forts : arrivées, discours, surprises, piste",
        "Un film souvenir monté, à revoir et à partager",
        "Des images vraies : vos invités, pas une mise en scène",
      ],
    },

    // 7 — NOS RÉALISATIONS : grille de trois colonnes, `format: "large"` en
    // prend deux. L'ordre compte pour qu'aucune rangée ne reste trouée :
    // quatre photos = une grande + une petite, puis une petite + une grande
    // (cinq : une grande + une petite, puis trois petites). Une grande case
    // veut une photo en paysage. Une entrée peut être une vidéo courte :
    // { video: "assets/videos/x.mp4", photo: "<image d'attente>", ... } —
    // muette, en boucle, lue seulement quand elle est à l'écran.
    // La soirée tropicale est une soirée d'équipe (le logo Médecins du Monde
    // est sur les photos : la grande case le recadre, pas la petite).
    realisations: [
      { photo: "assets/photos/celebration/soiree-equipe-costumes.webp", lieu: "Soirée d’équipe", legende: "Thème tropical, costumes compris", format: "large" },
      { photo: "assets/photos/celebration/dj-jem-platines.webp",        lieu: "DJ Jem",          legende: "Aux platines" },
      { photo: "assets/photos/celebration/soiree-equipe-invites.webp",  lieu: "Soirée d’équipe", legende: "Avant la piste" },
      { photo: "assets/photos/celebration/soiree-equipe-piste.webp",    lieu: "Soirée d’équipe", legende: "La piste", format: "large" },
    ],

    // 8 — COMMENT ÇA FONCTIONNE ? Les quatre étapes du brief.
    etapes: [
      { titre: "Parlez-nous de votre événement", texte: "La date, le lieu, vos invités, vos envies : deux minutes de formulaire. Nous vous répondons sous 24 h." },
      { titre: "Nous construisons votre prestation", texte: "DJ, son, lumière, photobooth, vidéo : seulement ce qui sert votre soirée, dans un devis écrit." },
      { titre: "Nous préparons votre soirée", texte: "Un rendez-vous pour la musique, les temps forts — entrée, gâteau, surprise — et le lieu." },
      { titre: "Profitez de votre célébration", texte: "Nous installons, nous testons, nous faisons danser. Vous, vous profitez de vos invités." },
    ],

    // 9 — AVIS CLIENTS. Un nom = l'avis Google de ce client, repris de
    // weddingPage.testimonials (même texte, même occasion affichée : ce sont
    // des mariages, la carte le dit). Un avis de fête s'ajoute en entier :
    // { quote: "…", name: "Prénom I.", event: "Anniversaire 40 ans" }.
    avis: ["Anna O.", "Tania S.", "Alexandre V."],
    avisSource: "Avis publiés sur la fiche Google de MGR Events — prénom et initiale.",

    // 10 — LE FORMULAIRE : les réponses proposées. Les occasions viennent de
    // `evenements`, les univers de `dj.univers`.
    formulaire: {
      invites: ["Moins de 30", "30 à 60", "60 à 100", "100 à 150", "Plus de 150"],
      prestations: ["DJ", "Sonorisation", "Éclairage", "Photobooth", "Photo & vidéo"],
    },
  },

  // ═══════════════════════════════════════════════════
  // BLOG — /blog (liste) et /blog/:slug (article via article.html)
  // ═══════════════════════════════════════════════════
  blog: {
    title: "Le Journal",
    intro: "Conseils, coulisses et inspiration pour des événements inoubliables.",
    articles: [
      {
        slug: "choisir-dj-mariage-paris",
        title: "Comment choisir son DJ de mariage à Paris",
        category: "Mariage",
        date: "2026-06-15",
        readingTime: "5 min",
        cover: "assets/photos/wedding/blog-choisir-dj.webp",
        excerpt: "Expérience, matériel, feeling, contrat… les vrais critères pour choisir le DJ qui fera danser vos invités jusqu'au bout de la nuit.",
        body: `
          <p>Le DJ est le chef d'orchestre invisible de votre soirée : c'est lui qui transforme un dîner réussi en une piste de danse mémorable. Voici les critères qui comptent vraiment.</p>
          <h2>1. L'expérience du mariage, pas seulement du club</h2>
          <p>Mixer en club et animer un mariage sont deux métiers. Un bon DJ de mariage sait gérer les temps faibles, accompagner les discours, enchaîner les générations sur le dancefloor et lire une salle hétérogène. Demandez depuis combien de temps il anime des mariages, et combien par an.</p>
          <h2>2. Le matériel et la régie</h2>
          <p>Sonorisation adaptée à la taille de la salle, éclairage, micros HF pour les discours, et surtout du matériel de secours. Un professionnel arrive en avance, installe et teste tout avant l'arrivée de vos invités.</p>
          <h2>3. Le feeling et la personnalisation</h2>
          <p>Votre DJ doit construire la soirée <em>avec</em> vous : musiques incontournables, titres à éviter, ambiance souhaitée par moment. Méfiez-vous des playlists toutes faites.</p>
          <h2>4. Le cadre : devis clair et contrat</h2>
          <ul>
            <li>Un devis détaillé (heures, matériel, déplacement) ;</li>
            <li>Un contrat écrit ;</li>
            <li>Une solution en cas d'imprévu (remplacement garanti).</li>
          </ul>
          <p>Chez MGR Wedding, chaque prestation est cadrée, personnalisée et sécurisée par notre réseau de DJs résidents.</p>
        `,
      },
      {
        slug: "deroule-musical-mariage",
        title: "Le déroulé musical d'un mariage réussi",
        category: "Conseils",
        date: "2026-05-28",
        readingTime: "6 min",
        cover: "assets/photos/wedding/blog-deroule.webp",
        excerpt: "Du vin d'honneur à la dernière danse : comment construire une montée en énergie qui garde la piste pleine toute la nuit.",
        body: `
          <p>Une soirée qui fonctionne n'est pas une succession de tubes : c'est une <strong>courbe d'énergie</strong> maîtrisée. Voici une trame éprouvée.</p>
          <h2>Vin d'honneur — poser l'ambiance</h2>
          <p>Lounge, soul, deep léger : on accompagne les retrouvailles sans couvrir les conversations.</p>
          <h2>Dîner — l'émotion à table</h2>
          <p>Volume maîtrisé, sélection feutrée, et coordination des temps forts (entrées des plats, discours, jeux). L'énergie monte discrètement.</p>
          <h2>Ouverture de bal — le basculement</h2>
          <p>La première danse, puis quelques titres fédérateurs pour faire venir toutes les générations avant d'accélérer.</p>
          <h2>Soirée — open format</h2>
          <p>C'est là que la lecture du dancefloor fait la différence : on alterne les univers, on relance quand l'énergie baisse, on garde les gros moments pour le bon timing.</p>
          <h2>Fin de soirée — la dernière danse</h2>
          <p>Un dernier titre marquant pour clôturer en beauté. Conseil : choisissez-le à l'avance, c'est un souvenir fort.</p>
        `,
      },
      {
        slug: "premiere-danse-idees-chansons",
        title: "Première danse : nos conseils et idées de chansons",
        category: "Inspiration",
        date: "2026-05-10",
        readingTime: "4 min",
        cover: "assets/photos/wedding/blog-premiere-danse.webp",
        excerpt: "Choisir LA chanson, gérer le trac, soigner la mise en lumière : tout pour réussir votre premier slow.",
        body: `
          <p>La première danse est l'un des moments les plus regardés de la soirée. Quelques principes pour qu'elle soit à votre image.</p>
          <h2>Choisir la chanson</h2>
          <p>Privilégiez un titre qui <em>vous</em> raconte plutôt qu'un classique imposé. Pensez au tempo : ni trop lent (long), ni trop rapide (difficile à danser).</p>
          <h2>La version compte</h2>
          <p>Une reprise acoustique ou une version live peut transformer l'émotion. Votre DJ peut aussi raccourcir proprement le morceau (1 min 30 à 2 min suffisent souvent).</p>
          <h2>La mise en scène</h2>
          <ul>
            <li>Lumière douce et poursuite sur les mariés ;</li>
            <li>Transition vers un titre entraînant pour inviter les proches ;</li>
            <li>Option étincelles froides pour un final spectaculaire.</li>
          </ul>
          <p>On répète l'enchaînement le jour J pour que tout soit calé à la seconde.</p>
        `,
      },
    ],
  },
};

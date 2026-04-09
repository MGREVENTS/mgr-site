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
    logo: "assets/waveform.png",
    socials: {
      instagram: "https://instagram.com/mgr.events",
      facebook: "https://facebook.com/MGR.Eventsparis",
      soundcloud: "https://soundcloud.com/mgr-events-paris",
    }
  },

  // ── HERO ──
  hero: {
    tagline: "Direction Artistique · Booking · Événementiel",
    title: "L'énergie<br>qui fait<br>la <em>différence</em>",
    subtitle: "Programmation musicale sur mesure pour établissements, mariages et événements à Paris.",
  },

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
      photo: "assets/djs/Logan.png",
      style: "Open Format · Latino",
      venues: "Fluctuart, Duplex",
      instagram: "https://www.instagram.com/dj_lgn/",
      soundcloud: "",
    },
    {
      name: "DJ Jem",
      photo: "assets/djs/jem.png",
      style: "Open Format · Caribéen",
      venues: "Duplex, Seguin Sound Club, Fluctuart",
      instagram: "https://www.instagram.com/dj_jem_officiel/",
      soundcloud: "",
    },
    {
      name: "DJ Stevis",
      photo: "assets/djs/stevis.png",
      style: "Open Format · Caribéen · Urban FR · Hip-Hop",
      venues: "Duplex, QG, Seguin Sound Club",
      instagram: "https://www.instagram.com/djstevis/",
      soundcloud: "",
    },
    {
      name: "DJ Ny Aina",
      photo: "assets/djs/nyaina.png",
      style: "Open Format · Urban Music",
      venues: "Duplex, Seguin Sound Club, Fluctuart",
      instagram: "https://www.instagram.com/nyaina_vrn/",
      soundcloud: "",
    },
    {
      name: "DJ Krislay",
      photo: "assets/djs/Krislay.png",
      style: "Open Format · Hip-Hop",
      venues: "Seguin Sound Club",
      instagram: "https://www.instagram.com/djkrislay/",
      soundcloud: "",
    },
    {
      name: "DJ Deloums",
      photo: "assets/djs/Deloums.png",
      style: "Open Format · Caribéen",
      venues: "Seguin Sound Club",
      instagram: "https://www.instagram.com/djdeloums/",
      soundcloud: "",
    },
    {
      name: "DJ Benka",
      photo: "assets/djs/Benka.png",
      style: "Open Format · Caribéen",
      venues: "Duplex, Seguin Sound Club, Gastby",
      instagram: "https://www.instagram.com/djbenkaofficiel/",
      soundcloud: "",
    },
    {
      name: "DJ Lixx",
      photo: "assets/djs/Lixx.png",
      style: "Open Format · Afrobeat · Amapiano",
      venues: "Seguin Sound Club, Fluctuart, Gastby",
      instagram: "https://www.instagram.com/djlixx.official/",
      soundcloud: "",
    },
    {
      name: "DJ West",
      photo: "assets/djs/West.png",
      style: "Open Format",
      venues: "Fluctuart",
      instagram: "https://www.instagram.com/djwest_paris/",
      soundcloud: "",
    },
    {
      name: "DJ Opal",
      photo: "assets/djs/opal.png",
      style: "Open Format · Bass House",
      venues: "Fluctuart, Gastby",
      instagram: "https://www.instagram.com/opal_sound/",
      soundcloud: "",
    },
    {
      name: "DJ Nigelen",
      photo: "assets/djs/Nigelen.png",
      style: "Open Format",
      venues: "Fluctuart",
      instagram: "https://www.instagram.com/djnigelen/",
      soundcloud: "",
    },
    {
      name: "DJ Real",
      photo: "assets/djs/real.png",
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
    "Seguin Sound Club",
    "Fluctuart",
    "Quai de la Photo",
    "Gastby",
  ],

  // ── PHOTOS DES SECTIONS ──
  // Remplace les chemins quand tu as les vraies photos
  photos: {
    about: "assets/photos/raphael-wedding.jpg",        // section "Qui sommes-nous"
    events_hero: "assets/photos/events-hero.jpg",     // modal MGR Events
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
      cta: { text: "Demander un audit", action: "contact" },
    },
    wedding: {
      tag: "Mariages · Prestation DJ clé en main",
      title: "L'<em>émotion</em> en musique",
      description: "MGR Wedding sublime chaque instant de votre journée avec une prestation DJ sur mesure. Du premier slow à la dernière danse, nous orchestrons une bande-son à la hauteur de votre amour.",
      description2: "5 formules exclusives de 899€ à 2 699€ — son, lumières, effets pyrotechniques et photobooth. Chaque détail est pensé pour créer l'inoubliable.",
      features: [
        { title: "Economic — dès 899€", desc: "Votre DJ avec stand, platines et 2 micros HF pour 8h de prestation. L'essentiel pour une soirée réussie." },
        { title: "Basic — dès 1 799€", desc: "Prestation clé en main 10h : DJ, régie complète, enceintes jusqu'à 200 personnes, lumières haut de gamme, lyres, vidéoprojecteur et écran." },
        { title: "Mon Sublime Mariage — dès 2 399€", desc: "L'excellence absolue : tout le Basic plus machine à fumée, bulles, 6 pars LED d'ambiance, fumée lourde, étincelles froides et sono extérieure sans fil." },
      ],
      stats: [
        { value: "5★", label: "Note moyenne" },
        { value: "899€", label: "À partir de" },
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
      cta: { text: "Suivre @nomames", action: "https://instagram.com/nomames_paris" },
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
};

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
      photo: "assets/djs/logan.jpg",       // mettre la photo dans assets/djs/
      style: "Open Format · Afro",
      venues: "Duplex, VIP Room",
      instagram: "https://instagram.com/dj_logan",
      soundcloud: "",
    },
    {
      name: "DJ Marco",
      photo: "assets/djs/marco.jpg",
      style: "House · Tech House",
      venues: "Fluctuart, Quai Photo",
      instagram: "https://instagram.com/dj_marco",
      soundcloud: "",
    },
    {
      name: "DJ Vicky",
      photo: "assets/djs/vicky.jpg",
      style: "Latino · Reggaeton",
      venues: "Duplex, No Mames",
      instagram: "https://instagram.com/dj_vicky",
      soundcloud: "",
    },
    {
      name: "DJ Raph",
      photo: "assets/djs/raph.jpg",
      style: "Open Format · Pop",
      venues: "Le Baron, Fluctuart",
      instagram: "https://instagram.com/dj_raph",
      soundcloud: "",
    },
    {
      name: "DJ Nina",
      photo: "assets/djs/nina.jpg",
      style: "Deep House · Lounge",
      venues: "Quai Photo, Privatifs",
      instagram: "https://instagram.com/dj_nina",
      soundcloud: "",
    },
    {
      name: "DJ Real",
      photo: "assets/djs/real.jpg",
      style: "Afro · Amapiano",
      venues: "No Mames, Duplex",
      instagram: "https://instagram.com/dj_real",
      soundcloud: "",
    },
    {
      name: "DJ Alex",
      photo: "assets/djs/alex.jpg",
      style: "Électro · Techno",
      venues: "Fluctuart, Privatifs",
      instagram: "https://instagram.com/dj_alex",
      soundcloud: "",
    },
    {
      name: "DJ Samy",
      photo: "assets/djs/samy.jpg",
      style: "RnB · Hip-Hop",
      venues: "VIP Room, Le Baron",
      instagram: "https://instagram.com/dj_samy",
      soundcloud: "",
    },
  ],

  // ── PARTENAIRES ──
  // Ajouter/retirer un partenaire ici
  partners: [
    "Duplex",
    "Fluctuart",
    "Quai Photo",
    "Waterugby",
    "VIP Room",
    "Le Baron",
  ],

  // ── PHOTOS DES SECTIONS ──
  // Remplace les chemins quand tu as les vraies photos
  photos: {
    about: "assets/photos/about-club.jpg",           // section "Qui sommes-nous"
    events_hero: "assets/photos/events-hero.jpg",     // modal MGR Events
    wedding_hero: "assets/photos/wedding-hero.jpg",   // modal MGR Wedding
    nomames_hero: "assets/photos/nomames-hero.jpg",   // modal No Mames
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
      tag: "Mariages · DJ sur mesure",
      title: "L'<em>émotion</em> en musique",
      description: "Votre mariage mérite une bande-son à la hauteur de l'événement. Nous créons une playlist personnalisée pour chaque moment : cérémonie, vin d'honneur, dîner et soirée.",
      description2: "Un DJ dédié vous accompagne dans la préparation, avec des rendez-vous en amont pour comprendre vos goûts et l'ambiance souhaitée.",
      features: [
        { title: "Consultation personnalisée", desc: "Rendez-vous préparatoire pour définir ensemble chaque ambiance musicale de votre journée." },
        { title: "4 moments, 4 ambiances", desc: "Cérémonie, cocktail, dîner et soirée — chaque phase a sa playlist dédiée et ses transitions soignées." },
        { title: "Matériel premium", desc: "Sonorisation haut de gamme, éclairage d'ambiance et micro sans fil inclus dans nos prestations." },
      ],
      stats: [
        { value: "80+", label: "Mariages réalisés" },
        { value: "5★", label: "Note moyenne" },
        { value: "4", label: "Ambiances / journée" },
      ],
      cta: { text: "Demander un devis", action: "contact" },
    },
    nomames: {
      tag: "Événements · Soirées thématiques",
      title: "La <em>fiesta</em> parisienne",
      description: "No Mames est notre marque événementielle dédiée aux soirées latines, afro et urbaines. Nous produisons des événements dans les plus beaux lieux de la capitale.",
      description2: "Une communauté fidèle, une programmation pointue et une ambiance qui ne ressemble à rien d'autre.",
      features: [
        { title: "Soirées signature", desc: "Reggaeton, afrobeats, baile funk, cumbia — des line-ups curatés pour une énergie maximale." },
        { title: "Communauté", desc: "+5 000 followers engagés et une base fidèle qui attend chaque édition avec impatience." },
        { title: "Lieux d'exception", desc: "Duplex, Quai de la Photo, rooftops privés — nous investissons les meilleurs spots de Paris." },
      ],
      stats: [
        { value: "30+", label: "Événements / an" },
        { value: "5K+", label: "Communauté" },
        { value: "100%", label: "Sold out" },
      ],
      cta: { text: "Suivre @nomames", action: "https://instagram.com/nomames.paris" },
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

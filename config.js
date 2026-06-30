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
    logo: "assets/waveform.webp",
    socials: {
      instagram: "https://instagram.com/mgr.events",
      facebook: "https://facebook.com/MGR.Eventsparis",
      soundcloud: "https://soundcloud.com/mgr-events-paris",
    }
  },

  // ── HERO ──
  hero: {
    tagline: "Booking DJ · Direction Artistique · Paris",
    title: "L'<em>exigence</em><br>au service de<br>vos événements",
    subtitle: "La différence se ressent, elle ne se dit pas. Clubs, mariages, corporate — chaque détail musical est pensé pour que votre événement parle de lui-même.",
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
      venues: "Duplex, Seguin Sound Club, Fluctuart",
      instagram: "https://www.instagram.com/dj_jem_officiel/",
      soundcloud: "",
    },
    {
      name: "DJ Stevis",
      photo: "assets/djs/stevis.webp",
      style: "Open Format · Caribéen · Urban FR · Hip-Hop",
      venues: "Duplex, QG, Seguin Sound Club",
      instagram: "https://www.instagram.com/djstevis/",
      soundcloud: "",
    },
    {
      name: "DJ Ny Aina",
      photo: "assets/djs/nyaina.webp",
      style: "Open Format · Urban Music",
      venues: "Duplex, Seguin Sound Club, Fluctuart",
      instagram: "https://www.instagram.com/nyaina_vrn/",
      soundcloud: "",
    },
    {
      name: "DJ Krislay",
      photo: "assets/djs/Krislay.webp",
      style: "Open Format · Hip-Hop",
      venues: "Seguin Sound Club",
      instagram: "https://www.instagram.com/djkrislay/",
      soundcloud: "",
    },
    {
      name: "DJ Deloums",
      photo: "assets/djs/Deloums.webp",
      style: "Open Format · Caribéen",
      venues: "Seguin Sound Club",
      instagram: "https://www.instagram.com/djdeloums/",
      soundcloud: "",
    },
    {
      name: "DJ Benka",
      photo: "assets/djs/Benka.webp",
      style: "Open Format · Caribéen",
      venues: "Duplex, Seguin Sound Club, Gastby",
      instagram: "https://www.instagram.com/djbenkaofficiel/",
      soundcloud: "",
    },
    {
      name: "DJ Lixx",
      photo: "assets/djs/Lixx.webp",
      style: "Open Format · Afrobeat · Amapiano",
      venues: "Seguin Sound Club, Fluctuart, Gastby",
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
      venues: "Fluctuart, Gastby",
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
    "Seguin Sound Club",
    "Fluctuart",
    "Quai de la Photo",
    "Gastby",
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
    hero: {
      eyebrow: "MGR Wedding · Paris & Île-de-France",
      title: "L'<em>émotion</em><br>en musique",
      subtitle: "Du premier slow à la dernière danse, nous orchestrons la bande-son de votre journée. Une prestation DJ sur mesure, pensée pour que chaque instant reste gravé.",
      videoId: "Iy-Wbd6jF5c",
      poster: "assets/photos/wedding.jpg",
    },
    reassurance: [
      { value: "5★",   label: "Note moyenne" },
      { value: "200+", label: "Mariages animés" },
      { value: "10h",  label: "De prestation" },
      { value: "2h",   label: "Remplacement garanti" },
    ],
    // « Le fil de votre journée » — scrollytelling chronologique
    chaptersTitle: "Le fil de votre journée",
    chapters: [
      { eyebrow: "01 · Cérémonie",     title: "L'instant suspendu",        text: "Entrée, sortie, moments forts : une sonorisation discrète et des choix musicaux justes pour sublimer l'émotion sans jamais la couvrir.", photo: "assets/photos/wedding/ceremonie.webp" },
      { eyebrow: "02 · Vin d'honneur", title: "La parenthèse",             text: "Une ambiance lounge et chaleureuse pendant que vos invités se retrouvent. Le ton est donné, tout en douceur.", photo: "assets/photos/wedding/cocktail.webp" },
      { eyebrow: "03 · Dîner",         title: "Les émotions à table",      text: "Playlist feutrée, gestion des discours et des animations, montée progressive de l'énergie vers la piste.", photo: "assets/photos/raphael-wedding.jpg" },
      { eyebrow: "04 · Première danse",title: "Votre moment",              text: "Votre chanson, votre mise en lumière. On répète, on cale l'instant à la seconde près.", photo: "assets/photos/wedding/premiere-danse.webp" },
      { eyebrow: "05 · Soirée",        title: "Jusqu'au bout de la nuit",  text: "Open format, lecture du dancefloor en temps réel, lumières et effets : une piste qui ne désemplit pas.", photo: "assets/photos/wedding/soiree.webp" },
    ],
    momentsTitle: "Nos moments",
    momentsIntro: "Quelques instants capturés au fil de nos mariages.",
    moments: [
      "assets/photos/wedding/moment-1.webp","assets/photos/wedding/moment-2.webp",
      "assets/photos/wedding/moment-3.webp","assets/photos/wedding/moment-4.webp",
      "assets/photos/wedding/moment-5.webp","assets/photos/wedding/moment-6.webp",
      "assets/photos/wedding/moment-7.webp","assets/photos/wedding/moment-8.webp",
    ],
    formulesTitle: "Nos formules",
    formulesIntro: "Trois prestations clé en main, ajustables à votre lieu et votre nombre d'invités.",
    formules: [
      { name: "Economic", price: "dès 899€",   desc: "L'essentiel pour une soirée réussie.", features: ["DJ avec stand & platines","2 micros HF","8h de prestation"] },
      { name: "Basic",    price: "dès 1 799€", desc: "Prestation clé en main, 10h.",         features: ["Régie complète","Enceintes jusqu'à 200 pers.","Lumières haut de gamme, lyres","Vidéoprojecteur & écran"], highlight: true },
      { name: "Mon Sublime Mariage", price: "dès 2 399€", desc: "L'excellence absolue.",      features: ["Tout le Basic, et plus","Machine à fumée & bulles","6 pars LED · fumée lourde","Étincelles froides","Sono extérieure sans fil"] },
    ],
    testimonialsTitle: "Ils nous ont fait confiance",
    testimonials: [
      // ⚠️ EXEMPLES — à remplacer par de vrais avis clients
      { quote: "Une piste qui ne s'est jamais vidée. Nos invités en parlent encore des semaines après.", name: "À remplacer", event: "Mariage · exemple", rating: 5 },
      { quote: "Professionnel et à l'écoute du début à la fin. La première danse était parfaite.", name: "À remplacer", event: "Mariage · exemple", rating: 5 },
      { quote: "Du vin d'honneur à 4h du matin, une énergie incroyable et une lecture parfaite de la salle.", name: "À remplacer", event: "Mariage · exemple", rating: 5 },
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      { q: "Intervenez-vous partout en Île-de-France ?", a: "Oui — Paris et toute l'Île-de-France, et au-delà sur demande. Le déplacement est précisé dans votre devis." },
      { q: "Peut-on choisir les musiques ?", a: "Absolument. Nous construisons ensemble une trame (moments forts, must-play, no-play) et le DJ adapte en lecture du dancefloor le jour J." },
      { q: "Que se passe-t-il en cas d'imprévu ?", a: "Notre organisation garantit un remplacement en 2h via notre réseau de DJs résidents — votre soirée n'est jamais menacée." },
      { q: "Le matériel est-il inclus ?", a: "Oui : sonorisation, éclairage et effets selon la formule choisie. Tout est installé et testé avant l'arrivée de vos invités." },
      { q: "Comment réserver ?", a: "Demandez un devis via le formulaire : nous revenons vers vous sous 24h pour un échange et une proposition personnalisée." },
    ],
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

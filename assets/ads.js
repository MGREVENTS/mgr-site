// assets/ads.js — LA BALISE GOOGLE ADS DU SITE. UN SEUL ENDROIT.
//
// Chargée dans le <head> de toutes les pages. Elle ne mesure rien par
// elle-même : elle identifie le visiteur venu d'une annonce, pour que la
// conversion déclenchée plus tard — sur /devis-mariage, servie par
// PlanniFlow — puisse être rattachée au clic qui l'a amené.
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │  COLLE TON IDENTIFIANT ICI, ET NULLE PART AILLEURS.                 │
// │                                                                     │
// │  Google Ads → Outils → Sources de données → Balise Google →         │
// │  Détails de la balise. Il s'écrit « AW- » suivi de 9 à 11 chiffres. │
// └─────────────────────────────────────────────────────────────────────┘
//
// S'IL EST VIDE, RIEN NE SE CHARGE : aucune requête vers Google, aucun
// cookie publicitaire, aucune ligne de plus dans la page. Un identifiant faux
// vaut moins que pas d'identifiant — il donne l'illusion d'une mesure qui
// n'existe pas.
var MGR_ADS_ID = 'AW-18438953840';

// ET SEULEMENT SUR LE VRAI DOMAINE.
//
// Les préversions Vercel servent le même code sous un nom en .vercel.app.
// Sans ce garde-fou, chaque relecture d'une branche enverrait des visites au
// compte de production — du trafic interne que la campagne prendrait pour de
// l'audience, et sur lequel elle apprendrait.
var MGR_ADS_HOTES = ['mgrevents.fr', 'www.mgrevents.fr'];

// LA MÊME BALISE DOIT VIVRE DANS PLANNIFLOW, sinon la moitié du chemin
// manque. Le visiteur clique sur l'annonce, arrive ici, puis termine sa
// demande sur /devis-mariage — une page de l'app. Sans balise là-bas, on
// paie des clics dont on ne saura jamais lesquels ont abouti.
// Côté PlanniFlow, l'identifiant se règle par la variable d'environnement
// NEXT_PUBLIC_ADS_ID (voir components/VitrinePublique.js).
//
// Le domaine est le même des deux côtés — www.mgrevents.fr, le catch-all
// s'en charge — il n'y a donc AUCUN suivi inter-domaines à configurer.

(function () {
  var id = String(MGR_ADS_ID || '').trim();
  if (!/^AW-\d{6,}$/.test(id)) return;
  if (MGR_ADS_HOTES.indexOf(location.hostname) === -1) return;

  // La file d'attente de gtag doit exister AVANT le script distant : les
  // appels faits pendant le chargement s'y empilent et partent ensuite.
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id);

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(s);
})();

// SIGNALER UNE CONVERSION DEPUIS LE SITE.
//
// Inutilisée aujourd'hui : la demande de devis se conclut sur PlanniFlow,
// c'est donc là que l'événement part. Elle est ici pour le jour où un
// formulaire du site devra compter — le formulaire de contact de l'accueil,
// par exemple — afin qu'on n'aille pas réécrire la mécanique à côté.
//
// Sans balise chargée, elle ne fait rien et ne casse rien.
window.mgrConversion = function (evenement, parametres) {
  if (typeof window.gtag !== 'function' || !evenement) return;
  window.gtag('event', evenement, parametres || {});
};

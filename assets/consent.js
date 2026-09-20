// assets/consent.js — LE BANDEAU COOKIES. Un seul cookie à consentir : celui
// de Google Ads (assets/ads.js). Rien d'autre sur ce site ne dépose quoi que
// ce soit — le thème de l'accueil vit en localStorage, ce n'est pas un
// traceur.
//
// CE QUE LA CNIL DEMANDE, ET CE QU'ON FAIT :
// - rien ne se charge avant le choix           → ads.js n'écoute que nous ;
// - refuser est aussi simple qu'accepter        → deux boutons, même taille,
//                                                 même rangée, pas de croix
//                                                 qui vaudrait « oui » ;
// - le choix se retient, dans les deux sens     → localStorage, 6 mois ;
// - le visiteur peut changer d'avis             → le lien « Cookies » du pied
//                                                 de page rouvre le bandeau ;
// - on dit à quoi ça sert, en une phrase        → et un lien vers les mentions.
//
// LE MÊME CHOIX VAUT SUR /devis-mariage, /offres-mariage et
// /salon-du-mariage, servies par PlanniFlow SOUS LE MÊME DOMAINE : même
// origine, même localStorage, même clé — lib/consentement.mjs là-bas lit
// exactement ce qu'on écrit ici. Un couple qui accepte sur l'accueil n'est
// pas redemandé au moment du devis, et inversement.
//
// LE FORMAT, À NE PAS CHANGER SANS CHANGER L'AUTRE CÔTÉ :
//   clé « mgr_consent », valeur JSON { "choix": "accepte" | "refuse",
//   "date": "<ISO 8601>" }. Au-delà de 182 jours, le choix est oublié et le
//   bandeau revient (la CNIL recommande de ne pas retenir plus de 6 mois).
//
// Chargé dans le <head> juste après ads.js. Il ne touche au DOM qu'une fois
// la page construite. Il apporte son propre style : les pages n'ont pas
// toutes la même feuille (le blog et les mentions ont la leur), il doit
// tenir partout, en clair comme en sombre, sur ce que chaque page définit —
// avec des replis sombres quand elle ne définit rien.
(function () {
  var CLE = 'mgr_consent';
  var JOURS = 182;

  function lire() {
    try {
      var brut = localStorage.getItem(CLE);
      if (!brut) return null;
      var v = JSON.parse(brut);
      if (!v || (v.choix !== 'accepte' && v.choix !== 'refuse')) return null;
      var age = Date.now() - Date.parse(v.date);
      if (!(age >= 0) || age > JOURS * 86400000) return null;
      return v.choix;
    } catch (e) { return null; }
  }
  function ecrire(choix) {
    try { localStorage.setItem(CLE, JSON.stringify({ choix: choix, date: new Date().toISOString() })); } catch (e) {}
  }

  var ads = window.mgrAds || { actif: false, charger: function () {} };

  // Déjà accepté : la balise part tout de suite, sans bandeau. Déjà refusé :
  // rien. Sans balise possible (aperçu, identifiant vide) : rien non plus —
  // un bandeau qui ne consent à rien serait une question sans objet.
  var choix = lire();
  if (choix === 'accepte') ads.charger();

  var STYLE = [
    '.mgr-cookies{position:fixed;left:16px;right:16px;bottom:16px;z-index:300;margin:0 auto;max-width:640px;',
    'background:var(--fond-2,#181916);color:var(--texte,var(--blanc,#F5F4EF));border:1px solid var(--bord,rgba(245,244,239,.14));',
    'border-radius:var(--rayon,14px);padding:1.1rem 1.25rem;box-shadow:0 18px 50px rgba(0,0,0,.28);',
    'font-family:var(--sans,var(--ff-body,"DM Sans",system-ui,sans-serif));font-size:.95rem;line-height:1.55}',
    '.mgr-cookies[hidden]{display:none}',
    '.mgr-cookies p{margin:0 0 .9rem}',
    '.mgr-cookies a{color:inherit;text-decoration:underline;text-underline-offset:3px}',
    '.mgr-cookies a:hover{color:var(--or,#C7AC72)}',
    '.mgr-cookies-actions{display:flex;gap:.6rem;flex-wrap:wrap}',
    '.mgr-cookies-btn{flex:1 1 140px;min-height:44px;padding:0 1.2rem;border-radius:var(--rayon-s,10px);border:1px solid var(--bord,rgba(245,244,239,.2));',
    'background:transparent;color:inherit;font:inherit;font-weight:600;cursor:pointer;transition:background .18s ease,color .18s ease}',
    '.mgr-cookies-btn:hover{background:rgba(127,127,127,.12)}',
    '.mgr-cookies-btn:focus-visible{outline:2px solid var(--or,#C7AC72);outline-offset:2px}',
    '.mgr-cookies-btn.oui{background:var(--action-fond,var(--or,#C7AC72));color:var(--action-texte,var(--encre,#20211E));border-color:transparent}',
    '.mgr-cookies-btn.oui:hover{filter:brightness(1.08)}',
    '@media(max-width:480px){.mgr-cookies{left:10px;right:10px;bottom:10px;padding:1rem}}'
  ].join('');

  var bandeau = null;
  function construire() {
    if (bandeau) return bandeau;
    var style = document.createElement('style');
    style.textContent = STYLE;
    document.head.appendChild(style);

    bandeau = document.createElement('section');
    bandeau.className = 'mgr-cookies';
    bandeau.id = 'mgrCookies';
    bandeau.setAttribute('role', 'region');
    bandeau.setAttribute('aria-label', 'Cookies');
    bandeau.hidden = true;
    bandeau.innerHTML =
      '<p>Nous utilisons un cookie Google Ads, uniquement pour savoir si nos annonces mènent à des demandes de devis. ' +
      'Aucune autre mesure, aucune revente. <a href="/mentions.html#cookies">En savoir plus</a></p>' +
      '<div class="mgr-cookies-actions">' +
      '<button type="button" class="mgr-cookies-btn non" id="mgrCookiesNon">Refuser</button>' +
      '<button type="button" class="mgr-cookies-btn oui" id="mgrCookiesOui">Accepter</button>' +
      '</div>';
    document.body.appendChild(bandeau);

    bandeau.querySelector('#mgrCookiesOui').addEventListener('click', function () {
      ecrire('accepte'); fermer(); ads.charger();
    });
    bandeau.querySelector('#mgrCookiesNon').addEventListener('click', function () {
      ecrire('refuse'); fermer();
    });
    return bandeau;
  }
  function ouvrir() { construire().hidden = false; }
  function fermer() { if (bandeau) bandeau.hidden = true; }

  // Rouvrir depuis le pied de page : n'importe quel élément portant
  // data-cookies. Sans balise possible, le lien ne fait rien de visible —
  // il n'y a rien à régler.
  function brancher() {
    if (ads.actif && choix === null) ouvrir();
    var liens = document.querySelectorAll('[data-cookies]');
    for (var i = 0; i < liens.length; i++) {
      liens[i].addEventListener('click', function (e) {
        e.preventDefault();
        if (ads.actif) ouvrir();
      });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', brancher);
  else brancher();

  // Pour la console et les tests : l'état, et de quoi le remettre à zéro.
  window.mgrConsentement = {
    etat: lire,
    oublier: function () { try { localStorage.removeItem(CLE); } catch (e) {} },
    ouvrir: ouvrir
  };
})();

/* =========================================================
   NAH — JavaScript global
   Navigation mobile · Bouton flottant d'aide · Mention cookies
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Navigation mobile (burger) ---------- */
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* ---------- Bouton flottant "Besoin d'aide ?" + popup ----------
     Injecté sur toutes les pages pour garantir sa présence partout. */
  const NUMEROS = [
    { num: '3020', label: 'Harcèlement scolaire', tel: '3020' },
    { num: '3018', label: 'Violences numériques', tel: '3018' },
    { num: '119', label: 'Enfance en danger (24/24)', tel: '119' },
    { num: '112', label: 'Urgences', tel: '112' }
  ];

  // Bouton
  const fab = document.createElement('button');
  fab.className = 'aide-flottant';
  fab.type = 'button';
  fab.setAttribute('aria-haspopup', 'dialog');
  fab.setAttribute('aria-controls', 'aide-modal');
  fab.innerHTML = '<span aria-hidden="true">💬</span> Besoin d\'aide ?';

  // Modal
  const modal = document.createElement('div');
  modal.className = 'aide-modal';
  modal.id = 'aide-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'aide-modal-titre');

  const numerosHTML = NUMEROS.map(function (n) {
    return '<div class="num-line"><span><strong>' + n.num + '</strong> — ' + n.label +
      '</span><a class="btn btn--bordeaux" href="tel:' + n.tel + '">Appeler</a></div>';
  }).join('');

  modal.innerHTML =
    '<div class="aide-modal__box">' +
      '<button class="aide-modal__close" type="button" aria-label="Fermer">&times;</button>' +
      '<h2 id="aide-modal-titre">Tu n\'es pas seul·e</h2>' +
      '<p>Voici ce que tu peux faire, tout de suite. Tu peux fermer cette fenêtre à tout moment.</p>' +
      numerosHTML +
      '<p style="margin-top:18px">' +
        '<a class="btn btn--bleu" href="renseignement.html#reagir-victime">Comment réagir si je suis victime</a>' +
      '</p>' +
      '<p><a class="btn btn--vert" href="fonctionnalites.html#signalement">Faire un signalement (anonyme possible)</a></p>' +
      '<p class="form-hint">Tu peux aussi écrire à l\'équipe NAH : ' +
        '<a href="mailto:contact@nah-marceau.fr">contact@nah-marceau.fr</a></p>' +
    '</div>';

  document.body.appendChild(fab);
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.aide-modal__close');
  let lastFocus = null;

  function openModal() {
    lastFocus = document.activeElement;
    modal.classList.add('is-open');
    closeBtn.focus();
    document.addEventListener('keydown', onKeydown);
  }
  function closeModal() {
    modal.classList.remove('is-open');
    document.removeEventListener('keydown', onKeydown);
    if (lastFocus) { lastFocus.focus(); }
  }
  function onKeydown(e) {
    if (e.key === 'Escape') { closeModal(); }
  }

  fab.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  // Fermeture en 1 clic sur le fond (aucune confirmation, cf. brief)
  modal.addEventListener('click', function (e) {
    if (e.target === modal) { closeModal(); }
  });

  // Permet d'ouvrir la popup depuis un lien ailleurs : href="#besoin-aide"
  document.querySelectorAll('[data-open-aide]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
  });

  /* ---------- Mention "pas de cookies tiers" (affichée 1 fois) ---------- */
  try {
    if (!localStorage.getItem('nah-cookie-note')) {
      const note = document.createElement('div');
      note.className = 'cookie-note is-visible';
      note.innerHTML =
        '<span>Ce site n\'utilise aucun cookie de pistage ni aucun traceur publicitaire. ' +
        '<a href="confidentialite.html">En savoir plus</a></span>' +
        '<button class="btn btn--bleu" type="button">J\'ai compris</button>';
      document.body.appendChild(note);
      note.querySelector('button').addEventListener('click', function () {
        note.classList.remove('is-visible');
        try { localStorage.setItem('nah-cookie-note', '1'); } catch (err) {}
      });
    }
  } catch (err) { /* localStorage indisponible : on ignore */ }

  /* ---------- Marque le lien de nav actif ---------- */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === path) { a.setAttribute('aria-current', 'page'); }
  });
})();

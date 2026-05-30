/* =========================================================
   NAH — JavaScript global
   Navigation mobile · Mention cookies
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

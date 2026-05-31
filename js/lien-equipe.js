(function () {
  'use strict';

  const TOKEN_KEY = 'nah-member-token';
  const SITE_URL = 'https://gabriel-merlin.github.io/NAH';

  const params = new URLSearchParams(location.search);
  const urlToken = params.get('token');

  if (urlToken) {
    history.replaceState({}, '', location.pathname);
    attemptClaim(urlToken);
  } else {
    document.getElementById('auto-claim').hidden = true;
    document.getElementById('saisie-lien').removeAttribute('hidden');
    setupForm();
  }

  async function attemptClaim(token) {
    try {
      const result = await window.nahDB.rpc('claim_member_link', { p_token: token });
      handleResult(result, token);
    } catch (e) {
      show('lien-invalide');
      hide('auto-claim');
    }
  }

  function handleResult(result, token) {
    hide('auto-claim');
    hide('saisie-lien');
    if (!result) { show('lien-invalide'); return; }
    if (result.ok) {
      localStorage.setItem(TOKEN_KEY, token);
      location.href = 'equipe.html';
    } else if (result.error === 'already_claimed') {
      show('deja-utilise');
    } else {
      show('lien-invalide');
    }
  }

  function setupForm() {
    const form = document.getElementById('lien-form');
    const feedback = form.querySelector('.feedback');
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const raw = document.getElementById('lien-input').value.trim();
      if (!raw) { showFeedback(feedback, 'Colle ton lien dans le champ.', false); return; }

      // Extraire le token depuis l'URL collée ou depuis un UUID brut
      let token = null;
      try {
        const u = new URL(raw.startsWith('http') ? raw : SITE_URL + '/' + raw);
        token = u.searchParams.get('token');
      } catch (e) {
        // Peut-être un UUID brut
        token = raw.length === 36 ? raw : null;
      }

      if (!token) { showFeedback(feedback, 'Lien invalide. Copie le lien complet depuis ton email.', false); return; }

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      try {
        const result = await window.nahDB.rpc('claim_member_link', { p_token: token });
        handleResult(result, token);
      } catch (err) {
        showFeedback(feedback, 'Erreur de validation. Réessaie ou contacte l\'équipe NAH.', false);
        submitBtn.disabled = false;
      }
    });
  }

  function show(id) { const el = document.getElementById(id); if (el) el.removeAttribute('hidden'); }
  function hide(id) { const el = document.getElementById(id); if (el) el.hidden = true; }
  function showFeedback(el, text, ok) {
    el.textContent = text;
    el.className = 'feedback ' + (ok ? 'feedback--ok' : 'feedback--err');
    el.removeAttribute('hidden');
  }
})();

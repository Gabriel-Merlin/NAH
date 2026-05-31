(function () {
  'use strict';

  const TOKEN_KEY = 'nah-member-token';

  async function init() {
    // 1. Connexion Google ? (prioritaire)
    try {
      const state = await window.nahAuth.ready;
      if (state.loggedIn && state.membership && state.membership.is_member) {
        showEquipe();
        return;
      }
      // Connecté Google mais pas (encore) accepté
      if (state.loggedIn && state.membership && state.membership.known && !state.membership.is_member) {
        showAttente();
        return;
      }
    } catch (e) { /* on tente le token */ }

    // 2. Token dans l'URL → rediriger vers lien-equipe.html pour activation
    const params = new URLSearchParams(location.search);
    const urlToken = params.get('token');
    if (urlToken) {
      location.href = 'lien-equipe.html?token=' + encodeURIComponent(urlToken);
      return;
    }

    // 3. Token déjà activé en localStorage
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      try {
        const valid = await window.nahDB.rpc('verify_member_token', { p_token: token });
        if (valid) { showEquipe(); return; }
      } catch (e) { /* ignore */ }
    }

    // 4. Sinon : accès refusé + proposition de connexion Google
    showRefus();
  }

  function showEquipe() {
    document.getElementById('contenu-equipe').removeAttribute('hidden');
    document.querySelectorAll('.nav__equipe').forEach(function (el) { el.removeAttribute('hidden'); });

    const logout = document.getElementById('btn-deconnexion');
    if (logout) {
      logout.addEventListener('click', function () {
        localStorage.removeItem(TOKEN_KEY);
        if (window.nahAuth) { window.nahAuth.signOut(); }
        else { location.href = 'index.html'; }
      });
    }
  }

  function showAttente() {
    const el = document.getElementById('acces-attente');
    if (el) { el.removeAttribute('hidden'); }
    else { showRefus(); }
  }

  function showRefus() {
    const refus = document.getElementById('acces-refuse');
    if (refus) { refus.removeAttribute('hidden'); }
    localStorage.removeItem(TOKEN_KEY);
    const btn = document.getElementById('btn-google');
    if (btn) {
      btn.addEventListener('click', function () { window.nahAuth.signInGoogle(location.href); });
    }
  }

  init();
})();

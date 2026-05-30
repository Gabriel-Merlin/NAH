(function () {
  'use strict';

  const TOKEN_KEY = 'nah-member-token';

  async function init() {
    // 1. Récupère le token depuis l'URL ou le localStorage
    const params = new URLSearchParams(location.search);
    const urlToken = params.get('token');
    if (urlToken) {
      localStorage.setItem(TOKEN_KEY, urlToken);
      // Nettoie l'URL sans recharger
      history.replaceState({}, '', location.pathname);
    }

    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) { showRefus(); return; }

    // 2. Vérifie le token auprès de Supabase
    try {
      const valid = await verifyToken(token);
      if (valid) { showEquipe(); } else { showRefus(); }
    } catch (e) {
      showRefus();
    }
  }

  async function verifyToken(token) {
    if (!window.NAH_CONFIG.isConfigured) return false;
    const res = await fetch(window.NAH_CONFIG.SUPABASE_URL + '/rest/v1/rpc/verify_member_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': window.NAH_CONFIG.SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + window.NAH_CONFIG.SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({ p_token: token }),
    });
    if (!res.ok) return false;
    return await res.json(); // true ou false
  }

  function showEquipe() {
    document.getElementById('contenu-equipe').removeAttribute('hidden');
    // Montre le lien Équipe dans la nav
    const navEquipe = document.querySelector('.nav__equipe');
    if (navEquipe) navEquipe.removeAttribute('hidden');

    document.getElementById('btn-deconnexion').addEventListener('click', function () {
      localStorage.removeItem(TOKEN_KEY);
      location.href = 'index.html';
    });
  }

  function showRefus() {
    document.getElementById('acces-refuse').removeAttribute('hidden');
    localStorage.removeItem(TOKEN_KEY);
  }

  init();
})();

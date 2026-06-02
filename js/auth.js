/* =========================================================
   NAH — Authentification Google (Supabase Auth)
   ---------------------------------------------------------
   Détecte automatiquement la session Google, compare l'email
   aux candidatures acceptées et débloque l'accès équipe/admin.
   Expose window.nahAuth.ready (Promise), signInGoogle, signOut.
   ========================================================= */

window.nahAuth = (function () {
  'use strict';

  let client = null;
  let resolveReady;
  const ready = new Promise(function (r) { resolveReady = r; });

  // État par défaut (déconnecté)
  let state = { loggedIn: false, email: null, membership: { is_member: false, is_admin: false } };

  async function init() {
    if (!window.NAH_CONFIG || !window.NAH_CONFIG.isConfigured) {
      resolveReady(state);
      return;
    }
    try {
      const mod = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
      client = mod.createClient(
        window.NAH_CONFIG.SUPABASE_URL,
        window.NAH_CONFIG.SUPABASE_ANON_KEY,
        { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
      );

      const { data } = await client.auth.getSession();
      if (data && data.session) {
        await loadMembership(data.session);
      }
    } catch (e) {
      /* en cas de souci, on reste déconnecté */
    }
    revealNav();
    resolveReady(state);
  }

  async function loadMembership(session) {
    state.loggedIn = true;
    state.email = session.user && session.user.email;
    try {
      const { data, error } = await client.rpc('get_my_membership');
      if (!error && data) {
        state.membership = data;
      }
    } catch (e) { /* ignore */ }
  }

  function revealNav() {
    const isMember = !!(state.membership && state.membership.is_member);
    const isAdmin = !!(state.membership && state.membership.is_admin);

    // Onglet Équipe
    document.querySelectorAll('.nav__equipe').forEach(function (el) {
      if (isMember) { el.removeAttribute('hidden'); }
      else if (state.loggedIn) { el.setAttribute('hidden', ''); }
    });

    // Onglet Admin — synchronise aussi le cache utilisé par main.js
    document.querySelectorAll('.nav__admin').forEach(function (el) {
      if (isAdmin) { el.removeAttribute('hidden'); }
      else if (state.loggedIn) { el.setAttribute('hidden', ''); }
    });

    // Si la session Google est active, elle fait foi : on aligne le cache local.
    if (state.loggedIn) {
      try {
        if (isAdmin) { localStorage.setItem('nah-is-admin', '1'); }
        else { localStorage.removeItem('nah-is-admin'); }
      } catch (e) { /* ignore */ }
    }
  }

  async function signInGoogle(redirectTo) {
    if (!client) { alert('Connexion indisponible pour le moment.'); return; }
    await client.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: redirectTo || location.href }
    });
  }

  async function signUpWithPassword(email, password) {
    if (!client) throw new Error('Auth non initialisée');
    const { error } = await client.auth.signUp({ email, password });
    if (error && error.message !== 'User already registered') throw new Error(error.message);
  }

  async function signInWithPassword(email, password) {
    if (!client) throw new Error('Auth non initialisée');
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    if (!data.session) throw new Error('Connexion échouée, réessaie.');
    await loadMembership(data.session);
    revealNav();
    return state;
  }

  async function signOut() {
    if (client) { await client.auth.signOut(); }
    location.href = 'index.html';
  }

  // RPC authentifié (réutilise la session Google)
  async function rpc(fn, args) {
    if (!client) throw new Error('Auth non initialisée');
    const { data, error } = await client.rpc(fn, args || {});
    if (error) throw new Error(error.message);
    return data;
  }

  init();

  return {
    ready: ready,
    signInGoogle: signInGoogle,
    signUpWithPassword: signUpWithPassword,
    signInWithPassword: signInWithPassword,
    signOut: signOut,
    rpc: rpc,
    getState: function () { return state; }
  };
})();

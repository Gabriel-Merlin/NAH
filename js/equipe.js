(function () {
  'use strict';

  const TOKEN_KEY = 'nah-member-token';
  let authMode = null;   // 'google' ou 'token'
  let memberToken = null;
  let chatInterval = null;

  async function init() {
    // 1. Connexion Google ? (prioritaire)
    try {
      const state = await window.nahAuth.ready;
      if (state.loggedIn && state.membership && state.membership.is_member) {
        authMode = 'google';
        showEquipe();
        return;
      }
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
        if (valid) {
          authMode = 'token';
          memberToken = token;
          showEquipe();
          return;
        }
      } catch (e) { /* ignore */ }
    }

    // 4. Sinon : accès refusé
    showRefus();
  }

  function showEquipe() {
    document.getElementById('contenu-equipe').removeAttribute('hidden');
    document.querySelectorAll('.nav__equipe').forEach(function (el) { el.removeAttribute('hidden'); });

    const logout = document.getElementById('btn-deconnexion');
    if (logout) {
      logout.addEventListener('click', function () {
        clearInterval(chatInterval);
        localStorage.removeItem(TOKEN_KEY);
        if (window.nahAuth) { window.nahAuth.signOut(); }
        else { location.href = 'index.html'; }
      });
    }

    initChat();
  }

  /* ---- Chat de groupe ---- */
  function initChat() {
    loadMessages();
    chatInterval = setInterval(loadMessages, 20000);

    const form = document.getElementById('chat-form');
    if (!form) return;
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const textarea = form.querySelector('textarea');
      const msg = textarea.value.trim();
      if (!msg) return;
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      try {
        let ok;
        if (authMode === 'google') {
          ok = await window.nahAuth.rpc('send_message_equipe_g', { p_message: msg });
        } else {
          ok = await window.nahDB.rpc('send_message_equipe', { p_token: memberToken, p_message: msg });
        }
        if (ok) { textarea.value = ''; await loadMessages(); }
      } catch (err) { /* ignore */ }
      finally { btn.disabled = false; }
    });

    // Envoi avec Entrée (Shift+Entrée = saut de ligne)
    form.querySelector('textarea').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
    });
  }

  async function loadMessages() {
    try {
      let messages;
      if (authMode === 'google') {
        messages = await window.nahAuth.rpc('get_messages_equipe_g', {});
      } else {
        messages = await window.nahDB.rpc('get_messages_equipe', { p_token: memberToken });
      }
      renderMessages(messages || []);
    } catch (err) { /* ignore */ }
  }

  function renderMessages(messages) {
    const container = document.getElementById('chat-messages');
    if (!container) return;
    const wasAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 40;

    if (!messages.length) {
      container.innerHTML = '<p class="form-hint" style="text-align:center;padding:20px">Aucun message pour l\'instant. Sois le premier à écrire !</p>';
      return;
    }

    container.innerHTML = messages.map(function (m) {
      const d = new Date(m.created_at);
      const time = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }) +
                   ' à ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      return '<div class="chat-message">' +
        '<div class="chat-message__header">' +
          '<span class="chat-message__author">' + esc(m.prenom) + ' ' + esc(m.nom) + '</span>' +
          '<span class="chat-message__time">' + time + '</span>' +
        '</div>' +
        '<p class="chat-message__text">' + esc(m.message) + '</p>' +
        '</div>';
    }).join('');

    if (wasAtBottom) { container.scrollTop = container.scrollHeight; }
  }

  function esc(str) {
    return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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

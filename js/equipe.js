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
    initTableau();
  }

  /* ---- Tableau de bord membre ---- */
  async function callMember(fnToken, fnGoogle, args) {
    if (authMode === 'google') { return await window.nahAuth.rpc(fnGoogle, {}); }
    return await window.nahDB.rpc(fnToken, args);
  }

  async function initTableau() {
    const tabs = document.querySelectorAll('.tableau-tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('is-active'); });
        tab.classList.add('is-active');
        ['questions', 'signalements', 'candidatures'].forEach(function (name) {
          const panel = document.getElementById('tab-' + name);
          if (panel) { if (name === tab.dataset.tab) panel.removeAttribute('hidden'); else panel.hidden = true; }
        });
      });
    });

    try {
      const data = await callMember('get_member_dashboard', 'get_member_dashboard_g', { p_token: memberToken });
      if (!data || !data.ok) { return; }
      renderQuestions(data.questions || []);
      renderSignalements(data.signalements || []);
      renderCandidatures(data.candidatures || []);
    } catch (e) { /* ignore */ }
  }

  function setCount(id, n) { const el = document.getElementById(id); if (el) el.textContent = n; }

  function renderQuestions(list) {
    setCount('count-questions', list.length);
    const panel = document.getElementById('tab-questions');
    if (!panel) return;
    if (!list.length) { panel.innerHTML = '<p class="form-hint">Aucune question pour l\'instant.</p>'; return; }
    panel.innerHTML = list.map(function (q) {
      const repBloc = q.reponse
        ? '<p class="tableau-item__text" style="margin-top:8px;color:var(--vert)"><strong>Réponse :</strong> ' + esc(q.reponse) + '</p>'
        : '';
      const statut = q.is_published ? ' · <span style="color:var(--vert)">Publiée</span>' : '';
      return '<div class="tableau-item" data-qid="' + esc(q.id) + '">' +
        '<p class="tableau-item__meta">' + dateFr(q.created_at) + statut + '</p>' +
        '<p class="tableau-item__text"><strong>Q :</strong> ' + esc(q.message) + '</p>' +
        repBloc +
        '<div class="tableau-actions" style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">' +
          '<button class="btn btn--vert" data-q-action="repondre">' + (q.reponse ? 'Modifier la réponse' : 'Répondre') + '</button>' +
          '<button class="btn btn--ghost" style="color:var(--bordeaux)" data-q-action="supprimer">Supprimer</button>' +
        '</div>' +
        '<div class="q-reply-form" hidden style="margin-top:10px">' +
          '<textarea rows="2" style="width:100%;padding:10px 12px;border:2px solid var(--gris-bleu);border-radius:8px;font-family:var(--font-texte);font-size:.95rem" placeholder="Écris la réponse de l\'équipe…">' + esc(q.reponse || '') + '</textarea>' +
          '<button class="btn btn--bleu" data-q-action="envoyer" style="margin-top:8px">Publier la réponse</button>' +
        '</div>' +
        '</div>';
    }).join('');

    panel.querySelectorAll('[data-q-action]').forEach(function (btn) {
      btn.addEventListener('click', handleQuestionAction);
    });
  }

  async function handleQuestionAction(e) {
    const btn = e.currentTarget;
    const item = btn.closest('[data-qid]');
    const id = item.dataset.qid;
    const action = btn.dataset.qAction;

    if (action === 'repondre') {
      const form = item.querySelector('.q-reply-form');
      form.hidden = !form.hidden;
      return;
    }

    if (action === 'supprimer') {
      if (!confirm('Supprimer définitivement cette question ?')) return;
      btn.disabled = true;
      try {
        if (authMode === 'google') { await window.nahAuth.rpc('delete_question_g', { p_id: id }); }
        else { await window.nahDB.rpc('delete_question', { p_token: memberToken, p_id: id }); }
        await initTableau();
      } catch (err) { alert('Erreur : ' + err.message); btn.disabled = false; }
      return;
    }

    if (action === 'envoyer') {
      const textarea = item.querySelector('.q-reply-form textarea');
      const reponse = textarea.value.trim();
      if (!reponse) { alert('Écris une réponse avant de publier.'); return; }
      btn.disabled = true;
      try {
        if (authMode === 'google') { await window.nahAuth.rpc('answer_question_g', { p_id: id, p_reponse: reponse }); }
        else { await window.nahDB.rpc('answer_question', { p_token: memberToken, p_id: id, p_reponse: reponse }); }
        await initTableau();
      } catch (err) { alert('Erreur : ' + err.message); btn.disabled = false; }
    }
  }

  function renderSignalements(list) {
    setCount('count-signalements', list.length);
    const panel = document.getElementById('tab-signalements');
    if (!panel) return;
    if (!list.length) { panel.innerHTML = '<p class="form-hint">Aucun signalement pour l\'instant.</p>'; return; }
    panel.innerHTML = list.map(function (s) {
      const contact = s.contact ? ' · Contact : ' + esc(s.contact) : ' · Anonyme';
      return '<div class="tableau-item"><p class="tableau-item__meta">' + dateFr(s.created_at) + contact +
        '</p><p class="tableau-item__text">' + esc(s.message) + '</p></div>';
    }).join('');
  }

  function renderCandidatures(list) {
    setCount('count-candidatures', list.length);
    const panel = document.getElementById('tab-candidatures');
    if (!panel) return;
    if (!list.length) { panel.innerHTML = '<p class="form-hint">Aucune candidature.</p>'; return; }
    panel.innerHTML = list.map(function (c) {
      const statut = c.acceptee ? '<span style="color:var(--vert);font-weight:600">Acceptée</span>' : '<span style="color:var(--texte-sec)">En attente</span>';
      return '<div class="tableau-item"><p class="tableau-item__meta">' + dateFr(c.created_at) + ' · ' + statut +
        '</p><p class="tableau-item__text"><strong>' + esc(c.prenom) + ' ' + esc(c.nom) + '</strong> — ' +
        esc(c.classe) + ' · ' + esc(c.email) + '</p></div>';
    }).join('');
  }

  function dateFr(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) +
      ' à ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  /* ---- Chat de groupe ---- */
  function initChat() {
    loadMessages();
    // Quasi temps réel : rafraîchissement toutes les 3 secondes
    chatInterval = setInterval(loadMessages, 3000);

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

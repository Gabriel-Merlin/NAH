/* =========================================================
   NAH — Page Administration
   Accès via connexion Google (admin) ou lien-token de secours.
   ========================================================= */

(function () {
  'use strict';

  const TOKEN_KEY = 'nah-member-token';
  const ADMIN_KEY = 'nah-is-admin';
  const ACCEPT_URL = 'https://wyydagcjkbivtbuhbzon.supabase.co/functions/v1/accept-member';

  // Mode d'accès : 'google' ou 'token'
  let mode = null;
  let adminToken = null;
  let maxMembres = 16;
  let currentMembresCount = 0;

  async function init() {
    // 1. Connexion Google admin ?
    try {
      const state = await window.nahAuth.ready;
      if (state.loggedIn && state.membership && state.membership.is_admin) {
        mode = 'google';
      }
    } catch (e) { /* on tente le token */ }

    // 2. Sinon : lien-token admin
    if (!mode) {
      const params = new URLSearchParams(location.search);
      const urlToken = params.get('token');
      if (urlToken) {
        localStorage.setItem(TOKEN_KEY, urlToken);
        history.replaceState({}, '', location.pathname);
      }
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        try {
          const isAdmin = await window.nahDB.rpc('verify_admin_token', { p_token: token });
          if (isAdmin) { mode = 'token'; adminToken = token; }
        } catch (e) { /* ignore */ }
      }
    }

    if (!mode) { location.href = 'index.html'; return; }

    localStorage.setItem(ADMIN_KEY, '1');
    document.querySelectorAll('.nav__admin').forEach(function (el) { el.removeAttribute('hidden'); });

    await loadDashboard();
    setupLogout();
    setupEventForm();
    setupTirage();
    setupInvite();
  }

  // Appel RPC selon le mode (Google = fonctions _g sans token)
  async function call(fnToken, argsToken, fnGoogle, argsGoogle) {
    if (mode === 'google') {
      return await window.nahAuth.rpc(fnGoogle, argsGoogle);
    }
    return await window.nahDB.rpc(fnToken, argsToken);
  }

  /* ---------- Dashboard ---------- */
  async function loadDashboard() {
    try {
      const cfg = await window.nahDB.select('config', 'select=value&key=eq.max_membres');
      if (cfg && cfg.length) { maxMembres = parseInt(cfg[0].value, 10) || 16; }
    } catch (e) { /* garde la valeur par défaut */ }

    const data = await call(
      'get_admin_dashboard', { p_token: adminToken },
      'get_admin_dashboard_g', {}
    );
    if (!data || !data.ok) { showError(data && data.error); return; }
    currentMembresCount = (data.stats && data.stats.total_membres) || 0;
    renderStats(data.stats);
    renderMembres(data.membres || []);
    renderEnAttente(data.en_attente || []);
    updateTirageHint();
    await loadEvents();
  }

  function showError(msg) {
    const el = document.getElementById('admin-error');
    if (el) { el.textContent = msg || 'Erreur inconnue'; el.removeAttribute('hidden'); }
  }

  /* ---------- Stats ---------- */
  function renderStats(stats) {
    const grid = document.getElementById('stats-grid');
    if (!grid || !stats) return;
    grid.innerHTML =
      stat((stats.total_membres || 0) + ' / ' + maxMembres, 'Places utilisées') +
      stat(stats.en_attente, 'Candidatures en attente') +
      stat(stats.total_signalements, 'Signalements') +
      stat(stats.total_questions, 'Questions anonymes');
  }
  function stat(num, label) {
    return '<div class="admin-stat"><span class="admin-stat__num">' + (num || 0) +
      '</span><span class="admin-stat__label">' + label + '</span></div>';
  }

  /* ---------- Membres ---------- */
  function renderMembres(membres) {
    const tbody = document.getElementById('membres-tbody');
    if (!tbody) return;
    if (!membres.length) { tbody.innerHTML = '<tr><td colspan="5">Aucun membre.</td></tr>'; return; }
    tbody.innerHTML = membres.map(function (m) {
      const badge = m.is_admin ? ' <span style="color:var(--bleu);font-weight:600">[admin]</span>' : '';
      const actions =
        (m.is_admin
          ? '<button class="btn btn--ghost" data-action="retrograder" data-email="' + esc(m.email) + '">Rétrograder</button>'
          : '<button class="btn btn--bleu" data-action="promouvoir" data-email="' + esc(m.email) + '">Promouvoir admin</button>') +
          '<button class="btn btn--ghost" data-action="regen-lien" data-email="' + esc(m.email) + '">Régénérer lien</button>' +
          '<button class="btn btn--ghost" style="color:var(--bordeaux)" data-action="retirer" data-email="' + esc(m.email) + '">Retirer</button>';
      return '<tr>' +
        '<td>' + esc(m.prenom) + ' ' + esc(m.nom) + badge + '</td>' +
        '<td>' + esc(m.classe) + '</td>' +
        '<td>' + esc(m.email) + '</td>' +
        '<td>' + formatDate(m.created_at) + '</td>' +
        '<td class="actions">' + actions + '</td></tr>';
    }).join('');
    tbody.querySelectorAll('[data-action]').forEach(function (btn) {
      btn.addEventListener('click', handleMembreAction);
    });
  }

  async function handleMembreAction(e) {
    const btn = e.currentTarget;
    const action = btn.dataset.action;
    const email = btn.dataset.email;
    btn.disabled = true;
    try {
      if (action === 'promouvoir') {
        await call('admin_set_role', { p_admin_token: adminToken, p_target_email: email, p_is_admin: true },
                   'admin_set_role_g', { p_email: email, p_is_admin: true });
      } else if (action === 'retrograder') {
        await call('admin_set_role', { p_admin_token: adminToken, p_target_email: email, p_is_admin: false },
                   'admin_set_role_g', { p_email: email, p_is_admin: false });
      } else if (action === 'retirer') {
        if (!confirm('Retirer définitivement ' + email + ' de l\'équipe ?')) { btn.disabled = false; return; }
        await call('admin_remove_member', { p_admin_token: adminToken, p_target_email: email },
                   'admin_remove_member_g', { p_email: email });
      } else if (action === 'regen-lien') {
        const result = await call(
          'admin_regenerate_member_link', { p_admin_token: adminToken, p_target_email: email },
          'admin_regenerate_member_link_g', { p_email: email }
        );
        if (result && result.ok) {
          const newLink = 'https://gabriel-merlin.github.io/NAH/lien-equipe.html?token=' + result.token;
          prompt('Nouveau lien d\'accès pour ' + email + ' (copie-le et envoie-le) :', newLink);
        } else {
          alert('Erreur : ' + (result && result.error || 'Impossible de régénérer le lien'));
        }
        btn.disabled = false;
        return;
      }
      await loadDashboard();
    } catch (err) {
      alert('Erreur : ' + err.message);
      btn.disabled = false;
    }
  }

  /* ---------- Candidatures en attente ---------- */
  function renderEnAttente(liste) {
    const tbody = document.getElementById('attente-tbody');
    if (!tbody) return;
    const plafondAtteint = currentMembresCount >= maxMembres;
    if (!liste.length) { tbody.innerHTML = '<tr><td colspan="5">Aucune candidature en attente.</td></tr>'; return; }
    tbody.innerHTML = liste.map(function (c) {
      const btnAccepter = plafondAtteint
        ? '<button class="btn btn--ghost" disabled title="Plafond de ' + maxMembres + ' membres atteint">Accepter</button>'
        : '<button class="btn btn--vert" data-action="accepter" data-token="' + esc(c.token) + '" data-email="' + esc(c.email) + '">Accepter</button>';
      return '<tr>' +
        '<td>' + esc(c.prenom) + ' ' + esc(c.nom) + '</td>' +
        '<td>' + esc(c.classe) + '</td>' +
        '<td>' + esc(c.email) + '</td>' +
        '<td>' + formatDate(c.created_at) + '</td>' +
        '<td class="actions">' + btnAccepter + '</td></tr>';
    }).join('');
    tbody.querySelectorAll('[data-action="accepter"]').forEach(function (btn) {
      btn.addEventListener('click', handleAccepter);
    });
  }

  async function handleAccepter(e) {
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      // La fonction edge accepte la candidature ET envoie l'email de bienvenue,
      // quel que soit le mode d'accès (Google ou token).
      const res = await fetch(ACCEPT_URL + '?token=' + encodeURIComponent(btn.dataset.token), { method: 'GET' });
      if (!res.ok) { throw new Error('HTTP ' + res.status); }
      await loadDashboard();
    } catch (err) {
      alert('Erreur lors de l\'acceptation : ' + err.message);
      btn.disabled = false;
    }
  }

  /* ---------- Événements ---------- */
  async function loadEvents() {
    try {
      const events = await window.nahDB.select('events', 'select=*&order=date.asc');
      renderEvents(events || []);
    } catch (e) {
      const tbody = document.getElementById('events-tbody');
      if (tbody) tbody.innerHTML = '<tr><td colspan="4">Erreur de chargement.</td></tr>';
    }
  }

  const MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin',
    'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

  function renderEvents(events) {
    const tbody = document.getElementById('events-tbody');
    if (!tbody) return;
    if (!events.length) { tbody.innerHTML = '<tr><td colspan="4">Aucun événement.</td></tr>'; return; }
    tbody.innerHTML = events.map(function (ev) {
      const d = new Date(ev.date);
      const dateStr = d.getDate() + ' ' + MOIS[d.getMonth()] + ' ' + d.getFullYear();
      return '<tr>' +
        '<td>' + dateStr + '</td>' +
        '<td>' + esc(ev.titre) + '</td>' +
        '<td>' + esc(ev.description || '') + (ev.lieu ? ' — ' + esc(ev.lieu) : '') + '</td>' +
        '<td><button class="btn btn--ghost" style="color:var(--bordeaux)" data-action="suppr-event" data-id="' + esc(ev.id) + '">Supprimer</button></td>' +
        '</tr>';
    }).join('');
    tbody.querySelectorAll('[data-action="suppr-event"]').forEach(function (btn) {
      btn.addEventListener('click', handleDeleteEvent);
    });
  }

  async function handleDeleteEvent(e) {
    const btn = e.currentTarget;
    const id = btn.dataset.id;
    if (!confirm('Supprimer cet événement ?')) return;
    btn.disabled = true;
    try {
      await call('admin_delete_event', { p_admin_token: adminToken, p_event_id: id },
                 'admin_delete_event_g', { p_event_id: id });
      await loadEvents();
    } catch (err) {
      alert('Erreur : ' + err.message);
      btn.disabled = false;
    }
  }

  /* ---------- Formulaire ajout événement ---------- */
  function setupEventForm() {
    const form = document.getElementById('event-form');
    if (!form) return;
    const feedback = form.querySelector('.feedback');
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const date = form.querySelector('[name="date"]').value;
      const titre = form.querySelector('[name="titre"]').value.trim();
      const description = form.querySelector('[name="description"]').value.trim();
      const lieu = form.querySelector('[name="lieu"]').value.trim();
      if (!date || !titre) { showFeedback(feedback, 'La date et le titre sont obligatoires.', false); return; }
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      try {
        await call('admin_add_event',
          { p_admin_token: adminToken, p_date: date, p_titre: titre, p_description: description || '', p_lieu: lieu || '' },
          'admin_add_event_g',
          { p_date: date, p_titre: titre, p_description: description || '', p_lieu: lieu || '' });
        form.reset();
        showFeedback(feedback, 'Événement ajouté.', true);
        await loadEvents();
      } catch (err) {
        showFeedback(feedback, 'Erreur : ' + err.message, false);
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  /* ---------- Tirage au sort ---------- */
  function updateTirageHint() {
    const hint = document.getElementById('tirage-hint');
    const input = document.getElementById('tirage-places');
    if (hint) hint.textContent = currentMembresCount + ' membre(s) accepté(s) sur ' + maxMembres + ' place(s).';
    if (input) input.value = maxMembres;
  }

  function setupTirage() {
    const btnSave = document.getElementById('btn-save-max');
    const btnTirage = document.getElementById('btn-tirage');
    const feedback = document.getElementById('tirage-feedback');
    const input = document.getElementById('tirage-places');
    if (!btnTirage) return;

    btnSave.addEventListener('click', async function () {
      const n = parseInt(input.value, 10);
      if (!n || n < 1) { showFeedback(feedback, 'Nombre invalide.', false); return; }
      btnSave.disabled = true;
      try {
        await call('admin_set_max_membres', { p_admin_token: adminToken, p_max: n },
                   'admin_set_max_membres_g', { p_max: n });
        maxMembres = n;
        updateTirageHint();
        renderStats({ total_membres: currentMembresCount, en_attente: 0, total_signalements: 0, total_questions: 0 });
        showFeedback(feedback, 'Nombre de places mis à jour : ' + n + '.', true);
        await loadDashboard();
      } catch (err) {
        showFeedback(feedback, 'Erreur : ' + err.message, false);
      } finally { btnSave.disabled = false; }
    });

    btnTirage.addEventListener('click', async function () {
      const n = parseInt(input.value, 10);
      if (!n || n < 1) { showFeedback(feedback, 'Nombre invalide.', false); return; }
      const restant = n - currentMembresCount;
      if (restant <= 0) { showFeedback(feedback, 'Le plafond est déjà atteint (' + currentMembresCount + '/' + n + ').', false); return; }
      if (!confirm('Lancer le tirage au sort pour sélectionner ' + restant + ' candidat(s) au hasard parmi les candidatures en attente ?')) return;
      btnTirage.disabled = true;
      showFeedback(feedback, 'Tirage en cours…', true);
      try {
        const result = await call('admin_tirage_au_sort', { p_admin_token: adminToken, p_nombre: n },
                                  'admin_tirage_au_sort_g', { p_nombre: n });
        if (!result || !result.ok) { throw new Error(result && result.error || 'Erreur inconnue'); }
        const selected = result.selected || [];
        showFeedback(feedback, selected.length + ' candidat(s) sélectionné(s). Envoi des emails de bienvenue…', true);
        // Envoyer les emails de bienvenue un par un via l'Edge Function
        for (var i = 0; i < selected.length; i++) {
          try {
            await fetch(ACCEPT_URL + '?token=' + encodeURIComponent(selected[i].token), { method: 'GET' });
          } catch (e) { /* email optionnel, on continue */ }
        }
        showFeedback(feedback, '🎉 Tirage terminé ! ' + selected.length + ' membre(s) accepté(s) et notifié(s).', true);
        await loadDashboard();
      } catch (err) {
        showFeedback(feedback, 'Erreur : ' + err.message, false);
      } finally { btnTirage.disabled = false; }
    });
  }

  /* ---------- Lien de transfert admin ---------- */
  function setupInvite() {
    const btn = document.getElementById('btn-gen-invite');
    const resultDiv = document.getElementById('invite-result');
    const linkInput = document.getElementById('invite-link');
    const copyBtn = document.getElementById('btn-copy-invite');
    if (!btn) return;

    btn.addEventListener('click', async function () {
      btn.disabled = true;
      try {
        const result = await call('admin_generate_invite', { p_admin_token: adminToken },
                                  'admin_generate_invite_g', {});
        if (!result || !result.ok) { throw new Error(result && result.error || 'Erreur'); }
        const link = location.origin + location.pathname.replace('admin.html', '') + 'transfert.html?token=' + result.token;
        linkInput.value = link;
        resultDiv.removeAttribute('hidden');
      } catch (err) {
        alert('Erreur : ' + err.message);
      } finally {
        btn.disabled = false;
      }
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        linkInput.select();
        navigator.clipboard.writeText(linkInput.value).then(function () {
          copyBtn.textContent = 'Copié !';
          setTimeout(function () { copyBtn.textContent = 'Copier'; }, 2000);
        });
      });
    }
  }

  /* ---------- Déconnexion ---------- */
  function setupLogout() {
    const btn = document.getElementById('btn-deconnexion');
    if (!btn) return;
    btn.addEventListener('click', function () {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(ADMIN_KEY);
      if (mode === 'google' && window.nahAuth) { window.nahAuth.signOut(); }
      else { location.href = 'index.html'; }
    });
  }

  /* ---------- Utilitaires ---------- */
  function esc(str) {
    return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    return d.getDate() + ' ' + MOIS[d.getMonth()] + ' ' + d.getFullYear();
  }
  function showFeedback(el, text, ok) {
    if (!el) return;
    el.textContent = text;
    el.className = 'feedback ' + (ok ? 'feedback--ok' : 'feedback--err');
    el.removeAttribute('hidden');
  }

  init();
})();

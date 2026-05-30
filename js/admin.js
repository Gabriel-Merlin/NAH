/* =========================================================
   NAH — Page Administration
   Vérifie le token admin via Supabase RPC, charge le dashboard
   et gère les actions (membres, candidatures, événements).
   ========================================================= */

(function () {
  'use strict';

  const TOKEN_KEY = 'nah-member-token';
  const ADMIN_KEY = 'nah-is-admin';
  const ACCEPT_URL = 'https://wyydagcjkbivtbuhbzon.supabase.co/functions/v1/accept-member';

  let adminToken = null;

  /* =======================================================
     Init
     ======================================================= */
  async function init() {
    // Récupère le token depuis l'URL ou localStorage
    const params = new URLSearchParams(location.search);
    const urlToken = params.get('token');
    if (urlToken) {
      localStorage.setItem(TOKEN_KEY, urlToken);
      history.replaceState({}, '', location.pathname);
    }

    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) { redirect(); return; }

    // Vérifie si admin
    try {
      const isAdmin = await window.nahDB.rpc('verify_admin_token', { p_token: token });
      if (!isAdmin) { redirect(); return; }
    } catch (e) { redirect(); return; }

    adminToken = token;
    localStorage.setItem(ADMIN_KEY, '1');
    document.querySelectorAll('.nav__admin').forEach(function (el) { el.removeAttribute('hidden'); });

    await loadDashboard();
    setupLogout();
    setupEventForm();
  }

  function redirect() {
    location.href = 'index.html';
  }

  /* =======================================================
     Chargement dashboard
     ======================================================= */
  async function loadDashboard() {
    const data = await window.nahDB.rpc('get_admin_dashboard', { p_token: adminToken });
    if (!data || !data.ok) { showError(data && data.error); return; }

    renderStats(data.stats);
    renderMembres(data.membres || []);
    renderEnAttente(data.en_attente || []);
    await loadEvents();
  }

  function showError(msg) {
    const el = document.getElementById('admin-error');
    if (el) { el.textContent = msg || 'Erreur inconnue'; el.removeAttribute('hidden'); }
  }

  /* =======================================================
     Stats
     ======================================================= */
  function renderStats(stats) {
    const grid = document.getElementById('stats-grid');
    if (!grid || !stats) return;
    grid.innerHTML =
      stat(stats.total_membres, 'Membres actifs') +
      stat(stats.en_attente, 'Candidatures en attente') +
      stat(stats.total_signalements, 'Signalements') +
      stat(stats.total_questions, 'Questions anonymes');
  }

  function stat(num, label) {
    return '<div class="admin-stat"><span class="admin-stat__num">' + (num || 0) +
      '</span><span class="admin-stat__label">' + label + '</span></div>';
  }

  /* =======================================================
     Membres
     ======================================================= */
  function renderMembres(membres) {
    const tbody = document.getElementById('membres-tbody');
    if (!tbody) return;
    if (!membres.length) {
      tbody.innerHTML = '<tr><td colspan="5">Aucun membre.</td></tr>';
      return;
    }
    tbody.innerHTML = membres.map(function (m) {
      const isAdminBadge = m.is_admin ? ' <span style="color:var(--bleu);font-weight:600">[admin]</span>' : '';
      return '<tr>' +
        '<td>' + esc(m.prenom) + ' ' + esc(m.nom) + isAdminBadge + '</td>' +
        '<td>' + esc(m.classe) + '</td>' +
        '<td>' + esc(m.email) + '</td>' +
        '<td>' + formatDate(m.created_at) + '</td>' +
        '<td class="actions">' +
          (m.is_admin
            ? '<button class="btn btn--ghost" data-action="retrograder" data-email="' + esc(m.email) + '">Rétrograder</button>'
            : '<button class="btn btn--bleu" data-action="promouvoir" data-email="' + esc(m.email) + '">Promouvoir admin</button>') +
          '<button class="btn btn--ghost" style="color:var(--bordeaux)" data-action="retirer" data-email="' + esc(m.email) + '">Retirer</button>' +
        '</td></tr>';
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
        await window.nahDB.rpc('admin_set_role', { p_admin_token: adminToken, p_target_email: email, p_is_admin: true });
      } else if (action === 'retrograder') {
        await window.nahDB.rpc('admin_set_role', { p_admin_token: adminToken, p_target_email: email, p_is_admin: false });
      } else if (action === 'retirer') {
        if (!confirm('Retirer ' + email + ' de l\'équipe ?')) { btn.disabled = false; return; }
        await window.nahDB.rpc('admin_remove_member', { p_admin_token: adminToken, p_target_email: email });
      }
      await loadDashboard();
    } catch (err) {
      alert('Erreur : ' + err.message);
      btn.disabled = false;
    }
  }

  /* =======================================================
     Candidatures en attente
     ======================================================= */
  function renderEnAttente(liste) {
    const tbody = document.getElementById('attente-tbody');
    if (!tbody) return;

    if (!liste.length) {
      tbody.innerHTML = '<tr><td colspan="5">Aucune candidature en attente.</td></tr>';
      return;
    }

    tbody.innerHTML = liste.map(function (c) {
      return '<tr>' +
        '<td>' + esc(c.prenom) + ' ' + esc(c.nom) + '</td>' +
        '<td>' + esc(c.classe) + '</td>' +
        '<td>' + esc(c.email) + '</td>' +
        '<td>' + formatDate(c.created_at) + '</td>' +
        '<td class="actions">' +
          '<button class="btn btn--vert" data-action="accepter" data-token="' + esc(c.token) + '" data-email="' + esc(c.email) + '">Accepter</button>' +
        '</td></tr>';
    }).join('');

    tbody.querySelectorAll('[data-action="accepter"]').forEach(function (btn) {
      btn.addEventListener('click', handleAccepter);
    });
  }

  async function handleAccepter(e) {
    const btn = e.currentTarget;
    const memberToken = btn.dataset.token;
    btn.disabled = true;

    try {
      const res = await fetch(ACCEPT_URL + '?token=' + encodeURIComponent(memberToken), {
        method: 'GET',
        headers: {
          'apikey': window.NAH_CONFIG.SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + adminToken
        }
      });
      if (!res.ok) { throw new Error('HTTP ' + res.status); }
      await loadDashboard();
    } catch (err) {
      alert('Erreur lors de l\'acceptation : ' + err.message);
      btn.disabled = false;
    }
  }

  /* =======================================================
     Événements
     ======================================================= */
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
    if (!events.length) {
      tbody.innerHTML = '<tr><td colspan="4">Aucun événement.</td></tr>';
      return;
    }
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
      await window.nahDB.rpc('admin_delete_event', { p_admin_token: adminToken, p_event_id: id });
      await loadEvents();
    } catch (err) {
      alert('Erreur : ' + err.message);
      btn.disabled = false;
    }
  }

  /* =======================================================
     Formulaire ajout événement
     ======================================================= */
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

      if (!date || !titre) {
        showFeedback(feedback, 'La date et le titre sont obligatoires.', false);
        return;
      }
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      try {
        await window.nahDB.rpc('admin_add_event', {
          p_admin_token: adminToken,
          p_date: date,
          p_titre: titre,
          p_description: description || '',
          p_lieu: lieu || ''
        });
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

  /* =======================================================
     Déconnexion
     ======================================================= */
  function setupLogout() {
    const btn = document.getElementById('btn-deconnexion');
    if (btn) {
      btn.addEventListener('click', function () {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(ADMIN_KEY);
        location.href = 'index.html';
      });
    }
  }

  /* =======================================================
     Utilitaires
     ======================================================= */
  function esc(str) {
    return String(str || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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

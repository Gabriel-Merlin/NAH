/* =========================================================
   NAH — Logique de la page Fonctionnalités
   Question anonyme · Sondage · Calendrier · Signalement
   ========================================================= */

(function () {
  'use strict';

  /* =======================================================
     1 — QUESTION ANONYME
     ======================================================= */
  const qForm = document.getElementById('question-form');
  if (qForm) {
    const textarea = qForm.querySelector('textarea');
    const counter = qForm.querySelector('.char-count');
    const feedback = qForm.querySelector('.feedback');
    const MAX = 200;

    function updateCount() {
      const n = textarea.value.length;
      counter.textContent = n + ' / ' + MAX;
    }
    textarea.setAttribute('maxlength', String(MAX));
    textarea.addEventListener('input', updateCount);
    updateCount();

    qForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const msg = textarea.value.trim();
      if (msg.length < 3) {
        showFeedback(feedback, 'Écris ta question avant d\'envoyer.', false);
        return;
      }
      const submitBtn = qForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      try {
        await window.nahDB.insert('questions_anonymes', { message: msg });
        qForm.reset();
        updateCount();
        showFeedback(feedback,
          'Merci, ta question a bien été envoyée de façon anonyme. ' +
          'L\'équipe NAH la lira et pourra y répondre publiquement.', true);
      } catch (err) {
        showFeedback(feedback,
          'Oups, l\'envoi a échoué. Réessaie plus tard ou écris à l\'équipe NAH.', false);
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  /* =======================================================
     1bis — RÉPONSES PUBLIÉES DE L'ÉQUIPE
     ======================================================= */
  const reponsesListe = document.getElementById('reponses-liste');
  if (reponsesListe) {
    const searchInput = document.getElementById('reponses-recherche');
    const aucunMsg = document.getElementById('reponses-aucun');
    let toutesLesReponses = [];

    function renderReponses(rows) {
      if (!rows.length) {
        reponsesListe.innerHTML = '';
        if (aucunMsg) aucunMsg.removeAttribute('hidden');
        return;
      }
      if (aucunMsg) aucunMsg.hidden = true;
      reponsesListe.innerHTML = rows.map(function (r) {
        return '<div style="border-left:4px solid var(--vert);padding:10px 14px;background:var(--gris-bleu);border-radius:8px;margin-bottom:12px">' +
          '<p style="margin:0 0 6px"><strong>Q :</strong> ' + escapeHTML(r.message) + '</p>' +
          '<p style="margin:0;color:var(--vert)"><strong>Réponse NAH :</strong> ' + escapeHTML(r.reponse) + '</p>' +
          '</div>';
      }).join('');
    }

    function normalise(s) {
      return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function filtrer() {
      const q = normalise(searchInput ? searchInput.value.trim() : '');
      if (!q) { renderReponses(toutesLesReponses); return; }
      // Découpe la recherche en mots (on ignore les mots très courts comme "de", "la", "l'")
      const mots = q.split(/[^a-z0-9]+/).filter(function (m) { return m.length > 1; });
      if (!mots.length) { renderReponses(toutesLesReponses); return; }

      // Une réponse correspond si TOUS les mots cherchés sont présents (question ou réponse)
      const correspondances = toutesLesReponses.map(function (r) {
        const texte = normalise(r.message) + ' ' + normalise(r.reponse);
        let score = 0;
        for (var i = 0; i < mots.length; i++) {
          if (texte.indexOf(mots[i]) === -1) { return null; }
          // Bonus si le mot est dans la question elle-même
          if (normalise(r.message).indexOf(mots[i]) !== -1) { score++; }
        }
        return { r: r, score: score };
      }).filter(Boolean);

      // Trie par pertinence (plus de mots trouvés dans la question = plus haut)
      correspondances.sort(function (a, b) { return b.score - a.score; });
      renderReponses(correspondances.map(function (c) { return c.r; }));
    }

    window.nahDB.rpc('get_published_questions', {})
      .then(function (rows) {
        if (rows && rows.length) {
          toutesLesReponses = rows;
          renderReponses(toutesLesReponses);
        }
      })
      .catch(function () { /* on garde l'exemple statique */ });

    if (searchInput) { searchInput.addEventListener('input', filtrer); }
  }

  /* =======================================================
     2 — SONDAGE
     ======================================================= */
  const pollRoot = document.getElementById('sondage');
  if (pollRoot) {
    initPoll(pollRoot);
  }

  async function initPoll(root) {
    const VOTE_KEY = 'nah-poll-voted';

    // Sondage par défaut (mode démo / si Supabase non configuré).
    // En production, il est chargé depuis la table `sondages` (is_active = true).
    let poll = {
      id: 'demo',
      question: 'Penses-tu que le harcèlement est bien pris au sérieux dans ton lycée ?',
      options: [
        { id: 'a', label: 'Oui, tout à fait', votes: 0 },
        { id: 'b', label: 'Plutôt oui', votes: 0 },
        { id: 'c', label: 'Plutôt non', votes: 0 },
        { id: 'd', label: 'Non, pas du tout', votes: 0 }
      ]
    };

    // Tentative de chargement depuis Supabase
    try {
      const rows = await window.nahDB.select('sondages',
        'select=*&is_active=eq.true&limit=1');
      if (rows && rows.length) {
        const r = rows[0];
        poll = {
          id: r.id,
          question: r.question,
          options: r.options // jsonb [{id,label,votes}]
        };
      }
    } catch (err) { /* on garde le sondage par défaut */ }

    const alreadyVoted = getVoted(VOTE_KEY, poll.id);
    renderPoll(root, poll, alreadyVoted, VOTE_KEY);
  }

  function getVoted(key, pollId) {
    try {
      const voted = JSON.parse(localStorage.getItem(key) || '{}');
      return !!voted[pollId];
    } catch (e) { return false; }
  }
  function setVoted(key, pollId) {
    try {
      const voted = JSON.parse(localStorage.getItem(key) || '{}');
      voted[pollId] = true;
      localStorage.setItem(key, JSON.stringify(voted));
    } catch (e) {}
  }

  function renderPoll(root, poll, showResults, voteKey) {
    const total = poll.options.reduce(function (s, o) { return s + (o.votes || 0); }, 0);

    let html = '<h3>' + poll.question + '</h3>';

    if (showResults) {
      poll.options.forEach(function (o) {
        const pct = total ? Math.round((o.votes || 0) / total * 100) : 0;
        html += '<div class="poll-bar"><div class="poll-bar__fill" style="width:' + pct + '%"></div>' +
          '<span class="poll-bar__label"><span>' + o.label + '</span><span>' + pct + '%</span></span></div>';
      });
      html += '<p class="form-hint">' + total + ' vote' + (total > 1 ? 's' : '') +
        ' · Merci d\'avoir participé !</p>';
    } else {
      html += '<p class="form-hint">Vote anonyme · 1 seul vote par personne.</p>';
      poll.options.forEach(function (o) {
        html += '<div class="poll-option"><button class="btn btn--ghost" type="button" data-opt="' +
          o.id + '">' + o.label + '</button></div>';
      });
    }
    root.innerHTML = html;

    if (!showResults) {
      root.querySelectorAll('[data-opt]').forEach(function (btn) {
        btn.addEventListener('click', async function () {
          const optId = btn.getAttribute('data-opt');
          root.querySelectorAll('[data-opt]').forEach(function (b) { b.disabled = true; });
          try {
            await window.nahDB.rpc('vote_sondage', { p_poll: poll.id, p_option: optId });
          } catch (err) { /* on affiche quand même les résultats locaux */ }
          // Mise à jour locale immédiate
          const opt = poll.options.find(function (o) { return o.id === optId; });
          if (opt) { opt.votes = (opt.votes || 0) + 1; }
          setVoted(voteKey, poll.id);
          renderPoll(root, poll, true, voteKey);
        });
      });
    }
  }

  /* =======================================================
     3 — CALENDRIER (chargé depuis Supabase table events)
     ======================================================= */
  const calRoot = document.getElementById('calendrier-liste');
  if (calRoot) {
    window.nahDB.select('events', 'select=*&order=date.asc')
      .then(function (events) {
        if (events && events.length) { renderEvents(calRoot, events); }
        else { calRoot.innerHTML = '<p>Aucun événement programmé pour l\'instant. Reviens bientôt !</p>'; }
      })
      .catch(function () {
        calRoot.innerHTML = '<p>Le calendrier n\'a pas pu être chargé pour le moment.</p>';
      });
  }

  const MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin',
    'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

  function renderEvents(root, events) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const upcoming = events
      .map(function (e) { return Object.assign({}, e, { _d: new Date(e.date) }); })
      .filter(function (e) { return e._d >= now; })
      .sort(function (a, b) { return a._d - b._d; });

    if (!upcoming.length) {
      root.innerHTML = '<p>Aucun événement programmé pour l\'instant. Reviens bientôt !</p>';
      return;
    }

    root.innerHTML = upcoming.map(function (e) {
      const d = e._d;
      return '<div class="event-card">' +
        '<div class="event-date"><span class="jour">' + d.getDate() + '</span>' +
        '<span class="mois">' + MOIS[d.getMonth()] + '</span></div>' +
        '<div class="event-info"><h3>' + escapeHTML(e.titre) + '</h3>' +
        '<p>' + escapeHTML(e.description || '') + '</p>' +
        (e.lieu ? '<p class="lieu">📍 ' + escapeHTML(e.lieu) + '</p>' : '') +
        '</div></div>';
    }).join('');
  }

  /* =======================================================
     4 — SIGNALEMENT (formulaire, anonyme ou identifié)
     ======================================================= */
  const sigForm = document.getElementById('signalement-form');
  if (sigForm) {
    const feedback = sigForm.querySelector('.feedback');
    sigForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const msg = sigForm.querySelector('[name="message"]').value.trim();
      const contact = sigForm.querySelector('[name="contact"]').value.trim();
      if (msg.length < 3) {
        showFeedback(feedback, 'Décris la situation avant d\'envoyer.', false);
        return;
      }
      const submitBtn = sigForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      try {
        await window.nahDB.insert('signalements', {
          message: msg,
          contact: contact || null
        });
        sigForm.reset();
        showFeedback(feedback,
          'Ton signalement a été transmis à l\'équipe NAH. ' +
          (contact ? 'Nous te recontacterons rapidement.' :
            'Tu peux revenir ici quand tu veux.'), true);
      } catch (err) {
        showFeedback(feedback,
          'L\'envoi a échoué. En cas d\'urgence, appelle le 3020 ou le 119.', false);
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  /* =======================================================
     5 — REJOINDRE NAH (candidature à l'équipe)
     ======================================================= */
  const joinForm = document.getElementById('rejoindre-form');
  if (joinForm) {
    const feedback = joinForm.querySelector('.feedback');
    joinForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const password = joinForm.querySelector('[name="password"]').value;
      const data = {
        nom: joinForm.querySelector('[name="nom"]').value.trim(),
        prenom: joinForm.querySelector('[name="prenom"]').value.trim(),
        classe: joinForm.querySelector('[name="classe"]').value.trim(),
        telephone: joinForm.querySelector('[name="telephone"]').value.trim() || null,
        email: joinForm.querySelector('[name="email"]').value.trim()
      };
      if (!data.nom || !data.prenom || !data.classe || !data.email) {
        showFeedback(feedback, 'Merci de remplir au moins nom, prénom, classe et e-mail.', false);
        return;
      }
      if (data.email.indexOf('@') === -1) {
        showFeedback(feedback, 'Vérifie ton adresse e-mail.', false);
        return;
      }
      if (!password || password.length < 6) {
        showFeedback(feedback, 'Le mot de passe doit faire au moins 6 caractères.', false);
        return;
      }
      const submitBtn = joinForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      try {
        try { await window.nahAuth.signUpWithPassword(data.email, password); } catch (e) { /* compte déjà existant ou auth non dispo */ }
        await window.nahDB.insert('candidatures', data);
        joinForm.reset();
        showFeedback(feedback,
          'Génial ! Ta candidature est enregistrée. L\'équipe NAH te recontactera très vite.', true);
      } catch (err) {
        // 409 = email déjà présent (contrainte d'unicité)
        if (err && /409/.test(err.message)) {
          showFeedback(feedback,
            'Tu as déjà envoyé une demande avec cette adresse e-mail : ' +
            'elle est déjà en cours de traitement. L\'équipe NAH te recontactera.', false);
        } else {
          showFeedback(feedback,
            'L\'envoi a échoué. Réessaie plus tard ou écris à l\'équipe NAH.', false);
        }
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  /* =======================================================
     6 — CONNEXION EMAIL / MOT DE PASSE
     ======================================================= */
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    const loginFeedback = loginForm.querySelector('.feedback');
    loginForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const email = loginForm.querySelector('[name="email"]').value.trim();
      const password = loginForm.querySelector('[name="password"]').value;
      if (!email || !password) {
        showFeedback(loginFeedback, 'Remplis ton email et ton mot de passe.', false);
        return;
      }
      const submitBtn = loginForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      try {
        const updatedState = await window.nahAuth.signInWithPassword(email, password);
        if (updatedState.membership && updatedState.membership.is_member) {
          location.href = 'equipe.html';
        } else {
          showFeedback(loginFeedback,
            'Ton compte existe mais ta candidature n\'a pas encore été acceptée. On te recontactera bientôt.', false);
        }
      } catch (err) {
        showFeedback(loginFeedback, 'Email ou mot de passe incorrect.', false);
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  /* =======================================================
     Utilitaires
     ======================================================= */
  function showFeedback(el, text, ok) {
    if (!el) { return; }
    el.textContent = text;
    el.className = 'feedback ' + (ok ? 'feedback--ok' : 'feedback--err');
    el.removeAttribute('hidden');
    el.setAttribute('role', 'status');
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
})();

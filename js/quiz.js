/* =========================================================
   NAH — Quiz "Réagis-tu bien face au harcèlement ?"
   Front uniquement. Score envoyé (optionnel) à Supabase pour
   des statistiques agrégées et anonymes.
   ========================================================= */

(function () {
  'use strict';

  const root = document.getElementById('quiz');
  if (!root) { return; }

  // Chaque option a une valeur : 2 = très bonne réaction, 1 = correcte, 0 = à éviter.
  const QUESTIONS = [
    {
      q: 'À la cantine, un groupe se moque tous les jours d\'un élève sur son physique. Toi tu…',
      options: [
        { t: 'Tu ris avec eux pour ne pas être visé à ton tour', v: 0 },
        { t: 'Tu ne dis rien mais tu vas voir l\'élève après pour lui parler', v: 1 },
        { t: 'Tu en parles à un adulte de confiance et tu soutiens l\'élève', v: 2 }
      ]
    },
    {
      q: 'Tu reçois une capture d\'écran d\'une photo gênante d\'un camarade. Tu…',
      options: [
        { t: 'Tu la transfères à tes potes, c\'est juste pour rire', v: 0 },
        { t: 'Tu ne la transfères pas et tu la supprimes', v: 1 },
        { t: 'Tu ne relaies rien, tu préviens la personne et tu signales le contenu', v: 2 }
      ]
    },
    {
      q: 'Quand est-ce qu\'on parle vraiment de harcèlement ?',
      options: [
        { t: 'Dès qu\'il y a une dispute entre deux élèves', v: 0 },
        { t: 'Quand quelqu\'un est vexé une fois', v: 0 },
        { t: 'Quand c\'est répété, intentionnel, avec un déséquilibre de pouvoir', v: 2 }
      ]
    },
    {
      q: 'Un ami te confie qu\'il est harcelé mais te demande de garder le secret. Tu…',
      options: [
        { t: 'Tu gardes le secret quoi qu\'il arrive', v: 0 },
        { t: 'Tu l\'écoutes et tu l\'encourages à en parler à un adulte, tu peux l\'accompagner', v: 2 },
        { t: 'Tu en parles à toute la classe pour qu\'on l\'aide', v: 0 }
      ]
    },
    {
      q: 'Le numéro national contre le harcèlement scolaire, c\'est…',
      options: [
        { t: 'Le 3018', v: 1 },
        { t: 'Le 3020', v: 2 },
        { t: 'Le 17', v: 0 }
      ]
    },
    {
      q: 'Tu es témoin d\'une scène de harcèlement dans la cour. Le mieux c\'est de…',
      options: [
        { t: 'Filmer pour avoir une preuve et la poster', v: 0 },
        { t: 'Ne rien faire, ça ne te regarde pas', v: 0 },
        { t: 'Alerter un adulte et soutenir la victime sans te mettre en danger', v: 2 }
      ]
    },
    {
      q: 'Si tu es victime, la toute première chose à retenir c\'est…',
      options: [
        { t: 'Que c\'est sûrement un peu de ta faute', v: 0 },
        { t: 'Que tu n\'es pas seul·e et que ce n\'est pas ta faute', v: 2 },
        { t: 'Qu\'il faut te venger toi-même', v: 0 }
      ]
    },
    {
      q: 'Pour signaler un contenu illégal en ligne (menaces, photos…), tu peux utiliser…',
      options: [
        { t: 'La plateforme PHAROS', v: 2 },
        { t: 'Rien, on ne peut rien faire en ligne', v: 0 },
        { t: 'Répondre par des insultes', v: 0 }
      ]
    },
    {
      q: 'Un camarade harceleur change d\'attitude et arrête. Le bon réflexe NAH c\'est…',
      options: [
        { t: 'Continuer à le pointer du doigt comme « le harceleur »', v: 0 },
        { t: 'Reconnaître que l\'important c\'est l\'arrêt du comportement', v: 2 },
        { t: 'Se venger maintenant qu\'il est calme', v: 0 }
      ]
    },
    {
      q: 'Garder des preuves quand on est victime de cyberharcèlement, ça veut dire…',
      options: [
        { t: 'Faire des captures d\'écran (date, pseudo, messages)', v: 2 },
        { t: 'Tout supprimer pour oublier', v: 0 },
        { t: 'Répondre pour provoquer l\'autre', v: 0 }
      ]
    }
  ];

  const state = { i: 0, score: 0, max: QUESTIONS.length * 2 };

  const bar = root.querySelector('.quiz-bar__fill');
  const content = root.querySelector('#quiz-content');
  const progress = root.querySelector('.quiz-progress');

  function renderQuestion() {
    const item = QUESTIONS[state.i];
    progress.textContent = 'Question ' + (state.i + 1) + ' sur ' + QUESTIONS.length;
    bar.style.width = (state.i / QUESTIONS.length * 100) + '%';

    let html = '<h3>' + item.q + '</h3><ul class="quiz-options">';
    item.options.forEach(function (opt, idx) {
      html += '<li><button class="quiz-option" type="button" data-v="' + opt.v +
        '" data-idx="' + idx + '">' + opt.t + '</button></li>';
    });
    html += '</ul>';
    content.innerHTML = html;

    content.querySelectorAll('.quiz-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.score += parseInt(btn.getAttribute('data-v'), 10);
        state.i++;
        if (state.i < QUESTIONS.length) {
          renderQuestion();
        } else {
          renderResult();
        }
      });
    });
    // Focus sur la 1re option pour le clavier / lecteur d'écran
    const first = content.querySelector('.quiz-option');
    if (first) { first.focus(); }
  }

  function feedbackText(pct) {
    if (pct >= 85) {
      return 'Bravo ! Tu as déjà les bons réflexes face au harcèlement. ' +
        'Tu peux être un vrai soutien pour les autres. Continue à en parler autour de toi.';
    }
    if (pct >= 55) {
      return 'Tu es sur la bonne voie. Tu connais l\'essentiel, mais quelques réflexes ' +
        'peuvent encore se renforcer. Relis la page « Comprendre » pour aller plus loin.';
    }
    return 'Pas de panique : personne ne naît en sachant réagir. ' +
      'L\'important, c\'est d\'apprendre. Jette un œil à la page « Comprendre » : ' +
      'tu y trouveras les bons réflexes, étape par étape.';
  }

  function renderResult() {
    bar.style.width = '100%';
    progress.textContent = 'Terminé !';
    const pct = Math.round(state.score / state.max * 100);

    content.innerHTML =
      '<div class="quiz-result">' +
        '<p class="score">' + pct + '%</p>' +
        '<p class="lead">' + feedbackText(pct) + '</p>' +
        '<p><a class="btn btn--bleu" href="renseignement.html">Comprendre le harcèlement</a></p>' +
        '<p><button class="btn btn--ghost" type="button" id="quiz-rejouer">Rejouer le quiz</button></p>' +
        '<p class="form-hint">Aucune donnée personnelle n\'est enregistrée. ' +
          'Seul un score anonyme peut servir aux statistiques de l\'équipe NAH.</p>' +
      '</div>';

    document.getElementById('quiz-rejouer').addEventListener('click', function () {
      state.i = 0; state.score = 0;
      renderQuestion();
    });

    // Enregistrement anonyme du score (optionnel, échoue en silence)
    if (window.nahDB) {
      window.nahDB.insert('quiz_scores', { score_pct: pct }).catch(function () {});
    }
  }

  renderQuestion();
})();

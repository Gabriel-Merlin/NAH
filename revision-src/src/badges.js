// Badges de gamification. Chaque badge a un test `check(state, derived)`
// évalué après chaque partie (et après l'inscription / la mise en favori) ;
// l'obtention déclenche une petite célébration.
//
// Champs utilisables :
//  state   : xp, streak.count, chapters, favorites, lastChapter, profile,
//            totalAnswers, correctAnswers
//  derived : global, bySubject[id], byChapter[id], chaptersMastered,
//            subjectsPlayed, level
const perfectQuizzes = (s) => Object.values(s.chapters).filter((c) => (c.quiz || 0) >= 100).length

export const BADGES = [
  // ----- Démarrage -----
  {
    id: 'welcome',
    name: 'Bienvenue !',
    icon: '🎀',
    desc: 'Créer sa fiche et personnaliser son espace.',
    check: (s) => !!s.profile?.firstName,
  },
  {
    id: 'planner',
    name: 'Feuille de route',
    icon: '🗺️',
    desc: 'Choisir un chapitre à travailler dès l’inscription.',
    check: (s) => (s.favorites?.length || 0) >= 1,
  },
  {
    id: 'first_step',
    name: 'Premier pas',
    icon: '👣',
    desc: 'Répondre à sa toute première question.',
    check: (s) => s.totalAnswers >= 1,
  },
  {
    id: 'warm_up',
    name: 'Échauffement',
    icon: '🌱',
    desc: 'Répondre à 50 questions au total.',
    check: (s) => s.totalAnswers >= 50,
  },
  {
    id: 'worker',
    name: 'Bosseur',
    icon: '📚',
    desc: 'Répondre à 300 questions au total.',
    check: (s) => s.totalAnswers >= 300,
  },

  // ----- Bonnes réponses -----
  {
    id: 'centurion',
    name: 'Centurion',
    icon: '🏅',
    desc: 'Donner 100 bonnes réponses au total.',
    check: (s) => s.correctAnswers >= 100,
  },
  {
    id: 'sharpshooter',
    name: 'Tireur d’élite',
    icon: '🏹',
    desc: 'Donner 250 bonnes réponses au total.',
    check: (s) => s.correctAnswers >= 250,
  },
  {
    id: 'revision_machine',
    name: 'Machine à réviser',
    icon: '⚙️',
    desc: 'Donner 500 bonnes réponses au total.',
    check: (s) => s.correctAnswers >= 500,
  },
  {
    id: 'legend',
    name: 'Légende',
    icon: '🏆',
    desc: 'Donner 1000 bonnes réponses au total.',
    check: (s) => s.correctAnswers >= 1000,
  },

  // ----- Sans-faute -----
  {
    id: 'perfect_quiz',
    name: 'Sans-faute',
    icon: '💯',
    desc: 'Réussir un quiz de chapitre à 100 %.',
    check: (s) => Object.values(s.chapters).some((c) => (c.quiz || 0) >= 100),
  },
  {
    id: 'precision',
    name: 'Précision',
    icon: '✨',
    desc: 'Réussir 3 quiz de chapitre à 100 %.',
    check: (s) => perfectQuizzes(s) >= 3,
  },
  {
    id: 'flawless',
    name: 'Sans-faute confirmé',
    icon: '🎖️',
    desc: 'Réussir 10 quiz de chapitre à 100 %.',
    check: (s) => perfectQuizzes(s) >= 10,
  },

  // ----- Régularité (streak) -----
  {
    id: 'streak_3',
    name: 'Régularité',
    icon: '🔥',
    desc: 'Réviser 3 jours d’affilée.',
    check: (s) => s.streak.count >= 3,
  },
  {
    id: 'streak_7',
    name: 'Semaine parfaite',
    icon: '⚡',
    desc: 'Réviser 7 jours d’affilée.',
    check: (s) => s.streak.count >= 7,
  },
  {
    id: 'streak_14',
    name: 'Marathonien',
    icon: '🏃',
    desc: 'Réviser 14 jours d’affilée.',
    check: (s) => s.streak.count >= 14,
  },
  {
    id: 'streak_30',
    name: 'Inarrêtable',
    icon: '🗓️',
    desc: 'Réviser 30 jours d’affilée.',
    check: (s) => s.streak.count >= 30,
  },

  // ----- Niveaux -----
  {
    id: 'level_3',
    name: 'Niveau 3',
    icon: '🌟',
    desc: 'Atteindre le niveau 3.',
    check: (s, d) => d.level >= 3,
  },
  {
    id: 'level_5',
    name: 'Niveau 5',
    icon: '⭐',
    desc: 'Atteindre le niveau 5.',
    check: (s, d) => d.level >= 5,
  },
  {
    id: 'level_8',
    name: 'Niveau 8',
    icon: '💫',
    desc: 'Atteindre le niveau 8.',
    check: (s, d) => d.level >= 8,
  },
  {
    id: 'level_10',
    name: 'Niveau 10',
    icon: '🌠',
    desc: 'Atteindre le niveau 10.',
    check: (s, d) => d.level >= 10,
  },
  {
    id: 'level_max',
    name: 'Sommet',
    icon: '🏔️',
    desc: 'Atteindre le niveau maximum (12).',
    check: (s, d) => d.level >= 12,
  },

  // ----- Progression globale -----
  {
    id: 'global_25',
    name: 'En route',
    icon: '🚀',
    desc: 'Atteindre 25 % de progression globale.',
    check: (s, d) => d.global >= 25,
  },
  {
    id: 'global_50',
    name: 'À mi-chemin',
    icon: '🧗',
    desc: 'Atteindre 50 % de progression globale.',
    check: (s, d) => d.global >= 50,
  },
  {
    id: 'grand_maitre',
    name: 'Grand maître',
    icon: '👑',
    desc: 'Atteindre 75 % de progression globale.',
    check: (s, d) => d.global >= 75,
  },
  {
    id: 'global_90',
    name: 'Presque parfait',
    icon: '🌈',
    desc: 'Atteindre 90 % de progression globale.',
    check: (s, d) => d.global >= 90,
  },
  {
    id: 'global_100',
    name: 'Perfection',
    icon: '💠',
    desc: 'Atteindre 100 % de progression globale.',
    check: (s, d) => d.global >= 100,
  },

  // ----- Chapitres maîtrisés -----
  {
    id: 'chapters_1',
    name: 'Premier sommet',
    icon: '⛰️',
    desc: 'Maîtriser un chapitre (90 %+).',
    check: (s, d) => d.chaptersMastered >= 1,
  },
  {
    id: 'chapters_5',
    name: 'Grimpeur',
    icon: '🧗‍♂️',
    desc: 'Maîtriser 5 chapitres (90 %+).',
    check: (s, d) => d.chaptersMastered >= 5,
  },
  {
    id: 'chapters_10',
    name: 'Alpiniste',
    icon: '🗻',
    desc: 'Maîtriser 10 chapitres (90 %+).',
    check: (s, d) => d.chaptersMastered >= 10,
  },
  {
    id: 'chapters_25',
    name: 'Conquérant',
    icon: '🏰',
    desc: 'Maîtriser 25 chapitres (90 %+).',
    check: (s, d) => d.chaptersMastered >= 25,
  },

  // ----- Ouverture / curiosité -----
  {
    id: 'curious',
    name: 'Curieux',
    icon: '🔎',
    desc: 'Toucher à au moins 3 matières différentes.',
    check: (s, d) => d.subjectsPlayed >= 3,
  },
  {
    id: 'explorer',
    name: 'Explorateur',
    icon: '🧭',
    desc: 'Toucher à au moins 5 matières différentes.',
    check: (s, d) => d.subjectsPlayed >= 5,
  },
  {
    id: 'jack_of_all',
    name: 'Touche-à-tout',
    icon: '🃏',
    desc: 'Toucher à au moins 7 matières différentes.',
    check: (s, d) => d.subjectsPlayed >= 7,
  },
  {
    id: 'collector',
    name: 'Collectionneur',
    icon: '📌',
    desc: 'Mettre 5 chapitres en favoris.',
    check: (s) => (s.favorites?.length || 0) >= 5,
  },

  // ----- Maîtrise par matière -----
  {
    id: 'gestion_pro',
    name: 'Expert Gestion-Finance',
    icon: '💼',
    desc: 'Atteindre 80 % de progression en Gestion et Finance.',
    check: (s, d) => (d.bySubject['gestion-finance'] || 0) >= 80,
  },
  {
    id: 'tva_master',
    name: 'Maître de la TVA',
    icon: '🧾',
    desc: 'Maîtriser le Thème 1 de Gestion et Finance (règles comptables).',
    check: (s, d) => (d.byChapter['gf-t1'] || 0) >= 85,
  },
  {
    id: 'sig_pro',
    name: 'As des SIG',
    icon: '📊',
    desc: 'Maîtriser le Thème 2 de Gestion et Finance (analyse financière).',
    check: (s, d) => (d.byChapter['gf-t2'] || 0) >= 85,
  },
  {
    id: 'manager',
    name: 'Manager',
    icon: '🧑‍💼',
    desc: 'Atteindre 80 % de progression en Management.',
    check: (s, d) => (d.bySubject['management'] || 0) >= 80,
  },
  {
    id: 'swot_ace',
    name: 'As du SWOT',
    icon: '🎯',
    desc: 'Maîtriser le Thème 2 de Management (acteurs & diagnostic).',
    check: (s, d) => (d.byChapter['mgmt-t2'] || 0) >= 80,
  },
  {
    id: 'juriste',
    name: 'Petit juriste',
    icon: '⚖️',
    desc: 'Atteindre 70 % de progression en Droit.',
    check: (s, d) => (d.bySubject['droit'] || 0) >= 70,
  },
  {
    id: 'jurist_pro',
    name: 'Grand juriste',
    icon: '👨‍⚖️',
    desc: 'Atteindre 90 % de progression en Droit.',
    check: (s, d) => (d.bySubject['droit'] || 0) >= 90,
  },
  {
    id: 'economist',
    name: 'Économiste',
    icon: '📈',
    desc: 'Atteindre 80 % de progression en Économie.',
    check: (s, d) => (d.bySubject['economie'] || 0) >= 80,
  },
  {
    id: 'mathlete',
    name: 'Tête de maths',
    icon: '🧮',
    desc: 'Atteindre 70 % de progression en Mathématiques.',
    check: (s, d) => (d.bySubject['maths'] || 0) >= 70,
  },
  {
    id: 'math_pro',
    name: 'Génie des maths',
    icon: '➗',
    desc: 'Atteindre 90 % de progression en Mathématiques.',
    check: (s, d) => (d.bySubject['maths'] || 0) >= 90,
  },
  {
    id: 'historian',
    name: 'Historien',
    icon: '🏛️',
    desc: 'Atteindre 80 % de progression en Histoire-Géo.',
    check: (s, d) => (d.bySubject['histoire-geo'] || 0) >= 80,
  },
  {
    id: 'philosophe',
    name: 'Apprenti philosophe',
    icon: '🦉',
    desc: 'Jouer sur au moins une notion de philosophie.',
    check: (s, d) => (d.bySubject['philosophie'] || 0) >= 30,
  },
  {
    id: 'philo_pro',
    name: 'Philosophe accompli',
    icon: '📜',
    desc: 'Atteindre 85 % de progression en Philosophie.',
    check: (s, d) => (d.bySubject['philosophie'] || 0) >= 85,
  },
  {
    id: 'polyglotte',
    name: 'Polyglotte',
    icon: '🌍',
    desc: 'Jouer en anglais et en espagnol.',
    check: (s) => {
      const played = (cid) => {
        const r = s.chapters[cid]
        return r && (r.quiz > 0 || Object.keys(r.games || {}).length > 0)
      }
      const en = ['lng-en-gram', 'lng-en-voc'].some(played)
      const es = ['lng-es-gram', 'lng-es-voc'].some(played)
      return en && es
    },
  },
  {
    id: 'cosmopolite',
    name: 'Cosmopolite',
    icon: '🌐',
    desc: 'Atteindre 80 % de progression en Langues.',
    check: (s, d) => (d.bySubject['langues'] || 0) >= 80,
  },
]

export const badgeById = Object.fromEntries(BADGES.map((b) => [b.id, b]))

// Badges de gamification. Chaque badge a un test `check(state, derived)`
// évalué après chaque partie ; l'obtention déclenche une petite célébration.
export const BADGES = [
  {
    id: 'first_step',
    name: 'Premier pas',
    icon: '👣',
    desc: 'Répondre à sa toute première question.',
    check: (s) => s.totalAnswers >= 1,
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
    id: 'gestion_pro',
    name: 'Expert Gestion-Finance',
    icon: '💼',
    desc: 'Atteindre 80 % de progression en Gestion et Finance.',
    check: (s, d) => (d.bySubject['gestion-finance'] || 0) >= 80,
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
    id: 'mathlete',
    name: 'Tête de maths',
    icon: '🧮',
    desc: 'Atteindre 70 % de progression en Mathématiques.',
    check: (s, d) => (d.bySubject['maths'] || 0) >= 70,
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
    id: 'philosophe',
    name: 'Apprenti philosophe',
    icon: '🦉',
    desc: 'Jouer sur au moins une notion de philosophie.',
    check: (s, d) => (d.bySubject['philosophie'] || 0) >= 30,
  },
  {
    id: 'explorer',
    name: 'Explorateur',
    icon: '🧭',
    desc: 'Toucher à au moins 5 matières différentes.',
    check: (s, d) => d.subjectsPlayed >= 5,
  },
  {
    id: 'perfect_quiz',
    name: 'Sans-faute',
    icon: '💯',
    desc: 'Réussir un quiz de chapitre à 100 %.',
    check: (s) => Object.values(s.chapters).some((c) => (c.quiz || 0) >= 100),
  },
  {
    id: 'centurion',
    name: 'Centurion',
    icon: '🏅',
    desc: 'Donner 100 bonnes réponses au total.',
    check: (s) => s.correctAnswers >= 100,
  },
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
    id: 'level_5',
    name: 'Niveau 5',
    icon: '⭐',
    desc: 'Atteindre le niveau 5.',
    check: (s, d) => d.level >= 5,
  },
  {
    id: 'grand_maitre',
    name: 'Grand maître',
    icon: '👑',
    desc: 'Atteindre 75 % de progression globale.',
    check: (s, d) => d.global >= 75,
  },
]

export const badgeById = Object.fromEntries(BADGES.map((b) => [b.id, b]))

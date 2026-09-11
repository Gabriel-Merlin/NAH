// Onglets disponibles pour la barre de navigation du bas. L'élève choisit
// lesquels afficher (2 à 5) et dans quel ordre (personnalisation). `labelKey`
// pointe vers une clé i18n. `match` : préfixes d'URL qui allument l'onglet.
export const ALL_TABS = {
  accueil: { icon: '🏠', labelKey: 'home', to: '/accueil', match: ['/accueil'] },
  revision: { icon: '📚', labelKey: 'reviseTab', to: '/revision', match: ['/revision', '/subject'] },
  coachia: { icon: '🤖', labelKey: 'coachAI', to: '/coach-ia', match: ['/coach-ia'] },
  defi: { icon: '⚡', labelKey: 'dailyChallenge', to: '/defi', match: ['/defi'] },
  boutique: { icon: '🛍️', labelKey: 'shop', to: '/boutique', match: ['/boutique'] },
  amis: { icon: '🤝', labelKey: 'friends', to: '/amis', match: ['/amis'] },
  classement: { icon: '🏆', labelKey: 'leaderboard', to: '/classement', match: ['/classement', '/classe'] },
  bacblanc: { icon: '📝', labelKey: 'mockExam', to: '/bac-blanc', match: ['/bac-blanc'] },
  programme: { icon: '📅', labelKey: 'studyPlan', to: '/programme', match: ['/programme'] },
  coach: { icon: '🎯', labelKey: 'coach', to: '/coach', match: ['/coach'] },
  badges: { icon: '🏅', labelKey: 'badges', to: '/badges', match: ['/badges'] },
  favoris: { icon: '⭐', labelKey: 'favorites', to: '/favoris', match: ['/favoris'] },
  grandoral: { icon: '🎓', labelKey: 'grandOral', to: '/grand-oral', match: ['/grand-oral'] },
  profil: { icon: '👤', labelKey: 'mySpace', to: '/moi', match: ['/moi'] },
}

// Ordre proposé dans l'éditeur.
export const TAB_ORDER = Object.keys(ALL_TABS)

// Sélection par défaut.
export const DEFAULT_TABS = ['accueil', 'revision', 'boutique', 'amis', 'classement']

// Nettoie la sélection de l'élève : ids connus, uniques, 2 à 5 onglets.
export function resolveTabs(ids) {
  const list = (Array.isArray(ids) && ids.length ? ids : DEFAULT_TABS).filter((id) => ALL_TABS[id])
  const uniq = [...new Set(list)].slice(0, 5)
  return uniq.length >= 2 ? uniq : DEFAULT_TABS
}

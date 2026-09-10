// Récompenses de connexion : chaque jour d'affilée où l'élève ouvre l'appli lui
// rapporte de l'XP, et des paliers offrent de gros bonus. Tout est local et
// déterministe (aucune triche possible : une seule récompense par jour, gérée
// par le check-in dans le store).

// Paliers « jours d'affilée » → bonus d'XP en plus de la récompense du jour.
export const MILESTONES = [
  { day: 3, xp: 30, label: '3 jours d’affilée', icon: '🔥' },
  { day: 7, xp: 80, label: '1 semaine complète', icon: '⚡' },
  { day: 14, xp: 150, label: '2 semaines', icon: '🏃' },
  { day: 30, xp: 350, label: '1 mois entier', icon: '🗓️' },
  { day: 50, xp: 600, label: '50 jours', icon: '💎' },
  { day: 100, xp: 1500, label: '100 jours', icon: '👑' },
]

// XP « du jour » : croît avec la série, plafonné à 50/jour.
export function dailyBase(count) {
  return Math.min(50, 10 + Math.max(0, (count || 1) - 1) * 5)
}

// Récompense d'un jour de connexion : base du jour + éventuel palier.
export function dailyRewardFor(count) {
  const base = dailyBase(count)
  const milestone = MILESTONES.find((m) => m.day === count) || null
  const bonus = milestone ? milestone.xp : 0
  return { base, bonus, xp: base + bonus, milestone }
}

// Prochain palier à atteindre (pour la carte d'accueil). Renvoie aussi la
// progression depuis le palier précédent (barre de progression).
export function nextMilestone(count) {
  const c = count || 0
  const next = MILESTONES.find((m) => m.day > c)
  if (!next) return null
  const prevDay = [...MILESTONES].reverse().find((m) => m.day <= c)?.day || 0
  const span = next.day - prevDay
  const done = c - prevDay
  return {
    ...next,
    daysLeft: next.day - c,
    pct: Math.max(0, Math.min(100, Math.round((done / span) * 100))),
  }
}

// Répétition espacée (SM-2 simplifié) + utilitaires de dates.
// Aucune dépendance : importable partout sans risque d'import circulaire.
export const dayKey = (d = new Date()) => d.toISOString().slice(0, 10)
export const todayKey = () => dayKey()
export const addDays = (key, n) => { const d = new Date(key + 'T00:00:00'); d.setDate(d.getDate() + n); return dayKey(d) }

export function daysUntil(dateStr, today = todayKey()) {
  if (!dateStr) return null
  const d1 = new Date(today + 'T00:00:00'), d2 = new Date(dateStr + 'T00:00:00')
  return Math.round((d2 - d1) / 86400000)
}

// Prochaine échéance d'un thème selon le score obtenu (0-100).
export function srsUpdate(prev, pct, today = todayKey()) {
  const p = prev || { interval: 0, ease: 2.3, reps: 0 }
  let ease = p.ease || 2.3
  let reps
  if (pct >= 85) { ease = Math.min(2.9, ease + 0.1); reps = (p.reps || 0) + 1 }
  else if (pct >= 60) { reps = (p.reps || 0) + 1 }
  else { ease = Math.max(1.3, ease - 0.2); reps = 0 } // échec : on réapprend

  let interval
  if (reps === 0) interval = 1
  else if (reps === 1) interval = 2
  else if (reps === 2) interval = 4
  else interval = Math.min(60, Math.round((p.interval || 4) * ease))

  return { interval, ease: Math.round(ease * 100) / 100, reps, last: today, due: addDays(today, interval), score: Math.round(pct) }
}

export function defaultBacDate(today = new Date()) {
  const y = today.getMonth() >= 6 ? today.getFullYear() + 1 : today.getFullYear()
  return `${y}-06-16` // épreuves écrites de spécialité, mi-juin (indicatif)
}

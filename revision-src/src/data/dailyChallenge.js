// Défi du jour : une petite série de QCM tirée du programme de l'élève, STABLE
// pour la journée (mêmes questions si on recharge) mais différente chaque jour,
// et identique pour tous (tirage déterministe semé par la date). Auto-corrigé.
import { realThemes, collectQuestions } from './study.js'

// RNG déterministe (mulberry32) semé par une chaîne (la date).
function seedFromString(s) {
  let h = 1779033703 ^ s.length
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return h >>> 0
}
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
function seededShuffle(arr, rnd) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function buildDailyChallenge(track, dateKey, n = 6) {
  const rnd = mulberry32(seedFromString('defi-' + dateKey))
  const pool = []
  for (const t of realThemes(track)) pool.push(...collectQuestions(t.themeId))
  // Une question par énoncé (déduplication).
  const byKey = new Map()
  for (const q of pool) {
    const k = (q.q || '').toLowerCase().trim()
    if (!k || !Array.isArray(q.choices) || q.choices.length < 2) continue
    if (!byKey.has(k)) byKey.set(k, q)
  }
  const arr = [...byKey.values()]
  if (arr.length < 3) return []
  const chosen = seededShuffle(arr, rnd).slice(0, Math.min(n, arr.length))
  // On mélange aussi (de façon déterministe) les propositions de chaque question.
  return chosen.map((q) => {
    const order = seededShuffle(q.choices.map((_, i) => i), rnd)
    return { q: q.q, choices: order.map((i) => q.choices[i]), answer: order.indexOf(q.answer), explain: q.explain }
  })
}

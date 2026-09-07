// Moteur d'étude partagé par : Révision intelligente (répétition espacée),
// Bac blanc chronométré et Programme jusqu'au bac.
import { SUBJECTS, ALL_CHAPTERS, shuffle } from './index.js'
import { subjectsForTrack } from './tracks.js'
import { chapterScore } from '../store.jsx'
import { todayKey, daysUntil, defaultBacDate } from './srs.js'
export { todayKey, daysUntil, defaultBacDate }

// Index thème → matière (les « chapitres » du modèle de données = thèmes).
export const THEME_INDEX = {}
for (const s of SUBJECTS) {
  for (const th of s.chapters || []) {
    THEME_INDEX[th.id] = { subjectId: s.id, subjectName: s.short || s.name, color: s.color, themeName: th.short || th.name, themeId: th.id }
  }
}

// Thèmes réellement disponibles pour la filière de l'élève.
export function realThemes(track) {
  const subjects = subjectsForTrack(track).filter((s) => !s.comingSoon && (s.chapters || []).length)
  const out = []
  for (const s of subjects) for (const th of s.chapters || []) out.push({ ...THEME_INDEX[th.id], theme: th })
  return out
}

// File de révision priorisée : à revoir aujourd'hui > points faibles >
// jamais vus > le reste (score croissant).
export function reviewQueue(state, track, today = todayKey()) {
  const srs = state.srs || {}
  const items = realThemes(track).map((t) => {
    const rec = state.chapters?.[t.themeId]
    const practiced = !!(rec && (rec.quiz > 0 || Object.keys(rec.games || {}).length > 0))
    const score = practiced ? chapterScore(state, t.themeId) : 0
    const s = srs[t.themeId]
    const due = s?.due || null
    const isDue = practiced && due && due <= today
    let reason, prio
    if (isDue) { reason = 'due'; prio = 0 }
    else if (practiced && score < 60) { reason = 'weak'; prio = 1 }
    else if (!practiced) { reason = 'new'; prio = 2 }
    else { reason = 'review'; prio = 3 }
    return { ...t, score, practiced, due, reason, prio }
  })
  items.sort((a, b) => a.prio - b.prio || a.score - b.score || String(a.due || '').localeCompare(String(b.due || '')))
  return items
}

export function reviewStats(queue, today = todayKey()) {
  return {
    due: queue.filter((q) => q.reason === 'due').length,
    weak: queue.filter((q) => q.reason === 'weak').length,
    fresh: queue.filter((q) => q.reason === 'new').length,
    total: queue.length,
  }
}

// --- Bac blanc : assemblage de questions QCM à partir des matières ----------
function collectQuestions(themeId) {
  const th = ALL_CHAPTERS[themeId]
  if (!th) return []
  const out = []
  for (const g of th.games || []) {
    if (g.type === 'qcm') for (const q of g.questions || []) out.push({ q: q.q, choices: q.choices, answer: q.answer, explain: q.explain, themeId })
    else if (g.type === 'vraifaux') for (const q of g.questions || []) out.push({ q: q.statement, choices: ['Vrai', 'Faux'], answer: q.answer ? 0 : 1, explain: q.explain, themeId })
  }
  return out
}

// subjectIds : liste d'ids de matières (ou null = toute la filière).
export function buildExam(state, track, subjectIds, count = 20) {
  let subjects = subjectsForTrack(track).filter((s) => !s.comingSoon && (s.chapters || []).length)
  if (subjectIds && subjectIds.length) subjects = subjects.filter((s) => subjectIds.includes(s.id))
  const pool = []
  for (const s of subjects) for (const th of s.chapters || []) pool.push(...collectQuestions(th.id))
  // Déduplique par énoncé et mélange les choix de chaque question.
  const seen = new Set()
  const uniq = []
  for (const q of shuffle(pool)) {
    const k = (q.q || '').toLowerCase().trim()
    if (!k || seen.has(k) || !Array.isArray(q.choices) || q.choices.length < 2) continue
    seen.add(k); uniq.push(q)
    if (uniq.length >= count) break
  }
  return uniq
}

export function examSubjects(track) {
  return subjectsForTrack(track).filter((s) => !s.comingSoon && (s.chapters || []).length)
}

// Objectifs du jour : les thèmes prioritaires (stables dans la journée).
export function dailyPlan(state, track, today = todayKey(), n = 4) {
  const queue = reviewQueue(state, track, today)
  const srs = state.srs || {}
  const chosen = queue.slice(0, n)
  return chosen.map((t) => ({ ...t, done: srs[t.themeId]?.last === today }))
}

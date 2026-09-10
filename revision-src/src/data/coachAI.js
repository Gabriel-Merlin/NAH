// « Coach IA » — analyse locale des points faibles de l'élève et génération
// d'un entraînement personnalisé. Tout est calculé SUR L'APPAREIL à partir de la
// progression (scores par thème, répétition espacée, précision) : aucune donnée
// n'est envoyée nulle part. L'« intelligence » est un moteur de décision qui
// pondère chaque thème selon la faiblesse et adapte l'entraînement en direct.
import { reviewQueue, collectQuestions } from './study.js'
import { shuffle } from './index.js'

// Mélange les propositions d'une question (l'indice de la bonne réponse suit).
function shuffleChoices(q) {
  const order = shuffle(q.choices.map((_, i) => i))
  return { ...q, choices: order.map((i) => q.choices[i]), answer: order.indexOf(q.answer) }
}

// Poids de « faiblesse » d'un thème : plus il est élevé, plus le thème est
// prioritaire pour l'entraînement. À revoir (SRS) > point faible (score bas) >
// jamais vu > consolidation.
export function weaknessWeight(item) {
  if (item.reason === 'due') return 4
  if (item.reason === 'weak') return 2.2 + (100 - item.score) / 35 // ~2.2 à ~5
  if (item.reason === 'new') return 1.1
  return 0.5 + (100 - item.score) / 120 // consolidation légère selon le score
}

// Diagnostic complet des points faibles de l'élève.
export function analyzeStudent(state, track) {
  const queue = reviewQueue(state, track)
  const practiced = queue.filter((q) => q.practiced)
  const total = state.totalAnswers || 0
  const acc = total ? Math.round((state.correctAnswers / total) * 100) : 0

  // Thèmes prioritaires : à revoir + points faibles ; sinon on propose des
  // nouveautés pour démarrer l'analyse.
  const weakOrDue = queue.filter((q) => q.reason === 'due' || q.reason === 'weak')
  const focus = (weakOrDue.length ? weakOrDue : queue.filter((q) => q.reason === 'new')).slice(0, 6)

  // Matière la plus fragile (moyenne des scores des thèmes déjà travaillés).
  const bySub = {}
  for (const q of practiced) {
    const b = (bySub[q.subjectId] ||= { name: q.subjectName, color: q.color, sum: 0, n: 0 })
    b.sum += q.score; b.n++
  }
  let weakestSubject = null
  for (const [id, v] of Object.entries(bySub)) {
    const avg = v.sum / v.n
    if (!weakestSubject || avg < weakestSubject.avg) weakestSubject = { id, name: v.name, color: v.color, avg: Math.round(avg) }
  }

  const strengths = practiced.filter((q) => q.score >= 80).sort((a, b) => b.score - a.score).slice(0, 3)
  const hasData = total >= 5 && practiced.length >= 1
  return { hasData, total, acc, focus, weakestSubject, strengths, practicedCount: practiced.length, dueCount: queue.filter((q) => q.reason === 'due').length, weakCount: queue.filter((q) => q.reason === 'weak').length }
}

// Construit l'entraînement personnalisé : une séquence de questions QCM tirées
// EN PRIORITÉ des thèmes faibles (tirage pondéré), plus des « banques » de
// réserve par thème pour réinjecter des questions en direct si l'élève se
// trompe (adaptatif). Renvoie { sequence, banks, focusThemes }.
export function buildTraining(state, track, n = 12) {
  const queue = reviewQueue(state, track)
  // Banque de questions valides par thème (QCM + vrai/faux), dédoublonnée.
  const banks = {}
  const weightByTheme = {}
  const meta = {}
  for (const item of queue) {
    const qs = collectQuestions(item.themeId).filter((q) => Array.isArray(q.choices) && q.choices.length >= 2)
    const seen = new Set()
    const uniq = []
    for (const q of qs) { const k = (q.q || '').toLowerCase().trim(); if (k && !seen.has(k)) { seen.add(k); uniq.push(q) } }
    if (!uniq.length) continue
    banks[item.themeId] = shuffle(uniq).map(shuffleChoices)
    weightByTheme[item.themeId] = weaknessWeight(item)
    meta[item.themeId] = { themeId: item.themeId, name: item.themeName, subject: item.subjectName, color: item.color, score: item.practiced ? item.score : null, reason: item.reason }
  }
  const themeIds = Object.keys(banks)
  if (!themeIds.length) return { sequence: [], banks: {}, focusThemes: [] }

  // Tirage pondéré des thèmes pour composer la séquence initiale.
  const cursor = {} // prochaine question à tirer dans chaque banque
  themeIds.forEach((id) => (cursor[id] = 0))
  const pickFrom = (id) => { const b = banks[id]; if (cursor[id] >= b.length) return null; const q = b[cursor[id]++]; return { ...q, themeId: id } }
  const weightedPick = () => {
    const avail = themeIds.filter((id) => cursor[id] < banks[id].length)
    if (!avail.length) return null
    const totalW = avail.reduce((s, id) => s + weightByTheme[id], 0)
    let r = Math.random() * totalW
    for (const id of avail) { r -= weightByTheme[id]; if (r <= 0) return pickFrom(id) }
    return pickFrom(avail[avail.length - 1])
  }
  const sequence = []
  const guard = n * 6
  let g = 0
  while (sequence.length < n && g++ < guard) { const q = weightedPick(); if (q) sequence.push(q) }

  // Banques restantes (pour l'adaptatif en direct).
  const remaining = {}
  for (const id of themeIds) remaining[id] = banks[id].slice(cursor[id]).map((q) => ({ ...q, themeId: id }))

  const focusThemes = queue
    .filter((q) => banks[q.themeId] && (q.reason === 'due' || q.reason === 'weak'))
    .slice(0, 5)
    .map((q) => meta[q.themeId])
  return { sequence, banks: remaining, focusThemes, names: meta }
}

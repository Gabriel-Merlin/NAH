// « Coach IA » — analyse locale des points faibles de l'élève, plan de révision
// jusqu'au bac et génération d'un entraînement personnalisé. Tout est calculé
// SUR L'APPAREIL à partir de la progression (scores par thème, répétition
// espacée, précision, historique d'XP) : aucune donnée n'est envoyée nulle part.
// L'« intelligence » est un moteur de décision qui pondère chaque thème selon la
// faiblesse, planifie les révisions et adapte l'entraînement en direct.
import { reviewQueue, collectQuestions } from './study.js'
import { shuffle } from './index.js'
import { subjectsForTrack } from './tracks.js'
import { daysUntil, todayKey, addDays, defaultBacDate } from './srs.js'

// Mélange les propositions d'une question (l'indice de la bonne réponse suit).
function shuffleChoices(q) {
  const order = shuffle(q.choices.map((_, i) => i))
  return { ...q, choices: order.map((i) => q.choices[i]), answer: order.indexOf(q.answer) }
}

// Poids de « faiblesse » d'un thème : plus il est élevé, plus le thème est
// prioritaire. À revoir (SRS) > point faible (score bas) > jamais vu > consolidation.
export function weaknessWeight(item) {
  if (item.reason === 'due') return 4
  if (item.reason === 'weak') return 2.2 + (100 - item.score) / 35 // ~2.2 à ~5
  if (item.reason === 'new') return 1.1
  return 0.5 + (100 - item.score) / 120 // consolidation légère selon le score
}

// Étiquette de maîtrise d'un thème à partir du score et du fait qu'il ait été
// travaillé. mastered ≥ 85 · solid 60-84 · fragile < 60 · unseen (jamais fait).
function masteryOf(item) {
  if (!item.practiced) return 'unseen'
  if (item.score >= 85) return 'mastered'
  if (item.score >= 60) return 'solid'
  return 'fragile'
}

// Momentum : activité récente à partir de l'historique d'XP cumulée par jour.
function computeMomentum(state, today = todayKey()) {
  const hist = state.history || {}
  let activeDays = 0
  for (let i = 0; i < 7; i++) if (hist[addDays(today, -i)] != null) activeDays++
  const now = hist[today]
  let weekXp = 0
  // XP gagnée sur 7 jours : dernière valeur connue − valeur d'il y a ~7 jours.
  let base = null
  for (let i = 7; i <= 13; i++) { const v = hist[addDays(today, -i)]; if (v != null) { base = v; break } }
  if (now != null && base != null) weekXp = Math.max(0, now - base)
  const streak = state.streak?.count || 0
  return { activeDays, weekXp, streak }
}

// Niveau global : combine précision et couverture du programme.
function levelLabel(acc, coverage) {
  const s = acc * 0.7 + coverage * 30
  if (s >= 82) return { key: 'aiLvlExpert', label: 'Expert', c: '#7c3aed' }
  if (s >= 62) return { key: 'aiLvlConfirmed', label: 'Confirmé', c: '#0891b2' }
  if (s >= 40) return { key: 'aiLvlProgress', label: 'En progrès', c: '#d97706' }
  return { key: 'aiLvlBeginner', label: 'Débutant', c: '#e11d48' }
}

// Diagnostic complet des points faibles et forts de l'élève.
export function analyzeStudent(state, track) {
  const today = todayKey()
  const queue = reviewQueue(state, track, today)
  const practiced = queue.filter((q) => q.practiced)
  const total = state.totalAnswers || 0
  const acc = total ? Math.round((state.correctAnswers / total) * 100) : 0

  // Thèmes prioritaires : à revoir + points faibles ; sinon on propose des
  // nouveautés pour démarrer l'analyse.
  const weakOrDue = queue.filter((q) => q.reason === 'due' || q.reason === 'weak')
  const focus = (weakOrDue.length ? weakOrDue : queue.filter((q) => q.reason === 'new')).slice(0, 6)

  // Répartition de maîtrise sur TOUT le programme de la filière.
  const mastery = { mastered: 0, solid: 0, fragile: 0, unseen: 0 }
  for (const q of queue) mastery[masteryOf(q)]++
  const coverage = queue.length ? practiced.length / queue.length : 0

  // Niveau par matière (moyenne des scores des thèmes travaillés + couverture).
  const bySub = {}
  for (const q of queue) {
    const b = (bySub[q.subjectId] ||= { id: q.subjectId, name: q.subjectName, color: q.color, sum: 0, done: 0, total: 0 })
    b.total++
    if (q.practiced) { b.sum += q.score; b.done++ }
  }
  const subjects = Object.values(bySub).map((b) => {
    const avg = b.done ? Math.round(b.sum / b.done) : 0
    const status = b.done === 0 ? 'unseen' : avg >= 80 ? 'strong' : avg >= 60 ? 'ok' : 'weak'
    return { id: b.id, name: b.name, color: b.color, avg, done: b.done, total: b.total, status }
  }).sort((a, b) => (a.done === 0) - (b.done === 0) || a.avg - b.avg)

  let weakestSubject = null
  for (const s of subjects) if (s.done > 0 && (!weakestSubject || s.avg < weakestSubject.avg)) weakestSubject = { id: s.id, name: s.name, color: s.color, avg: s.avg }

  const strengths = practiced.filter((q) => q.score >= 80).sort((a, b) => b.score - a.score).slice(0, 4)
  const momentum = computeMomentum(state, today)
  const bac = state.bacDate || defaultBacDate()
  const daysToBac = daysUntil(bac, today)
  const lvl = levelLabel(acc, coverage)

  const hasData = total >= 5 && practiced.length >= 1
  return {
    hasData, total, acc, focus, weakestSubject, strengths,
    practicedCount: practiced.length,
    themeCount: queue.length,
    dueCount: queue.filter((q) => q.reason === 'due').length,
    weakCount: queue.filter((q) => q.reason === 'weak').length,
    newCount: queue.filter((q) => q.reason === 'new').length,
    mastery, coverage: Math.round(coverage * 100), subjects, momentum,
    bac, daysToBac, level: lvl,
  }
}

// Conseils actionnables du coach, dérivés du diagnostic (chaînes prêtes à afficher).
export function coachAdvice(a) {
  const tips = []
  if (a.dueCount > 0) tips.push({ icon: '⏰', text: `Tu as ${a.dueCount} thème${a.dueCount > 1 ? 's' : ''} à revoir aujourd’hui (répétition espacée). Commence par là : c’est le meilleur moment pour ancrer la mémoire.` })
  if (a.weakestSubject && a.weakestSubject.avg < 70) tips.push({ icon: '🎯', text: `Ta matière la plus fragile est ${a.weakestSubject.name} (${a.weakestSubject.avg}%). Consacre-lui une séance ciblée cette semaine.` })
  if (a.mastery.unseen > 0) tips.push({ icon: '🧭', text: `Il te reste ${a.mastery.unseen} thème${a.mastery.unseen > 1 ? 's' : ''} jamais travaillé${a.mastery.unseen > 1 ? 's' : ''}. Découvre-les pour couvrir tout le programme avant le bac.` })
  if (a.momentum.activeDays >= 5) tips.push({ icon: '🔥', text: `Excellent rythme : ${a.momentum.activeDays} jours actifs cette semaine. Garde cette régularité, c’est elle qui paie.` })
  else if (a.momentum.activeDays <= 2) tips.push({ icon: '📅', text: `Tu as été actif ${a.momentum.activeDays} jour${a.momentum.activeDays > 1 ? 's' : ''} cette semaine. Vise 15 min par jour : la régularité bat les longues séances.` })
  if (a.acc >= 80 && a.coverage >= 70) tips.push({ icon: '🏆', text: `Très bon niveau d’ensemble (${a.acc}% de réussite, ${a.coverage}% du programme couvert). Enchaîne des bacs blancs pour te mettre en conditions.` })
  if (a.daysToBac != null && a.daysToBac > 0 && a.daysToBac <= 45) tips.push({ icon: '⏳', text: `Plus que ${a.daysToBac} jours avant le bac : suis ton plan jour par jour, il priorise ce qui compte le plus pour toi.` })
  return tips.slice(0, 4)
}

// Plan de révision jour par jour jusqu'au bac. Chaque jour reçoit `perDay`
// thèmes, tirés de la file priorisée ; les points faibles reviennent plusieurs
// fois (révisions espacées), les nouveautés une à deux fois. Renvoie
// { days:[{date,dayOffset,isToday,items}], bac, horizon, perDay }.
export function buildStudyPlan(state, track, { perDay = 3, maxDays = 30 } = {}) {
  const today = todayKey()
  const bac = state.bacDate || defaultBacDate()
  let horizon = daysUntil(bac, today)
  if (horizon == null || horizon < 1) horizon = maxDays
  const days = Math.min(maxDays, Math.max(3, horizon))
  const queue = reviewQueue(state, track, today)
  if (!queue.length) return { days: [], bac, horizon, perDay }

  const meta = {}
  const need = {}
  for (const q of queue) {
    meta[q.themeId] = q
    need[q.themeId] = q.reason === 'weak' ? 3 : q.reason === 'due' ? 2 : q.reason === 'new' ? 2 : 1
  }
  // Sessions à planifier, priorité d'abord, révisions espacées ensuite (round 2, 3).
  const rounds = []
  for (let r = 0; r < 3; r++) for (const q of queue) if (need[q.themeId] > r) rounds.push(q.themeId)

  const plan = []
  let idx = 0
  for (let d = 0; d < days && idx < rounds.length; d++) {
    const items = []
    const used = new Set()
    while (items.length < perDay && idx < rounds.length) {
      // Évite deux fois le même thème dans une même journée.
      if (used.has(rounds[idx])) {
        let j = idx + 1
        while (j < rounds.length && used.has(rounds[j])) j++
        if (j >= rounds.length) break
        ;[rounds[idx], rounds[j]] = [rounds[j], rounds[idx]]
      }
      const tid = rounds[idx]
      if (used.has(tid)) break
      used.add(tid); items.push(meta[tid]); idx++
    }
    if (items.length) plan.push({ date: addDays(today, d), dayOffset: d, isToday: d === 0, items })
  }
  return { days: plan, bac, horizon, perDay }
}

// Construit l'entraînement personnalisé : une séquence de questions QCM tirées
// EN PRIORITÉ des thèmes faibles (tirage pondéré), plus des « banques » de
// réserve par thème pour réinjecter des questions en direct si l'élève se
// trompe (adaptatif). `subjectId` (optionnel) restreint à une matière.
// Renvoie { sequence, banks, focusThemes, names }.
export function buildTraining(state, track, n = 12, subjectId = null) {
  const queue = reviewQueue(state, track).filter((q) => !subjectId || q.subjectId === subjectId)
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

  const cursor = {}
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

  const remaining = {}
  for (const id of themeIds) remaining[id] = banks[id].slice(cursor[id]).map((q) => ({ ...q, themeId: id }))

  const focusThemes = queue
    .filter((q) => banks[q.themeId] && (q.reason === 'due' || q.reason === 'weak'))
    .slice(0, 5)
    .map((q) => meta[q.themeId])
  return { sequence, banks: remaining, focusThemes, names: meta }
}

// Matières de la filière disponibles (pour le filtre d'entraînement ciblé).
export function coachSubjects(track) {
  return subjectsForTrack(track).filter((s) => !s.comingSoon && (s.chapters || []).length).map((s) => ({ id: s.id, name: s.short || s.name, color: s.color }))
}

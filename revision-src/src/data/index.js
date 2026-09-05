// Agrégation de toutes les matières. Pour ajouter une matière ou un chapitre :
// il suffit d'ajouter/éditer un objet dans le fichier de la matière concernée,
// puis de l'importer ici. Rien d'autre à toucher dans l'application.
import { gestion } from './gestion.js'
import { management } from './management.js'
import { droit } from './droit.js'
import { economie } from './economie.js'
import { maths } from './maths.js'
import { philosophie } from './philosophie.js'
import { histoire } from './histoire.js'
import { langues } from './langues.js'
import { mercatique } from './mercatique.js'
import { rh } from './rh.js'
import { premiereSubjects } from './premiere.js'
import { LESSONS } from './lessons.js'
import { DOC_STUDIES } from './docstudies.js'
import { GAME_SECTION } from './sections.js'

export const SUBJECTS = [
  gestion,
  management,
  droit,
  economie,
  maths,
  philosophie,
  histoire,
  langues,
  mercatique,
  rh,
  ...premiereSubjects,
]

// Index chapitre -> { subject, ...chapitre } pour un accès direct par id.
// Les « cours complets » de lessons.js (facultatifs) enrichissent chaque
// chapitre : introduction, sections développées, exemples, ressources vidéos.
// Un chapitre sans entrée dans LESSONS garde son cours d'origine.
export const ALL_CHAPTERS = {}
for (const s of SUBJECTS) {
  for (const c of s.chapters) {
    const lesson = LESSONS[c.id]
    if (lesson) {
      if (lesson.intro) c.intro = lesson.intro
      if (lesson.cours) c.cours = lesson.cours
      if (lesson.resources) c.resources = lesson.resources
      if (lesson.essentiel) c.essentiel = lesson.essentiel
    }
    // Étude de documents (Droit & Économie) : ajoutée aux jeux du thème.
    const docStudy = DOC_STUDIES[c.id]
    if (docStudy && !(c.games || []).some((g) => g.id === docStudy.id)) {
      c.games = [...(c.games || []), docStudy]
    }
    ALL_CHAPTERS[c.id] = { ...c, subjectId: s.id, subjectName: s.name, color: s.color }
  }
}

export function getSubject(id) {
  return SUBJECTS.find((s) => s.id === id) || null
}
export function getChapter(id) {
  return ALL_CHAPTERS[id] || null
}
export function chapterGameCount(chapterId) {
  const c = ALL_CHAPTERS[chapterId]
  return c ? (c.games?.length || 0) : 0
}

// ---------------------------------------------------------------------------
// Découpage Thème → Chapitres.
// Chaque « thème » (ex. « Thème 5 — Le contrat ») est découpé en chapitres,
// un par section du cours. Les mini-jeux du thème sont répartis sur ses
// chapitres (round-robin). La progression reste indexée par id de thème.
// ---------------------------------------------------------------------------
// Types d'exercices qui ciblent UNE notion précise : on les garde au niveau
// chapitre (rattachés à leur section). Les jeux de SYNTHÈSE (qcm, vrai/faux,
// association) et les anciennes flashcards couvraient tout le thème : ils ne
// sont plus placés sur un chapitre (ils alimentent le « Test du thème »).
const CHAPTER_GAME_TYPES = new Set(['calcul', 'trou', 'tri', 'ordre', 'memory', 'doc'])

export function themeChapters(theme) {
  if (!theme) return []
  const cours = theme.cours || []
  const games = theme.games || []
  const chapters = cours.map((sec, i) => ({
    id: `${theme.id}::${i}`,
    themeId: theme.id,
    idx: i,
    title: sec.h || `Partie ${i + 1}`,
    section: sec,
    games: [],
  }))
  if (!chapters.length) return chapters
  // Seuls les exercices « propres à une notion » restent sur le chapitre,
  // rattachés à leur section via GAME_SECTION (relue à la main).
  const kept = games.filter((g) => CHAPTER_GAME_TYPES.has(g.type))
  kept.forEach((g, k) => {
    let idx = GAME_SECTION[g.id]
    if (idx == null || idx < 0 || idx >= chapters.length) idx = Math.floor((k * chapters.length) / Math.max(1, kept.length))
    chapters[Math.min(idx, chapters.length - 1)].games.push(g)
  })
  // Chaque chapitre reçoit un exercice tiré de SA SEULE section (QCM ou texte à
  // trous) : il ne porte donc QUE sur le chapitre suivi — jamais de flashcards.
  for (const ch of chapters) {
    if (ch.games.length === 0) {
      const ex = sectionExercise(ch.section, theme, ch.idx)
      if (ex) ch.games.push(ex)
    }
  }
  return chapters
}

// Retire le markdown gras/italique pour un texte propre dans un exercice.
function stripMd(s) {
  return String(s || '').replace(/\*\*/g, '').replace(/\*/g, '').trim()
}

// Construit un QCM à partir de paires { q (énoncé), a (bonne réponse), e }.
// Les mauvaises réponses (distracteurs) sont tirées des AUTRES réponses de la
// même section → l'exercice reste propre au chapitre.
function qcmFromPairs(pairs, id, title) {
  const answers = [...new Set(pairs.map((p) => p.a).filter((a) => a && a.length))]
  if (answers.length < 2) return null
  const questions = shuffle(pairs)
    .slice(0, 8)
    .map((p) => {
      const distractors = shuffle(answers.filter((a) => a !== p.a)).slice(0, 3)
      const choices = shuffle([p.a, ...distractors])
      return { q: p.q, choices, answer: choices.indexOf(p.a), explain: p.e || `${p.q} → ${p.a}` }
    })
    .filter((q) => q.choices.length >= 2 && q.answer >= 0)
  return questions.length ? { id, type: 'qcm', title, icon: '❓', questions } : null
}

// Génère des « textes à trous » à partir des termes en gras des paragraphes /
// puces de la SECTION (on masque le terme mis en valeur dans sa phrase). Les
// longues phrases sont réduites à une fenêtre de contexte autour du trou.
function trouFromBold(sec) {
  const out = []
  const seen = new Set()
  const addFrom = (text) => {
    for (const sRaw of String(text).split(/(?<=[.!?…])\s+/)) {
      const bm = sRaw.match(/\*\*(.+?)\*\*/)
      if (!bm) continue
      const term = bm[1].trim()
      if (term.length < 3 || term.length > 45 || /^\d+$/.test(term)) continue
      const key = term.toLowerCase()
      if (seen.has(key)) continue
      const plain = stripMd(sRaw).replace(/\s+/g, ' ').trim()
      if (plain.length < 15) continue
      const at = plain.indexOf(term)
      if (at < 0) continue
      let text2
      if (plain.length <= 180) {
        text2 = plain.slice(0, at) + '____' + plain.slice(at + term.length)
      } else {
        // Fenêtre de contexte : ~100 caractères avant / ~70 après le trou.
        let start = Math.max(0, at - 100)
        let end = Math.min(plain.length, at + term.length + 70)
        if (start > 0) { const sp = plain.indexOf(' ', start); if (sp > -1 && sp < at) start = sp + 1 }
        if (end < plain.length) { const sp = plain.lastIndexOf(' ', end); if (sp > at + term.length) end = sp }
        text2 = (start > 0 ? '… ' : '') + plain.slice(start, at) + '____' + plain.slice(at + term.length, end) + (end < plain.length ? ' …' : '')
      }
      if (!text2.includes('____')) continue
      seen.add(key)
      out.push({ text: text2, answer: term, explain: `Le mot manquant : « ${term} ».` })
    }
  }
  for (const b of sec.blocks || []) {
    if (['p', 'tip', 'warning', 'example'].includes(b.t) && b.c) addFrom(b.c)
    if (b.t === 'list' && Array.isArray(b.c)) for (const it of b.c) addFrom(it)
  }
  if (Array.isArray(sec.points)) for (const it of sec.points) addFrom(it)
  return out
}

// Génère un exercice PROPRE au chapitre (QCM ou texte à trous, JAMAIS de
// flashcard), tiré uniquement du contenu de SA section.
function sectionExercise(sec, theme, idx) {
  const id = `${theme.id}::auto${idx}`
  const blocks = sec.blocks || []
  const isDateHead = (h) => /date|année/i.test(h || '')

  // 1) QCM de dates (tableaux « Date | … » + frises).
  const dpairs = []
  for (const b of blocks) {
    if (b.t === 'table' && isDateHead((b.head || [])[0])) {
      for (const r of b.rows || []) if (r[0] && r[1]) dpairs.push({ d: stripMd(String(r[0])), e: stripMd(String(r[1])) })
    } else if (b.t === 'frise') {
      for (const e of b.events || []) if (e.date && e.label) dpairs.push({ d: stripMd(e.date), e: stripMd(e.label) })
    }
  }
  const uniqEvents = [...new Set(dpairs.map((p) => p.e))]
  if (dpairs.length >= 3 && uniqEvents.length >= 3) {
    return qcmFromPairs(
      dpairs.map((p) => ({ q: `Que se passe-t-il en ${p.d} ?`, a: p.e, e: `${p.d} : ${p.e}` })),
      id, 'Quiz — les dates de ce chapitre',
    )
  }

  // 2) QCM « notion → définition » : tableaux à 2 colonnes + puces « **terme** : déf ».
  const defPairs = []
  for (const b of blocks) {
    if (b.t === 'table' && (b.head || []).length === 2 && !isDateHead((b.head || [])[0])) {
      for (const r of b.rows || []) {
        const term = stripMd(String(r[0] || ''))
        const def = stripMd(String(r[1] || ''))
        if (term && def) defPairs.push({ q: `À quoi correspond : « ${term} » ?`, a: def, e: `${term} → ${def}` })
      }
    }
  }
  const notionItems = []
  for (const b of blocks) if (b.t === 'list' && Array.isArray(b.c)) notionItems.push(...b.c)
  if (Array.isArray(sec.points)) notionItems.push(...sec.points)
  for (const item of notionItems) {
    const s = String(item)
    if (!s.includes('**')) continue
    const m = s.match(/^(.{3,60}?)\s*[:—–]\s+(.+)$/)
    if (!m) continue
    const term = stripMd(m[1]).replace(/[;,.]$/, '').trim()
    const def = stripMd(m[2]).replace(/[;.]$/, '').trim()
    if (term && def.length > 3 && term.length <= 50) defPairs.push({ q: `Que signifie : « ${term} » ?`, a: def, e: `${term} → ${def}` })
  }
  const qDef = qcmFromPairs(defPairs, id, 'Quiz — les notions de ce chapitre')
  if (qDef) return qDef

  // 3) QCM à partir d'un tableau à 3-4 colonnes (1ʳᵉ colonne = entrée).
  const widePairs = []
  for (const b of blocks) {
    const w = (b.head || []).length
    if (b.t === 'table' && w >= 3 && w <= 4 && !isDateHead((b.head || [])[0])) {
      const label = stripMd(String((b.head || [])[0] || ''))
      for (const r of b.rows || []) {
        const entry = stripMd(String(r[0] || ''))
        const rest = r.slice(1).map((x) => stripMd(String(x || ''))).filter(Boolean).join(' — ')
        if (entry && rest && entry.length <= 40) widePairs.push({ q: `${label} — « ${entry} » : ?`, a: rest, e: `${entry} → ${rest}` })
      }
    }
  }
  const qWide = qcmFromPairs(widePairs, id, 'Quiz — ce chapitre')
  if (qWide) return qWide

  // 4) Texte à trous à partir des termes en gras de la section.
  const trouQ = trouFromBold(sec)
  if (trouQ.length >= 1) {
    return { id, type: 'trou', title: 'Texte à trous — ce chapitre', icon: '✏️', questions: trouQ.slice(0, 8) }
  }
  return null
}

export function getThemeChapter(themeId, idx) {
  const theme = ALL_CHAPTERS[themeId]
  if (!theme) return null
  const chs = themeChapters(theme)
  return chs[Number(idx)] || null
}

// Construit le « Test du thème » : un mélange de QCM (auto-corrigés),
// de questions à rédiger (dérivées des flashcards) et de cas pratiques
// (dérivés des exemples travaillés du cours). Aucune saisie manuelle :
// tout est reconstruit à partir du contenu existant, pour toutes les matières.
export function buildThemeTest(themeId) {
  const theme = ALL_CHAPTERS[themeId]
  if (!theme) return { qcm: [], redac: [], cas: [] }
  const qcm = []
  const redac = [] // questions à rédiger : { prompt, answer, style }
  for (const g of theme.games || []) {
    if (g.type === 'qcm') {
      for (const q of g.questions) qcm.push({ ...q })
    } else if (g.type === 'vraifaux') {
      for (const q of g.questions)
        qcm.push({ q: q.statement, choices: ['Vrai', 'Faux'], answer: q.answer ? 0 : 1, explain: q.explain })
    } else if (g.type === 'flashcard') {
      for (const c of g.cards) redac.push({ prompt: c.front, answer: c.back, style: 'def' })
    } else if (g.type === 'association') {
      for (const p of g.pairs) redac.push({ prompt: p.left, answer: p.right, style: 'def' })
    } else if (g.type === 'tri') {
      const labels = Object.fromEntries((g.categories || []).map((c) => [c.id, c.label]))
      for (const it of g.items || [])
        redac.push({ prompt: it.text, answer: labels[it.cat] || '', style: 'tri' })
    }
  }
  // Questions « développe ce sous-thème » : à partir de chaque section du
  // cours (intitulé → texte de la section comme corrigé). Garantit des
  // questions à rédiger pour TOUS les thèmes, même sans flashcards.
  const sectionRedac = []
  for (const sec of theme.cours || []) {
    const txt = sectionPlainText(sec)
    if (sec.h && txt.length > 40) sectionRedac.push({ prompt: sec.h, answer: txt, style: 'section' })
  }

  // Assemblage : on garantit quelques questions de développement, puis on
  // complète avec les définitions/classements, en évitant les doublons.
  const seen = new Set()
  const out = []
  const push = (r) => {
    const k = (r.prompt || '').toLowerCase().trim()
    if (!k || !r.answer || seen.has(k)) return
    seen.add(k)
    out.push(r)
  }
  sectionRedac.slice(0, 3).forEach(push)
  shuffle(redac).forEach(push)
  sectionRedac.slice(3).forEach(push)

  const cas = []
  for (const sec of theme.cours || []) {
    for (const b of sec.blocks || []) {
      if (b.t === 'example') cas.push({ prompt: b.h || 'Analyse ce cas', answer: b.c })
    }
  }
  return {
    qcm: shuffle(qcm).slice(0, 8),
    redac: out.slice(0, 10),
    cas: cas.slice(0, 4),
  }
}

// Extrait un texte lisible (avec markdown) d'une section de cours, pour servir
// de corrigé à une question à rédiger. Gère le format « blocks » et l'ancien
// format « points ».
function sectionPlainText(sec) {
  const parts = []
  if (sec.blocks) {
    for (const b of sec.blocks) {
      if (b.t === 'p' || b.t === 'formula' || b.t === 'tip' || b.t === 'warning') parts.push(b.c)
      else if (b.t === 'list') parts.push(b.c.map((x) => '• ' + x).join('\n'))
      else if (b.t === 'table') {
        const head = (b.head || []).filter(Boolean).join(' · ')
        const rows = (b.rows || []).map((r) => '• ' + r.map(String).join(' — ')).join('\n')
        parts.push([head, rows].filter(Boolean).join('\n'))
      }
    }
  } else {
    if (sec.intro) parts.push(sec.intro)
    if (sec.points) parts.push(sec.points.map((x) => '• ' + x).join('\n'))
    if (sec.formula) parts.push(sec.formula)
  }
  return parts.join('\n')
}

// Construit le jeu de questions du Quiz noté d'un chapitre à partir de tous
// les items « qcm » et « vraifaux » présents dans ses mini-jeux.
export function buildQuiz(chapterId) {
  const c = ALL_CHAPTERS[chapterId]
  if (!c) return []
  const out = []
  for (const g of c.games || []) {
    if (g.type === 'qcm') {
      for (const q of g.questions) out.push({ ...q })
    } else if (g.type === 'vraifaux') {
      for (const q of g.questions)
        out.push({
          q: q.statement,
          choices: ['Vrai', 'Faux'],
          answer: q.answer ? 0 : 1,
          explain: q.explain,
        })
    }
  }
  return shuffle(out).slice(0, 10)
}

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Recherche simple (chapitres + matières + intitulés de jeux/notions).
export function search(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const res = []
  for (const s of SUBJECTS) {
    if (s.name.toLowerCase().includes(q))
      res.push({ type: 'subject', id: s.id, label: s.name, sub: 'Matière', color: s.color })
    for (const c of s.chapters) {
      const hay = (c.name + ' ' + (c.short || '') + ' ' + (c.keywords || '')).toLowerCase()
      if (hay.includes(q))
        res.push({
          type: 'chapter',
          id: c.id,
          subjectId: s.id,
          label: c.name,
          sub: s.name,
          color: s.color,
        })
    }
  }
  return res.slice(0, 12)
}

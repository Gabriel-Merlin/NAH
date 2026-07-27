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
import { premiereSubjects } from './premiere.js'
import { LESSONS } from './lessons.js'

export const SUBJECTS = [
  gestion,
  management,
  droit,
  economie,
  maths,
  philosophie,
  histoire,
  langues,
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
  if (chapters.length) {
    games.forEach((g, k) => chapters[k % chapters.length].games.push(g))
  }
  return chapters
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
  const redac = []
  for (const g of theme.games || []) {
    if (g.type === 'qcm') {
      for (const q of g.questions) qcm.push({ ...q })
    } else if (g.type === 'vraifaux') {
      for (const q of g.questions)
        qcm.push({ q: q.statement, choices: ['Vrai', 'Faux'], answer: q.answer ? 0 : 1, explain: q.explain })
    } else if (g.type === 'flashcard') {
      for (const c of g.cards) redac.push({ prompt: c.front, answer: c.back })
    }
  }
  const cas = []
  for (const sec of theme.cours || []) {
    for (const b of sec.blocks || []) {
      if (b.t === 'example') cas.push({ prompt: b.h || 'Analyse ce cas', answer: b.c })
    }
  }
  return {
    qcm: shuffle(qcm).slice(0, 8),
    redac: shuffle(redac).slice(0, 5),
    cas: cas.slice(0, 3),
  }
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

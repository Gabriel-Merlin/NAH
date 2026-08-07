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
    // Chaque jeu est rattaché à la SECTION (chapitre) qui traite sa notion,
    // via la table GAME_SECTION (relue à la main) : un exercice de TVA tombe
    // dans le chapitre « TVA », la pyramide de Maslow dans le chapitre
    // « Motivation », etc. À défaut d'entrée dans la table, on répartit le jeu
    // régulièrement sur toute la longueur du thème (⌊k × nbChap / nbJeux⌋),
    // pour éviter de laisser de longues séries de chapitres sans exercice.
    games.forEach((g, k) => {
      let idx = GAME_SECTION[g.id]
      if (idx == null || idx < 0 || idx >= chapters.length) {
        idx = Math.floor((k * chapters.length) / games.length)
      }
      chapters[Math.min(idx, chapters.length - 1)].games.push(g)
    })
  }
  // Garantit qu'AUCUN chapitre ne reste sans exercice : les chapitres non
  // pourvus reçoivent un exercice généré à partir de LEUR propre contenu
  // (quiz de dates ou flashcards de révision), donc différent d'un chapitre à
  // l'autre.
  for (const ch of chapters) {
    if (ch.games.length === 0) {
      const ex = autoExercise(ch.section, theme, ch.idx)
      if (ex) ch.games.push(ex)
    }
  }
  return chapters
}

// Retire le markdown gras/italique pour un texte propre dans un exercice.
function stripMd(s) {
  return String(s || '').replace(/\*\*/g, '').replace(/\*/g, '').trim()
}

// Génère un exercice PROPRE au chapitre à partir de son contenu, pour que
// CHAQUE chapitre ait un exercice (naturellement différent d'un chapitre à
// l'autre puisque tiré de son propre contenu).
function autoExercise(sec, theme, idx) {
  const id = `${theme.id}::auto${idx}`
  // 1) Quiz de dates : paires « date → événement » (tableaux « Date | … » + frises).
  const pairs = []
  for (const b of sec.blocks || []) {
    if (b.t === 'table' && /date|année/i.test((b.head || [])[0] || '')) {
      for (const r of b.rows || []) if (r[0] && r[1]) pairs.push({ d: stripMd(String(r[0])), e: stripMd(String(r[1])) })
    } else if (b.t === 'frise') {
      for (const e of b.events || []) if (e.date && e.label) pairs.push({ d: stripMd(e.date), e: stripMd(e.label) })
    }
  }
  const uniqEvents = [...new Set(pairs.map((p) => p.e))]
  if (pairs.length >= 3 && uniqEvents.length >= 3) {
    const questions = shuffle(pairs).slice(0, Math.min(8, pairs.length)).map((p) => {
      const distractors = shuffle(uniqEvents.filter((e) => e !== p.e)).slice(0, 3)
      const choices = shuffle([p.e, ...distractors])
      return { q: `Que se passe-t-il en ${p.d} ?`, choices, answer: choices.indexOf(p.e), explain: `${p.d} : ${p.e}` }
    })
    return { id, type: 'qcm', title: 'Quiz — les dates de ce chapitre', icon: '📅', questions }
  }
  // 2) Flashcards à partir d'un tableau (2 à 4 colonnes, non daté) : la 1ʳᵉ
  // colonne sert de recto (le terme), les autres de verso (la définition).
  const cards = []
  for (const b of sec.blocks || []) {
    const w = (b.head || []).length
    if (b.t === 'table' && w >= 2 && w <= 4 && !/date|année/i.test((b.head || [])[0] || '')) {
      for (const r of b.rows || []) {
        const front = stripMd(String(r[0] || ''))
        const back = r.slice(1).map((x) => stripMd(String(x || ''))).filter(Boolean).join(' — ')
        // Sur un tableau à 2 colonnes on garde tout (terme|définition) ; au-delà,
        // on exige un recto court (une vraie « entrée » de tableau).
        if (front && back && (w === 2 || front.length <= 40)) cards.push({ front, back })
      }
    }
  }
  if (cards.length >= 3) {
    return { id, type: 'flashcard', title: 'Flashcards — révise ce chapitre', icon: '🃏', cards: cards.slice(0, 12) }
  }
  // 2b) Flashcards de « notions » : puces de la forme « … **terme** … : définition ».
  // On récupère le texte avant le premier séparateur fort (: — –) comme recto
  // (à condition qu'il contienne un terme en gras et reste court) et le reste
  // comme verso. Transforme les listes de définitions en vraies flashcards.
  const notionItems = []
  for (const b of sec.blocks || []) if (b.t === 'list' && Array.isArray(b.c)) notionItems.push(...b.c)
  if (Array.isArray(sec.points)) notionItems.push(...sec.points)
  const notionCards = []
  for (const item of notionItems) {
    const s = String(item)
    if (!s.includes('**')) continue
    const m = s.match(/^(.{3,60}?)\s*[:—–]\s+(.+)$/)
    if (!m) continue
    const front = stripMd(m[1]).replace(/[;,.]$/, '').trim()
    const back = stripMd(m[2]).replace(/[;.]$/, '').trim()
    if (front && back.length > 3 && front.length <= 50 && !notionCards.some((c) => c.front === front)) {
      notionCards.push({ front, back })
    }
  }
  if (notionCards.length >= 3) {
    return { id, type: 'flashcard', title: 'Flashcards — notions clés du chapitre', icon: '🃏', cards: notionCards.slice(0, 12) }
  }
  // 3) Repli : découpe le contenu en quelques cartes « idée clé » (une par
  // paragraphe/encadré), plutôt qu'une seule grande carte illisible.
  const chunks = []
  for (const b of sec.blocks || []) {
    if (['p', 'tip', 'warning', 'example'].includes(b.t) && b.c) chunks.push(stripMd(String(b.c)))
  }
  if (!chunks.length && Array.isArray(sec.points)) chunks.push(...sec.points.map((x) => stripMd(String(x))))
  const usable = chunks.map((c) => c.trim()).filter((c) => c.length > 25)
  if (usable.length >= 2) {
    const cards = usable.slice(0, 6).map((c, k) => {
      const bold = String((sec.blocks || []).find((b) => ['p', 'tip', 'warning', 'example'].includes(b.t) && stripMd(String(b.c || '')).trim() === c)?.c || '').match(/\*\*(.+?)\*\*/)
      return { front: bold ? bold[1].trim() : `${sec.h || 'Chapitre'} — idée ${k + 1}`, back: c.slice(0, 420) }
    })
    return { id, type: 'flashcard', title: 'Flashcards — révise ce chapitre', icon: '🃏', cards }
  }
  // 3b) Dernier recours : une seule carte « notion → contenu du chapitre ».
  const txt = sectionPlainText(sec)
  if (txt && txt.length > 30) {
    return {
      id, type: 'flashcard', title: 'Révise ce chapitre', icon: '🃏',
      cards: [{ front: `Que retenir de : « ${sec.h || 'ce chapitre'} » ?`, back: txt.slice(0, 700) }],
    }
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

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
import { sig } from './sig.js'
import { premiereSubjects } from './premiere.js'
import { LESSONS } from './lessons.js'
import { DOC_STUDIES } from './docstudies.js'
import { GAME_SECTION } from './sections.js'
import { THEME_TERMS, subjectFallbackFor } from './keyterms.js'

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
  sig,
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
const CHAPTER_GAME_TYPES = new Set(['calcul', 'trou', 'tri', 'ordre', 'memory', 'doc', 'verbs', 'grammar', 'comprehension', 'sql'])

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
  // Chaque chapitre reçoit EN PLUS tout un ensemble d'exercices générés à partir
  // de SA SEULE section (QCM notions/dates/tableau, textes à trous en plusieurs
  // lots, « réponse à écrire »…) : on multiplie ainsi par ~5 le nombre
  // d'exercices par chapitre, et le contenu est mélangé/retiré à chaque partie —
  // jamais deux fois le même. Aucune flashcard ici (réservée à l'app installée).
  for (const ch of chapters) {
    const gen = sectionExercises(ch.section, theme, ch.idx)
    for (const g of gen) if (!ch.games.some((x) => x.id === g.id)) ch.games.push(g)
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

// Extrait toutes les « matières premières » exploitables d'une section :
// paires de dates, paires notion→définition, lignes de tableaux larges. Sert de
// base à TOUS les exercices générés du chapitre.
function sectionPairs(sec) {
  const blocks = sec.blocks || []
  const isDateHead = (h) => /date|année/i.test(h || '')
  const datePairs = [] // { d, e }
  const defPairs = []  // { term, def }
  const widePairs = [] // { q, a, e }
  for (const b of blocks) {
    if (b.t === 'table' && isDateHead((b.head || [])[0])) {
      for (const r of b.rows || []) if (r[0] && r[1]) datePairs.push({ d: stripMd(String(r[0])), e: stripMd(String(r[1])) })
    } else if (b.t === 'frise') {
      for (const e of b.events || []) if (e.date && e.label) datePairs.push({ d: stripMd(e.date), e: stripMd(e.label) })
    } else if (b.t === 'table' && (b.head || []).length === 2 && !isDateHead((b.head || [])[0])) {
      for (const r of b.rows || []) {
        const term = stripMd(String(r[0] || ''))
        const def = stripMd(String(r[1] || ''))
        if (term && def && term.length <= 60) defPairs.push({ term, def })
      }
    } else if (b.t === 'table') {
      const w = (b.head || []).length
      if (w >= 3 && w <= 4 && !isDateHead((b.head || [])[0])) {
        const label = stripMd(String((b.head || [])[0] || ''))
        for (const r of b.rows || []) {
          const entry = stripMd(String(r[0] || ''))
          const rest = r.slice(1).map((x) => stripMd(String(x || ''))).filter(Boolean).join(' — ')
          if (entry && rest && entry.length <= 40) widePairs.push({ q: `${label} — « ${entry} » : ?`, a: rest, e: `${entry} → ${rest}` })
        }
      }
    }
  }
  // notion → définition à partir des puces « **terme** : définition ».
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
    if (term && def.length > 3 && term.length <= 50) defPairs.push({ term, def })
  }
  // Dédoublonnage des définitions (même terme répété).
  const seen = new Set()
  const uniqDefs = defPairs.filter((p) => { const k = p.term.toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true })
  return { datePairs, defPairs: uniqDefs, widePairs }
}

// Fabrique un exercice « à écrire » (type saisie) à partir d'items
// { prompt, answer, alt?, explain }. Réponses courtes uniquement (saisissables).
// À partir d'un terme (« PGI / ERP », « Système d'information (SIG) »), dérive
// les réponses acceptées en plus du terme complet : chaque variante séparée par
// « / » ou « ou », et l'acronyme entre parenthèses. Ainsi « PGI » seul est
// accepté quand la réponse attendue est « PGI / ERP ». (On ne découpe jamais sur
// « , » ni sur les chiffres pour ne pas casser les dates ou les nombres.)
function termVariants(term) {
  const raw = String(term || '').trim()
  if (!raw) return []
  const out = new Set()
  const push = (s) => {
    const v = String(s || '').replace(/\s+/g, ' ').replace(/[;,.]+$/, '').trim()
    if (v && v.toLowerCase() !== raw.toLowerCase()) out.add(v)
  }
  push(raw.replace(/\s*\([^)]*\)/g, ' ')) // le terme sans ses parenthèses
  for (const part of raw.split(/\s*(?:\/| ou )\s*/i)) {
    push(part.replace(/\s*\([^)]*\)/g, ' ')) // « PGI (ERP) » → « PGI »
    const m = part.match(/\(([^)]+)\)/) // acronyme entre parenthèses → « ERP »
    if (m) push(m[1])
  }
  return [...out]
}

function saisieFromItems(items, id, title, icon = '⌨️') {
  const qs = shuffle(items)
    .filter((x) => x.answer && String(x.answer).trim().length > 0 && String(x.answer).length <= 40)
    .slice(0, 10)
  return qs.length >= 2 ? { id, type: 'saisie', title, icon, questions: qs } : null
}

// Vrai / Faux à partir des définitions : une moitié d'affirmations vraies, une
// moitié fausses (le terme est associé à une AUTRE définition de la section).
function vraiFauxFromDefs(defPairs, id, title) {
  if (defPairs.length < 4) return null
  const pool = shuffle(defPairs)
  const qs = []
  pool.slice(0, 8).forEach((p, k) => {
    if (k % 2 === 0) {
      qs.push({ statement: `« ${p.term} » : ${p.def}`, answer: true, explain: `Exact. ${p.term} → ${p.def}` })
    } else {
      const other = pool.find((o) => o.term !== p.term && o.def !== p.def)
      if (other) qs.push({ statement: `« ${p.term} » : ${other.def}`, answer: false, explain: `Faux. ${p.term} → ${p.def}` })
    }
  })
  return qs.length >= 4 ? { id, type: 'vraifaux', title, icon: '⚖️', questions: shuffle(qs) } : null
}

// Remise en ordre chronologique à partir de repères datés (années lisibles).
function ordreFromDates(datePairs, id, title) {
  const parsed = datePairs
    .map((p) => ({ y: parseInt(String(p.d).match(/-?\d{3,4}/)?.[0] ?? 'NaN', 10), d: p.d, e: p.e }))
    .filter((x) => !Number.isNaN(x.y) && x.e)
  const seen = new Set()
  const uniq = parsed.filter((x) => { if (seen.has(x.y)) return false; seen.add(x.y); return true })
  if (uniq.length < 4) return null
  const sorted = [...uniq].sort((a, b) => a.y - b.y).slice(0, 6)
  return { id, type: 'ordre', title, icon: '📶', steps: sorted.map((x) => `${x.d} — ${x.e}`) }
}

// Génère un ENSEMBLE d'exercices propres au chapitre (jamais de flashcard),
// tirés uniquement du contenu de SA section. Objectif : quintupler le nombre
// d'exercices par rapport à l'unique quiz d'avant. Chaque exercice a un id
// stable et distinct (pour la progression) ; le contenu, lui, est mélangé à
// chaque partie par les composants — jamais deux fois le même.
function sectionExercises(sec, theme, idx) {
  const base = `${theme.id}::${idx}`
  const { datePairs, defPairs, widePairs } = sectionPairs(sec)
  const out = []
  const uniqEvents = [...new Set(datePairs.map((p) => p.e))]

  // 1) QCM des dates + « écris la date » + remise en ordre chronologique.
  if (datePairs.length >= 3 && uniqEvents.length >= 3) {
    const qDate = qcmFromPairs(datePairs.map((p) => ({ q: `Que se passe-t-il en ${p.d} ?`, a: p.e, e: `${p.d} : ${p.e}` })), `${base}::qdate`, 'QCM — les dates du chapitre')
    if (qDate && qDate.questions.length >= 3) out.push(qDate)
    const sDate = saisieFromItems(datePairs.filter((p) => String(p.d).length <= 24).map((p) => ({ prompt: `À quelle date : ${p.e} ?`, answer: p.d, explain: `${p.e} → ${p.d}` })), `${base}::sdate`, 'Écris la date — ce chapitre', '📅')
    if (sDate) out.push(sDate)
    const ord = ordreFromDates(datePairs, `${base}::ordre`, 'Remets dans l’ordre — chronologie')
    if (ord) out.push(ord)
  }

  // 2) QCM des notions (jusqu'à 2 séries) + « écris le terme » + association +
  //    vrai/faux, tous tirés des définitions de la section.
  if (defPairs.length >= 2) {
    const defItems = defPairs.map((p) => ({ q: `Que signifie : « ${p.term} » ?`, a: p.def, e: `${p.term} → ${p.def}` }))
    if (defPairs.length >= 10) {
      const half = Math.ceil(defItems.length / 2)
      const qa = qcmFromPairs(defItems.slice(0, half), `${base}::qdef0`, 'QCM — notions (série 1)')
      const qb = qcmFromPairs(defItems.slice(half), `${base}::qdef1`, 'QCM — notions (série 2)')
      if (qa && qa.questions.length >= 3) out.push(qa)
      if (qb && qb.questions.length >= 3) out.push(qb)
    } else {
      const qDef = qcmFromPairs(defItems, `${base}::qdef`, 'QCM — les notions du chapitre')
      if (qDef && qDef.questions.length >= 3) out.push(qDef)
    }

    const vf = vraiFauxFromDefs(defPairs, `${base}::vf`, 'Vrai ou faux — les notions')
    if (vf) out.push(vf)

    const shortTerms = defPairs.filter((p) => p.term.length <= 32)
    const sTerm = saisieFromItems(shortTerms.map((p) => ({ prompt: `Quel terme correspond à cette définition ?\n« ${p.def} »`, answer: p.term, alt: termVariants(p.term), explain: `${p.term} : ${p.def}` })), `${base}::sterm`, 'Écris le terme — ce chapitre', '🔤')
    if (sTerm) out.push(sTerm)

    if (defPairs.length >= 3) {
      // Association notion ↔ définition (définitions abrégées pour tenir à l'écran).
      const rseen = new Set()
      const pairs = shuffle(defPairs)
        .map((p) => ({ left: p.term, right: p.def.length > 90 ? p.def.slice(0, 88).replace(/\s\S*$/, '') + '…' : p.def }))
        .filter((p) => { const k = p.right.toLowerCase(); if (rseen.has(k)) return false; rseen.add(k); return true })
        .slice(0, 6)
      if (pairs.length >= 3) out.push({ id: `${base}::assoc`, type: 'association', title: 'Association — notions du chapitre', icon: '🔗', pairs })
    }
  }

  // 3) QCM à partir d'un tableau large (3-4 colonnes).
  const qWide = qcmFromPairs(widePairs, `${base}::qwide`, 'QCM — tableau du chapitre')
  if (qWide && qWide.questions.length >= 3) out.push(qWide)

  // 4) Textes à trous : découpés en plusieurs lots + une version « à écrire ».
  const trou = trouFromBold(sec)
  if (trou.length >= 2) {
    const batches = []
    for (let k = 0; k < trou.length; k += 6) batches.push(trou.slice(k, k + 6))
    batches.slice(0, 3).forEach((b, bi) => {
      if (b.length >= 2) out.push({ id: `${base}::trou${bi}`, type: 'trou', title: batches.length > 1 ? `Texte à trous — série ${bi + 1}` : 'Texte à trous — ce chapitre', icon: '✏️', questions: b })
    })
    const sTrou = saisieFromItems(trou.map((q) => ({ prompt: `Complète par le mot exact :\n${q.text}`, answer: q.answer, explain: q.explain })), `${base}::strou`, 'Complète — à écrire', '✍️')
    if (sTrou) out.push(sTrou)
  }

  return out
}

// Flashcards d'une section (recto = terme, verso = définition). RÉSERVÉ à
// l'application installée : on ne les ajoute JAMAIS dans le navigateur. Les
// cartes sont mélangées à chaque partie par le composant.
export function flashcardsForSection(sec, theme, idx) {
  const { defPairs, datePairs } = sectionPairs(sec)
  const cards = []
  for (const p of defPairs) cards.push({ front: p.term, back: p.def })
  for (const p of datePairs) cards.push({ front: p.e, back: p.d })
  if (cards.length < 3) return null
  // Dédoublonnage recto.
  const seen = new Set()
  const uniq = cards.filter((c) => { const k = String(c.front).toLowerCase(); if (!c.front || seen.has(k)) return false; seen.add(k); return true })
  if (uniq.length < 3) return null
  return { id: `${theme.id}::${idx}::cards`, type: 'flashcard', title: 'Flashcards — ce chapitre', icon: '🃏', cards: uniq.slice(0, 16) }
}

// Une section a-t-elle déjà un encadré « Définitions clés » écrit à la main ?
// (pour ne pas en afficher un second, généré, juste en dessous).
function hasHandDefinitions(sec) {
  for (const b of sec.blocks || []) {
    if (b.t === 'p' && /d[ée]finitions?\s+cl[ée]s/i.test(stripMd(b.c || ''))) return true
    if (b.t === 'table' && (b.head || []).length === 2 && /terme|notion|mot/i.test(String((b.head || [])[0] || '')) && /d[ée]finition|sens/i.test(String((b.head || [])[1] || ''))) return true
  }
  return false
}

// 5 « Définitions clés » pour UNE section de cours : d'abord les termes définis
// dans la section elle-même, complétés (par rotation, pour varier d'une section
// à l'autre) par la banque du thème puis, en dernier recours, la banque de la
// matière. Renvoie { skip, defs }. skip = true si la section a déjà son propre
// encadré de définitions écrit à la main.
export function sectionDefinitions(sec, themeId, subjectId, sectionIdx = 0, count = 5) {
  if (!sec || hasHandDefinitions(sec)) return { skip: true, defs: [] }
  const out = []
  const seen = new Set()
  const add = (term, def) => {
    const t = stripMd(String(term || '')).trim()
    const d = stripMd(String(def || '')).trim()
    const k = t.toLowerCase()
    if (!t || !d || t.length > 48 || seen.has(k) || out.length >= count) return
    seen.add(k); out.push({ term: t, def: d })
  }
  // 1) Définitions propres à la section (les plus pertinentes).
  for (const p of sectionPairs(sec).defPairs) add(p.term, p.def)
  // 2) Complément depuis la banque du thème, décalée selon la section.
  const bank = THEME_TERMS[themeId] || []
  if (bank.length && out.length < count) {
    const start = (sectionIdx * 2) % bank.length
    const rotated = [...bank.slice(start), ...bank.slice(0, start)]
    for (const [term, def] of rotated) add(term, def)
  }
  // 3) Dernier filet : banque de la matière.
  if (out.length < count) for (const [term, def] of subjectFallbackFor(subjectId)) add(term, def)
  return { skip: false, defs: out }
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

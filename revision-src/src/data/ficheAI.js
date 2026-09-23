// Génération d'une FICHE DE RÉVISION à partir d'un texte de cours (issu d'une
// photo via OCR, ou saisi/collé). Tout est traité SUR L'APPAREIL : on repère les
// définitions, les repères chiffrés, les idées clés et les mots-clés, puis on
// structure le tout. Aucune donnée n'est envoyée nulle part.

const STOP = new Set(('au aux avec ce ces dans de des du elle en et eux il je la le les leur lui ma mais me même mes moi mon ne nos notre nous on ou où par pas pour qu que qui sa se ses son sur ta te tes toi ton tu un une vos votre vous c d j l à m n s t y été étée étées étés être ai aie aient aies ait as au aura aurai auraient aurais aurait auras aurez auriez aurions aurons auront aux avaient avais avait avec avez aviez avions avons ayant ce ceci cela ces cet cette comme dans de des du donc dont elle elles en encore est et eux fait faire fais font ici il ils je la le les leur leurs lui mais me mes moi mon ne nos notre nous on ont ou par parce pas peu plus pour quand que quel quelle quelles quels qui sa sans se selon ses si son sont sous sur ta te tes toi ton tous tout toute toutes tu un une vos votre vous y a alors aussi car ceux chaque cet elle deux entre ètre leur même non notamment doit peut être cela ceux ainsi').split(' '))

function clean(raw) {
  return (raw || '')
    .replace(/\r/g, '\n')
    .replace(/[«»""]/g, '"')
    .replace(/[ \t]+/g, ' ')
    .replace(/ ?\n ?/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

// Aplatit les retours à la ligne « mous » (mots coupés par l'OCR) en espaces,
// tout en gardant les vraies séparations de paragraphes.
function flatten(text) {
  return text.replace(/([^\n])\n(?!\n)/g, '$1 ').replace(/\n{2,}/g, '\n').replace(/[ \t]+/g, ' ')
}

// Filtre anti-bruit OCR : une vraie phrase a beaucoup de lettres, des mots
// « normaux » et peu de symboles parasites (| : > = _ *). Rejette les lignes du
// type « Era i —acncnce | nanvec ; : | : > - | à ) ».
function isProse(s) {
  s = (s || '').trim()
  if (s.length < 14) return false
  const compact = s.replace(/\s/g, '')
  if (!compact.length) return false
  const letters = (compact.match(/[a-zà-ÿ]/gi) || []).length
  if (letters / compact.length < 0.62) return false
  const words = s.split(/\s+/).filter(Boolean)
  if (words.length < 4) return false
  const good = words.filter((w) => /^[«"'(]?[A-Za-zÀ-ÿ][a-zà-ÿA-ZÀ-Ö'’.-]*[)»"'.,;:!?%]?$/.test(w)).length
  if (good / words.length < 0.66) return false
  if (/[|=><~_*\\/]{2,}/.test(s)) return false
  if ((s.match(/[|=><~*_\\/]/g) || []).length > 2) return false
  // Trop de « mots » d'une seule lettre = charabia OCR.
  if (words.filter((w) => w.length === 1).length > 2) return false
  return true
}

// Découpe en phrases exploitables, propres (assez longues, pas du charabia).
function sentences(text) {
  return flatten(text)
    .replace(/\n+/g, ' ')
    .split(/(?<=[.!?…])\s+(?=[A-ZÀ-ÖÉÈÊ0-9])/)
    .map((s) => s.trim())
    .filter((s) => s.length >= 25 && s.length <= 320 && isProse(s))
}

// Repère les définitions : « Terme : définition » ou « Le terme est/désigne… ».
function termOk(term) {
  const words = term.split(/\s+/).filter(Boolean)
  if (!words.length || words.length > 6) return false
  if (/[|=><~_*\\/]/.test(term)) return false
  if (words.filter((w) => w.length === 1).length > 1) return false
  // Au moins un vrai mot d'au moins 3 lettres.
  return words.some((w) => /^[A-Za-zÀ-ÿ][a-zà-ÿA-ZÀ-Ö'’-]{2,}$/.test(w))
}
function defOk(def) {
  if (def.length < 12 || def.length > 240) return false
  const compact = def.replace(/\s/g, '')
  const letters = (compact.match(/[a-zà-ÿ]/gi) || []).length
  if (letters / compact.length < 0.6) return false
  if ((def.match(/[|=><~*_\\/]/g) || []).length > 2) return false
  const words = def.split(/\s+/).filter(Boolean)
  return words.length >= 3 && words.filter((w) => w.length === 1).length <= 2
}

function findDefinitions(text) {
  const ft = flatten(text)
  const defs = []
  const seen = new Set()
  const push = (term, def) => {
    term = term.replace(/^[\s"'*·•\-–—]+|[\s"']+$/g, '').trim()
    def = def.replace(/\s+/g, ' ').replace(/^[\s:–—-]+/, '').trim().replace(/[.;,]+$/, '')
    if (!term || !def) return
    if (term.length < 2 || term.length > 60) return
    if (!termOk(term) || !defOk(def)) return
    const key = term.toLowerCase()
    if (seen.has(key)) return
    seen.add(key)
    defs.push({ term: term.charAt(0).toUpperCase() + term.slice(1), def: def.charAt(0).toUpperCase() + def.slice(1) })
  }
  // 1) « Terme : définition » (on s'arrête à la fin de la phrase)
  const reColon = /(?:^|\.\s+)([A-Za-zÀ-ÿ][\wÀ-ÿ' -]{1,58}?)\s*[:：]\s+([^.\n]{8,220})/g
  let mc
  while ((mc = reColon.exec(ft)) && defs.length < 30) {
    if (mc[1].split(' ').length <= 6 && !/^https?/i.test(mc[2])) push(mc[1], mc[2])
  }
  // 2) « Le X est/désigne/correspond à/consiste à/se définit comme … »
  const verbs = 'est|sont|désigne|désignent|correspond à|correspondent à|consiste à|se définit comme|se définissent comme|représente|représentent|signifie'
  const re = new RegExp('\\b((?:l[ea]s?|un[e]?|les|des|du|de la|l\')\\s+)?([A-Za-zÀ-ÿ][\\wÀ-ÿ\'’-]{2,40}(?:\\s+[a-zà-ÿ][\\wÀ-ÿ\'’-]{2,40}){0,2})\\s+(?:' + verbs + ')\\s+([^.;\\n]{8,200})', 'gi')
  let m
  while ((m = re.exec(ft)) && defs.length < 30) {
    const term = m[2]
    if (STOP.has(term.toLowerCase())) continue
    push(term, m[3])
  }
  return defs.slice(0, 20)
}

// Questions / consignes de l'énoncé. On garde les interrogations directes ET les
// consignes à l'impératif (« Identifiez… », « Calculez… »), même noyées dans du
// bruit OCR. C'est l'essentiel d'un sujet d'étude de cas.
const CONSIGNES = 'identifiez|identifier|calculez|calculer|déterminez|déterminer|analysez|analyser|justifiez|justifier|montrez|montrer|expliquez|expliquer|présentez|présenter|rédigez|rédiger|complétez|compléter|comparez|comparer|précisez|préciser|caractérisez|caractériser|distinguez|distinguer|repérez|repérer|citez|citer|définissez|définir|indiquez|indiquer|proposez|proposer|évaluez|évaluer|commentez|commenter|qualifiez|qualifier|vérifiez|vérifier|interprétez|interpréter|étudiez|étudier|recensez|formulez|formuler|nommez|nommer|relevez|relever|dressez|dresser|schématisez|schématiser|rappelez|rappeler|décrivez|décrire|énoncez|énumérez|énumérer|repérez'

function cleanQuestion(q) {
  return q
    .replace(/^\s*(?:question|q)\s*n?[°º]?\s*\d+\s*[).:–\-]*\s*/i, '')
    .replace(/^\s*\d+\s*[).:–\-]\s*/, '')
    .replace(/^[\s\-•—>*|]+/, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function findQuestions(text) {
  const ft = flatten(text)
  const out = []
  const seen = new Set()
  const add = (raw) => {
    let q = cleanQuestion(raw)
    // Ne garde que la dernière phrase de l'unité : la question elle-même.
    const bits = q.split(/(?<=[.!])\s+/)
    q = cleanQuestion(bits[bits.length - 1])
    if (q.length < 12 || q.length > 240 || !isProse(q)) return
    if (!/\?$/.test(q)) q = q.replace(/\s*[.]+$/, '')
    const key = q.toLowerCase().slice(0, 60)
    if (seen.has(key)) return
    seen.add(key)
    out.push(q.charAt(0).toUpperCase() + q.slice(1))
  }
  // 1) Interrogations directes (se terminent par « ? »).
  for (const u of ft.split(/\n+/)) for (const s of u.split(/(?<=\?)\s+/)) if (/\?\s*$/.test(s)) add(s)
  // 2) Consignes à l'impératif : on repart du verbe jusqu'à la fin de la phrase.
  const reImp = new RegExp('\\b(' + CONSIGNES + ')\\b[^?.!\\n]{6,220}[?.!]?', 'gi')
  let m
  while ((m = reImp.exec(ft)) && out.length < 25) add(m[0])
  return out.slice(0, 15)
}

// Informations importantes des documents : ce qui porte une donnée (chiffre, %,
// €, ratio, date, formule) ou un fait de gestion clé. Le reste est ignoré.
const KEYTERMS_INFO = /\b(chiffre d'affaires|résultat|bénéfice|perte|marge|taux|rentabilité|montant|effectifs?|salariés?|part de marché|capitaux|capital|dette|emprunt|trésorerie|croissance|investissement|financement|coût|prix|stocks?|création|fondée?|siège|filiales?|dividende|autonomie financière|solvabilité|actif|passif|bilan)\b/i

const reConsigneStart = new RegExp('^\\s*(?:\\d+\\s*[).:\\-–]\\s*)?(?:' + CONSIGNES + ')\\b', 'i')

function findKeyInfo(text) {
  const out = []
  const seen = new Set()
  const add = (s) => { const k = s.toLowerCase().slice(0, 50); if (!seen.has(k)) { seen.add(k); out.push(s) } }
  for (const s of sentences(text)) {
    if (/\?\s*$/.test(s) || reConsigneStart.test(s)) continue // questions/consignes traitées à part
    const num = /\b(1[0-9]{3}|20[0-9]{2})\b/.test(s) || /\d+[\s,.]?\d*\s?%/.test(s) || /[=]/.test(s) || /\d+[\s,.]?\d*\s?(€|euros?|k€|M€|milliards?|millions?)/i.test(s) || /\d+\s*[/÷]\s*\d+/.test(s) || /\b[IVX]{1,4}(?:e|ᵉ|ème)\s+siècle/i.test(s)
    if (num || KEYTERMS_INFO.test(s)) add(s)
  }
  return out.slice(0, 12)
}

function guessTitle(text) {
  for (const line of text.split('\n')) {
    const l = line.trim()
    if (l.length >= 4 && l.length <= 70 && !/[.:]$/.test(l)) return l.replace(/\s+/g, ' ')
  }
  return 'Ma fiche de révision'
}

// Point d'entrée : construit la fiche structurée à partir du texte brut.
export function buildFiche(rawText, { title } = {}) {
  const text = clean(rawText)
  if (text.replace(/\s/g, '').length < 20) {
    return { title: title || 'Ma fiche de révision', empty: true, questions: [], definitions: [], keyInfo: [], flashcards: [] }
  }
  const definitions = findDefinitions(text)
  const questions = findQuestions(text)
  const keyInfo = findKeyInfo(text)
  const flashcards = definitions.map((d) => ({ front: d.term, back: d.def })).slice(0, 40)
  const kept = definitions.length + questions.length + keyInfo.length
  return {
    title: (title && title.trim()) || guessTitle(text),
    empty: false,
    lowQuality: kept < 2, // très peu d'éléments utiles : texte probablement mal lu
    questions,
    definitions,
    keyInfo,
    flashcards,
    charCount: text.length,
  }
}

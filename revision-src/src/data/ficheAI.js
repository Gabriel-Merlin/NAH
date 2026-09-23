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

// Repères chiffrés / dates / formules à mémoriser.
function findFacts(text) {
  const facts = []
  const seen = new Set()
  const add = (s) => { const k = s.toLowerCase().trim(); if (k && !seen.has(k)) { seen.add(k); facts.push(s.trim()) } }
  for (const s of sentences(text)) {
    const hasYear = /\b(1[0-9]{3}|20[0-9]{2})\b/.test(s)
    const hasPct = /\d+[\s,.]?\d*\s?%/.test(s)
    const hasFormula = /[=]/.test(s) && /[a-zà-ÿ]/i.test(s)
    const hasMoney = /\d+[\s,.]?\d*\s?(€|euros?|k€|M€|milliards?|millions?)/i.test(s)
    const hasCentury = /\b[IVX]{1,4}(?:e|ᵉ|ème)\s+siècle/i.test(s)
    if (hasYear || hasPct || hasFormula || hasMoney || hasCentury) add(s)
  }
  return facts.slice(0, 8)
}

// Idées clés : phrases importantes (connecteurs logiques, densité de mots-clés),
// hors définitions déjà extraites.
function findKeyPoints(text, defTerms, keywords) {
  const kwset = new Set(keywords.map((k) => k.toLowerCase()))
  const scored = sentences(text).map((s) => {
    const low = s.toLowerCase()
    let score = 0
    if (/\b(donc|ainsi|c'est-à-dire|en effet|par conséquent|il faut|on distingue|permet de|repose sur|se caractérise|à retenir|notamment|se traduit|entraîne|dépend)\b/.test(low)) score += 2
    for (const k of kwset) if (low.includes(k)) score += 1
    if (s.length > 60 && s.length < 200) score += 1
    for (const dt of defTerms) if (low.includes(dt.toLowerCase())) score -= 1 // évite de répéter une définition
    return { s, score }
  })
  scored.sort((a, b) => b.score - a.score)
  const out = []
  const seen = new Set()
  for (const { s } of scored) {
    const k = s.toLowerCase().slice(0, 40)
    if (seen.has(k)) continue
    seen.add(k)
    out.push(s)
    if (out.length >= 8) break
  }
  return out
}

// Mots-clés : termes significatifs les plus fréquents.
function findKeywords(text) {
  const freq = {}
  const words = text.toLowerCase().match(/[a-zà-ÿ][a-zà-ÿ'’-]{3,}/gi) || []
  for (const w0 of words) {
    const w = w0.replace(/['’-]+$/, '')
    if (w.length < 4 || STOP.has(w)) continue
    if (!/[aeiouyàâäéèêëïîôöùûü]/.test(w)) continue // pas de voyelle = charabia OCR
    if (/(.)\1\1/.test(w)) continue // 3 lettres identiques d'affilée = bruit
    freq[w] = (freq[w] || 0) + 1
  }
  return Object.entries(freq)
    .filter(([, n]) => n >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([w]) => w)
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
    return { title: title || 'Ma fiche de révision', empty: true, summary: '', keyPoints: [], definitions: [], facts: [], keywords: [], flashcards: [] }
  }
  const definitions = findDefinitions(text)
  const keywords = findKeywords(text)
  const facts = findFacts(text)
  const defTerms = definitions.map((d) => d.term)
  const keyPoints = findKeyPoints(text, defTerms, keywords)
  const allS = sentences(text)
  const summary = allS.slice(0, 2).join(' ')
  const flashcards = [
    ...definitions.map((d) => ({ front: d.term, back: d.def })),
    ...keywords.slice(0, 6).filter((k) => !definitions.some((d) => d.term.toLowerCase() === k)).map((k) => ({ front: `Que retenir sur « ${k} » ?`, back: keyPoints.find((p) => p.toLowerCase().includes(k)) || '' })).filter((c) => c.back),
  ].slice(0, 40)
  const kept = definitions.length + keyPoints.length + facts.length
  return {
    title: (title && title.trim()) || guessTitle(text),
    empty: false,
    lowQuality: kept < 3, // très peu de contenu propre : texte probablement mal lu
    summary,
    keyPoints,
    definitions,
    facts,
    keywords,
    flashcards,
    charCount: text.length,
  }
}

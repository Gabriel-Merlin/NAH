// Partage d'un paquet de flashcards sans serveur : on encode le paquet en un
// code compact (base64) que l'élève envoie à un ami (message, etc.). L'ami colle
// le code pour l'importer dans son espace « Révision ».
const TAG = 'RSTMG1:'

export function encodeDeck(deck) {
  try {
    const payload = { t: deck.title || 'Flashcards', c: (deck.cards || []).map((c) => [c.front, c.back]) }
    return TAG + btoa(unescape(encodeURIComponent(JSON.stringify(payload))))
  } catch {
    return ''
  }
}

export function decodeDeck(code) {
  try {
    const s = String(code || '').trim()
    if (!s) return null
    const b = s.startsWith(TAG) ? s.slice(TAG.length) : s
    const json = decodeURIComponent(escape(atob(b)))
    const p = JSON.parse(json)
    const cards = (p.c || [])
      .map((pair) => ({ front: String(pair?.[0] ?? ''), back: String(pair?.[1] ?? '') }))
      .filter((c) => c.front && c.back)
    if (!cards.length) return null
    return { title: String(p.t || 'Flashcards').slice(0, 80), cards: cards.slice(0, 400) }
  } catch {
    return null
  }
}

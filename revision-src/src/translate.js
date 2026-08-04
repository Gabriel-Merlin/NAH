// Moteur de traduction du site (dictionnaire + bascule de langue).
// Stratégie hybride :
//  1) glossaire hors-ligne (mots/expressions courants FR/EN/ES) → instantané ;
//  2) sinon, service en ligne gratuit MyMemory → traduit aussi les phrases.
// Les résultats en ligne sont mis en cache (localStorage) pour l'hors-ligne
// ultérieur et pour ménager les quotas.
import { GLOSSARY } from './data/glossary.js'

export const LANGS = { fr: 'Français', en: 'English', es: 'Español' }

// Index du glossaire : pour chaque langue, map mot(minuscule) → entrée.
const index = { fr: new Map(), en: new Map(), es: new Map() }
for (const entry of GLOSSARY) {
  for (const l of ['fr', 'en', 'es']) {
    const v = entry[l]
    if (v) index[l].set(v.toLowerCase().trim(), entry)
  }
}

function glossaryLookup(text, source, target) {
  const key = text.toLowerCase().trim()
  const entry = index[source].get(key)
  if (entry && entry[target]) return entry[target]
  return null
}

const cacheKey = (t, s, tg) => `mt:${s}:${tg}:${t}`

// Traduit `text` de `source` vers `target`. Renvoie { text, via }.
export async function translate(text, source, target) {
  const clean = (text || '').trim()
  if (!clean) return { text: '', via: null }
  if (source === target) return { text: clean, via: 'même langue' }

  // 1) glossaire (mots/expressions exacts)
  const g = glossaryLookup(clean, source, target)
  if (g) return { text: g, via: 'glossaire' }

  // 2) cache local d'une traduction en ligne déjà obtenue
  try {
    const c = localStorage.getItem(cacheKey(clean, source, target))
    if (c) return { text: c, via: 'en ligne (mémorisé)' }
  } catch { /* stockage indisponible */ }

  // 3) service en ligne MyMemory (mots ET phrases)
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=${source}|${target}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Service de traduction indisponible (' + res.status + ')')
  const data = await res.json()
  const out = data?.responseData?.translatedText
  if (!out || /MYMEMORY WARNING|QUERY LENGTH LIMIT/i.test(out)) {
    throw new Error(out && /LIMIT/i.test(out) ? 'Limite du service atteinte, réessaie plus tard.' : 'Traduction indisponible.')
  }
  try { localStorage.setItem(cacheKey(clean, source, target), out) } catch { /* ignore */ }
  return { text: out, via: 'en ligne' }
}

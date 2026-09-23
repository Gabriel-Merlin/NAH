// OCR (reconnaissance de texte sur une image) — Tesseract.js chargé À LA DEMANDE
// depuis le CDN, pour ne pas alourdir le bundle. Le traitement se fait dans le
// navigateur : l'image ne quitte jamais l'appareil. Nécessite une connexion la
// première fois (téléchargement du moteur + données de langue), puis c'est mis
// en cache par le navigateur.
const TESS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/5.1.1/tesseract.min.js'
let loaderPromise = null

// Nettoie le texte brut de l'OCR : retire les symboles parasites et ne garde que
// les lignes réellement lisibles (assez de vrais mots). Une photo trop petite ou
// floue produit du charabia « | : > = » que l'on jette ici plutôt que de
// l'afficher. Renvoie { text, ratio } où ratio = part de texte conservée.
export function cleanOcrText(raw) {
  if (!raw) return { text: '', ratio: 0 }
  const kept = []
  for (const rawLine of raw.split(/\n/)) {
    // Retire les symboles typiques du bruit OCR.
    const l = rawLine
      .replace(/[|<>~_*=\\/{}\[\]©®™°§¶•·►◄▪→…]+/g, ' ')
      .replace(/["“”«»]+/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\s+([.,;:!?%€])/g, '$1')
      .trim()
    if (l.length < 4) continue
    const words = l.split(' ').filter(Boolean)
    const compact = l.replace(/\s/g, '')
    const letters = (compact.match(/[a-zà-ÿ]/gi) || []).length
    if (letters / compact.length < 0.64) continue
    // « Vrais » mots : au moins 3 lettres, avec une voyelle.
    const real = words.filter((w) => /^[A-Za-zÀ-ÿ][a-zà-ÿA-ZÀ-Ö'’.-]*[.,;:!?%]?$/.test(w) && /[aeiouyàâäéèêëïîôöùûü]/i.test(w) && w.replace(/[^A-Za-zÀ-ÿ]/g, '').length >= 3).length
    if (real < 3 || real / words.length < 0.6) continue
    // Trop de petits fragments (1-2 lettres) = ligne non fiable.
    if (words.filter((w) => w.replace(/[^A-Za-zÀ-ÿ]/g, '').length <= 2).length > words.length * 0.34) continue
    kept.push(l)
  }
  const text = kept.join('\n').replace(/\n{2,}/g, '\n').trim()
  const rawLen = raw.replace(/\s/g, '').length || 1
  return { text, ratio: text.replace(/\s/g, '').length / rawLen }
}

function loadTesseract() {
  if (typeof window !== 'undefined' && window.Tesseract) return Promise.resolve(window.Tesseract)
  if (loaderPromise) return loaderPromise
  loaderPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = TESS_URL
    s.async = true
    s.onload = () => (window.Tesseract ? resolve(window.Tesseract) : reject(new Error('ocr-unavailable')))
    s.onerror = () => { loaderPromise = null; reject(new Error('ocr-load-failed')) }
    document.head.appendChild(s)
  })
  return loaderPromise
}

// Reconnaît le texte de plusieurs images (File/Blob). onProgress(indexImage,
// nbImages, ratio 0-1) suit l'avancement. Renvoie le texte concaténé.
export async function ocrImages(files, { lang = 'fra', onProgress } = {}) {
  const T = await loadTesseract()
  const parts = []
  for (let i = 0; i < files.length; i++) {
    try {
      const { data } = await T.recognize(files[i], lang, {
        logger: (m) => { if (m && m.status === 'recognizing text' && onProgress) onProgress(i, files.length, m.progress || 0) },
      })
      parts.push((data && data.text) || '')
    } catch {
      // Repli : réessaie en anglais si les données françaises échouent.
      try {
        const { data } = await T.recognize(files[i], 'eng', { logger: () => {} })
        parts.push((data && data.text) || '')
      } catch { /* image ignorée */ }
    }
  }
  return parts.join('\n\n').trim()
}

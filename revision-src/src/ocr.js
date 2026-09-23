// OCR (reconnaissance de texte sur une image) — Tesseract.js chargé À LA DEMANDE
// depuis le CDN, pour ne pas alourdir le bundle. Le traitement se fait dans le
// navigateur : l'image ne quitte jamais l'appareil. Nécessite une connexion la
// première fois (téléchargement du moteur + données de langue), puis c'est mis
// en cache par le navigateur.
const TESS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/5.1.1/tesseract.min.js'
let loaderPromise = null

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

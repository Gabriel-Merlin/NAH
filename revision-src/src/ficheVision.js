// Client de l'analyse IA (vision) des photos de cours : envoie les images à
// l'Edge Function Supabase « fiche-vision » qui appelle Claude côté serveur.
// La clé d'API n'est jamais dans l'appli. Si la fonction n'est pas configurée,
// l'appel échoue proprement et l'appli retombe sur l'OCR embarqué.
import { SUPA_URL, SUPA_ANON, SUPA_READY } from './supabase.js'

export const VISION_READY = SUPA_READY

// Réduit une image (File) en dataURL JPEG compressée : moins de poids à envoyer
// et moins de coût côté IA, sans perdre en lisibilité du texte.
export function fileToScaledDataURL(file, maxDim = 1600, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      try {
        let w = img.naturalWidth || img.width
        let h = img.naturalHeight || img.height
        const scale = Math.min(1, maxDim / Math.max(w, h || 1))
        w = Math.max(1, Math.round(w * scale)); h = Math.max(1, Math.round(h * scale))
        const c = document.createElement('canvas'); c.width = w; c.height = h
        c.getContext('2d').drawImage(img, 0, 0, w, h)
        resolve(c.toDataURL('image/jpeg', quality))
      } catch (e) { reject(e) } finally { URL.revokeObjectURL(url) }
    }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('image_load')) }
    img.src = url
  })
}

// Analyse les photos avec l'IA. Renvoie { title, questions, keyInfo, definitions }.
// Lève une erreur (err.code) en cas d'échec (dont 'not_configured').
export async function analyzeWithVision(files) {
  const images = []
  for (const f of files.slice(0, 4)) {
    try { images.push(await fileToScaledDataURL(f)) } catch { /* image ignorée */ }
  }
  if (!images.length) { const e = new Error('no_images'); e.code = 'no_images'; throw e }

  let res
  try {
    res = await fetch(`${SUPA_URL}/functions/v1/fiche-vision`, {
      method: 'POST',
      headers: { apikey: SUPA_ANON, Authorization: `Bearer ${SUPA_ANON}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ images }),
    })
  } catch { const e = new Error('network'); e.code = 'network'; throw e }

  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.fiche) {
    const e = new Error(data?.error || `http_${res.status}`)
    e.code = data?.error || (res.status === 404 ? 'not_configured' : `http_${res.status}`)
    throw e
  }
  return { fiche: data.fiche, provider: data.provider || 'ia' }
}

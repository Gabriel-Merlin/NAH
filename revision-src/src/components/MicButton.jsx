import { useRef, useState } from 'react'
import { useLang, useT } from '../i18n.js'

// Dictée vocale : bouton micro qui utilise la reconnaissance vocale de
// l'appareil (Web Speech API) pour remplir un champ de réponse. Ne s'affiche que
// si le navigateur la supporte. La langue suit celle de l'interface.
export default function MicButton({ onResult, disabled }) {
  const lang = useLang()
  const t = useT()
  const SR = typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null
  const [listening, setListening] = useState(false)
  const recRef = useRef(null)
  if (!SR) return null

  const voiceLang = lang === 'es' ? 'es-ES' : lang === 'en' ? 'en-US' : lang === 'it' ? 'it-IT' : lang === 'ar' ? 'ar-SA' : 'fr-FR'
  const toggle = () => {
    if (listening) { try { recRef.current?.stop() } catch { /* */ } setListening(false); return }
    try {
      const rec = new SR()
      rec.lang = voiceLang
      rec.interimResults = false
      rec.maxAlternatives = 1
      rec.onresult = (e) => { const txt = e.results?.[0]?.[0]?.transcript || ''; if (txt) onResult(txt.trim()) }
      rec.onend = () => setListening(false)
      rec.onerror = () => setListening(false)
      recRef.current = rec
      rec.start()
      setListening(true)
    } catch { setListening(false) }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={disabled}
      title={listening ? t('listening') : t('voiceInput')}
      aria-label={listening ? t('listening') : t('voiceInput')}
      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-lg transition ${listening ? 'animate-pulse' : ''}`}
      style={{ background: listening ? '#e11d48' : 'color-mix(in srgb, var(--c-accent) 14%, transparent)', color: listening ? '#fff' : 'var(--c-accent)' }}
    >
      {listening ? '⏺' : '🎤'}
    </button>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useT, useLang } from '../i18n.js'

// Révision audio mains-libres : lit à voix haute « terme … définition » pour
// chaque carte, en enchaînant automatiquement. Lecture / pause / précédent /
// suivant. Utilise la synthèse vocale de l'appareil (aucune donnée envoyée).
export default function AudioReview({ items = [], color = '#7c3aed', title = '', onClose }) {
  const t = useT()
  const lang = useLang()
  const voiceLang = lang === 'es' ? 'es-ES' : lang === 'en' ? 'en-US' : lang === 'it' ? 'it-IT' : lang === 'ar' ? 'ar-SA' : 'fr-FR'
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null

  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [side, setSide] = useState('front')
  const idxRef = useRef(0)
  const playingRef = useRef(false)
  const genRef = useRef(0) // invalide les callbacks des énoncés annulés
  idxRef.current = idx
  playingRef.current = playing

  const cancel = () => { genRef.current++; try { synth?.cancel() } catch { /* */ } }
  useEffect(() => () => cancel(), []) // arrêt à la fermeture

  const speak = (text, onEnd) => {
    if (!synth) { onEnd?.(); return }
    const myGen = genRef.current
    const u = new SpeechSynthesisUtterance(String(text || ''))
    u.lang = voiceLang
    u.rate = 0.95
    u.onend = () => { if (genRef.current === myGen) onEnd?.() }
    u.onerror = () => { if (genRef.current === myGen) onEnd?.() }
    synth.speak(u)
  }

  const playFrom = (i) => {
    if (!synth || i >= items.length) { setPlaying(false); playingRef.current = false; setSide('front'); return }
    setIdx(i); idxRef.current = i
    setSide('front')
    speak(items[i].front, () => {
      if (!playingRef.current) return
      setSide('back')
      speak(items[i].back, () => {
        if (!playingRef.current) return
        setTimeout(() => { if (playingRef.current) playFrom(i + 1) }, 450)
      })
    })
  }

  const start = () => { if (!synth) return; cancel(); setPlaying(true); playingRef.current = true; playFrom(idxRef.current) }
  const pause = () => { setPlaying(false); playingRef.current = false; cancel() }
  const jump = (d) => {
    const ni = Math.min(items.length - 1, Math.max(0, idxRef.current + d))
    cancel()
    if (playingRef.current) playFrom(ni)
    else { setIdx(ni); setSide('front') }
  }

  const card = items[idx] || { front: '', back: '' }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 p-4 pt-12 backdrop-blur-sm" onClick={() => { cancel(); onClose?.() }}>
      <div className="card w-full max-w-md p-5" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between">
          <span className="truncate font-display text-lg font-semibold">🔊 {title || t('audioReview')}</span>
          <button onClick={() => { cancel(); onClose?.() }} className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200" aria-label={t('quit')}>✕</button>
        </div>

        {!synth ? (
          <p className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">{t('audioUnsupported')}</p>
        ) : (
          <>
            <div className="mb-1 text-xs text-slate-400">{Math.min(idx + 1, items.length)} / {items.length}</div>
            <div className="rounded-2xl border-2 p-6 text-center" style={{ borderColor: color, background: color + '10' }}>
              <p className="text-lg font-bold">{card.front}</p>
              {side === 'back' && <p className="mt-3 text-[15px] text-slate-700 dark:text-slate-200">{card.back}</p>}
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              <button onClick={() => jump(-1)} disabled={idx === 0} className="grid h-11 w-11 place-items-center rounded-full text-lg disabled:opacity-30" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 30%, transparent)' }} aria-label={t('previous')}>⏮</button>
              <button onClick={() => (playing ? pause() : start())} className="grid h-14 w-14 place-items-center rounded-full text-2xl text-white shadow-lg" style={{ backgroundColor: color }} aria-label={playing ? t('pause') : t('play')}>
                {playing ? '⏸' : '▶'}
              </button>
              <button onClick={() => jump(1)} disabled={idx >= items.length - 1} className="grid h-11 w-11 place-items-center rounded-full text-lg disabled:opacity-30" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 30%, transparent)' }} aria-label={t('nextQuestion')}>⏭</button>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">🎧 {t('audioHint')}</p>
          </>
        )}
      </div>
    </div>
  )
}

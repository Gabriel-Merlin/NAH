import { useEffect } from 'react'
import { useFocus } from '../focus.jsx'
import { useT } from '../i18n.js'

// Mode focus plein écran : un minuteur épuré, sans distraction, par-dessus tout
// le reste. Réutilise le minuteur global (useFocus) : l'état est partagé avec la
// page Coach. Tente le vrai plein écran du navigateur (best-effort).
export default function FocusFullscreen({ onClose }) {
  const t = useT()
  const f = useFocus()
  const { phase, running, remaining, phaseTotal, cycles } = f

  useEffect(() => {
    try { document.documentElement.requestFullscreen?.().catch(() => {}) } catch { /* */ }
    return () => { try { if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {}) } catch { /* */ } }
  }, [])

  // Échap ferme le mode plein écran.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const isBreak = phase === 'break'
  const pct = phaseTotal > 0 ? (1 - remaining / phaseTotal) * 100 : 0
  const mm = Math.floor(remaining / 60)
  const ss = remaining % 60
  const phaseLabel = phase === 'idle' ? t('phaseReady') : isBreak ? t('phaseBreak') : t('phaseFocus')

  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center px-6" style={{ background: 'linear-gradient(160deg, #14110c, #1c1811 60%, #14110c)', color: '#f4ecd8' }}>
      <button onClick={onClose} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-lg" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, #d9bd77 40%, transparent)', color: '#e8d9a8' }} aria-label={t('quit')}>✕</button>

      <p className="mb-6 text-xs uppercase tracking-[0.3em]" style={{ color: isBreak ? '#7dd3fc' : '#d9bd77' }}>{phaseLabel}</p>

      <div className="relative grid place-items-center" style={{ width: 240, height: 240 }}>
        <svg viewBox="0 0 120 120" width="240" height="240" className="absolute inset-0 -rotate-90">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="9" />
          <circle cx="60" cy="60" r="52" fill="none" stroke={isBreak ? '#38bdf8' : '#d9bd77'} strokeWidth="9" strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 52} strokeDashoffset={(1 - Math.max(0, Math.min(1, pct / 100))) * 2 * Math.PI * 52}
            style={{ transition: 'stroke-dashoffset 0.4s linear' }} />
        </svg>
        <div className="relative text-center">
          <div className="font-display text-6xl font-semibold tabular-nums" style={{ color: '#faf3e1' }}>{mm}:{String(ss).padStart(2, '0')}</div>
          {cycles > 0 && <div className="mt-1 text-xs tracking-widest" style={{ color: '#b8a878' }}>🎯 {cycles}</div>}
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <button onClick={f.skip} disabled={phase === 'idle'} className="grid h-12 w-12 place-items-center rounded-full text-lg disabled:opacity-30" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, #d9bd77 40%, transparent)', color: '#e8d9a8' }} aria-label={t('skipPhase')}>⏭</button>
        <button onClick={() => (running ? f.pause() : f.start())} className="grid h-20 w-20 place-items-center rounded-full text-3xl shadow-lg" style={{ background: '#d9bd77', color: '#14110c' }} aria-label={running ? t('pause') : t('play')}>
          {running ? '⏸' : '▶'}
        </button>
        <button onClick={f.reset} disabled={phase === 'idle' && cycles === 0} className="grid h-12 w-12 place-items-center rounded-full text-lg disabled:opacity-30" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, #d9bd77 40%, transparent)', color: '#e8d9a8' }} aria-label={t('resetTimer')}>↺</button>
      </div>

      <p className="mt-10 max-w-xs text-center text-sm" style={{ color: '#b8a878' }}>🌙 {t('focusFsHint')}</p>
    </div>
  )
}

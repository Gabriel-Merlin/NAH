// Minuteur de révision global (type Pomodoro), piloté par l'élève.
// - L'élève choisit lui-même la durée de révision et de pause.
// - Le minuteur continue même en changeant de page (contexte global).
// - Fin de phase : petit son + vibration ; fin d'une session de révision =>
//   événement « stmg-focus-done » (le store attribue des XP).
import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react'

const KEY = 'stmg_focus_v1'
const DEFAULTS = { studyMin: 25, breakMin: 5 }
const clampMin = (n) => Math.max(1, Math.min(180, Math.round(Number(n) || 0)))

function loadSettings() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null') || {}
    return { studyMin: clampMin(raw.studyMin || DEFAULTS.studyMin), breakMin: clampMin(raw.breakMin || DEFAULTS.breakMin) }
  } catch { return { ...DEFAULTS } }
}

const Ctx = createContext(null)
export const useFocus = () => useContext(Ctx)

export function FocusProvider({ children }) {
  const init = loadSettings()
  const [studyMin, setStudyMinState] = useState(init.studyMin)
  const [breakMin, setBreakMinState] = useState(init.breakMin)
  const [phase, setPhase] = useState('idle') // 'idle' | 'focus' | 'break'
  const [running, setRunning] = useState(false)
  const [endsAt, setEndsAt] = useState(null) // ms
  const [remaining, setRemaining] = useState(init.studyMin * 60) // secondes
  const [cycles, setCycles] = useState(0)

  // Persistance des réglages.
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify({ studyMin, breakMin })) } catch { /* ignore */ }
  }, [studyMin, breakMin])

  // Au repos, l'anneau reflète la durée de révision choisie.
  useEffect(() => { if (phase === 'idle') setRemaining(studyMin * 60) }, [studyMin, phase])

  // Signal sonore + vibration à chaque changement de phase.
  const chime = useCallback((kind) => {
    try {
      const AC = window.AudioContext || window.webkitAudioContext
      if (AC) {
        const ac = new AC()
        const play = (freq, start, dur) => {
          const o = ac.createOscillator(); const g = ac.createGain()
          o.connect(g); g.connect(ac.destination); o.type = 'sine'; o.frequency.value = freq
          g.gain.setValueAtTime(0.0001, ac.currentTime + start)
          g.gain.exponentialRampToValueAtTime(0.28, ac.currentTime + start + 0.02)
          g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + start + dur)
          o.start(ac.currentTime + start); o.stop(ac.currentTime + start + dur + 0.02)
        }
        // Deux notes : montantes pour reprendre, descendantes pour la pause.
        if (kind === 'focus') { play(660, 0, 0.25); play(880, 0.22, 0.35) }
        else { play(880, 0, 0.25); play(587, 0.22, 0.4) }
        setTimeout(() => ac.close?.(), 1000)
      }
    } catch { /* audio indisponible */ }
    try { navigator.vibrate?.(kind === 'break' ? [140, 70, 140] : 200) } catch { /* ignore */ }
  }, [])

  const startPhase = useCallback((ph, minutes) => {
    const secs = Math.max(1, Math.round(minutes * 60))
    setPhase(ph)
    setRemaining(secs)
    setEndsAt(Date.now() + secs * 1000)
    setRunning(true)
  }, [])

  // Passe à la phase suivante. `auto` = fin naturelle (récompense XP) ;
  // sinon c'est un saut manuel (pas d'XP).
  const advance = useCallback((auto) => {
    if (phase === 'focus') {
      if (auto) {
        setCycles((c) => c + 1)
        try { window.dispatchEvent(new CustomEvent('stmg-focus-done', { detail: { minutes: studyMin } })) } catch { /* ignore */ }
      }
      chime('break')
      startPhase('break', breakMin)
    } else {
      chime('focus')
      startPhase('focus', studyMin)
    }
  }, [phase, studyMin, breakMin, chime, startPhase])

  // Décompte : on calcule le restant à partir de l'horodatage de fin
  // (robuste si l'onglet est ralenti en arrière-plan).
  useEffect(() => {
    if (!running || !endsAt) return
    const step = () => {
      const rem = Math.round((endsAt - Date.now()) / 1000)
      if (rem <= 0) advance(true)
      else setRemaining(rem)
    }
    step()
    const id = setInterval(step, 250)
    return () => clearInterval(id)
  }, [running, endsAt, advance])

  const start = useCallback(() => {
    if (phase === 'idle') startPhase('focus', studyMin)
    else { setEndsAt(Date.now() + remaining * 1000); setRunning(true) }
  }, [phase, studyMin, remaining, startPhase])

  const pause = useCallback(() => { setRunning(false); setEndsAt(null) }, [])
  const reset = useCallback(() => { setRunning(false); setEndsAt(null); setPhase('idle'); setRemaining(studyMin * 60); setCycles(0) }, [studyMin])
  const skip = useCallback(() => advance(false), [advance])

  const setStudyMin = useCallback((n) => setStudyMinState(clampMin(n)), [])
  const setBreakMin = useCallback((n) => setBreakMinState(clampMin(n)), [])
  const applyPreset = useCallback((s, b) => {
    setStudyMinState(clampMin(s)); setBreakMinState(clampMin(b))
    setRunning(false); setEndsAt(null); setPhase('idle'); setRemaining(clampMin(s) * 60)
  }, [])

  const phaseTotal = (phase === 'break' ? breakMin : studyMin) * 60
  const value = {
    studyMin, breakMin, phase, running, remaining, cycles, phaseTotal,
    start, pause, reset, skip, setStudyMin, setBreakMin, applyPreset,
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

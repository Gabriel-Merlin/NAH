// Utilitaires partagés par les mini-jeux.
import { useEffect, useRef, useState } from 'react'
import { useT } from '../i18n.js'

// Normalise une saisie : minuscules, sans accents, espaces réduits.
export function normalize(s) {
  return String(s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’']/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

export function answerMatches(input, answer, alt = []) {
  const n = normalize(input)
  if (!n) return false
  return [answer, ...alt].some((a) => normalize(a) === n)
}

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Chronomètre pour le mode Défi (temps écoulé, en secondes).
export function useStopwatch(active) {
  const [s, setS] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    if (!active) return
    ref.current = setInterval(() => setS((v) => v + 1), 1000)
    return () => clearInterval(ref.current)
  }, [active])
  return s
}

export function fmtTime(s) {
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${m}:${String(r).padStart(2, '0')}`
}

// Bandeau de correction (bonne / mauvaise réponse + explication).
export function Feedback({ ok, children }) {
  const t = useT()
  return (
    <div
      className={`mt-3 animate-slide-up rounded-xl px-4 py-3 text-sm ${
        ok
          ? 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:ring-emerald-800/60'
          : 'bg-rose-50 text-rose-800 ring-1 ring-rose-200 dark:bg-rose-950/40 dark:text-rose-200 dark:ring-rose-800/60'
      }`}
      role="status"
    >
      <span className="mr-1 font-bold">{ok ? `✅ ${t('feedbackGood')}` : `❌ ${t('feedbackBad')}`}</span>
      {children}
    </div>
  )
}

// Barre de progression « question i / n » d'un jeu.
export function GameProgress({ index, total, color }) {
  const t = useT()
  return (
    <div className="mb-4">
      <div className="mb-1 flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
        <span>{t('question')} {Math.min(index + 1, total)} / {total}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${(index / total) * 100}%`, backgroundColor: color || '#7c3aed' }}
        />
      </div>
    </div>
  )
}

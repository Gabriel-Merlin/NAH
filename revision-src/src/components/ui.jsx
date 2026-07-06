// Petits composants d'interface réutilisables.
import { useEffect, useState } from 'react'

// Rend le gras **ainsi** présent dans les textes du cours.
export function Rich({ text, className = '' }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g)
  return (
    <span className={className}>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="font-semibold text-slate-900 dark:text-white">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </span>
  )
}

export function ProgressBar({ value = 0, color = '#7c3aed', className = '', height = 8 }) {
  return (
    <div
      className={`w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 ${className}`}
      style={{ height }}
      role="progressbar"
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full transition-all duration-700 ease-out"
        style={{ width: `${Math.max(2, Math.min(100, value))}%`, backgroundColor: color }}
      />
    </div>
  )
}

export function Stars({ count = 0, size = 'text-base' }) {
  return (
    <span className={`inline-flex ${size}`} aria-label={`${count} sur 3 étoiles`}>
      {[0, 1, 2].map((i) => (
        <span key={i} className={i < count ? 'text-amber-400' : 'text-slate-300 dark:text-slate-700'}>
          ★
        </span>
      ))}
    </span>
  )
}

export function Ring({ value = 0, color = '#7c3aed', size = 64, label }) {
  const stroke = 6
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const off = c - (Math.min(100, value) / 100) * c
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-slate-200 dark:text-slate-800" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={off}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <span className="absolute text-sm font-bold" aria-hidden>
        {label ?? `${Math.round(value)}%`}
      </span>
    </div>
  )
}

// Petite pluie de confettis en pur CSS (célébration de réussite).
export function Confetti({ show }) {
  const [pieces, setPieces] = useState([])
  useEffect(() => {
    if (!show) return
    const colors = ['#f43f5e', '#f59e0b', '#10b981', '#3b82f6', '#a855f7', '#ec4899']
    setPieces(
      Array.from({ length: 34 }, (_, i) => ({
        id: i + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
        dur: 1 + Math.random() * 0.8,
        color: colors[i % colors.length],
        rot: Math.random() * 360,
      })),
    )
    const t = setTimeout(() => setPieces([]), 2200)
    return () => clearTimeout(t)
  }, [show])
  if (!pieces.length) return null
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            top: '-12px',
            left: `${p.left}%`,
            width: 9,
            height: 9,
            background: p.color,
            transform: `rotate(${p.rot}deg)`,
            borderRadius: 2,
            animation: `confetti-fall ${p.dur}s ${p.delay}s ease-in forwards`,
          }}
        />
      ))}
      <style>{`@keyframes confetti-fall{to{transform:translateY(105vh) rotate(540deg);opacity:0}}`}</style>
    </div>
  )
}

// Bandeau discret « aucune donnée » / info.
export function Empty({ icon = '🗒️', children }) {
  return (
    <div className="card p-8 text-center text-slate-500 dark:text-slate-400">
      <div className="mb-2 text-3xl">{icon}</div>
      {children}
    </div>
  )
}

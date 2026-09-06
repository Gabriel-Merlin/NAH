// Petits composants d'interface réutilisables.
import { useEffect, useState } from 'react'

// --- Icônes trait fin (monochrome, currentColor) : aspect minimaliste luxe.
// On remplace les emojis « UI » par des pictos discrets et cohérents.
function Svg({ children, size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {children}
    </svg>
  )
}
export const Icon = {
  Search: (p) => <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></Svg>,
  Moon: (p) => <Svg {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></Svg>,
  Sun: (p) => <Svg {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Svg>,
  Flame: (p) => <Svg {...p}><path d="M12 3c0 3-3 4-3 7a3 3 0 0 0 6 0c0-1-.5-1.8-1-2.5.9.4 3 1.9 3 4.7a5 5 0 0 1-10 0C7 8.5 11 6.5 12 3Z" /></Svg>,
  Star: (p) => <Svg {...p}><path d="m12 3.5 2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.7l5.9-.9Z" /></Svg>,
  Medal: (p) => <Svg {...p}><circle cx="12" cy="14" r="6" /><path d="M12 11v6M9.5 13l2.5 1 2.5-1M8.5 3.5 7 8M15.5 3.5 17 8" /></Svg>,
  Dice: (p) => <Svg {...p}><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="9" cy="9" r="1.1" fill="currentColor" stroke="none" /><circle cx="15" cy="15" r="1.1" fill="currentColor" stroke="none" /><circle cx="15" cy="9" r="1.1" fill="currentColor" stroke="none" /><circle cx="9" cy="15" r="1.1" fill="currentColor" stroke="none" /></Svg>,
  Play: (p) => <Svg {...p}><path d="M8 5.5v13l11-6.5Z" /></Svg>,
  Diamond: (p) => <Svg {...p}><path d="M12 3 20 12 12 21 4 12Z" /></Svg>,
  Brain: (p) => <Svg {...p}><path d="M9.5 4.5A2.5 2.5 0 0 0 7 7a2.5 2.5 0 0 0-1 4.8V15a2.5 2.5 0 0 0 4 2M14.5 4.5A2.5 2.5 0 0 1 17 7a2.5 2.5 0 0 1 1 4.8V15a2.5 2.5 0 0 1-4 2M12 5v13" /></Svg>,
  Timer: (p) => <Svg {...p}><circle cx="12" cy="13" r="7" /><path d="M12 13V9.5M10 2h4M18.5 6.5 20 5" /></Svg>,
  Book: (p) => <Svg {...p}><path d="M4 5.5A2 2 0 0 1 6 4h5v15H6a2 2 0 0 0-2 1.4ZM20 5.5A2 2 0 0 0 18 4h-5v15h5a2 2 0 0 1 2 1.4Z" /></Svg>,
  Globe: (p) => <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></Svg>,
  Swap: (p) => <Svg {...p}><path d="M7 4 4 7l3 3M4 7h10M17 20l3-3-3-3M20 17H10" /></Svg>,
  Palette: (p) => <Svg {...p}><path d="M12 3a9 9 0 1 0 0 18c1 0 1.6-.8 1.6-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5c0-3.9-4-7.4-9-7.4Z" /><circle cx="7.5" cy="11.5" r="1" fill="currentColor" stroke="none" /><circle cx="10.5" cy="7.5" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="8" r="1" fill="currentColor" stroke="none" /></Svg>,
  Menu: (p) => <Svg {...p}><path d="M3 6h18M3 12h18M3 18h18" /></Svg>,
  Close: (p) => <Svg {...p}><path d="M6 6l12 12M18 6 6 18" /></Svg>,
}

// Rend le gras **ainsi** et l'italique *ainsi* présents dans les textes du cours.
export function Rich({ text, className = '' }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return (
    <span className={className}>
      {parts.map((p, i) => {
        if (p.startsWith('**') && p.endsWith('**')) {
          return (
            <strong key={i} className="font-semibold text-slate-900 dark:text-white">
              {p.slice(2, -2)}
            </strong>
          )
        }
        if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
          return <em key={i}>{p.slice(1, -1)}</em>
        }
        return <span key={i}>{p}</span>
      })}
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

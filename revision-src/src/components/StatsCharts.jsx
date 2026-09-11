// Graphiques de statistiques élève, en SVG pur (aucune dépendance) :
//  - ProgressCurve : courbe d'XP cumulé au fil des jours.
//  - ThemeTimeBars : temps de révision par thème (barres horizontales).
// Lisibles en clair comme en sombre (couleurs via variables de thème).
import { ALL_CHAPTERS } from '../data/index.js'
import { useT } from '../i18n.js'

// Formate une durée en secondes → « 12 min » ou « 1 h 05 ».
export function fmtDuration(sec, t) {
  const m = Math.round((sec || 0) / 60)
  if (m < 60) return `${m} ${t('minShort')}`
  const h = Math.floor(m / 60)
  const r = m % 60
  return r ? `${h} ${t('hourShort')} ${String(r).padStart(2, '0')}` : `${h} ${t('hourShort')}`
}

function fmtDay(iso) {
  try {
    const [, mm, dd] = iso.split('-')
    return `${dd}/${mm}`
  } catch { return iso }
}

// Courbe de progression : XP cumulé par jour (area + ligne).
export function ProgressCurve({ history }) {
  const t = useT()
  const entries = Object.entries(history || {}).sort(([a], [b]) => (a < b ? -1 : 1))
  if (entries.length < 2) {
    return <div className="card p-5 text-center text-sm text-slate-500 dark:text-slate-400">{t('curveSoon')}</div>
  }
  const days = entries.slice(-30) // 30 derniers jours enregistrés
  const xps = days.map(([, v]) => v || 0)
  const maxX = Math.max(...xps)
  const minX = Math.min(...xps)
  const span = Math.max(1, maxX - minX)
  const W = 320, H = 130, padX = 6, padTop = 10, padBot = 18
  const innerW = W - padX * 2
  const innerH = H - padTop - padBot
  const n = days.length
  const x = (i) => padX + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW)
  const y = (v) => padTop + innerH - ((v - minX) / span) * innerH
  const line = days.map(([, v], i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')
  const area = `${line} L${x(n - 1).toFixed(1)},${(padTop + innerH).toFixed(1)} L${x(0).toFixed(1)},${(padTop + innerH).toFixed(1)} Z`
  const gained = (xps[xps.length - 1] || 0) - (xps[0] || 0)

  return (
    <div className="card p-4">
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-xs uppercase tracking-wide text-slate-400">{fmtDay(days[0][0])} → {fmtDay(days[n - 1][0])}</span>
        <span className="text-xs font-semibold" style={{ color: 'var(--c-accent)' }}>+{gained} XP</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="none" role="img" aria-label={t('progressCurve')} style={{ display: 'block' }}>
        <defs>
          <linearGradient id="xpArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--c-accent)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="var(--c-accent)" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#xpArea)" />
        <path d={line} fill="none" stroke="var(--c-accent)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx={x(n - 1)} cy={y(xps[n - 1])} r="3.5" fill="var(--c-accent)" />
      </svg>
      <div className="mt-1 flex justify-between text-[0.7rem] text-slate-400">
        <span>{minX} XP</span>
        <span>{maxX} XP</span>
      </div>
    </div>
  )
}

// Barres horizontales : temps de révision par thème (top 6).
export function ThemeTimeBars({ themeTime }) {
  const t = useT()
  const rows = Object.entries(themeTime || {})
    .map(([id, sec]) => ({ id, sec: sec || 0, meta: ALL_CHAPTERS[id] }))
    .filter((r) => r.meta && r.sec >= 30) // au moins 30 s pour apparaître
    .sort((a, b) => b.sec - a.sec)
    .slice(0, 6)
  if (!rows.length) {
    return <div className="card p-5 text-center text-sm text-slate-500 dark:text-slate-400">{t('timeSoon')}</div>
  }
  const max = Math.max(...rows.map((r) => r.sec))
  return (
    <div className="card space-y-2.5 p-4">
      {rows.map((r) => {
        const color = r.meta.color || 'var(--c-accent)'
        return (
          <div key={r.id}>
            <div className="mb-1 flex items-baseline justify-between gap-2">
              <span className="min-w-0 flex-1 truncate text-sm font-medium">{r.meta.short || r.meta.name}</span>
              <span className="shrink-0 text-xs font-semibold text-slate-500 dark:text-slate-400">{fmtDuration(r.sec, t)}</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full rounded-full transition-all" style={{ width: `${Math.max(6, (r.sec / max) * 100)}%`, backgroundColor: color }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

import { useEffect } from 'react'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'

// Panneau « Personnalisation » : ambiances prédéfinies + sélecteurs de couleur
// (fond, texte, accent, rubriques). Tout est piloté par 4 variables CSS.
const VARS = { bg: '--c-bg', ink: '--c-ink', accent: '--c-accent', card: '--c-card' }
const FIELDS = [
  ['bg', 'colorBg'],
  ['ink', 'colorInk'],
  ['accent', 'colorAccent'],
  ['card', 'colorCard'],
]
const PRESETS = [
  { key: 'themeDefault', mode: 'light', c: null, bg: '#f5f1e8', accent: '#c8a24e' },
  { key: 'themeNight', mode: 'dark', c: { bg: '#14110c', ink: '#f1e9dc', accent: '#d9bd77', card: '#211c15' } },
  { key: 'themeOcean', mode: 'light', c: { bg: '#eef4f9', ink: '#0f2438', accent: '#2b6cb0', card: '#ffffff' } },
  { key: 'themeEmerald', mode: 'light', c: { bg: '#eef5f0', ink: '#10241a', accent: '#0f766e', card: '#ffffff' } },
  { key: 'themeRose', mode: 'light', c: { bg: '#fdf2f5', ink: '#3a1220', accent: '#db2777', card: '#fffafc' } },
  { key: 'themeAmethyst', mode: 'light', c: { bg: '#f3f0fb', ink: '#221a3a', accent: '#7c3aed', card: '#ffffff' } },
  { key: 'themeLicorice', mode: 'dark', c: { bg: '#0e0e10', ink: '#f0ead9', accent: '#e6c463', card: '#1a1a1e' } },
  { key: 'themeCoral', mode: 'light', c: { bg: '#fff5f0', ink: '#3a1e12', accent: '#ea580c', card: '#fffaf6' } },
]

export default function Customizer({ onClose }) {
  const { state, setCustomTheme, resetCustomTheme, setTheme } = useStore()
  const t = useT()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Valeur affichée d'un champ : override perso, sinon valeur CSS effective.
  const cur = (k) => {
    const custom = state.customTheme?.[k]
    if (custom) return custom
    if (typeof window !== 'undefined') {
      const v = getComputedStyle(document.documentElement).getPropertyValue(VARS[k]).trim()
      if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)) return v
    }
    return '#000000'
  }

  const applyPreset = (p) => {
    if (p.c) { setCustomTheme(p.c); setTheme(p.mode) }
    else { resetCustomTheme(); setTheme('light') }
  }
  const reset = () => { resetCustomTheme() }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 p-4 pt-16 backdrop-blur-sm no-print" onClick={onClose}>
      <div className="card card-lux w-full max-w-md animate-pop-in p-5" onClick={(e) => e.stopPropagation()}>
        <div className="mb-1 flex items-center justify-between">
          <div>
            <p className="kicker">RévizSTMG</p>
            <h2 className="font-display text-2xl font-medium leading-tight">{t('customize')}</h2>
          </div>
          <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200" aria-label={t('quit')}>✕</button>
        </div>
        <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">{t('customizeHint')}</p>

        {/* Ambiances prédéfinies */}
        <p className="kicker mb-2">{t('ambiances')}</p>
        <div className="mb-5 grid grid-cols-4 gap-2.5">
          {PRESETS.map((p) => {
            const bg = p.c?.bg || p.bg
            const accent = p.c?.accent || p.accent
            return (
              <button
                key={p.key}
                onClick={() => applyPreset(p)}
                className="group flex flex-col items-center gap-1"
                title={t(p.key)}
              >
                <span
                  className="relative grid h-12 w-full place-items-center overflow-hidden rounded-xl ring-1 ring-black/10 transition group-hover:-translate-y-0.5 dark:ring-white/10"
                  style={{ background: bg }}
                >
                  <span className="h-5 w-5 rounded-full" style={{ background: accent, boxShadow: '0 0 0 2px rgba(255,255,255,.5)' }} />
                </span>
                <span className="text-[0.65rem] leading-tight text-slate-500 dark:text-slate-400">{t(p.key)}</span>
              </button>
            )
          })}
        </div>

        {/* Réglage fin par couleur */}
        <div className="space-y-2">
          {FIELDS.map(([k, label]) => (
            <label key={k} className="flex items-center justify-between gap-3 rounded-xl px-3 py-2" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 22%, transparent)' }}>
              <span className="text-sm font-semibold">{t(label)}</span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase text-slate-400">{cur(k)}</span>
                <input
                  type="color"
                  value={cur(k)}
                  onChange={(e) => setCustomTheme({ [k]: e.target.value })}
                  className="h-8 w-10 cursor-pointer rounded-md border-0 bg-transparent p-0"
                  aria-label={t(label)}
                />
              </span>
            </label>
          ))}
        </div>

        <button onClick={reset} className="mt-4 w-full text-center text-xs font-semibold text-slate-400 underline hover:text-[#98761f] dark:hover:text-[#d9bd77]">
          {t('resetColors')}
        </button>
      </div>
    </div>
  )
}

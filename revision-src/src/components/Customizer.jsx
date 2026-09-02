import { useEffect } from 'react'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'

// Panneau « Personnalisation » : ambiances + couleurs + typographie + avatar +
// style (coins, taille). Tout est piloté par des variables CSS sur <html>.
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
const DISPLAY_FONTS = [
  { label: 'Cormorant', v: "'Cormorant Garamond'" },
  { label: 'Playfair', v: "'Playfair Display'" },
  { label: 'Marcellus', v: "'Marcellus'" },
  { label: 'EB Garamond', v: "'EB Garamond'" },
]
const BODY_FONTS = [
  { label: 'Inter', v: "'Inter'" },
  { label: 'Nunito', v: "'Nunito'" },
  { label: 'Lato', v: "'Lato'" },
  { label: 'Système', v: 'system-ui' },
]
const RADII = [
  { key: 'cornerSoft', v: '0.55rem' },
  { key: 'cornerRound', v: '1.15rem' },
  { key: 'cornerXl', v: '1.7rem' },
  { key: 'cornerSharp', v: '0.25rem' },
]
const SIZES = [
  { key: 'sizeS', v: '15px' },
  { key: 'sizeM', v: '16px' },
  { key: 'sizeL', v: '17px' },
  { key: 'sizeXl', v: '19px' },
]
const AVATARS = ['🦉', '🎓', '⭐', '🚀', '🐱', '🦊', '🐧', '🌸', '🔥', '💎', '🎨', '📚', '🧠', '⚡', '🌈', '🏆', '🍀', '🎯', '🦁', '🌙', '☀️', '🐢', '🦄', '🐨']

export default function Customizer({ onClose }) {
  const { state, setCustomTheme, resetCustomTheme, setTheme } = useStore()
  const t = useT()
  const ct = state.customTheme || {}

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const cur = (k) => {
    if (ct[k]) return ct[k]
    if (typeof window !== 'undefined') {
      const v = getComputedStyle(document.documentElement).getPropertyValue(VARS[k]).trim()
      if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)) return v
    }
    return '#000000'
  }
  const applyPreset = (p) => {
    if (p.c) { setCustomTheme(p.c); setTheme(p.mode) } else { resetCustomTheme(); setTheme('light') }
  }
  const font = (k, def) => ct[k] || def
  const radius = ct.radius || '1.15rem'
  const scale = ct.scale || '16px'
  const avatar = ct.avatar || null

  const Chip = ({ active, onClick, children, style }) => (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${active ? 'text-white' : ''}`}
    >
      <span
        className={`inline-block rounded-full px-3 py-1.5 ${active ? '' : 'opacity-90'}`}
        style={{
          margin: '-0.375rem -0.75rem',
          padding: '0.375rem 0.75rem',
          borderRadius: 999,
          boxShadow: active ? 'inset 0 0 0 2px var(--c-accent)' : 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 30%, transparent)',
          background: active ? 'color-mix(in srgb, var(--c-accent) 16%, transparent)' : 'transparent',
        }}
      >
        {children}
      </span>
    </button>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 p-4 pt-12 backdrop-blur-sm no-print" onClick={onClose}>
      <div className="card card-lux w-full max-w-md animate-pop-in overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 pt-5">
          <div>
            <p className="kicker">RévizSTMG</p>
            <h2 className="font-display text-2xl font-medium leading-tight">{t('customize')}</h2>
          </div>
          <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200" aria-label={t('quit')}>✕</button>
        </div>

        <div className="max-h-[70vh] space-y-5 overflow-y-auto px-5 pb-5 pt-3">
          {/* Ambiances */}
          <div>
            <p className="kicker mb-2">{t('ambiances')}</p>
            <div className="grid grid-cols-4 gap-2.5">
              {PRESETS.map((p) => {
                const bg = p.c?.bg || p.bg
                const accent = p.c?.accent || p.accent
                return (
                  <button key={p.key} onClick={() => applyPreset(p)} className="group flex flex-col items-center gap-1" title={t(p.key)}>
                    <span className="relative grid h-11 w-full place-items-center overflow-hidden rounded-xl ring-1 ring-black/10 transition group-hover:-translate-y-0.5 dark:ring-white/10" style={{ background: bg }}>
                      <span className="h-4 w-4 rounded-full" style={{ background: accent, boxShadow: '0 0 0 2px rgba(255,255,255,.5)' }} />
                    </span>
                    <span className="text-[0.62rem] leading-tight text-slate-500 dark:text-slate-400">{t(p.key)}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Couleurs */}
          <div>
            <p className="kicker mb-2">{t('secColors')}</p>
            <div className="space-y-2">
              {FIELDS.map(([k, label]) => (
                <label key={k} className="flex items-center justify-between gap-3 rounded-xl px-3 py-2" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 22%, transparent)' }}>
                  <span className="text-sm font-semibold">{t(label)}</span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase text-slate-400">{cur(k)}</span>
                    <input type="color" value={cur(k)} onChange={(e) => setCustomTheme({ [k]: e.target.value })} className="h-8 w-10 cursor-pointer rounded-md border-0 bg-transparent p-0" aria-label={t(label)} />
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Typographie */}
          <div>
            <p className="kicker mb-2">{t('secTypo')}</p>
            <p className="mb-1 text-xs text-slate-500 dark:text-slate-400">{t('fontTitles')}</p>
            <div className="mb-3 flex flex-wrap gap-2">
              {DISPLAY_FONTS.map((f) => (
                <Chip key={f.v} active={font('fontDisplay', "'Cormorant Garamond'") === f.v} onClick={() => setCustomTheme({ fontDisplay: f.v })} style={{ fontFamily: f.v }}>{f.label}</Chip>
              ))}
            </div>
            <p className="mb-1 text-xs text-slate-500 dark:text-slate-400">{t('fontText')}</p>
            <div className="flex flex-wrap gap-2">
              {BODY_FONTS.map((f) => (
                <Chip key={f.v} active={font('fontBody', "'Inter'") === f.v} onClick={() => setCustomTheme({ fontBody: f.v })} style={{ fontFamily: f.v }}>{f.label}</Chip>
              ))}
            </div>
          </div>

          {/* Avatar / icône */}
          <div>
            <p className="kicker mb-2">{t('secAvatar')}</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCustomTheme({ avatar: null })}
                className="monogram h-10 px-3 text-sm"
                style={{ borderRadius: 999, boxShadow: !avatar ? 'inset 0 0 0 2px var(--c-accent)' : undefined }}
              >
                {t('initialsLabel')}
              </button>
              {AVATARS.map((e) => (
                <button
                  key={e}
                  type="button"
                  onClick={() => setCustomTheme({ avatar: e })}
                  className="grid h-10 w-10 place-items-center rounded-full text-xl transition hover:-translate-y-0.5"
                  style={{ background: 'color-mix(in srgb, var(--c-accent) 12%, transparent)', boxShadow: avatar === e ? 'inset 0 0 0 2px var(--c-accent)' : 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 28%, transparent)' }}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          {/* Style : coins + taille */}
          <div>
            <p className="kicker mb-2">{t('secStyle')}</p>
            <p className="mb-1 text-xs text-slate-500 dark:text-slate-400">{t('cornersLabel')}</p>
            <div className="mb-3 flex flex-wrap gap-2">
              {RADII.map((r) => (
                <Chip key={r.v} active={radius === r.v} onClick={() => setCustomTheme({ radius: r.v })}>{t(r.key)}</Chip>
              ))}
            </div>
            <p className="mb-1 text-xs text-slate-500 dark:text-slate-400">{t('sizeLabel')}</p>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <Chip key={s.v} active={scale === s.v} onClick={() => setCustomTheme({ scale: s.v })}>{t(s.key)}</Chip>
              ))}
            </div>
          </div>

          <button onClick={resetCustomTheme} className="w-full text-center text-xs font-semibold text-slate-400 underline hover:text-[#98761f] dark:hover:text-[#d9bd77]">
            {t('resetAllAppearance')}
          </button>
        </div>
      </div>
    </div>
  )
}

import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'

function Switch({ on, onChange, label, desc, icon }) {
  return (
    <button onClick={() => onChange(!on)} role="switch" aria-checked={on} className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
      <span className="text-xl" aria-hidden>{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold">{label}</span>
        <span className="block text-xs text-slate-500 dark:text-slate-400">{desc}</span>
      </span>
      <span className="relative h-6 w-11 shrink-0 rounded-full transition" style={{ backgroundColor: on ? 'var(--c-accent)' : 'color-mix(in srgb, currentColor 20%, transparent)' }}>
        <span className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all" style={{ left: on ? '1.4rem' : '0.125rem' }} />
      </span>
    </button>
  )
}

// Panneau Accessibilité — TOUJOURS disponible (jamais verrouillé) : c'est une
// aide essentielle. Confort dyslexie, fort contraste, grand texte.
export default function Accessibility({ onClose }) {
  const { state, setA11y } = useStore()
  const t = useT()
  const a = state.a11y || {}
  return (
    <div className="no-print fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 p-4 pt-16 backdrop-blur-sm" onClick={onClose}>
      <div className="card card-lux w-full max-w-md animate-pop-in p-5" onClick={(e) => e.stopPropagation()}>
        <div className="mb-1 flex items-center justify-between">
          <h2 className="font-display text-2xl font-medium">♿ {t('accessibility')}</h2>
          <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200" aria-label={t('quit')}>✕</button>
        </div>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">{t('accessibilitySub')}</p>
        <div className="space-y-1">
          <Switch icon="🔤" on={!!a.dys} onChange={(v) => setA11y({ dys: v })} label={t('dysMode')} desc={t('dysDesc')} />
          <Switch icon="🌗" on={!!a.contrast} onChange={(v) => setA11y({ contrast: v })} label={t('contrastMode')} desc={t('contrastDesc')} />
          <Switch icon="🔎" on={!!a.big} onChange={(v) => setA11y({ big: v })} label={t('bigTextMode')} desc={t('bigTextDesc')} />
        </div>
        <p className="mt-3 rounded-xl bg-slate-100 px-3 py-2.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">🔊 {t('readAloudHint')}</p>
      </div>
    </div>
  )
}

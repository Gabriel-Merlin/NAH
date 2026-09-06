import { useState } from 'react'
import { useInstall } from '../pwa.js'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'

// --- Petites illustrations (maquettes) minimalistes -------------------------
function AppMark({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden style={{ display: 'block' }}>
      <defs>
        <linearGradient id="am-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2c251b" /><stop offset="1" stopColor="#12100b" /></linearGradient>
        <linearGradient id="am-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f6dc9c" /><stop offset="0.5" stopColor="#e3bd6a" /><stop offset="1" stopColor="#bb8c36" /></linearGradient>
      </defs>
      <rect width="56" height="56" rx="14" fill="url(#am-bg)" />
      <text x="28" y="29" fill="url(#am-g)" fontFamily="Georgia,'Times New Roman',serif" fontWeight="700" fontSize="34" textAnchor="middle" dominantBaseline="central">R</text>
    </svg>
  )
}
const G = { size: 22, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
const ShareGlyph = () => <svg viewBox="0 0 24 24" {...G} width="22" height="22" aria-hidden><path d="M12 3v11M8.5 6.5 12 3l3.5 3.5" /><path d="M6 11v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8" /></svg>
const PlusSquareGlyph = () => <svg viewBox="0 0 24 24" {...G} width="22" height="22" aria-hidden><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M12 9v6M9 12h6" /></svg>
const DotsGlyph = () => <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden fill="currentColor"><circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" /></svg>
const BrowserGlyph = () => <svg viewBox="0 0 24 24" {...G} width="22" height="22" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M7 7h.01M9.5 7h.01" /></svg>

function Step({ n, children, glyph }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: 'var(--c-accent)' }}>{n}</span>
      <span className="flex-1 pt-0.5 text-sm leading-snug text-slate-700 dark:text-slate-200">{children}</span>
      {glyph && <span className="shrink-0 pt-0.5 text-slate-400 dark:text-slate-500" aria-hidden>{glyph}</span>}
    </li>
  )
}

// --- Guide d'installation illustré (maquettes), adapté à l'appareil ---------
export function InstallGuide({ onClose }) {
  const t = useT()
  const { ios, android, canPrompt, promptInstall } = useInstall()

  let steps
  if (ios) {
    steps = (
      <ol className="space-y-3">
        <Step n={1} glyph={<BrowserGlyph />}>{t('iosStep1')}</Step>
        <Step n={2} glyph={<ShareGlyph />}>{t('iosStep2')}</Step>
        <Step n={3} glyph={<PlusSquareGlyph />}>{t('iosStep3')}</Step>
        <Step n={4}>{t('iosStep4')}</Step>
      </ol>
    )
  } else if (android) {
    steps = (
      <ol className="space-y-3">
        <Step n={1} glyph={<DotsGlyph />}>{t('andStep1')}</Step>
        <Step n={2} glyph={<PlusSquareGlyph />}>{t('andStep2')}</Step>
      </ol>
    )
  } else {
    steps = (
      <ol className="space-y-3">
        <Step n={1} glyph={<BrowserGlyph />}>{t('deskStep1')}</Step>
      </ol>
    )
  }

  return (
    <div className="no-print fixed inset-0 z-[80] flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center sm:p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={t('installGuideTitle')}>
      <div
        className="w-full max-w-sm animate-pop-in rounded-t-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-start gap-3">
          <span className="shrink-0 overflow-hidden rounded-2xl shadow-sm"><AppMark /></span>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-lg font-semibold leading-tight">{t('installGuideTitle')}</h2>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{t('installGuideSub')}</p>
          </div>
          <button onClick={onClose} className="-mr-1 -mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800" aria-label={t('quit')}>✕</button>
        </div>

        {/* Android : installation directe en un appui, puis étapes manuelles. */}
        {canPrompt && (
          <button
            onClick={async () => { const r = await promptInstall(); if (r === 'accepted') onClose() }}
            className="mt-5 w-full rounded-2xl px-4 py-3 text-base font-semibold text-white shadow-md transition hover:opacity-90"
            style={{ backgroundColor: 'var(--c-accent)' }}
          >
            {t('installNow')}
          </button>
        )}

        <div className="mt-5">
          {canPrompt && <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('installOrManual')}</p>}
          {steps}
        </div>
      </div>
    </div>
  )
}

// --- Carte « Installer l'application » — affichée dans « Mon espace » --------
export function InstallCard() {
  const t = useT()
  const { standalone } = useInstall()
  const [guide, setGuide] = useState(false)

  if (standalone) {
    return (
      <div className="card p-4" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 35%, transparent)' }}>
        <h3 className="flex items-center gap-2 font-display font-semibold" style={{ color: 'var(--c-accent)' }}>
          <span aria-hidden>✓</span> {t('installDone')}
        </h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t('installDoneHint')}</p>
      </div>
    )
  }
  return (
    <>
      <div className="card card-lux flex items-center gap-3 p-4">
        <span className="shrink-0 overflow-hidden rounded-xl"><AppMark size={44} /></span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display font-semibold">{t('installApp')}</h3>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{t('installAppHint')}</p>
        </div>
        <button onClick={() => setGuide(true)} className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: 'var(--c-accent)' }}>
          {t('installBtn')}
        </button>
      </div>
      {guide && <InstallGuide onClose={() => setGuide(false)} />}
    </>
  )
}

// --- Invitation dès la connexion (mobile) : bandeau + guide illustré --------
const DISMISS_KEY = 'stmg_install_dismissed'
export function InstallBanner() {
  const t = useT()
  const { state } = useStore()
  const { standalone, mobile } = useInstall()
  const [dismissed, setDismissed] = useState(() => {
    try { return localStorage.getItem(DISMISS_KEY) === '1' } catch { return false }
  })
  const [guide, setGuide] = useState(false)

  const signedIn = !!state.profile?.firstName
  const show = signedIn && mobile && !standalone && !dismissed

  const close = () => {
    try { localStorage.setItem(DISMISS_KEY, '1') } catch { /* */ }
    setDismissed(true)
  }

  return (
    <>
      {show && (
        <div className="no-print fixed inset-x-0 bottom-0 z-[60] px-3 pt-3" role="dialog" aria-label={t('installApp')} style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}>
          <div className="mx-auto flex max-w-md items-center gap-3 rounded-2xl border p-3 shadow-xl"
            style={{ backgroundColor: 'color-mix(in srgb, var(--c-bg) 94%, var(--c-accent) 6%)', borderColor: 'color-mix(in srgb, var(--c-accent) 30%, transparent)' }}>
            <span className="shrink-0 overflow-hidden rounded-xl"><AppMark size={40} /></span>
            <p className="min-w-0 flex-1 text-sm font-semibold">{t('installBannerText')}</p>
            <button onClick={() => setGuide(true)} className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: 'var(--c-accent)' }}>
              {t('installBtn')}
            </button>
            <button onClick={close} className="shrink-0 rounded-lg px-2 py-1 text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100" aria-label={t('later')}>✕</button>
          </div>
        </div>
      )}
      {guide && <InstallGuide onClose={() => setGuide(false)} />}
    </>
  )
}

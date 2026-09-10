import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useStore, levelFromXp } from '../store.jsx'
import { getSubject, getChapter, search } from '../data/index.js'
import { badgeById } from '../badges.js'
import { Confetti, Icon } from './ui.jsx'
import Welcome from './Welcome.jsx'
import Dictionary from './Dictionary.jsx'
import Customizer from './Customizer.jsx'
import Accessibility from './Accessibility.jsx'
import ReminderScheduler from './ReminderScheduler.jsx'
import { InstallBanner } from './InstallApp.jsx'
import { useT, useLang } from '../i18n.js'
import { signOut } from '../auth.js'
import { useFocus } from '../focus.jsx'
import { useInstall } from '../pwa.js'

const LANGS = [{ code: 'fr', label: 'Français' }, { code: 'en', label: 'English' }, { code: 'es', label: 'Español' }, { code: 'it', label: 'Italiano' }, { code: 'ar', label: 'العربية' }]

export default function Layout({ children }) {
  const { state, derived, setTheme, setLang, logout } = useStore()
  const t = useT()
  const lang = useLang()
  const focus = useFocus()
  const { standalone } = useInstall() // masque le guide d'installation dans l'app installée
  const { pathname } = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)
  const [dictOpen, setDictOpen] = useState(false)
  const [custOpen, setCustOpen] = useState(false)
  const [a11yOpen, setA11yOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  // Ouverture de la personnalisation / accessibilité depuis n'importe quelle page.
  useEffect(() => {
    const openCust = () => setCustOpen(true)
    const openA11y = () => setA11yOpen(true)
    window.addEventListener('stmg-open-customizer', openCust)
    window.addEventListener('stmg-open-a11y', openA11y)
    return () => { window.removeEventListener('stmg-open-customizer', openCust); window.removeEventListener('stmg-open-a11y', openA11y) }
  }, [])
  // À chaque changement de page, on remonte en haut : l'élève découvre toujours
  // la nouvelle page depuis son début (navigation intuitive).
  useEffect(() => { try { window.scrollTo(0, 0) } catch { /* */ } }, [pathname])

  const isDark =
    state.theme === 'dark' ||
    (state.theme == null && typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches)

  const first = state.profile?.firstName?.trim() || ''
  const last = state.profile?.lastName?.trim() || ''
  const initials = ((first[0] || '') + (last[0] || '')).toUpperCase() || (first[0] || '').toUpperCase()
  const avatar = state.customTheme?.avatar || ''
  const photo = state.profile?.photo || ''
  const mono = avatar || initials

  return (
    <div className="min-h-screen">
      <header
        className="no-print sticky top-0 z-40 border-b backdrop-blur"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--c-bg) 82%, transparent)',
          borderColor: 'color-mix(in srgb, var(--c-accent) 24%, transparent)',
          // Zones sûres iPhone (encoche / barre de statut en mode application) :
          // décale le contenu du header sous l'heure et les bords arrondis.
          paddingTop: 'env(safe-area-inset-top)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
        }}
      >
        <div className="mx-auto flex max-w-4xl items-center gap-2 px-4 py-2.5">
          <Link to="/accueil" className="mr-auto flex items-center gap-2 font-display text-2xl font-semibold tracking-tight">
            <span aria-hidden style={{ color: 'var(--c-accent)' }}><Icon.Diamond size={15} /></span>
            <span>
              Réviz<span style={{ color: 'color-mix(in srgb, var(--c-accent) 78%, var(--c-ink))' }}>STMG</span>
            </span>
          </Link>

          {focus?.phase && focus.phase !== 'idle' && (
            <Link
              to="/coach"
              title={t('coach')}
              className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold tabular-nums"
              style={{
                color: focus.phase === 'break' ? '#2f8a5e' : 'var(--c-accent)',
                backgroundColor: focus.phase === 'break' ? 'color-mix(in srgb, #3f9d6d 16%, transparent)' : 'color-mix(in srgb, var(--c-accent) 16%, transparent)',
              }}
            >
              <span aria-hidden>{focus.phase === 'break' ? '☕' : '🎯'}</span>
              {Math.floor(focus.remaining / 60)}:{String(focus.remaining % 60).padStart(2, '0')}
            </Link>
          )}

          <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400" title={t('streakTitle')}>
            <Icon.Flame size={15} />
            <span aria-label={`${state.streak.count} ${t('streakDays')}`}>{state.streak.count}</span>
          </div>

          <div className="hidden items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200 dark:text-slate-400 dark:ring-slate-800 sm:flex" title={t('xpTitle')}>
            {t('levelShort')}&nbsp;{derived.level} · {state.xp}&nbsp;XP
          </div>

          {/* Contrôles complets : uniquement sur écran large. Sur mobile/app, tout
              est regroupé dans le menu burger (voir plus bas). */}
          <div className="hidden items-center gap-1 sm:flex">
          <Link to="/coach" className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800" aria-label={t('coach')} title={t('coach')}>
            <Icon.Timer />
          </Link>
          <button className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800" onClick={() => setDictOpen(true)} aria-label={t('dictionary')} title={t('dictionary')}>
            <Icon.Book />
          </button>
          <button className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800" onClick={() => setSearchOpen(true)} aria-label={t('search')}>
            <Icon.Search />
          </button>
          <button
            className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? t('light') : t('dark')}
          >
            {isDark ? <Icon.Sun /> : <Icon.Moon />}
          </button>
          <button
            className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
            onClick={() => setCustOpen(true)}
            aria-label={t('customize')}
            title={t('customize')}
          >
            <Icon.Palette />
          </button>
          <div className="relative">
            <button
              className="flex h-9 items-center gap-1 rounded-full px-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
              onClick={() => setLangOpen((v) => !v)}
              aria-label={t('language')}
              aria-expanded={langOpen}
            >
              <Icon.Globe size={18} />
              <span className="text-xs font-semibold uppercase">{lang}</span>
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 z-50 mt-1 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false) }}
                      className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${lang === l.code ? 'font-semibold text-violet-600 dark:text-violet-400' : ''}`}
                    >
                      {l.label}
                      {lang === l.code && <span aria-hidden>✓</span>}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {(photo || mono) && (
            <div className="relative">
              <button
                onClick={() => setProfileOpen((v) => !v)}
                title={`${first} ${last}`.trim() + ' — ' + t('mySpace')}
                aria-label={t('myMenu')}
                aria-expanded={profileOpen}
                className="monogram h-9 w-9 shrink-0 overflow-hidden text-sm transition hover:opacity-90"
              >
                {photo ? <img src={photo} alt="" className="h-full w-full rounded-full object-cover" /> : mono}
              </button>
              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                  <div className="absolute right-0 z-50 mt-1.5 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                    {(first || last) && (
                      <div className="border-b border-slate-100 px-3 py-2 dark:border-slate-800">
                        <p className="truncate text-sm font-semibold">{`${first} ${last}`.trim()}</p>
                        {state.account?.email && <p className="truncate text-xs text-slate-400">{state.account.email}</p>}
                        <p className="mt-0.5 text-xs" style={{ color: 'var(--c-accent)' }}>
                          {state.account?.role === 'prof' ? `🧑‍🏫 ${t('roleTeacher')}` : `🎓 ${t('roleStudent')}`}
                        </p>
                      </div>
                    )}
                    <Link to="/moi" onClick={() => setProfileOpen(false)} className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                      <span aria-hidden>🏠</span> {t('mySpace')}
                    </Link>
                    <button onClick={() => { setProfileOpen(false); setCustOpen(true) }} className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                      <span aria-hidden>🎨</span> {t('customizeProfile')}
                    </button>
                    <button onClick={() => { setProfileOpen(false); signOut(); logout() }} className="flex w-full items-center gap-2 border-t border-slate-100 px-3 py-2.5 text-left text-sm font-semibold text-rose-600 hover:bg-rose-50 dark:border-slate-800 dark:hover:bg-rose-950/40">
                      <span aria-hidden>🚪</span> {t('signOut')}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
          </div>

          {/* Menu burger : uniquement sur mobile / application. Regroupe toutes
              les options habituellement en haut à droite. */}
          <MobileMenu
            className="sm:hidden"
            state={state}
            isDark={isDark}
            standalone={standalone}
            lang={lang}
            first={first}
            last={last}
            mono={mono}
            photo={photo}
            onSearch={() => setSearchOpen(true)}
            onDict={() => setDictOpen(true)}
            onCustomize={() => setCustOpen(true)}
            onA11y={() => setA11yOpen(true)}
            onToggleTheme={() => setTheme(isDark ? 'light' : 'dark')}
            onLang={setLang}
            onSignOut={() => { signOut(); logout() }}
          />
        </div>
        <Breadcrumb />
      </header>

      <main className="mx-auto max-w-4xl px-4 pb-16 pt-4">
        <div key={pathname} className="page-enter">{children}</div>
      </main>

      <footer className="no-print border-t" style={{ borderColor: 'color-mix(in srgb, var(--c-accent) 20%, transparent)', backgroundColor: 'color-mix(in srgb, var(--c-bg) 88%, var(--c-accent) 5%)' }}>
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <Link to="/accueil" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
              <span aria-hidden style={{ color: 'var(--c-accent)' }}><Icon.Diamond size={13} /></span>
              <span>Réviz<span style={{ color: 'color-mix(in srgb, var(--c-accent) 78%, var(--c-ink))' }}>STMG</span></span>
            </Link>
            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
              {!standalone && <Link to="/guide" className="hover:text-[color:var(--c-accent)] hover:underline">{t('startGuide')}</Link>}
              <Link to="/confidentialite" className="hover:text-[color:var(--c-accent)] hover:underline">{t('privacyPolicy')}</Link>
              <Link to="/faq" className="hover:text-[color:var(--c-accent)] hover:underline">{t('faq')}</Link>
              <button onClick={() => window.dispatchEvent(new CustomEvent('stmg-open-a11y'))} className="hover:text-[color:var(--c-accent)] hover:underline">♿ {t('accessibility')}</button>
              <a href="mailto:revizstmg@gmail.com" className="hover:text-[color:var(--c-accent)] hover:underline">{t('contactUs')} · revizstmg@gmail.com</a>
            </nav>
            <p className="text-xs text-slate-400">{t('createdBy')} <span className="font-semibold text-slate-500 dark:text-slate-300">Matys DONAT</span> &amp; <span className="font-semibold text-slate-500 dark:text-slate-300">Gabriel MERLIN</span></p>
            <p className="text-xs text-slate-400">© {new Date().getFullYear()} RévizSTMG</p>
          </div>
        </div>
      </footer>

      {/* Barre d'onglets en bas (application) : espace réservé + barre fixe. */}
      {state.track && <div aria-hidden className="no-print" style={{ height: 'calc(env(safe-area-inset-bottom) + 4.25rem)' }} />}
      {state.track && <BottomNav />}

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {dictOpen && <Dictionary onClose={() => setDictOpen(false)} />}
      {custOpen && <Customizer onClose={() => setCustOpen(false)} />}
      {a11yOpen && <Accessibility onClose={() => setA11yOpen(false)} />}
      <BadgeToast />
      <DailyRewardModal />
      <InstallBanner />
      <ReminderScheduler />
      <Welcome />
    </div>
  )
}

// Menu burger pour mobile / application : regroupe toutes les options du site
// (recherche, dictionnaire, thème, personnalisation, langue, espace, déconnexion).
function MobileMenu({ className = '', state, isDark, standalone, lang, first, last, mono, photo, onSearch, onDict, onCustomize, onA11y, onToggleTheme, onLang, onSignOut }) {
  const t = useT()
  const [open, setOpen] = useState(false)
  const signedIn = !!(first || last)
  const close = () => setOpen(false)
  const run = (fn) => () => { close(); fn?.() }

  const Item = ({ icon, label, onClick, to, danger }) => {
    const cls = `flex w-full items-center gap-3 px-4 py-3 text-left text-sm ${danger ? 'font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`
    const inner = <><span className="w-5 shrink-0 text-center" aria-hidden>{icon}</span> {label}</>
    return to
      ? <Link to={to} onClick={close} className={cls}>{inner}</Link>
      : <button onClick={run(onClick)} className={cls}>{inner}</button>
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t('menu')}
        aria-expanded={open}
        className="grid h-9 w-9 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        {open ? <Icon.Close /> : <Icon.Menu />}
      </button>
      {open && createPortal(
        <>
          {/* Fond plein écran (via portal pour échapper au backdrop-blur du header) :
              tout tap en dehors du menu le referme. */}
          <div className="no-print fixed inset-0 z-[90] bg-slate-900/25" onClick={close} aria-hidden />
          <div
            className="no-print fixed right-3 z-[91] w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white py-1 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            style={{ top: 'calc(env(safe-area-inset-top) + 3.25rem)' }}
            role="menu"
          >
            {signedIn && (
              <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                <span className="monogram h-9 w-9 shrink-0 overflow-hidden text-sm" aria-hidden>
                  {photo ? <img src={photo} alt="" className="h-full w-full rounded-full object-cover" /> : mono}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{`${first} ${last}`.trim()}</p>
                  <p className="text-xs" style={{ color: 'var(--c-accent)' }}>
                    {state.account?.role === 'prof' ? `🧑‍🏫 ${t('roleTeacher')}` : `🎓 ${t('roleStudent')}`}
                  </p>
                </div>
              </div>
            )}
            {signedIn && <Item icon="🏠" label={t('mySpace')} to="/moi" />}
            <Item icon="🤖" label={t('coachAI')} to="/coach-ia" />
            <Item icon="🛍️" label={t('shop')} to="/boutique" />
            <Item icon="🤝" label={t('friends')} to="/amis" />
            <Item icon="🔍" label={t('search')} onClick={onSearch} />
            <Item icon="📖" label={t('dictionary')} onClick={onDict} />
            <Item icon="🎨" label={t('customizeProfile')} onClick={onCustomize} />
            {!standalone && <Item icon="🎓" label={t('startGuide')} to="/guide" />}
            <Item icon="♿" label={t('accessibility')} onClick={onA11y} />
            <Item icon={isDark ? '☀️' : '🌙'} label={isDark ? t('light') : t('dark')} onClick={onToggleTheme} />
            <div className="border-t border-slate-100 px-4 py-2.5 dark:border-slate-800">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('language')}</p>
              <div className="flex gap-1.5">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => onLang(l.code)}
                    className={`flex-1 rounded-lg px-2 py-1.5 text-xs font-semibold uppercase transition ${lang === l.code ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'}`}
                    style={lang === l.code ? { backgroundColor: 'var(--c-accent)' } : undefined}
                  >
                    {l.code}
                  </button>
                ))}
              </div>
            </div>
            {signedIn && (
              <div className="border-t border-slate-100 dark:border-slate-800">
                <Item icon="🚪" label={t('signOut')} onClick={onSignOut} danger />
              </div>
            )}
          </div>
        </>,
        document.body,
      )}
    </div>
  )
}

function Breadcrumb() {
  const { pathname } = useLocation()
  const t = useT()
  const crumbs = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean)
    const items = [{ label: t('home'), to: '/accueil' }]
    if (parts[0] === 'subject' && parts[1]) {
      const s = getSubject(parts[1])
      if (s) items.push({ label: s.short || s.name, to: `/subject/${s.id}` })
      if (parts[2] === 'theme' && parts[3]) {
        const c = getChapter(parts[3])
        if (c) items.push({ label: c.short || c.name, to: `/subject/${parts[1]}/theme/${c.id}` })
      }
    } else if (parts[0] === 'favoris') {
      items.push({ label: t('favorites'), to: '/favoris' })
    } else if (parts[0] === 'badges') {
      items.push({ label: t('badges'), to: '/badges' })
    } else if (parts[0] === 'classement') {
      items.push({ label: t('leaderboard'), to: '/classement' })
    } else if (parts[0] === 'classe') {
      items.push({ label: t('classSpace'), to: '/classe' })
    } else if (parts[0] === 'moi') {
      items.push({ label: t('mySpace'), to: '/moi' })
    } else if (parts[0] === 'coach') {
      items.push({ label: t('coach'), to: '/coach' })
    } else if (parts[0] === 'revision') {
      items.push({ label: t('smartRevision'), to: '/revision' })
    } else if (parts[0] === 'bac-blanc') {
      items.push({ label: t('mockExam'), to: '/bac-blanc' })
    } else if (parts[0] === 'programme') {
      items.push({ label: t('studyPlan'), to: '/programme' })
    } else if (parts[0] === 'grand-oral') {
      items.push({ label: t('grandOral'), to: '/grand-oral' })
    } else if (parts[0] === 'guide') {
      items.push({ label: t('startGuide'), to: '/guide' })
    } else if (parts[0] === 'amis') {
      items.push({ label: t('friends'), to: '/amis' })
    }
    return items
  }, [pathname, t])

  if (crumbs.length <= 1) return null
  return (
    <nav aria-label="Fil d'Ariane" className="no-print border-t border-slate-100 bg-slate-50/70 dark:border-slate-800/60 dark:bg-slate-900/40">
      <ol className="mx-auto flex max-w-4xl flex-wrap items-center gap-1 px-4 py-1.5 text-xs text-slate-500 dark:text-slate-400">
        {crumbs.map((c, i) => (
          <li key={c.to} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden>›</span>}
            {i < crumbs.length - 1 ? (
              <Link to={c.to} className="hover:text-violet-600 hover:underline dark:hover:text-violet-400">
                {c.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-700 dark:text-slate-200">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

function SearchOverlay({ onClose }) {
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const t = useT()
  const results = useMemo(() => search(q), [q])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const go = (r) => {
    onClose()
    navigate(r.type === 'subject' ? `/subject/${r.id}` : `/subject/${r.subjectId}/theme/${r.id}`)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 p-4 pt-20 backdrop-blur-sm" onClick={onClose}>
      <div className="card w-full max-w-lg animate-pop-in p-3" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 dark:bg-slate-800">
          <span aria-hidden>🔍</span>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t('search') + '…'}
            className="w-full bg-transparent py-3 text-base outline-none placeholder:text-slate-400"
            aria-label={t('search')}
          />
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600" aria-label={t('quit')}>✕</button>
        </div>
        <ul className="mt-2 max-h-72 overflow-y-auto">
          {q && results.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-slate-400">— « {q} » —</li>
          )}
          {results.map((r) => (
            <li key={r.type + r.id}>
              <button
                onClick={() => go(r)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: r.color }} />
                <span className="flex-1">
                  <span className="block text-sm font-semibold">{r.label}</span>
                  <span className="block text-xs text-slate-400">{r.sub}</span>
                </span>
                <span className="text-slate-300" aria-hidden>›</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function BadgeToast() {
  const { newBadges, dismissBadge } = useStore()
  const current = newBadges[0]
  useEffect(() => {
    if (!current) return
    const t = setTimeout(() => dismissBadge(current), 4200)
    return () => clearTimeout(t)
  }, [current, dismissBadge])
  if (!current) return null
  const b = badgeById[current]
  if (!b) return null
  return (
    <>
      <Confetti show={!!current} />
      <div className="no-print fixed inset-x-0 bottom-24 z-[70] flex justify-center px-4" role="status">
        <button
          onClick={() => dismissBadge(current)}
          className="flex animate-bounce-in items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3 text-left text-white shadow-2xl ring-1 ring-white/10 dark:bg-white dark:text-slate-900"
        >
          <span className="text-3xl" aria-hidden>{b.icon}</span>
          <span>
            <span className="block text-xs uppercase tracking-wide text-amber-400 dark:text-amber-500">Badge débloqué !</span>
            <span className="block font-bold">{b.name}</span>
            <span className="block text-xs opacity-70">{b.desc}</span>
          </span>
        </button>
      </div>
    </>
  )
}

// Barre d'onglets fixée en bas (style application) : accès direct aux sections
// principales. L'onglet actif est déduit de l'URL courante.
function BottomNav() {
  const t = useT()
  const { pathname } = useLocation()
  const tabs = [
    { to: '/accueil', icon: '🏠', label: t('home'), match: ['/accueil'] },
    { to: '/revision', icon: '📚', label: t('reviseTab'), match: ['/revision', '/subject', '/bac-blanc', '/programme', '/coach', '/grand-oral'] },
    { to: '/boutique', icon: '🛍️', label: t('shop'), match: ['/boutique'] },
    { to: '/amis', icon: '🤝', label: t('friends'), match: ['/amis'] },
    { to: '/classement', icon: '🏆', label: t('leaderboard'), match: ['/classement', '/classe'] },
  ]
  const active = (m) => m.some((x) => pathname === x || pathname.startsWith(x + '/'))
  return (
    <nav
      className="no-print fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--c-bg) 90%, transparent)',
        borderColor: 'color-mix(in srgb, var(--c-accent) 24%, transparent)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      aria-label={t('home')}
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-1">
        {tabs.map((tab) => {
          const on = active(tab.match)
          return (
            <Link
              key={tab.to}
              to={tab.to}
              aria-current={on ? 'page' : undefined}
              className="flex flex-1 flex-col items-center gap-1 py-1.5 text-[10px] font-semibold"
              style={{ color: on ? 'var(--c-accent)' : undefined }}
            >
              <span
                className="tab-pill grid place-items-center rounded-full leading-none"
                style={{ padding: on ? '0.25rem 0.85rem' : '0.25rem 0.35rem', backgroundColor: on ? 'color-mix(in srgb, var(--c-accent) 16%, transparent)' : 'transparent' }}
              >
                <span className="tab-icon text-[1.3rem] leading-none" style={{ transform: on ? 'translateY(-1px) scale(1.08)' : 'none' }} aria-hidden>{tab.icon}</span>
              </span>
              <span className={on ? '' : 'text-slate-500 dark:text-slate-400'}>{tab.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

// Récompense de connexion : au premier lancement de la journée, on valide le
// jour d'affilée et on offre l'XP (célébration + gros bonus aux paliers).
function DailyRewardModal() {
  const { state, dailyReward, checkIn, clearDailyReward } = useStore()
  const t = useT()
  useEffect(() => { if (state.track) checkIn() }, [state.track, checkIn])
  if (!dailyReward) return null
  const { count, xp, milestone } = dailyReward
  return createPortal(
    <>
      <Confetti show />
      <div className="no-print fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" onClick={clearDailyReward}>
        <div className="w-full max-w-xs animate-bounce-in rounded-3xl bg-white p-6 text-center shadow-2xl dark:bg-slate-900" onClick={(e) => e.stopPropagation()}>
          <div className="text-5xl">{milestone ? milestone.icon : '🔥'}</div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-amber-500">{t('dailyRewardTitle')}</p>
          <h2 className="mt-1 font-display text-2xl font-bold">{count} {t(count > 1 ? 'daysStreakP' : 'daysStreakS')}</h2>
          <div className="my-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-lg font-extrabold text-white" style={{ backgroundColor: 'var(--c-accent)' }}>
            +{xp} XP
          </div>
          {milestone
            ? <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">🎉 {milestone.icon} {t('milestoneReached')} !</p>
            : <p className="text-sm text-slate-500 dark:text-slate-400">{t('comeBackTomorrow')}</p>}
          <button onClick={clearDailyReward} className="btn-primary mt-5 w-full" style={{ backgroundColor: 'var(--c-accent)' }}>{t('awesome')}</button>
        </div>
      </div>
    </>,
    document.body,
  )
}

export { levelFromXp }

import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useStore, levelFromXp } from '../store.jsx'
import { getSubject, getChapter, search } from '../data/index.js'
import { badgeById } from '../badges.js'
import { Confetti } from './ui.jsx'

export default function Layout({ children }) {
  const { state, derived, setTheme } = useStore()
  const [searchOpen, setSearchOpen] = useState(false)
  const isDark =
    state.theme === 'dark' ||
    (state.theme == null && typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches)

  return (
    <div className="min-h-screen">
      <header className="no-print sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
        <div className="mx-auto flex max-w-4xl items-center gap-2 px-4 py-2.5">
          <Link to="/accueil" className="mr-auto flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
            <span className="text-2xl" aria-hidden>🎓</span>
            <span>
              Réviz<span className="text-violet-600 dark:text-violet-400">STMG</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400" title="Jours de révision consécutifs">
            <span aria-hidden>🔥</span>
            <span aria-label={`${state.streak.count} jours de suite`}>{state.streak.count}</span>
          </div>

          <div className="hidden items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700 dark:bg-violet-950/60 dark:text-violet-300 sm:flex" title="Niveau et points d'expérience">
            <span aria-hidden>⭐</span> Niv. {derived.level} · {state.xp} XP
          </div>

          <button className="btn-ghost !min-h-0 !px-2.5 !py-2" onClick={() => setSearchOpen(true)} aria-label="Rechercher un chapitre">
            🔍
          </button>
          <button
            className="btn-ghost !min-h-0 !px-2.5 !py-2"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
        <Breadcrumb />
      </header>

      <main className="mx-auto max-w-4xl px-4 pb-24 pt-4">{children}</main>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      <BadgeToast />
    </div>
  )
}

function Breadcrumb() {
  const { pathname } = useLocation()
  const crumbs = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean)
    const items = [{ label: 'Accueil', to: '/accueil' }]
    if (parts[0] === 'subject' && parts[1]) {
      const s = getSubject(parts[1])
      if (s) items.push({ label: s.short || s.name, to: `/subject/${s.id}` })
      if (parts[2] === 'theme' && parts[3]) {
        const c = getChapter(parts[3])
        if (c) items.push({ label: c.short || c.name, to: `/subject/${parts[1]}/theme/${c.id}` })
      }
    } else if (parts[0] === 'favoris') {
      items.push({ label: 'Favoris', to: '/favoris' })
    } else if (parts[0] === 'badges') {
      items.push({ label: 'Badges', to: '/badges' })
    }
    return items
  }, [pathname])

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
            placeholder="Chercher une matière, un chapitre, une notion…"
            className="w-full bg-transparent py-3 text-base outline-none placeholder:text-slate-400"
            aria-label="Recherche"
          />
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600" aria-label="Fermer">✕</button>
        </div>
        <ul className="mt-2 max-h-72 overflow-y-auto">
          {q && results.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-slate-400">Aucun résultat pour « {q} ».</li>
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
      <div className="no-print fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4" role="status">
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

export { levelFromXp }

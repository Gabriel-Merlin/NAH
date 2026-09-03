import { Link, Navigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { trackLabel, trackIcon } from '../data/tracks.js'
import { badgeById } from '../badges.js'
import { Ring, ProgressBar, Icon } from '../components/ui.jsx'
import { useT } from '../i18n.js'

// « Mon espace » : la page personnelle de l'élève — identité, statistiques,
// badges, favoris et accès rapide. Distincte de la personnalisation (apparence).
export default function Profile() {
  const { state, derived } = useStore()
  const t = useT()
  if (!state.track) return <Navigate to="/" replace />

  const first = state.profile?.firstName?.trim() || ''
  const last = state.profile?.lastName?.trim() || ''
  const initials = ((first[0] || '') + (last[0] || '')).toUpperCase() || (first[0] || '').toUpperCase()
  const mono = state.customTheme?.avatar || initials
  const photo = state.profile?.photo || ''
  const role = state.account?.role || 'eleve'
  const accuracy = state.totalAnswers > 0 ? Math.round((state.correctAnswers / state.totalAnswers) * 100) : 0
  const earnedBadges = (state.badges || []).map((id) => badgeById[id]).filter(Boolean)

  const openCustomizer = () => window.dispatchEvent(new CustomEvent('stmg-open-customizer'))

  const stats = [
    { icon: '⭐', label: 'XP', value: state.xp },
    { icon: '🔥', label: t('streakDays'), value: state.streak.count },
    { icon: '🏆', label: t('mastered'), value: derived.chaptersMastered },
    { icon: '📚', label: t('coursesThisWeek'), value: derived.weeklyCourses },
    { icon: '🎯', label: t('accuracy'), value: `${accuracy}%` },
    { icon: '🎖️', label: t('badges'), value: (state.badges || []).length },
  ]

  return (
    <div className="animate-lux space-y-6">
      {/* En-tête identité */}
      <section className="card-lux relative overflow-hidden rounded-[1.6rem] p-6 text-[#f4ecd8] sm:p-8"
        style={{ background: 'linear-gradient(140deg, color-mix(in srgb, var(--c-accent) 14%, #17130d) 0%, #221d15 55%, #17130d 100%)', border: '1px solid color-mix(in srgb, var(--c-accent) 30%, transparent)' }}>
        <span aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full" style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--c-accent) 32%, transparent), transparent 70%)' }} />
        <div className="relative flex items-center gap-4 sm:gap-5">
          <span className="monogram h-20 w-20 shrink-0 overflow-hidden text-3xl" aria-hidden>
            {photo ? <img src={photo} alt="" className="h-full w-full rounded-full object-cover" /> : mono}
          </span>
          <div className="min-w-0 flex-1">
            <p className="kicker" style={{ color: 'color-mix(in srgb, var(--c-accent) 62%, #fff)' }}>{role === 'prof' ? `🧑‍🏫 ${t('roleTeacher')}` : `🎓 ${t('roleStudent')}`}</p>
            <h1 className="truncate font-display text-[1.7rem] font-medium leading-[1.15] text-[#faf3e1] sm:text-[2.15rem]">{`${first} ${last}`.trim() || t('mySpace')}</h1>
            {state.account?.email && <p className="mt-0.5 truncate text-xs text-[#b8a878]">{state.account.email}</p>}
            <p className="mt-1 text-xs capitalize tracking-wide text-[#d8cca8]">{trackIcon(state.track)} {trackLabel(state.track)}{state.classCode ? ` · 👥 ${state.classCode}` : ''}</p>
          </div>
          <div className="hidden shrink-0 sm:block">
            <Ring value={derived.pct} color="var(--c-accent)" size={84} label={`${t('levelShort')} ${derived.level}`} />
          </div>
        </div>
        <hr className="rule-gold relative my-5" />
        <div className="relative">
          <div className="mb-1 flex items-center justify-between text-sm text-[#d8cca8]">
            <span>{t('level')} {derived.level}</span><span>{state.xp} / {derived.next} XP</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
            <div className="h-full rounded-full" style={{ width: `${derived.pct}%`, backgroundColor: 'var(--c-accent)' }} />
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section>
        <h2 className="mb-3 px-1 font-display text-xl font-medium">{t('myStats')}</h2>
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="card flex flex-col items-center justify-center p-4 text-center">
              <span className="text-2xl" aria-hidden>{s.icon}</span>
              <span className="mt-1 font-display text-2xl font-semibold" style={{ color: 'var(--c-accent)' }}>{s.value}</span>
              <span className="mt-0.5 text-[0.65rem] uppercase tracking-wide text-slate-400">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Badges */}
      <section>
        <div className="mb-3 flex items-end justify-between px-1">
          <h2 className="font-display text-xl font-medium">{t('myBadges')}</h2>
          <Link to="/badges" className="text-xs font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">{t('seeAll')}</Link>
        </div>
        {earnedBadges.length === 0 ? (
          <div className="card p-5 text-center text-sm text-slate-500 dark:text-slate-400">{t('noBadgeYet')}</div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {earnedBadges.slice(0, 12).map((b) => (
              <span key={b.id} title={b.name} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold dark:bg-slate-800">
                <span className="text-lg" aria-hidden>{b.icon}</span>{b.name}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Raccourcis */}
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link to="/accueil" className="card card-lux flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
          <span className="text-violet-500 dark:text-violet-400"><Icon.Play size={22} /></span>
          <span><span className="block font-display font-semibold">{t('reviseBtn')}</span><span className="block text-xs text-slate-500 dark:text-slate-400">{t('goToLessons')}</span></span>
        </Link>
        <Link to="/favoris" className="card flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
          <span className="text-violet-500 dark:text-violet-400"><Icon.Star size={22} /></span>
          <span><span className="block font-display font-semibold">{t('favorites')}</span><span className="block text-xs text-slate-500 dark:text-slate-400">{(state.favorites || []).length} {t(state.favorites?.length > 1 ? 'chapToReviewP' : 'chapToReviewM')}</span></span>
        </Link>
        {state.classCode ? (
          <Link to="/classe" className="card flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
            <span className="text-2xl" aria-hidden>👥</span>
            <span><span className="block font-display font-semibold">{t('myClass')}</span><span className="block text-xs text-slate-500 dark:text-slate-400">{state.classCode}</span></span>
          </Link>
        ) : (
          <Link to="/classe" className="card flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
            <span className="text-2xl" aria-hidden>👥</span>
            <span><span className="block font-display font-semibold">{t('joinClass')}</span><span className="block text-xs text-slate-500 dark:text-slate-400">{t('joinClassShort')}</span></span>
          </Link>
        )}
        <button onClick={openCustomizer} className="card flex items-center gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md">
          <span className="text-violet-500 dark:text-violet-400"><Icon.Palette size={22} /></span>
          <span><span className="block font-display font-semibold">{t('customizeProfile')}</span><span className="block text-xs text-slate-500 dark:text-slate-400">{t('appearanceHint')}</span></span>
        </button>
      </section>
    </div>
  )
}

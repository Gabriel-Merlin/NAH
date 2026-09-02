import { Link, useNavigate, Navigate } from 'react-router-dom'
import { getChapter } from '../data/index.js'
import { subjectsForTrack, trackLabel, trackIcon } from '../data/tracks.js'
import { useStore, subjectScore } from '../store.jsx'
import { ProgressBar, Ring, Icon } from '../components/ui.jsx'
import { useT } from '../i18n.js'

export default function Home() {
  const { state, derived } = useStore()
  const navigate = useNavigate()
  const t = useT()

  // Pas encore de filière choisie → retour à l'écran d'entrée.
  if (!state.track) return <Navigate to="/" replace />

  const subjects = subjectsForTrack(state.track)
  const realSubjects = subjects.filter((s) => !s.comingSoon)
  const trackProgress =
    realSubjects.length > 0
      ? Math.round(realSubjects.reduce((a, s) => a + subjectScore(state, s.id), 0) / realSubjects.length)
      : 0

  const randomChapter = () => {
    const chapters = realSubjects.flatMap((s) => s.chapters.map((c) => ({ sid: s.id, cid: c.id })))
    if (!chapters.length) return
    const pick = chapters[Math.floor(Math.random() * chapters.length)]
    navigate(`/subject/${pick.sid}/theme/${pick.cid}`)
  }

  const last = state.lastChapter ? getChapter(state.lastChapter.chapterId) : null
  const level = state.track.level

  // Salutation personnalisée selon l'heure et le prénom de l'élève.
  const firstName = state.profile?.firstName?.trim() || ''
  const lastName = state.profile?.lastName?.trim() || ''
  const initials = ((firstName[0] || '') + (lastName[0] || '')).toUpperCase() || (firstName[0] || '').toUpperCase()
  const mono = state.customTheme?.avatar || initials
  const hour = new Date().getHours()
  const greeting = t(hour < 6 ? 'greetingNight' : hour < 12 ? 'greetingMorning' : hour < 18 ? 'greetingAfternoon' : 'greetingEvening')
  const locale = state.lang === 'en' ? 'en-GB' : state.lang === 'es' ? 'es-ES' : 'fr-FR'
  let dateLabel = ''
  try { dateLabel = new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date()) } catch { /* ignore */ }

  return (
    <div className="animate-lux space-y-7">
      {/* Écrin personnalisé — cover sombre & or, à l'effigie de l'accueil */}
      <section
        className="card-lux relative overflow-hidden rounded-[1.6rem] p-6 text-[#f4ecd8] sm:p-8"
        style={{ background: 'linear-gradient(140deg, color-mix(in srgb, var(--c-accent) 14%, #17130d) 0%, #221d15 55%, #17130d 100%)', border: '1px solid color-mix(in srgb, var(--c-accent) 30%, transparent)' }}
      >
        <span aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full" style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--c-accent) 32%, transparent), transparent 70%)' }} />
        <span aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full" style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--c-accent) 18%, transparent), transparent 70%)' }} />

        <div className="relative flex items-center gap-4 sm:gap-5">
          {mono && (
            <span className="monogram h-16 w-16 shrink-0 text-2xl sm:h-20 sm:w-20 sm:text-3xl" aria-hidden>{mono}</span>
          )}
          <div className="min-w-0 flex-1">
            <p className="kicker" style={{ color: 'color-mix(in srgb, var(--c-accent) 62%, #fff)' }}>{trackLabel(state.track)}</p>
            <h1 className="font-display text-[1.7rem] font-medium leading-[1.15] text-[#faf3e1] sm:text-[2.15rem]">
              {greeting}{firstName ? <>, <span style={{ color: 'color-mix(in srgb, var(--c-accent) 55%, #fff)' }}>{firstName}</span></> : ''}
            </h1>
            {dateLabel && <p className="mt-1 text-xs capitalize tracking-wide text-[#b8a878]">{dateLabel}</p>}
          </div>
          <div className="hidden shrink-0 sm:block">
            <Ring value={trackProgress} color="var(--c-accent)" size={84} label={`${trackProgress}%`} />
          </div>
        </div>

        <hr className="rule-gold relative my-5" />

        <div className="relative flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[#d8cca8]">
          <span className="sm:hidden"><span className="font-semibold text-[#f0e2b8]">{trackProgress}%</span> de progression</span>
          <span><span className="font-display text-lg text-[#f0e2b8]">{t('level')} {derived.level}</span></span>
          <span>{state.xp} XP</span>
          <span className="inline-flex items-center gap-1"><Icon.Flame size={14} /> {state.streak.count} {t('streakDays')}</span>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-2.5">
          {last ? (
            <Link to={`/subject/${last.subjectId}/theme/${last.id}`} className="btn-gold gap-1.5 !py-2.5">
              <Icon.Play size={16} /> {t('resume')} : {last.short || last.name}
            </Link>
          ) : realSubjects[0] ? (
            <Link to={`/subject/${realSubjects[0].id}`} className="btn-gold gap-1.5 !py-2.5"><Icon.Play size={16} /> {t('start')}</Link>
          ) : null}
          <button onClick={randomChapter} className="btn gap-1.5 !py-2.5 text-[#f4ecd8]" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 45%, transparent)' }}><Icon.Dice size={16} /> {t('randomChapter')}</button>
        </div>
      </section>

      {/* Raccourcis */}
      <div className="grid grid-cols-2 gap-3">
        <Link to="/badges" className="card flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
          <span className="text-violet-500 dark:text-violet-400"><Icon.Medal size={24} /></span>
          <span>
            <span className="block font-display font-semibold">{t('badges')}</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">{state.badges.length} {t(state.badges.length > 1 ? 'earnedP' : 'earnedM')}</span>
          </span>
        </Link>
        <Link to="/favoris" className="card flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
          <span className="text-violet-500 dark:text-violet-400"><Icon.Star size={24} /></span>
          <span>
            <span className="block font-display font-semibold">{t('favorites')}</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">{state.favorites.length} {t(state.favorites.length > 1 ? 'chapToReviewP' : 'chapToReviewM')}</span>
          </span>
        </Link>
      </div>

      {/* Grille des matières de la filière */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-3 px-1">
          <div>
            <p className="kicker">{trackIcon(state.track)} {trackLabel(state.track)}</p>
            <h2 className="font-display text-2xl font-medium leading-tight">{t('mySubjects')}</h2>
          </div>
          <Link to="/" className="shrink-0 text-xs font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">{t('change')}</Link>
        </div>
        <hr className="rule-gold mb-4" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {subjects.map((s) => {
            if (s.comingSoon) {
              return (
                <div key={s.id} className="card relative flex items-center gap-3.5 overflow-hidden p-5 opacity-80">
                  <span className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: s.color + '99' }} />
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl" style={{ backgroundColor: s.color + '12', boxShadow: `inset 0 0 0 1px ${s.color}33` }}>{s.icon}</span>
                  <div className="min-w-0 flex-1 pl-1">
                    <h3 className="font-display text-[1.05rem] font-semibold leading-tight">{s.name}</h3>
                    <span className="chip mt-1 bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">{t('comingSoon')}</span>
                  </div>
                </div>
              )
            }
            const pct = subjectScore(state, s.id)
            return (
              <Link key={s.id} to={`/subject/${s.id}`} className="card group relative overflow-hidden p-5 transition hover:-translate-y-0.5 hover:shadow-md">
                <span className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: s.color + '99' }} />
                <div className="flex items-start gap-3.5 pl-2">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl" style={{ backgroundColor: s.color + '12', boxShadow: `inset 0 0 0 1px ${s.color}33` }}>{s.icon}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[1.05rem] font-semibold leading-tight">{s.name}</h3>
                    <p className="mb-2.5 truncate text-xs text-slate-500 dark:text-slate-400">{s.chapters.length} {t('chapters')} · {s.tagline}</p>
                    <ProgressBar value={pct} color={s.color} />
                    <p className="mt-1.5 text-right text-xs font-semibold" style={{ color: s.color }}>{pct}%</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <p className="pt-2 text-center text-xs text-slate-400">
        {level === 'terminale-stmg' ? t('courseBasedNote') : t('savedOnDevice')}
      </p>
    </div>
  )
}

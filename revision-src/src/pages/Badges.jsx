import { BADGES } from '../badges.js'
import { useStore } from '../store.jsx'
import { CourseText } from '../components/Course.jsx'
import { useT } from '../i18n.js'

export default function Badges() {
  const { state, derived, resetAll } = useStore()
  const t = useT()
  const earned = new Set(state.badges)

  const confirmReset = () => {
    if (window.confirm(t('resetConfirm'))) resetAll()
  }

  return (
    <div className="space-y-5">
      <header>
        <h1 className="font-display text-2xl font-extrabold">🏅 {state.profile?.firstName ? `${t('badgesOf')} ${state.profile.firstName}` : t('myBadges')}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {earned.size} / {BADGES.length} {t('unlocked')} · {t('level')} {derived.level} · {state.xp} XP
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {BADGES.map((b) => {
          const got = earned.has(b.id)
          return (
            <div
              key={b.id}
              className={`card flex flex-col items-center p-4 text-center transition ${got ? '' : 'opacity-70'}`}
            >
              <span className={`text-4xl ${got ? 'animate-float' : 'grayscale'}`} aria-hidden>{got ? b.icon : '🔒'}</span>
              <span className="mt-2 text-sm font-bold leading-tight"><CourseText text={b.name} /></span>
              <span className="mt-1 text-xs text-slate-500 dark:text-slate-400"><CourseText text={b.desc} /></span>
              {got && <span className="mt-2 chip bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">{t('earnedCheck')}</span>}
            </div>
          )
        })}
      </div>

      <div className="pt-4 text-center">
        <button onClick={confirmReset} className="text-xs text-slate-400 underline hover:text-rose-500">{t('resetProgress')}</button>
      </div>
    </div>
  )
}

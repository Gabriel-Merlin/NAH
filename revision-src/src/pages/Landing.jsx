import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { LEVELS, trackLabel, trackIcon } from '../data/tracks.js'
import { useT } from '../i18n.js'

export default function Landing() {
  const { state, setTrack } = useStore()
  const navigate = useNavigate()
  const t = useT()
  const [openLevel, setOpenLevel] = useState(
    state.track?.level === 'terminale-stmg' ? 'terminale-stmg' : null,
  )

  const choose = (level, specialty = null) => {
    setTrack({ level, specialty })
    navigate('/accueil')
  }

  return (
    <div className="animate-lux space-y-6 py-2">
      <header className="text-center">
        <p className="kicker">RévizSTMG</p>
        <h1 className="mt-1 font-display text-[2rem] font-medium leading-tight">
          {state.profile?.firstName ? `${state.profile.firstName}, ` : ''}{t('whatRevise')}
        </h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('chooseLevel')}</p>
      </header>

      {state.track && (
        <button
          onClick={() => navigate('/accueil')}
          className="flex w-full items-center gap-3 rounded-2xl bg-violet-600 p-4 text-left text-white shadow-md transition hover:bg-violet-700"
        >
          <span className="text-2xl">{trackIcon(state.track)}</span>
          <span className="flex-1">
            <span className="block text-xs uppercase tracking-wide text-white/70">{t('resume')}</span>
            <span className="block font-bold">{trackLabel(state.track)}</span>
          </span>
          <span aria-hidden>▶</span>
        </button>
      )}

      <div className="space-y-3">
        {LEVELS.map((lvl) => {
          const isOpen = openLevel === lvl.id
          const hasSpec = !!lvl.specialties
          return (
            <div key={lvl.id} className="card overflow-hidden">
              <button
                onClick={() => {
                  if (!lvl.available) return
                  if (hasSpec) setOpenLevel(isOpen ? null : lvl.id)
                  else choose(lvl.id)
                }}
                disabled={!lvl.available}
                className={`flex w-full items-center gap-4 p-4 text-left transition ${lvl.available ? 'hover:bg-slate-50 dark:hover:bg-slate-800/50' : 'cursor-not-allowed opacity-60'}`}
                aria-expanded={hasSpec ? isOpen : undefined}
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl" style={{ backgroundColor: lvl.color + '22' }}>{lvl.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="font-bold">{lvl.name}</span>
                    {!lvl.available && <span className="chip bg-slate-100 text-slate-400 dark:bg-slate-800">{t('soonShort')}</span>}
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">{lvl.desc}</span>
                </span>
                {lvl.available && <span className="text-slate-300" aria-hidden>{hasSpec ? (isOpen ? '▾' : '▸') : '▸'}</span>}
              </button>

              {hasSpec && isOpen && (
                <div className="space-y-2 border-t border-slate-100 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-900/40">
                  <p className="px-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('yourSpecialty')}</p>
                  {lvl.specialties.map((sp) => (
                    <button
                      key={sp.id}
                      onClick={() => choose(lvl.id, sp.id)}
                      className="flex w-full items-center gap-3 rounded-xl border-2 border-transparent bg-white p-3 text-left transition hover:border-violet-300 dark:bg-slate-800"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-xl" style={{ backgroundColor: sp.color + '22' }}>{sp.icon}</span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold leading-tight">{sp.name}</span>
                          {sp.available ? (
                            <span className="chip bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">{t('complete')}</span>
                          ) : (
                            <span className="chip bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">{t('specialtyComing')}</span>
                          )}
                        </span>
                        <span className="block text-xs text-slate-500 dark:text-slate-400">{sp.desc}</span>
                      </span>
                      <span className="text-slate-300" aria-hidden>▸</span>
                    </button>
                  ))}
                  <p className="px-1 pt-1 text-xs text-slate-400">
                    {t('commonSubjectsNote')}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <p className="text-center text-xs text-slate-400">
        {t('landingNote')}
      </p>
    </div>
  )
}

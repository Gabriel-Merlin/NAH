import { Link, useNavigate } from 'react-router-dom'
import { SUBJECTS, ALL_CHAPTERS, getChapter } from '../data/index.js'
import { useStore, subjectScore, levelFromXp } from '../store.jsx'
import { ProgressBar, Ring } from '../components/ui.jsx'

export default function Home() {
  const { state, derived } = useStore()
  const navigate = useNavigate()

  const randomChapter = () => {
    const ids = Object.keys(ALL_CHAPTERS)
    const cid = ids[Math.floor(Math.random() * ids.length)]
    const c = getChapter(cid)
    navigate(`/subject/${c.subjectId}/chapter/${cid}`)
  }

  const last = state.lastChapter ? getChapter(state.lastChapter.chapterId) : null

  return (
    <div className="space-y-6">
      {/* Bandeau tableau de bord */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-violet-600 to-fuchsia-600 p-5 text-white shadow-lg">
        <div className="flex items-center gap-4">
          <Ring value={derived.global} color="#ffffff" size={72} label={`${derived.global}%`} />
          <div className="min-w-0">
            <h1 className="font-display text-xl font-extrabold leading-tight">Salut ! Prêt·e à réviser ? 🚀</h1>
            <p className="text-sm text-white/85">
              Niveau {derived.level} · {state.xp} XP · 🔥 {state.streak.count} j de suite
            </p>
          </div>
        </div>
        <div className="mt-3">
          <div className="mb-1 flex justify-between text-xs text-white/80">
            <span>Progression vers le niveau {derived.level + 1}</span>
            <span>{derived.into} / {derived.span} XP</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/25">
            <div className="h-full rounded-full bg-white transition-all duration-700" style={{ width: `${derived.pct}%` }} />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {last ? (
            <Link to={`/subject/${last.subjectId}/chapter/${last.id}`} className="btn bg-white/95 text-violet-700 hover:bg-white !py-2.5">
              ▶ Reprendre : {last.short || last.name}
            </Link>
          ) : (
            <Link to={`/subject/${SUBJECTS[0].id}`} className="btn bg-white/95 text-violet-700 hover:bg-white !py-2.5">▶ Commencer</Link>
          )}
          <button onClick={randomChapter} className="btn bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25 !py-2.5">🎲 Chapitre au hasard</button>
        </div>
      </section>

      {/* Raccourcis */}
      <div className="grid grid-cols-2 gap-3">
        <Link to="/badges" className="card flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
          <span className="text-2xl">🏅</span>
          <span>
            <span className="block font-bold">Badges</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">{state.badges.length} obtenu{state.badges.length > 1 ? 's' : ''}</span>
          </span>
        </Link>
        <Link to="/favoris" className="card flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
          <span className="text-2xl">⭐</span>
          <span>
            <span className="block font-bold">Favoris</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">{state.favorites.length} chapitre{state.favorites.length > 1 ? 's' : ''} à revoir</span>
          </span>
        </Link>
      </div>

      {/* Grille des matières */}
      <section>
        <h2 className="mb-3 px-1 font-display text-lg font-bold">Les matières</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {SUBJECTS.map((s) => {
            const pct = subjectScore(state, s.id)
            return (
              <Link
                key={s.id}
                to={`/subject/${s.id}`}
                className="card group relative overflow-hidden p-4 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: s.color }} />
                <div className="flex items-start gap-3 pl-2">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-2xl" style={{ backgroundColor: s.color + '22' }}>{s.icon}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold leading-tight">{s.name}</h3>
                    <p className="mb-2 truncate text-xs text-slate-500 dark:text-slate-400">{s.chapters.length} chapitres · {s.tagline}</p>
                    <ProgressBar value={pct} color={s.color} />
                    <p className="mt-1 text-right text-xs font-semibold" style={{ color: s.color }}>{pct}%</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <p className="pt-2 text-center text-xs text-slate-400">
        Contenu basé sur ton cours « Terminale STMG — Cours complet ». Progression sauvegardée sur cet appareil.
      </p>
    </div>
  )
}

export { levelFromXp }

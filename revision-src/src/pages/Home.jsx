import { Link, useNavigate, Navigate } from 'react-router-dom'
import { getChapter } from '../data/index.js'
import { subjectsForTrack, trackLabel, trackIcon } from '../data/tracks.js'
import { useStore, subjectScore } from '../store.jsx'
import { ProgressBar, Ring } from '../components/ui.jsx'

export default function Home() {
  const { state, derived } = useStore()
  const navigate = useNavigate()

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
  const hour = new Date().getHours()
  const greeting = hour < 6 ? 'Belle nuit' : hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir'

  return (
    <div className="space-y-6">
      {/* Filière active */}
      <div className="flex items-center justify-between gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
        <span className="flex items-center gap-2 font-semibold">
          <span className="text-lg">{trackIcon(state.track)}</span>
          <span className="truncate">{trackLabel(state.track)}</span>
        </span>
        <Link to="/" className="shrink-0 text-xs font-semibold text-violet-600 hover:underline dark:text-violet-400">Changer</Link>
      </div>

      {/* Bandeau tableau de bord — écrin sombre & or, à l'effigie de l'accueil */}
      <section
        className="relative overflow-hidden rounded-3xl p-5 text-[#f4ecd8] shadow-lg ring-1 ring-[#c8a24e]/25"
        style={{ background: 'linear-gradient(135deg,#211d16 0%,#2c271d 55%,#1b1813 100%)' }}
      >
        <span aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full" style={{ background: 'radial-gradient(circle,#c8a24e33,transparent 70%)' }} />
        <div className="relative flex items-center gap-4">
          <Ring value={trackProgress} color="#d9bd77" size={72} label={`${trackProgress}%`} />
          <div className="min-w-0">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.26em] text-[#c8a24e]">{trackLabel(state.track)}</p>
            <h1 className="font-display text-2xl font-medium leading-tight text-[#faf3e1]">
              {greeting}{firstName ? `, ${firstName}` : ''}
            </h1>
            <p className="mt-0.5 text-sm text-[#d8cca8]">Niveau {derived.level} · {state.xp} XP · 🔥 {state.streak.count} j de suite</p>
          </div>
        </div>
        <div className="relative mt-4 flex flex-wrap gap-2">
          {last ? (
            <Link to={`/subject/${last.subjectId}/theme/${last.id}`} className="btn bg-[#f4ead1] text-[#3a2c0e] hover:bg-white !py-2.5">
              ▶ Reprendre : {last.short || last.name}
            </Link>
          ) : realSubjects[0] ? (
            <Link to={`/subject/${realSubjects[0].id}`} className="btn bg-[#f4ead1] text-[#3a2c0e] hover:bg-white !py-2.5">▶ Commencer</Link>
          ) : null}
          <button onClick={randomChapter} className="btn bg-white/10 text-[#f4ecd8] ring-1 ring-[#c8a24e]/40 hover:bg-white/15 !py-2.5">🎲 Chapitre au hasard</button>
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

      {/* Grille des matières de la filière */}
      <section>
        <h2 className="mb-3 px-1 font-display text-lg font-bold">Tes matières</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {subjects.map((s) => {
            if (s.comingSoon) {
              return (
                <div key={s.id} className="card relative flex items-center gap-3 overflow-hidden p-4 opacity-80">
                  <span className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: s.color }} />
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-2xl" style={{ backgroundColor: s.color + '22' }}>{s.icon}</span>
                  <div className="min-w-0 flex-1 pl-1">
                    <h3 className="font-bold leading-tight">{s.name}</h3>
                    <span className="chip mt-1 bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">Bientôt disponible</span>
                  </div>
                </div>
              )
            }
            const pct = subjectScore(state, s.id)
            return (
              <Link key={s.id} to={`/subject/${s.id}`} className="card group relative overflow-hidden p-4 transition hover:-translate-y-0.5 hover:shadow-md">
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
        {level === 'terminale-stmg'
          ? 'Contenu basé sur ton cours « Terminale STMG — Cours complet ». Progression sauvegardée sur cet appareil.'
          : 'Progression sauvegardée sur cet appareil.'}
      </p>
    </div>
  )
}

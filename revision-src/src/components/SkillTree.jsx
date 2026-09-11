import { Link } from 'react-router-dom'
import { useStore, chapterScore } from '../store.jsx'
import { useT } from '../i18n.js'

// Carte de progression visuelle : les thèmes d'une matière en nœuds reliés (un
// « parcours »), colorés selon la maîtrise. ★ = thème maîtrisé (≥ 90 %).
export function SkillTree({ subject }) {
  const { state } = useStore()
  const t = useT()
  const nodes = (subject.chapters || []).map((c) => ({ id: c.id, name: c.short || c.name, score: chapterScore(state, c.id) }))
  if (nodes.length < 2) return null

  return (
    <div className="card card-lux p-4">
      <p className="kicker mb-3">🗺️ {t('progressPath')}</p>
      <div className="flex items-start overflow-x-auto pb-1">
        {nodes.map((n, i) => {
          const mastered = n.score >= 90
          const started = n.score > 0
          const col = mastered ? '#c8a24e' : started ? subject.color : '#cbd5e1'
          const lineBefore = i === 0 ? 'transparent' : (nodes[i - 1].score > 0 ? subject.color : '#e2e8f0')
          const lineAfter = i === nodes.length - 1 ? 'transparent' : (n.score > 0 ? subject.color : '#e2e8f0')
          return (
            <div key={n.id} className="flex w-[92px] shrink-0 flex-col items-center">
              <div className="flex w-full items-center">
                <span className="h-1 flex-1 rounded-full" style={{ background: lineBefore }} />
                <Link
                  to={`/subject/${subject.id}/theme/${n.id}`}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white transition hover:scale-110"
                  style={{ background: col, boxShadow: mastered ? '0 0 0 3px color-mix(in srgb, #c8a24e 35%, transparent)' : undefined }}
                  aria-label={`${n.name} — ${n.score}%`}
                >
                  {mastered ? '★' : i + 1}
                </Link>
                <span className="h-1 flex-1 rounded-full" style={{ background: lineAfter }} />
              </div>
              <span className="mt-1.5 h-8 overflow-hidden text-center text-[0.62rem] leading-tight text-slate-500 dark:text-slate-400">{n.name}</span>
              <span className="text-[0.65rem] font-semibold" style={{ color: col }}>{n.score}%</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Affichage d'un cours « complet » : introduction, sections avec paragraphes,
// exemples travaillés, encadrés méthode / piège, tableaux, formules et
// ressources (vidéos, sites officiels). Rétro-compatible avec l'ancien format
// (section.points), pour migrer les chapitres progressivement.
import { Rich } from './ui.jsx'

export default function Course({ chapter, color, onPlay }) {
  return (
    <div className="space-y-4">
      {chapter.intro && (
        <section className="card border-l-4 p-5" style={{ borderColor: color }}>
          <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
            <Rich text={chapter.intro} />
          </p>
        </section>
      )}

      {chapter.cours.map((sec, i) => (
        <section key={i} className="card p-5">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg text-xs font-black text-white" style={{ backgroundColor: color }}>{i + 1}</span>
            {sec.h}
          </h2>
          <div className="space-y-3">
            {sec.blocks
              ? sec.blocks.map((b, j) => <Block key={j} b={b} color={color} />)
              : (
                <>
                  {sec.intro && <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300"><Rich text={sec.intro} /></p>}
                  {sec.points && <Bullets items={sec.points} color={color} />}
                  {sec.formula && <div className="formula">{sec.formula}</div>}
                </>
              )}
          </div>
        </section>
      ))}

      {chapter.formulas?.length > 0 && (
        <section className="card p-5">
          <h2 className="mb-3 text-lg font-bold">🔑 Formules à retenir</h2>
          <div className="space-y-2">
            {chapter.formulas.map((f, i) => (
              <div key={i} className="formula">{f}</div>
            ))}
          </div>
        </section>
      )}

      {chapter.resources?.length > 0 && (
        <section className="card p-5">
          <h2 className="mb-1 text-lg font-bold">🎥 Pour aller plus loin</h2>
          <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">Vidéos et ressources pour approfondir (s'ouvrent dans un nouvel onglet).</p>
          <div className="space-y-2">
            {chapter.resources.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-violet-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <span className="text-xl">{r.kind === 'video' ? '▶️' : r.kind === 'doc' ? '📄' : '🔗'}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold leading-tight">{r.label}</span>
                  {r.note && <span className="block text-xs text-slate-400">{r.note}</span>}
                </span>
                <span className="text-slate-300" aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </section>
      )}

      <button onClick={onPlay} className="btn-primary w-full" style={{ backgroundColor: color }}>🎮 M'entraîner sur ce chapitre</button>
    </div>
  )
}

function Bullets({ items, color }) {
  return (
    <ul className="space-y-1.5">
      {items.map((p, j) => (
        <li key={j} className="flex gap-2 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
          <Rich text={p} />
        </li>
      ))}
    </ul>
  )
}

function Block({ b, color }) {
  switch (b.t) {
    case 'p':
      return <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300"><Rich text={b.c} /></p>
    case 'list':
      return <Bullets items={b.c} color={color} />
    case 'formula':
      return <div className="formula">{b.c}</div>
    case 'example':
      return (
        <div className="rounded-xl border-l-4 border-sky-400 bg-sky-50 p-4 dark:border-sky-500 dark:bg-sky-950/30">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-sky-700 dark:text-sky-300">💡 {b.h || 'Exemple'}</p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-200"><Rich text={b.c} /></p>
        </div>
      )
    case 'tip':
      return (
        <div className="rounded-xl border-l-4 border-emerald-400 bg-emerald-50 p-4 dark:border-emerald-500 dark:bg-emerald-950/30">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">✅ {b.h || 'Méthode / Astuce'}</p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-200"><Rich text={b.c} /></p>
        </div>
      )
    case 'warning':
      return (
        <div className="rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 dark:border-amber-500 dark:bg-amber-950/30">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-700 dark:text-amber-300">⚠️ {b.h || 'Piège à éviter'}</p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-200"><Rich text={b.c} /></p>
        </div>
      )
    case 'table':
      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {b.head.map((h, i) => (
                  <th key={i} className="border-b-2 px-3 py-2 text-left font-bold" style={{ borderColor: color }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 dark:border-slate-800">
                  {row.map((cell, k) => (
                    <td key={k} className="px-3 py-2 align-top text-slate-700 dark:text-slate-300"><Rich text={String(cell)} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

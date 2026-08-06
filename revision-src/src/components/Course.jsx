// Affichage d'un cours « complet » : introduction, sections avec paragraphes,
// exemples travaillés, encadrés méthode / piège, tableaux, formules et
// ressources (vidéos, sites officiels). Rétro-compatible avec l'ancien format
// (section.points), pour migrer les chapitres progressivement.
//
// Les briques (Intro, CourseSection, Essentiel, Resources, Block) sont
// exportées pour être réutilisées par les pages Thème et Chapitre.
import { Rich } from './ui.jsx'
import Infographic from './Infographic.jsx'
import { useLang, useAutoTranslate, useT } from '../i18n.js'

// Retire le markdown gras/italique (la traduction automatique perd le gras).
const strip = (s) => String(s || '').replace(/\*\*/g, '').replace(/\*/g, '')

// Texte de cours : rendu markdown en français ; traduit automatiquement (sans
// gras) quand l'interface est en anglais ou en espagnol.
export function CourseText({ text, className = '' }) {
  const lang = useLang()
  const shown = useAutoTranslate(lang === 'fr' ? text : strip(text))
  if (lang === 'fr') return <Rich text={text} className={className} />
  return <span className={className}>{shown}</span>
}

// Enregistrer la fiche : on force le thème clair le temps de l'impression
// (le navigateur permet ensuite « Enregistrer au format PDF »).
export function saveFiche() {
  const root = document.documentElement
  const wasDark = root.classList.contains('dark')
  if (wasDark) root.classList.remove('dark')
  const restore = () => {
    if (wasDark) root.classList.add('dark')
    window.removeEventListener('afterprint', restore)
  }
  window.addEventListener('afterprint', restore)
  window.print()
}

export function Intro({ text, color }) {
  if (!text) return null
  return (
    <section className="card border-l-4 p-5" style={{ borderColor: color }}>
      <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
        <CourseText text={text} />
      </p>
    </section>
  )
}

export function CourseSection({ sec, color, index }) {
  return (
    <section className="card p-5">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
        {index != null && (
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg text-xs font-black text-white" style={{ backgroundColor: color }}>{index + 1}</span>
        )}
        <CourseText text={sec.h} />
      </h2>
      <div className="space-y-3">
        {sec.blocks
          ? sec.blocks.map((b, j) => <Block key={j} b={b} color={color} />)
          : (
            <>
              {sec.intro && <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300"><CourseText text={sec.intro} /></p>}
              {sec.points && <Bullets items={sec.points} color={color} />}
              {sec.formula && <div className="formula">{sec.formula}</div>}
            </>
          )}
      </div>
    </section>
  )
}

export function Essentiel({ items, color }) {
  const t = useT()
  if (!items?.length) return null
  return (
    <section className="rounded-2xl border-2 p-5 shadow-sm" style={{ borderColor: color, background: color + '10' }}>
      <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
        <span>🧠</span> {t('memoSheet')}
      </h2>
      <ul className="space-y-2">
        {items.map((e, i) => (
          <li key={i} className="flex gap-2 text-[15px] leading-relaxed">
            <span className="mt-0.5 font-bold" style={{ color }}>✔</span>
            <span><CourseText text={e} /></span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Resources({ items }) {
  const t = useT()
  if (!items?.length) return null
  return (
    <section className="card p-5">
      <h2 className="mb-1 text-lg font-bold">🎥 {t('goFurther')}</h2>
      <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">{t('goFurtherSub')}</p>
      <div className="space-y-2">
        {items.map((r, i) => (
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
  )
}

// Cours complet d'un thème (toutes les sections) — conservé pour l'impression
// « tout le thème » et la rétro-compatibilité.
export default function Course({ chapter, color, onPlay }) {
  const t = useT()
  return (
    <div className="space-y-4">
      <div className="no-print flex justify-end">
        <button onClick={saveFiche} className="btn-ghost !min-h-0 !py-2 text-sm" title="Ouvre la fenêtre d’impression pour enregistrer au format PDF">
          🖨️ {t('saveFicheBtn')}
        </button>
      </div>

      <Intro text={chapter.intro} color={color} />

      {chapter.cours.map((sec, i) => (
        <CourseSection key={i} sec={sec} color={color} index={i} />
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

      <Essentiel items={chapter.essentiel} color={color} />
      <Resources items={chapter.resources} />

      {onPlay && <button onClick={onPlay} className="btn-primary no-print w-full" style={{ backgroundColor: color }}>🎮 M'entraîner sur ce chapitre</button>}

      <p className="print-footer">RévizSTMG · {chapter.name} — fiche de révision (contenu généré avec l’aide de l’IA, à recouper avec le cours officiel).</p>
    </div>
  )
}

function Bullets({ items, color }) {
  return (
    <ul className="space-y-1.5">
      {items.map((p, j) => (
        <li key={j} className="flex gap-2 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
          <CourseText text={p} />
        </li>
      ))}
    </ul>
  )
}

// Frise chronologique verticale (ligne + pastilles dorées, dates en serif).
// Conçue pour rester lisible à l'impression (« Enregistrer la fiche » PDF).
function Frise({ title, events = [] }) {
  return (
    <div className="frise">
      {title && <p className="frise-title">{title}</p>}
      <ol className="frise-list">
        {events.map((e, i) => (
          <li key={i} className="frise-item">
            <span className="frise-date">{e.date}</span>
            <span className="frise-mid" aria-hidden />
            <span className="frise-label">
              <Rich text={e.label} />
              {e.note && <span className="frise-note"><Rich text={e.note} /></span>}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function Block({ b, color }) {
  switch (b.t) {
    case 'p':
      return <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300"><CourseText text={b.c} /></p>
    case 'list':
      return <Bullets items={b.c} color={color} />
    case 'formula':
      return <div className="formula">{b.c}</div>
    case 'figure':
      return <Infographic name={b.name} color={color} />
    case 'frise':
      return <Frise title={b.title} events={b.events} />
    case 'example':
      return (
        <div className="rounded-xl border-l-4 border-sky-400 bg-sky-50 p-4 dark:border-sky-500 dark:bg-sky-950/30">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-sky-700 dark:text-sky-300">💡 {b.h || 'Exemple'}</p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-200"><CourseText text={b.c} /></p>
        </div>
      )
    case 'tip':
      return (
        <div className="rounded-xl border-l-4 border-emerald-400 bg-emerald-50 p-4 dark:border-emerald-500 dark:bg-emerald-950/30">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">✅ {b.h || 'Méthode / Astuce'}</p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-200"><CourseText text={b.c} /></p>
        </div>
      )
    case 'warning':
      return (
        <div className="rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 dark:border-amber-500 dark:bg-amber-950/30">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-700 dark:text-amber-300">⚠️ {b.h || 'Piège à éviter'}</p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-200"><CourseText text={b.c} /></p>
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
                    <td key={k} className="px-3 py-2 align-top text-slate-700 dark:text-slate-300"><CourseText text={String(cell)} /></td>
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

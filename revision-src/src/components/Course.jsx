// Affichage d'un cours « complet » : introduction, sections avec paragraphes,
// exemples travaillés, encadrés méthode / piège, tableaux, formules et
// ressources (vidéos, sites officiels). Rétro-compatible avec l'ancien format
// (section.points), pour migrer les chapitres progressivement.
//
// Les briques (Intro, CourseSection, Essentiel, Resources, Block) sont
// exportées pour être réutilisées par les pages Thème et Chapitre.
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Rich } from './ui.jsx'
import Infographic from './Infographic.jsx'
import { useLang, useAutoTranslate, useT } from '../i18n.js'
import { sectionDefinitions } from '../data/index.js'

// Bouton « lire à voix haute » (accessibilité) : lit le texte affiché avec la
// voix de l'appareil, dans la langue de l'interface.
export function ReadAloud({ getText, className = '' }) {
  const lang = useLang()
  const t = useT()
  const [on, setOn] = useState(false)
  useEffect(() => () => { try { window.speechSynthesis?.cancel() } catch { /* */ } }, [])
  const toggle = () => {
    try {
      const synth = window.speechSynthesis
      if (!synth) return
      if (on) { synth.cancel(); setOn(false); return }
      const txt = (getText() || '').replace(/\s+/g, ' ').trim()
      if (!txt) return
      const u = new SpeechSynthesisUtterance(txt)
      u.lang = lang === 'es' ? 'es-ES' : lang === 'en' ? 'en-US' : 'fr-FR'
      u.rate = 0.98
      u.onend = () => setOn(false); u.onerror = () => setOn(false)
      synth.cancel(); synth.speak(u); setOn(true)
    } catch { setOn(false) }
  }
  return (
    <button onClick={toggle} title={t('readAloud')} aria-label={t('readAloud')}
      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm transition ${className}`}
      style={{ backgroundColor: on ? 'var(--c-accent)' : 'color-mix(in srgb, var(--c-accent) 14%, transparent)', color: on ? '#fff' : 'var(--c-accent)' }}>
      {on ? '⏹' : '🔊'}
    </button>
  )
}

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

export function CourseSection({ sec, color, index, themeId, subjectId, sectionIdx, hideDefs = false }) {
  const ref = useRef(null)
  return (
    <section className="card relative p-5">
      <ReadAloud getText={() => ref.current?.innerText || ''} className="no-print absolute right-3 top-3" />
      <div ref={ref}>
      <h2 className="mb-3 flex items-center gap-2.5 pr-9 font-display text-xl font-semibold">
        {index != null && (
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs font-black text-white" style={{ backgroundColor: color, boxShadow: `0 4px 10px -4px ${color}` }}>{index + 1}</span>
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
      {!hideDefs && <Definitions sec={sec} themeId={themeId} subjectId={subjectId} sectionIdx={sectionIdx ?? index ?? 0} color={color} />}
      </div>
    </section>
  )
}

// Normalise une section (nouveau format `blocks` ou ancien `intro/points/formula`)
// en une simple liste de blocs, pour la lecture paginée.
function sectionToBlocks(sec) {
  if (sec.blocks?.length) return sec.blocks
  const out = []
  if (sec.intro) out.push({ t: 'p', c: sec.intro })
  if (sec.points?.length) out.push({ t: 'list', c: sec.points })
  if (sec.formula) out.push({ t: 'formula', c: sec.formula })
  return out.length ? out : [{ t: 'p', c: '' }]
}

// Découpe les blocs en « feuilles » BIEN REMPLIES : ~3 blocs par feuille, de sorte
// que chaque feuille soit pleine. La feuille s'ajuste ensuite exactement à son
// contenu (le lecteur n'impose pas de hauteur), donc aucun espace vide en bas.
const BLOCK_WEIGHT = { p: 1, list: 1.4, example: 1.5, tip: 1.4, warning: 1.4, table: 2.2, figure: 2.2, frise: 2.2, formula: 1 }
function paginateBlocks(blocks, max = 3.6) {
  const pages = []
  let cur = []
  let w = 0
  for (const b of blocks) {
    const bw = BLOCK_WEIGHT[b.t] || 1
    if (cur.length && w + bw > max) { pages.push(cur); cur = []; w = 0 }
    cur.push(b)
    w += bw
  }
  if (cur.length) pages.push(cur)
  // Fusionne une dernière feuille trop maigre avec la précédente (jamais de feuille
  // presque vide en fin de chapitre).
  if (pages.length > 1) {
    const lp = pages[pages.length - 1]
    const lw = lp.reduce((s, b) => s + (BLOCK_WEIGHT[b.t] || 1), 0)
    if (lw <= 1.4) { pages[pages.length - 2] = pages[pages.length - 2].concat(lp); pages.pop() }
  }
  return pages.length ? pages : [[]]
}

// Lecteur de cours paginé, épuré et « luxueux » : une poignée de blocs par page,
// pagination élégante, transitions douces. À l'impression, toutes les pages sont
// dépliées (fiche PDF complète).
export function PaginatedCourse({ sec, color, prevLabel, nextLabel, onPrev, onNext }) {
  const t = useT()
  // Pages recalculées à chaque changement de section (nouveau chapitre).
  const [list, setList] = useState(() => paginateBlocks(sectionToBlocks(sec)))
  const [page, setPage] = useState(0)
  const [full, setFull] = useState(false) // lecture plein écran « feuille »
  const bodyRef = useRef(null)
  const fullRef = useRef(null)
  useEffect(() => { setList(paginateBlocks(sectionToBlocks(sec))); setPage(0) }, [sec])
  const last = list.length - 1
  const toTop = (ref) => { try { (ref?.current || window).scrollTo({ top: 0, behavior: 'smooth' }) } catch { (ref?.current || window).scrollTo(0, 0) } }
  const goPrev = () => { if (page > 0) { setPage(page - 1); toTop(full ? fullRef : null) } else { setFull(false); onPrev?.() } }
  const goNext = () => { if (page < last) { setPage(page + 1); toTop(full ? fullRef : null) } else { setFull(false); onNext?.() } }
  const atStart = page === 0 && !onPrev
  const endCaption = page === last && onNext ? nextLabel : null

  // Verrou du défilement de l'app quand la feuille est en plein écran.
  useEffect(() => {
    if (!full) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') setFull(false); if (e.key === 'ArrowRight') goNext(); if (e.key === 'ArrowLeft') goPrev() }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [full, page])

  // À l'ouverture du plein écran (et à chaque changement de feuille), on affiche
  // toujours le HAUT de la feuille (corrige le haut coupé).
  useEffect(() => {
    if (full && fullRef.current) fullRef.current.scrollTop = 0
  }, [full, page])

  // Barre de pagination (réutilisée en vue normale et en plein écran).
  const pager = (
    <div className="no-print flex items-center justify-between gap-3">
      <button
        onClick={goPrev}
        disabled={atStart}
        aria-label={t('previous')}
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-xl text-slate-500 shadow-sm transition hover:bg-slate-50 disabled:opacity-30 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
      >
        ‹
      </button>
      <div className="flex flex-col items-center gap-1.5">
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {list.map((_, k) => (
            <span
              key={k}
              onClick={() => setPage(k)}
              className="h-1.5 cursor-pointer rounded-full transition-all"
              style={{ width: k === page ? 22 : 6, backgroundColor: k === page ? color : 'color-mix(in srgb, currentColor 22%, transparent)' }}
              aria-hidden
            />
          ))}
        </div>
        <span className="text-[11px] font-medium text-slate-400">
          {endCaption || `${t('pageWord')} ${page + 1} / ${list.length}`}
        </span>
      </div>
      <button
        onClick={goNext}
        aria-label={page === last ? (nextLabel || t('nextChapter')) : t('next')}
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-xl text-white shadow-md transition hover:brightness-110"
        style={{ backgroundColor: color }}
      >
        ›
      </button>
    </div>
  )

  return (
    <section className="reader">
      {/* En-tête imprimé (visible uniquement à l'impression, en haut de chaque fiche) */}
      <div className="print-only print-header" style={{ display: 'none' }}>
        <div className="print-title"><CourseText text={sec.h || ''} /></div>
      </div>

      {/* Feuille A4 (vue normale) — grande page « papier », on appuie pour l'ouvrir en plein écran */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setFull(true)}
        onKeyDown={(e) => { if (e.key === 'Enter') setFull(true) }}
        className="reader-a4 reader-sheet card relative cursor-zoom-in overflow-hidden !rounded-2xl p-6 sm:p-9"
        style={{ boxShadow: '0 24px 60px -34px rgba(0,0,0,.4)' }}
        aria-label={t('tapToOpen')}
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} aria-hidden />
        <div className="no-print absolute right-4 top-4" onClick={(e) => e.stopPropagation()}>
          <ReadAloud getText={() => bodyRef.current?.innerText || ''} />
        </div>
        <div ref={bodyRef}>
          {list.map((pg, k) => (
            <div key={k} className={`reader-print-page ${page === k ? 'block animate-lux' : 'hidden'} print-show space-y-5`}>
              {pg.map((b, j) => <Block key={j} b={b} color={color} />)}
            </div>
          ))}
        </div>
        <div className="no-print mt-6 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-400 dark:border-slate-800">
          <span className="flex items-center gap-1">⤢ {t('tapToOpen')}</span>
          <span>{t('pageWord')} {page + 1} / {list.length}</span>
        </div>
      </div>

      <div className="mt-5">{pager}</div>
      {prevLabel && page === 0 && onPrev && (
        <p className="no-print mt-2 text-center text-[11px] text-slate-400">‹ {prevLabel}</p>
      )}

      {/* Lecture plein écran : la feuille remplit l'écran. Rendue dans <body> via un
          portail pour rester au-dessus de tout (aucun ancêtre transformé ne peut
          décaler le « fixed » : corrige le haut de la feuille coupé). */}
      {full && createPortal((
        <div className="reader-full no-print fixed inset-0 z-[80] flex flex-col bg-slate-200/95 backdrop-blur-sm dark:bg-slate-950/95" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{endCaption || `${t('pageWord')} ${page + 1} / ${list.length}`}</span>
            <button
              onClick={() => setFull(false)}
              aria-label={t('close')}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-lg text-slate-600 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              ✕
            </button>
          </div>
          <div ref={fullRef} className="flex-1 overflow-y-auto px-3 pb-6 pt-1 sm:px-6">
            <div className="reader-a4-full mx-auto my-2 w-full max-w-[720px] rounded-xl bg-white p-6 shadow-2xl dark:bg-slate-900 sm:p-12">
              <span className="pointer-events-none mb-6 block h-1 w-16 rounded-full" style={{ background: color }} aria-hidden />
              <div className="animate-lux space-y-6 text-[1.06rem] leading-relaxed">
                {(list[page] || []).map((b, j) => <Block key={j} b={b} color={color} />)}
              </div>
              <div className="mt-8 border-t border-slate-200 pt-3 text-right text-[11px] font-medium text-slate-400 dark:border-slate-700">{t('pageWord')} {page + 1} / {list.length}</div>
            </div>
          </div>
          <div className="border-t border-slate-300/60 px-4 py-3 dark:border-slate-800">{pager}</div>
        </div>
      ), document.body)}
    </section>
  )
}

// Encadré « Définitions clés » : 5 définitions utiles pour cette section (tirées
// du cours puis complétées par la banque du thème). Rendu sous chaque cours.
export function Definitions({ sec, themeId, subjectId, sectionIdx = 0, color }) {
  const t = useT()
  if (!themeId) return null
  const { skip, defs } = sectionDefinitions(sec, themeId, subjectId, sectionIdx)
  if (skip || !defs.length) return null
  return (
    <section className="mt-4 rounded-2xl border p-4" style={{ borderColor: color + '55', background: color + '0c' }}>
      <h3 className="mb-2 flex items-center gap-2 font-display text-base font-semibold">📖 {t('keyDefs')}</h3>
      <dl className="space-y-1.5">
        {defs.map((d, i) => (
          <div key={i} className="text-[14px] leading-relaxed">
            <dt className="inline font-semibold" style={{ color }}><CourseText text={d.term} /></dt>
            <dd className="inline text-slate-700 dark:text-slate-300"> — <CourseText text={d.def} /></dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function Essentiel({ items, color }) {
  const t = useT()
  if (!items?.length) return null
  return (
    <section className="rounded-2xl border-2 p-5 shadow-sm" style={{ borderColor: color, background: color + '10' }}>
      <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-semibold">
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
      <h2 className="mb-1 font-display text-xl font-semibold">🎥 {t('goFurther')}</h2>
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
        <CourseSection key={i} sec={sec} color={color} index={i} themeId={chapter.id} subjectId={chapter.subjectId} />
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

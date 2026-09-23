import { useRef, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useStore, useStudyTimer } from '../store.jsx'
import { buildFiche } from '../data/ficheAI.js'
import { ocrImages, cleanOcrText } from '../ocr.js'
import { analyzeWithVision } from '../ficheVision.js'
import { useT } from '../i18n.js'

// Petit titre de section de fiche.
function SecHead({ icon, children }) {
  return (
    <h3 className="mb-2.5 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em]" style={{ color: 'var(--c-accent)' }}>
      <span aria-hidden>{icon}</span>{children}
    </h3>
  )
}

// Affichage d'une fiche structurée (générée ou enregistrée) : on garde
// l'essentiel d'un sujet — questions, informations importantes, définitions.
function FicheView({ fiche }) {
  if (!fiche) return null
  const hasBody = fiche.questions?.length || fiche.definitions?.length || fiche.keyInfo?.length
  if (!hasBody) return <p className="text-center text-sm text-slate-500 dark:text-slate-400">Aucun élément exploitable n’a pu être extrait. Reprends une photo plus nette, ou complète le texte.</p>
  return (
    <div className="space-y-6">
      {fiche.questions?.length > 0 && (
        <section>
          <SecHead icon="📝">Questions à traiter</SecHead>
          <ol className="space-y-2.5">
            {fiche.questions.map((q, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-bold text-white" style={{ backgroundColor: 'var(--c-accent)' }}>{i + 1}</span>
                <span className="text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-100">{q}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {fiche.keyInfo?.length > 0 && (
        <section>
          <SecHead icon="📄">Informations importantes</SecHead>
          <ul className="flex flex-col gap-2">
            {fiche.keyInfo.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 rounded-xl bg-slate-50 px-3.5 py-2.5 text-sm leading-relaxed text-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
                <span className="shrink-0" aria-hidden>📌</span><span>{f}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {fiche.definitions?.length > 0 && (
        <section>
          <SecHead icon="📖">Définitions associées</SecHead>
          <dl className="space-y-3.5">
            {fiche.definitions.map((d, i) => (
              <div key={i}>
                <dt className="text-[15px] font-semibold text-slate-900 dark:text-slate-50">{d.term}</dt>
                <dd className="mt-0.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{d.def}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </div>
  )
}

export default function PhotoFiche() {
  const { state, saveFiche, removeFiche, saveDeck } = useStore()
  const t = useT()
  useStudyTimer()
  const [photos, setPhotos] = useState([]) // { file, url }
  const [rawText, setRawText] = useState('')
  const [title, setTitle] = useState('')
  const [ocr, setOcr] = useState({ status: 'idle', progress: 0, msg: '' })
  const [ai, setAi] = useState({ status: 'idle', msg: '' })
  const [fiche, setFiche] = useState(null)
  const [ficheSource, setFicheSource] = useState(null) // 'ia' | 'ocr' | 'texte'
  const [msg, setMsg] = useState('')
  const [openId, setOpenId] = useState(null)
  const fileRef = useRef(null)
  if (!state.track) return <Navigate to="/" replace />

  const fiches = state.fiches || []

  const addPhotos = (files) => {
    const arr = [...files].filter((f) => f.type?.startsWith('image/')).map((f) => ({ file: f, url: URL.createObjectURL(f) }))
    setPhotos((p) => [...p, ...arr].slice(0, 8))
  }
  const removePhoto = (i) => setPhotos((p) => { try { URL.revokeObjectURL(p[i]?.url) } catch { /* */ } return p.filter((_, k) => k !== i) })

  const runOcr = async () => {
    if (!photos.length) return
    setOcr({ status: 'running', progress: 0, msg: '' })
    try {
      const raw = await ocrImages(photos.map((p) => p.file), {
        onProgress: (i, n, r) => setOcr({ status: 'running', progress: Math.round(((i + r) / n) * 100), msg: '' }),
      })
      // On ne garde que les lignes réellement lisibles (on jette les symboles/charabia).
      const { text, ratio } = cleanOcrText(raw)
      if (text && text.length >= 30) {
        setRawText((prev) => (prev ? prev + '\n' : '') + text)
        setOcr({ status: 'done', progress: 100, msg: ratio < 0.55 ? 'Une partie du texte était illisible et a été écartée. Vérifie ce qui reste ci-dessous et complète si besoin.' : '' })
      } else {
        setOcr({ status: 'error', progress: 0, msg: 'La photo n’a pas pu être lue (texte trop petit, flou ou tableau). Rapproche-toi, mets de la lumière et reprends une photo bien nette — ou saisis le texte ci-dessous.' })
      }
    } catch {
      const off = typeof navigator !== 'undefined' && !navigator.onLine
      setOcr({ status: 'error', progress: 0, msg: off ? 'Lecture automatique indisponible hors ligne. Tu peux saisir ou coller ton texte ci-dessous.' : 'Lecture impossible cette fois. Saisis ou colle ton texte ci-dessous — la fiche se génère quand même.' })
    }
  }

  const generate = () => {
    const f = buildFiche(rawText, { title })
    setFiche(f); setFicheSource(ocr.status === 'done' ? 'ocr' : 'texte'); setMsg(''); setOpenId(null)
  }

  // Analyse IA (vision) : lit la photo côté serveur (Claude) — gère tableaux,
  // petit texte, manuscrit. Retombe sur l'OCR si non configurée.
  const runVision = async () => {
    if (!photos.length) return
    setAi({ status: 'running', msg: '' }); setMsg(''); setOpenId(null)
    try {
      const { fiche: f } = await analyzeWithVision(photos.map((p) => p.file))
      const flashcards = (f.definitions || []).map((d) => ({ front: d.term, back: d.def }))
      const has = (f.questions?.length || f.keyInfo?.length || f.definitions?.length)
      setFiche({ title: (f.title || title || 'Ma fiche de révision'), empty: !has, questions: f.questions || [], keyInfo: f.keyInfo || [], definitions: f.definitions || [], flashcards })
      setFicheSource('ia')
      setAi({ status: 'done', msg: '' })
    } catch (e) {
      const code = e?.code
      setAi({
        status: 'error',
        msg: code === 'not_configured'
          ? 'L’analyse IA n’est pas encore activée sur le serveur. Utilise la lecture classique ci-dessous (ou active-la, voir la doc).'
          : code === 'network'
            ? 'Connexion impossible. Vérifie ta connexion, ou utilise la lecture classique ci-dessous.'
            : 'L’analyse IA a échoué cette fois. Utilise la lecture classique ci-dessous.',
      })
    }
  }

  const doSave = () => {
    if (!fiche || fiche.empty) return
    const id = 'fiche-' + Date.now()
    saveFiche({
      id, title: fiche.title, createdAt: Date.now(), source: ficheSource === 'ia' ? 'ia' : photos.length ? 'photo' : 'texte',
      text: (rawText || '').slice(0, 8000),
      sections: { questions: fiche.questions, definitions: fiche.definitions, keyInfo: fiche.keyInfo },
      flashcards: fiche.flashcards || [],
    })
    setMsg('Fiche enregistrée ✅')
  }
  const makeDeck = (src) => {
    const cards = (src.flashcards || []).filter((c) => c.front && c.back)
    if (!cards.length) { setMsg('Pas assez de définitions pour des flashcards.'); return }
    saveDeck({ id: 'fichedeck-' + Date.now(), title: '📸 ' + (src.title || 'Fiche'), cards })
    setMsg(`Flashcards créées ✅ (onglet Révision · ${cards.length} cartes)`)
  }

  const reset = () => {
    photos.forEach((p) => { try { URL.revokeObjectURL(p.url) } catch { /* */ } })
    setPhotos([]); setRawText(''); setTitle(''); setFiche(null); setFicheSource(null); setOcr({ status: 'idle', progress: 0, msg: '' }); setAi({ status: 'idle', msg: '' }); setMsg('')
  }

  const opened = openId ? fiches.find((f) => f.id === openId) : null
  const openedFiche = opened ? { title: opened.title, empty: false, ...opened.sections, flashcards: opened.flashcards } : null

  return (
    <div className="animate-lux space-y-6">
      <header className="text-center">
        <p className="kicker">📸 {t('photoFiche')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">Ta fiche à partir d’une photo</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Photographie ton cours ou ton sujet : l’appli en retient l’essentiel — les <strong>questions</strong>, les <strong>informations importantes</strong> et les <strong>définitions</strong>.</p>
      </header>

      {/* Étape 1 — Photo */}
      <section className="card card-lux p-5">
        <h2 className="mb-1 font-display text-lg font-semibold">1. Photographie ton cours 📷</h2>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">Une ou plusieurs pages (jusqu’à 8). Cadre bien, à plat, avec de la lumière.</p>
        <input ref={fileRef} type="file" accept="image/*" capture="environment" multiple className="hidden" onChange={(e) => { addPhotos(e.target.files); e.target.value = '' }} />
        <button onClick={() => fileRef.current?.click()} className="btn-gold w-full !py-3.5 text-base">📷 Ajouter une photo</button>
        {photos.length > 0 && (
          <>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {photos.map((p, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                  <img src={p.url} alt={`Page ${i + 1}`} className="h-full w-full object-cover" />
                  <button onClick={() => removePhoto(i)} aria-label="Retirer" className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-black/60 text-xs text-white">✕</button>
                </div>
              ))}
            </div>
            <button onClick={runVision} disabled={ai.status === 'running'} className="btn-gold mt-4 w-full !py-3.5 text-base disabled:opacity-60">
              {ai.status === 'running' ? '✨ Analyse par l’IA en cours…' : '✨ Analyser avec l’IA (recommandé)'}
            </button>
            <p className="mt-1.5 text-center text-[11px] text-slate-400">Lit même les tableaux, le petit texte et l’écriture manuscrite.</p>
            {ai.msg && <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">{ai.msg}</p>}

            <div className="my-3 flex items-center gap-3 text-[11px] uppercase tracking-wider text-slate-400">
              <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />ou<span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            </div>

            <button onClick={runOcr} disabled={ocr.status === 'running'} className="w-full rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-50 disabled:opacity-60 dark:hover:bg-slate-800" style={{ borderColor: 'color-mix(in srgb, var(--c-accent) 40%, var(--c-line, #ddd))', color: 'var(--c-accent)' }}>
              {ocr.status === 'running' ? `Lecture classique… ${ocr.progress}%` : '🔎 Lecture classique (hors ligne)'}
            </button>
            {ocr.status === 'running' && (
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div className="h-full rounded-full transition-all" style={{ width: `${ocr.progress}%`, backgroundColor: 'var(--c-accent)' }} />
              </div>
            )}
            {ocr.msg && <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">{ocr.msg}</p>}
          </>
        )}
      </section>

      {/* Étape 2 — Texte */}
      <section className="card card-lux p-5">
        <h2 className="mb-1 font-display text-lg font-semibold">2. Vérifie le texte ✏️</h2>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">Corrige les erreurs de lecture si besoin — ou saisis / colle directement ton cours ici (sans photo).</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre de la fiche (optionnel)" className="mb-3 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[color:var(--c-accent)] dark:border-slate-700 dark:bg-slate-800" />
        <textarea value={rawText} onChange={(e) => setRawText(e.target.value)} rows={8} placeholder="Le texte de ton cours apparaîtra ici après la lecture des photos. Tu peux aussi l’écrire ou le coller directement." className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[color:var(--c-accent)] dark:border-slate-700 dark:bg-slate-800" />
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-slate-400">{rawText.trim().length} caractères</span>
          {(rawText || photos.length > 0) && <button onClick={reset} className="text-xs font-semibold text-rose-500 hover:underline">↺ Tout recommencer</button>}
        </div>
        <button onClick={generate} disabled={rawText.trim().length < 20} className="btn-gold mt-4 w-full !py-3.5 text-base disabled:opacity-50">✨ Générer ma fiche de révision</button>
      </section>

      {/* Résultat */}
      {fiche && (
        <section className="card card-lux p-5">
          {fiche.empty ? (
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">Le texte est trop court. Ajoute plus de contenu, puis regénère.</p>
          ) : (
            <>
              <div className="mb-1 flex items-start justify-between gap-2">
                <h2 className="font-display text-2xl font-semibold leading-tight">{fiche.title}</h2>
                <span className="chip shrink-0" style={{ backgroundColor: 'var(--c-accent)22', color: 'var(--c-accent)' }}>{ficheSource === 'ia' ? '✨ IA' : ficheSource === 'ocr' ? '🔎 OCR' : '✍️ Fiche'}</span>
              </div>
              <span className="mb-4 block h-0.5 w-16 rounded-full" style={{ backgroundColor: 'var(--c-accent)' }} />
              {fiche.lowQuality && (
                <div className="mb-4 rounded-xl border border-amber-300/60 bg-amber-50 p-3 text-xs leading-relaxed text-amber-700 dark:border-amber-500/30 dark:bg-amber-950/30 dark:text-amber-300">
                  ⚠️ Le texte lu semble incomplet ou peu net. Pour une meilleure fiche : reprends une photo bien à plat, nette et éclairée, ou corrige le texte ci-dessus, puis régénère.
                </div>
              )}
              <FicheView fiche={fiche} />
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <button onClick={doSave} className="btn-primary flex-1 text-white" style={{ backgroundColor: 'var(--c-accent)' }}>💾 Enregistrer la fiche</button>
                {fiche.flashcards?.length > 0 && <button onClick={() => makeDeck(fiche)} className="flex-1 rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-50 dark:hover:bg-slate-800" style={{ borderColor: 'var(--c-accent)', color: 'var(--c-accent)' }}>🃏 Créer {fiche.flashcards.length} flashcards</button>}
              </div>
              {msg && <p className="mt-3 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">{msg}</p>}
            </>
          )}
        </section>
      )}

      <p className="text-center text-xs text-slate-400">🔒 Tout est traité sur ton appareil : tes photos ne sont envoyées nulle part.</p>

      {/* Fiches enregistrées */}
      {fiches.length > 0 && (
        <section className="space-y-2.5">
          <h2 className="px-1 font-display text-lg font-semibold">📚 Mes fiches ({fiches.length})</h2>
          {fiches.map((f) => (
            <div key={f.id} className="card p-0">
              <div className="flex items-center gap-1 p-3">
                <button onClick={() => setOpenId(openId === f.id ? null : f.id)} className="flex min-w-0 flex-1 items-center gap-3 text-left">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-lg" style={{ backgroundColor: 'var(--c-accent)22' }} aria-hidden>{f.source === 'ia' ? '✨' : f.source === 'photo' ? '📸' : '📝'}</span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{f.title}</span>
                    <span className="block text-xs text-slate-400">{(f.sections?.questions?.length || 0)} questions · {(f.sections?.definitions?.length || 0)} définitions</span>
                  </span>
                </button>
                <button onClick={() => makeDeck({ title: f.title, flashcards: f.flashcards })} title="Créer des flashcards" aria-label="Créer des flashcards" className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-slate-400 transition hover:text-slate-700 dark:hover:text-slate-200">🃏</button>
                <button onClick={() => { if (confirm('Supprimer cette fiche ?')) { removeFiche(f.id); if (openId === f.id) setOpenId(null) } }} title="Supprimer" aria-label="Supprimer" className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-slate-300 transition hover:text-rose-500">🗑</button>
              </div>
              {openId === f.id && openedFiche && (
                <div className="border-t border-slate-100 p-4 dark:border-slate-800"><FicheView fiche={openedFiche} /></div>
              )}
            </div>
          ))}
        </section>
      )}

      <div className="text-center">
        <Link to="/revision" className="text-sm font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">← Retour à la révision</Link>
      </div>
    </div>
  )
}

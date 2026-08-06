import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { LEVELS, subjectsForTrack } from '../data/tracks.js'
import { useT } from '../i18n.js'

// Accueil personnalisé : à la première venue, une « fiche d'information »
// (prénom, nom, classe), puis un choix des matières et du chapitre où l'élève
// en est ; enfin, à chaque ouverture, l'apparition douce de « Bienvenue,
// Prénom » sur fond blanc avant d'entrer dans l'app.
export default function Welcome() {
  const { state, applyOnboarding } = useStore()
  const t = useT()
  const navigate = useNavigate()
  const location = useLocation()

  const hasProfile = !!state.profile?.firstName
  const [phase, setPhase] = useState(hasProfile ? 'hello' : 'form') // 'form' | 'plan' | 'hello' | 'done'
  const [leaving, setLeaving] = useState(false)

  // Champs de la fiche
  const [firstName, setFirstName] = useState(state.profile?.firstName || '')
  const [lastName, setLastName] = useState(state.profile?.lastName || '')
  const [level, setLevel] = useState(state.track?.level || null)
  const [specialty, setSpecialty] = useState(state.track?.specialty || null)

  // Étape « plan » : chapitres choisis par matière ({ [subjectId]: chapterId }).
  const [chosen, setChosen] = useState({})
  const [lastPick, setLastPick] = useState(null) // { sid, cid }

  const helloName = state.profile?.firstName || firstName.trim()

  // Empêche le défilement de l'app derrière l'écran d'accueil.
  useEffect(() => {
    if (phase === 'done') return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [phase])

  // « Bienvenue » : disparaît de lui-même après l'animation (ou au toucher).
  const finishRef = useRef(() => {})
  useEffect(() => {
    if (phase !== 'hello') return
    const t = setTimeout(() => finishRef.current(), 4600)
    return () => clearTimeout(t)
  }, [phase])

  if (phase === 'done') return null

  const chosenLevel = LEVELS.find((l) => l.id === level) || null
  const needsSpecialty = !!chosenLevel?.specialties
  const specialtyOk = !needsSpecialty || !!specialty
  const canSubmit = firstName.trim().length > 0 && !!chosenLevel?.available && specialtyOk

  const pickLevel = (l) => {
    if (!l.available) return
    setLevel(l.id)
    setChosen({}) // la filière change → on repart des matières correspondantes
    setLastPick(null)
    if (!l.specialties) setSpecialty(null)
    else setSpecialty((s) => s || l.specialties.find((sp) => sp.available)?.id || null)
  }

  // Filière en cours de saisie (pas encore enregistrée) → matières à proposer.
  const draftTrack = level ? { level, specialty: needsSpecialty ? specialty : null } : null
  const planSubjects = (draftTrack ? subjectsForTrack(draftTrack) : [])
    .filter((s) => s && !s.comingSoon && s.chapters?.length)

  const goToPlan = () => {
    if (!canSubmit) return
    setPhase('plan')
  }

  const pickChapter = (sid, cid) => {
    setChosen((c) => {
      if (c[sid] === cid) { const { [sid]: _, ...rest } = c; return rest } // re-tap = désélection
      return { ...c, [sid]: cid }
    })
    setLastPick((lp) => (lp && lp.sid === sid && lp.cid === cid ? null : { sid, cid }))
  }

  const commit = (withPlan) => {
    const profile = { firstName: firstName.trim(), lastName: lastName.trim() }
    const track = { level, specialty: needsSpecialty ? specialty : null }
    const favorites = withPlan ? Object.values(chosen) : []
    const lastChapter = withPlan && lastPick ? { subjectId: lastPick.sid, chapterId: lastPick.cid } : null
    applyOnboarding({ profile, track, favorites, lastChapter })
    setPhase('hello')
  }

  const finish = () => {
    if (leaving) return
    setLeaving(true)
    setTimeout(() => {
      setPhase('done')
      if (location.pathname === '/') navigate('/accueil')
    }, 750)
  }
  finishRef.current = finish

  // ----- Écran « Bienvenue » (luxueux) -----
  if (phase === 'hello') {
    return (
      <div className={`welcome-root no-print ${leaving ? 'is-leaving' : ''}`} role="dialog" aria-label={t('welcome')}>
        <div className="welcome-hello" onClick={finish}>
          <p className="welcome-kicker">RévizSTMG</p>
          <h1 className="welcome-title">{t('welcome')}</h1>
          {helloName && <p className="welcome-name">{helloName}</p>}
          <span className="welcome-rule" aria-hidden />
          <p className="welcome-hint">{t('enterHint')}</p>
        </div>
      </div>
    )
  }

  // ----- Étape « Que veux-tu travailler ? » (matières + chapitre) -----
  if (phase === 'plan') {
    return (
      <div className="welcome-root no-print" role="dialog" aria-label={t('planTitle')}>
        <div className="welcome-card is-plan">
          <p className="welcome-brand">RévizSTMG</p>
          <h1 className="welcome-h">{t('planTitle')}</h1>
          <p className="welcome-sub">{firstName.trim() ? `${firstName.trim()} — ` : ''}{t('planSub')}</p>

          <div className="welcome-plan-scroll">
            {planSubjects.map((s) => (
              <div key={s.id} className="welcome-subject">
                <p className="welcome-subject-h">
                  <span aria-hidden>{s.icon}</span>
                  <span>{s.name}</span>
                  {chosen[s.id] && <span className="ws-where">{t('chapterChosen')}</span>}
                  {!chosen[s.id] && <span className="ws-where">{t('whereAreYou')}</span>}
                </p>
                {s.chapters.map((c) => {
                  const active = chosen[s.id] === c.id
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => pickChapter(s.id, c.id)}
                      className={`welcome-chap ${active ? 'is-active' : ''}`}
                      aria-pressed={active}
                    >
                      {active && <span className="wc-check" aria-hidden>✓</span>}
                      {c.short || c.name}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>

          <button type="button" className="welcome-cta" onClick={() => commit(true)}>
            {t('enter')}
          </button>
          <button type="button" className="welcome-skip" onClick={() => commit(false)}>
            {t('skipStep')}
          </button>
        </div>
      </div>
    )
  }

  // ----- Fiche d'information -----
  return (
    <div className="welcome-root no-print" role="dialog" aria-label={t('letsMeet')}>
      <div className="welcome-card">
        <p className="welcome-brand">RévizSTMG</p>
        <h1 className="welcome-h">{t('letsMeet')}</h1>
        <p className="welcome-sub">{t('fillCard')}</p>

        <label className="welcome-label" htmlFor="w-first">{t('firstName')}</label>
        <input
          id="w-first"
          className="welcome-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={t('yourFirstName')}
          autoFocus
          autoComplete="given-name"
          maxLength={40}
        />

        <label className="welcome-label" htmlFor="w-last">{t('lastName')}</label>
        <input
          id="w-last"
          className="welcome-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && canSubmit && goToPlan()}
          placeholder={t('yourLastName')}
          autoComplete="family-name"
          maxLength={40}
        />

        <span className="welcome-label">{t('yourClass')}</span>
        <div className="flex flex-wrap gap-2">
          {LEVELS.map((l) => (
            <button
              key={l.id}
              type="button"
              disabled={!l.available}
              onClick={() => pickLevel(l)}
              className={`welcome-pill ${level === l.id ? 'is-active' : ''}`}
            >
              {l.icon} {l.name}{!l.available && ` · ${t('soon')}`}
            </button>
          ))}
        </div>

        {needsSpecialty && (
          <>
            <span className="welcome-label">{t('yourSpecialty')}</span>
            <div className="flex flex-wrap gap-2">
              {chosenLevel.specialties.map((sp) => (
                <button
                  key={sp.id}
                  type="button"
                  disabled={!sp.available}
                  onClick={() => sp.available && setSpecialty(sp.id)}
                  className={`welcome-pill ${specialty === sp.id ? 'is-active' : ''}`}
                >
                  {sp.icon} {sp.name}{!sp.available && ` · ${t('toCome')}`}
                </button>
              ))}
            </div>
          </>
        )}

        <button type="button" className="welcome-cta" disabled={!canSubmit} onClick={goToPlan}>
          {t('continueBtn')}
        </button>
      </div>
    </div>
  )
}

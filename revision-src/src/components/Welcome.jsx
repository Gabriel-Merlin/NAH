import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { LEVELS } from '../data/tracks.js'

// Accueil personnalisé : à la première venue, une « fiche d'information »
// (prénom, nom, classe) ; puis, à chaque ouverture, l'apparition douce et
// luxueuse de « Bienvenue, Prénom » sur fond blanc avant d'entrer dans l'app.
export default function Welcome() {
  const { state, setProfile, setTrack } = useStore()
  const navigate = useNavigate()
  const location = useLocation()

  const hasProfile = !!state.profile?.firstName
  const [phase, setPhase] = useState(hasProfile ? 'hello' : 'form') // 'form' | 'hello' | 'done'
  const [leaving, setLeaving] = useState(false)

  // Champs de la fiche
  const [firstName, setFirstName] = useState(state.profile?.firstName || '')
  const [lastName, setLastName] = useState(state.profile?.lastName || '')
  const [level, setLevel] = useState(state.track?.level || null)
  const [specialty, setSpecialty] = useState(state.track?.specialty || null)
  const helloName = phase === 'form' ? firstName.trim() : state.profile?.firstName || firstName.trim()

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
    if (!l.specialties) setSpecialty(null)
    else setSpecialty((s) => s || l.specialties.find((sp) => sp.available)?.id || null)
  }

  const submit = () => {
    if (!canSubmit) return
    setProfile({ firstName: firstName.trim(), lastName: lastName.trim() })
    setTrack({ level, specialty: needsSpecialty ? specialty : null })
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
      <div className={`welcome-root no-print ${leaving ? 'is-leaving' : ''}`} role="dialog" aria-label="Bienvenue">
        <div className="welcome-hello" onClick={finish}>
          <p className="welcome-kicker">RévizSTMG</p>
          <h1 className="welcome-title">Bienvenue</h1>
          {helloName && <p className="welcome-name">{helloName}</p>}
          <span className="welcome-rule" aria-hidden />
          <p className="welcome-hint">Touchez pour entrer</p>
        </div>
      </div>
    )
  }

  // ----- Fiche d'information -----
  return (
    <div className="welcome-root no-print" role="dialog" aria-label="Fiche d'information">
      <div className="welcome-card">
        <p className="welcome-brand">RévizSTMG</p>
        <h1 className="welcome-h">Faisons connaissance</h1>
        <p className="welcome-sub">Renseigne ta fiche pour un espace de révision à ton nom.</p>

        <label className="welcome-label" htmlFor="w-first">Prénom</label>
        <input
          id="w-first"
          className="welcome-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Ton prénom"
          autoFocus
          autoComplete="given-name"
          maxLength={40}
        />

        <label className="welcome-label" htmlFor="w-last">Nom</label>
        <input
          id="w-last"
          className="welcome-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && canSubmit && submit()}
          placeholder="Ton nom"
          autoComplete="family-name"
          maxLength={40}
        />

        <span className="welcome-label">Ta classe</span>
        <div className="flex flex-wrap gap-2">
          {LEVELS.map((l) => (
            <button
              key={l.id}
              type="button"
              disabled={!l.available}
              onClick={() => pickLevel(l)}
              className={`welcome-pill ${level === l.id ? 'is-active' : ''}`}
            >
              {l.icon} {l.name}{!l.available && ' · bientôt'}
            </button>
          ))}
        </div>

        {needsSpecialty && (
          <>
            <span className="welcome-label">Ta spécialité</span>
            <div className="flex flex-wrap gap-2">
              {chosenLevel.specialties.map((sp) => (
                <button
                  key={sp.id}
                  type="button"
                  disabled={!sp.available}
                  onClick={() => sp.available && setSpecialty(sp.id)}
                  className={`welcome-pill ${specialty === sp.id ? 'is-active' : ''}`}
                >
                  {sp.icon} {sp.name}{!sp.available && ' · à venir'}
                </button>
              ))}
            </div>
          </>
        )}

        <button type="button" className="welcome-cta" disabled={!canSubmit} onClick={submit}>
          Entrer
        </button>
      </div>
    </div>
  )
}

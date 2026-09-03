import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { LEVELS, subjectsForTrack } from '../data/tracks.js'
import { useT } from '../i18n.js'
import { signUp, signIn, fetchProfile, upsertProfile, getSession } from '../auth.js'
import { normalizeCode } from '../leaderboard.js'

// Accueil personnalisé : inscription (compte prof/élève avec e-mail + mot de
// passe, code de classe optionnel), puis choix des matières, puis apparition
// douce de « Bienvenue, Prénom ».
export default function Welcome() {
  const { state, applyOnboarding, setAccount, setClassCode, setPhoto } = useStore()
  const t = useT()
  const navigate = useNavigate()
  const location = useLocation()

  const hasProfile = !!state.profile?.firstName
  const initialPhase = !hasProfile ? 'form' : (!state.onboarded && state.track ? 'plan' : 'hello')
  const [phase, setPhase] = useState(initialPhase) // 'form' | 'plan' | 'hello' | 'done'
  const [leaving, setLeaving] = useState(false)

  // Identité + filière
  const [firstName, setFirstName] = useState(state.profile?.firstName || '')
  const [lastName, setLastName] = useState(state.profile?.lastName || '')
  const [level, setLevel] = useState(state.track?.level || null)
  const [specialty, setSpecialty] = useState(state.track?.specialty || null)

  // Compte
  const [authMode, setAuthMode] = useState('create') // 'create' | 'login'
  const [role, setRole] = useState('eleve') // 'eleve' | 'prof'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [classCodeInput, setClassCodeInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const [info, setInfo] = useState('')

  // Étape « plan »
  const [chosen, setChosen] = useState({})
  const [lastPick, setLastPick] = useState(null)

  const helloName = state.profile?.firstName || firstName.trim()

  useEffect(() => {
    if (phase === 'done') return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [phase])

  const finishRef = useRef(() => {})
  useEffect(() => {
    if (phase !== 'hello') return
    const id = setTimeout(() => finishRef.current(), 4600)
    return () => clearTimeout(id)
  }, [phase])

  if (phase === 'done') return null

  const chosenLevel = LEVELS.find((l) => l.id === level) || null
  const needsSpecialty = !!chosenLevel?.specialties
  const specialtyOk = !needsSpecialty || !!specialty
  const emailOk = /\S+@\S+\.\S+/.test(email.trim())
  const passOk = password.length >= 6
  const idOk = firstName.trim().length > 0 && !!chosenLevel?.available && specialtyOk
  const canSubmit = authMode === 'login' ? (emailOk && passOk) : (emailOk && passOk && idOk)

  const pickLevel = (l) => {
    if (!l.available) return
    setLevel(l.id)
    setChosen({}); setLastPick(null)
    if (!l.specialties) setSpecialty(null)
    else setSpecialty((s) => s || l.specialties.find((sp) => sp.available)?.id || null)
  }

  const draftTrack = level ? { level, specialty: needsSpecialty ? specialty : null } : null
  const planSubjects = (draftTrack ? subjectsForTrack(draftTrack) : []).filter((s) => s && !s.comingSoon && s.chapters?.length)

  const pickChapter = (sid, cid) => {
    setChosen((c) => { if (c[sid] === cid) { const { [sid]: _, ...rest } = c; return rest } return { ...c, [sid]: cid } })
    setLastPick((lp) => (lp && lp.sid === sid && lp.cid === cid ? null : { sid, cid }))
  }

  const commit = (withPlan) => {
    const profile = { firstName: firstName.trim(), lastName: lastName.trim(), photo: state.profile?.photo }
    const track = { level, specialty: needsSpecialty ? specialty : null }
    const favorites = withPlan ? Object.values(chosen) : []
    const lastChapter = withPlan && lastPick ? { subjectId: lastPick.sid, chapterId: lastPick.cid } : null
    applyOnboarding({ profile, track, favorites, lastChapter })
    setPhase('hello')
  }

  // Soumission du formulaire de compte (création / connexion). Un compte est
  // désormais obligatoire : plus d'accès « invité ».
  const submitForm = async () => {
    setErr(''); setInfo('')
    const track = { level, specialty: needsSpecialty ? specialty : null }
    const cc = normalizeCode(classCodeInput)

    setBusy(true)
    try {
      if (authMode === 'login') {
        await signIn({ email: email.trim(), password })
        const prof = await fetchProfile()
        const nm = (prof?.name || '').trim()
        const parts = nm.split(/\s+/)
        const profile = { firstName: parts[0] || 'Élève', lastName: parts.slice(1).join(' ') }
        const tk = prof?.level ? { level: prof.level, specialty: prof.specialty || null } : track
        applyOnboarding({ profile, track: tk })
        if (prof?.photo) setPhoto(prof.photo)
        setAccount({ id: getSession()?.user?.id, email: email.trim(), role: prof?.role || 'eleve' })
        const joinCode = prof?.class_code || cc
        if (joinCode) setClassCode(joinCode)
        setPhase('hello')
      } else {
        const { needsConfirm } = await signUp({ email: email.trim(), password })
        if (needsConfirm) { setInfo(t('confirmEmailMsg')); setAuthMode('login'); setBusy(false); return }
        const fullName = `${firstName.trim()} ${lastName.trim()}`.trim()
        await upsertProfile({ role, name: fullName, class_code: cc || null, level, specialty: needsSpecialty ? specialty : null, photo: state.profile?.photo || null })
        setAccount({ id: getSession()?.user?.id, email: email.trim(), role })
        if (cc) setClassCode(cc)
        if (role === 'prof') { applyOnboarding({ profile: { firstName: firstName.trim(), lastName: lastName.trim() }, track }); setPhase('hello') }
        else setPhase('plan')
      }
    } catch (e) {
      setErr(e?.message || 'Erreur')
    } finally {
      setBusy(false)
    }
  }

  const finish = () => {
    if (leaving) return
    setLeaving(true)
    setTimeout(() => { setPhase('done'); if (location.pathname === '/') navigate('/accueil') }, 750)
  }
  finishRef.current = finish

  // ----- Écran « Bienvenue » -----
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

  // ----- Étape « Que veux-tu travailler ? » -----
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
                  <span className="ws-where">{chosen[s.id] ? t('chapterChosen') : t('whereAreYou')}</span>
                </p>
                {s.chapters.map((c) => {
                  const active = chosen[s.id] === c.id
                  return (
                    <button key={c.id} type="button" onClick={() => pickChapter(s.id, c.id)} className={`welcome-chap ${active ? 'is-active' : ''}`} aria-pressed={active}>
                      {active && <span className="wc-check" aria-hidden>✓</span>}
                      {c.short || c.name}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
          <button type="button" className="welcome-cta" onClick={() => commit(true)}>{t('enter')}</button>
          <button type="button" className="welcome-skip" onClick={() => commit(false)}>{t('skipStep')}</button>
        </div>
      </div>
    )
  }

  // ----- Inscription / connexion -----
  const seg = (active) => `welcome-pill ${active ? 'is-active' : ''}`
  return (
    <div className="welcome-root no-print" role="dialog" aria-label={t('letsMeet')}>
      <div className="welcome-card">
        <p className="welcome-brand">RévizSTMG</p>
        <h1 className="welcome-h">{authMode === 'login' ? t('loginTab') : t('letsMeet')}</h1>
        <p className="welcome-sub">{authMode === 'login' ? t('loginSub') : t('accountRequired')}</p>

        {/* Créer un compte / Se connecter */}
        <div className="mt-3 flex gap-2">
          <button type="button" className={seg(authMode === 'create')} onClick={() => { setAuthMode('create'); setErr('') }}>{t('createAccount')}</button>
          <button type="button" className={seg(authMode === 'login')} onClick={() => { setAuthMode('login'); setErr('') }}>{t('loginTab')}</button>
        </div>

        {authMode === 'create' && (
          <>
            <span className="welcome-label">{t('account')}</span>
            <div className="flex flex-wrap gap-2">
              <button type="button" className={seg(role === 'eleve')} onClick={() => setRole('eleve')}>🎓 {t('roleStudent')}</button>
              <button type="button" className={seg(role === 'prof')} onClick={() => setRole('prof')}>🧑‍🏫 {t('roleTeacher')}</button>
            </div>

            <label className="welcome-label" htmlFor="w-first">{t('firstName')}</label>
            <input id="w-first" className="welcome-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={t('yourFirstName')} autoComplete="given-name" maxLength={40} />
            <label className="welcome-label" htmlFor="w-last">{t('lastName')}</label>
            <input id="w-last" className="welcome-input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={t('yourLastName')} autoComplete="family-name" maxLength={40} />
          </>
        )}

        <label className="welcome-label" htmlFor="w-email">{t('emailField')}</label>
        <input id="w-email" className="welcome-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="prenom.nom@exemple.fr" autoComplete="email" maxLength={80} />
        <label className="welcome-label" htmlFor="w-pass">{t('passwordField')}</label>
        <input id="w-pass" className="welcome-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && canSubmit && !busy && submitForm()} placeholder="••••••••" autoComplete={authMode === 'login' ? 'current-password' : 'new-password'} maxLength={72} />

        {authMode === 'create' && (
          <>
            <span className="welcome-label">{t('yourClass')}</span>
            <div className="flex flex-wrap gap-2">
              {LEVELS.map((l) => (
                <button key={l.id} type="button" disabled={!l.available} onClick={() => pickLevel(l)} className={seg(level === l.id)}>
                  {l.icon} {l.name}{!l.available && ` · ${t('soon')}`}
                </button>
              ))}
            </div>
            {needsSpecialty && (
              <>
                <span className="welcome-label">{t('yourSpecialty')}</span>
                <div className="flex flex-wrap gap-2">
                  {chosenLevel.specialties.map((sp) => (
                    <button key={sp.id} type="button" disabled={!sp.available} onClick={() => sp.available && setSpecialty(sp.id)} className={seg(specialty === sp.id)}>
                      {sp.icon} {sp.name}{!sp.available && ` · ${t('toCome')}`}
                    </button>
                  ))}
                </div>
              </>
            )}
            <label className="welcome-label" htmlFor="w-cc">{t('classCodeOptional')}</label>
            <input id="w-cc" className="welcome-input" value={classCodeInput} onChange={(e) => setClassCodeInput(e.target.value)} placeholder="ex : marceau-tstmg2" maxLength={24} />
          </>
        )}

        {err && <p className="mt-3 text-sm font-semibold text-rose-600">{err}</p>}
        {info && <p className="mt-3 text-sm font-semibold text-emerald-700">{info}</p>}

        <button type="button" className="welcome-cta" disabled={!canSubmit || busy} onClick={() => submitForm()}>
          {busy ? t('pleaseWait') : authMode === 'login' ? t('loginTab') : t('createMyAccount')}
        </button>
        <button type="button" className="welcome-skip" disabled={busy} onClick={() => { setAuthMode(authMode === 'login' ? 'create' : 'login'); setErr('') }}>
          {authMode === 'login' ? t('noAccountYet') : t('haveAccountAlready')}
        </button>
      </div>
    </div>
  )
}

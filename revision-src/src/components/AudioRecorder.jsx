import { useEffect, useRef, useState } from 'react'

// Enregistreur audio pour s'entraîner au Grand Oral : on enregistre son passage
// avec le micro, puis on se réécoute. L'enregistrement reste en mémoire (rien
// n'est envoyé) et disparaît quand on quitte la page.
const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

export default function AudioRecorder() {
  const supported = typeof navigator !== 'undefined' && navigator.mediaDevices?.getUserMedia && typeof window !== 'undefined' && window.MediaRecorder
  const [recording, setRecording] = useState(false)
  const [url, setUrl] = useState('')
  const [elapsed, setElapsed] = useState(0)
  const [error, setError] = useState('')
  const recRef = useRef(null)
  const streamRef = useRef(null)
  const chunksRef = useRef([])
  const tickRef = useRef(null)
  const urlRef = useRef('')

  useEffect(() => () => {
    try { recRef.current?.state === 'recording' && recRef.current.stop() } catch { /* */ }
    try { streamRef.current?.getTracks().forEach((t) => t.stop()) } catch { /* */ }
    if (urlRef.current) URL.revokeObjectURL(urlRef.current)
    clearInterval(tickRef.current)
  }, [])

  const start = async () => {
    setError('')
    if (urlRef.current) { URL.revokeObjectURL(urlRef.current); urlRef.current = ''; setUrl('') }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      const rec = new MediaRecorder(stream)
      chunksRef.current = []
      rec.ondataavailable = (e) => { if (e.data.size) chunksRef.current.push(e.data) }
      rec.onstop = () => {
        try {
          const blob = new Blob(chunksRef.current, { type: rec.mimeType || 'audio/webm' })
          const u = URL.createObjectURL(blob)
          urlRef.current = u
          setUrl(u)
        } catch { /* */ }
        streamRef.current?.getTracks().forEach((t) => t.stop())
      }
      rec.start()
      recRef.current = rec
      setRecording(true)
      setElapsed(0)
      tickRef.current = setInterval(() => setElapsed((e) => e + 1), 1000)
    } catch {
      setError('micDenied')
    }
  }

  const stop = () => {
    clearInterval(tickRef.current)
    setRecording(false)
    try { recRef.current?.state === 'recording' && recRef.current.stop() } catch { /* */ }
  }

  if (!supported) {
    return <p className="mt-4 rounded-xl bg-slate-50 p-3 text-center text-sm text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">🎙️ L’enregistrement n’est pas disponible sur cet appareil/navigateur.</p>
  }

  return (
    <div className="mt-5 rounded-2xl border-2 p-4" style={{ borderColor: 'color-mix(in srgb, var(--c-accent) 30%, transparent)' }}>
      <p className="mb-1 font-display font-semibold">🎙️ M’enregistrer et me réécouter</p>
      <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">Lance l’enregistrement, fais ton exposé, puis réécoute-toi pour repérer les « euh », le débit et les silences. Rien n’est envoyé ni conservé.</p>

      <div className="flex items-center gap-3">
        {!recording ? (
          <button onClick={start} className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90" style={{ backgroundColor: '#e11d48' }}>
            ⏺ {url ? 'Réenregistrer' : 'Enregistrer'}
          </button>
        ) : (
          <button onClick={stop} className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90" style={{ backgroundColor: '#334155' }}>
            ⏹ Arrêter
          </button>
        )}
        {recording && (
          <span className="flex items-center gap-2 text-sm font-semibold text-rose-500">
            <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-rose-500" /> {fmt(elapsed)}
          </span>
        )}
      </div>

      {error === 'micDenied' && <p className="mt-3 text-xs font-semibold text-rose-600">Accès au micro refusé. Autorise le microphone pour t’enregistrer.</p>}

      {url && !recording && (
        <div className="mt-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">Ta réécoute</p>
          <audio controls src={url} className="w-full" />
        </div>
      )}
    </div>
  )
}

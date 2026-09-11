import { useState } from 'react'
import { METHODO } from '../data/methodo.js'
import { useT } from '../i18n.js'

export default function Methodo() {
  const t = useT()
  const [open, setOpen] = useState(METHODO[0].id)

  return (
    <div className="animate-lux mx-auto max-w-2xl space-y-4">
      <header className="text-center">
        <p className="kicker">🧭 {t('methodoTitle')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('methodoTitle')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('methodoSub')}</p>
      </header>

      {METHODO.map((m) => {
        const isOpen = open === m.id
        return (
          <section key={m.id} className="card overflow-hidden p-0">
            <button onClick={() => setOpen(isOpen ? '' : m.id)} className="flex w-full items-center gap-3 p-4 text-left">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-xl" style={{ backgroundColor: m.color + '22' }}>{m.icon}</span>
              <span className="min-w-0 flex-1 font-display text-lg font-semibold">{m.title}</span>
              <span className="shrink-0 text-slate-400 transition" style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }} aria-hidden>›</span>
            </button>
            {isOpen && (
              <div className="space-y-3 px-4 pb-5">
                <p className="text-sm text-slate-600 dark:text-slate-300">{m.intro}</p>
                <ol className="space-y-2">
                  {m.steps.map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-black text-white" style={{ backgroundColor: m.color }}>{i + 1}</span>
                      <span className="text-sm"><b>{s.h}</b> — <span className="text-slate-600 dark:text-slate-300">{s.c}</span></span>
                    </li>
                  ))}
                </ol>
                <div className="rounded-xl border-l-4 p-3" style={{ borderColor: m.color, background: m.color + '10' }}>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color: m.color }}>💡 {m.example.h}</p>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{m.example.c}</p>
                </div>
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}

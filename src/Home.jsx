import { useState } from 'react'
import CybertronLogo from './components/CybertronLogo.jsx'

function WaveformIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="4" y="8" width="2.5" height="8" rx="1.25" fill="white" />
      <rect x="8.5" y="5" width="2.5" height="14" rx="1.25" fill="white" />
      <rect x="13" y="7" width="2.5" height="10" rx="1.25" fill="white" />
      <rect x="17.5" y="4" width="2.5" height="16" rx="1.25" fill="white" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 19V5M12 5L7 10M12 5L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ZooQaiLogo() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 40 32" fill="none">
      <path d="M4 20C4 20 6 10 16 8C26 6 34 10 36 16C38 22 34 26 28 27C22 28 12 28 8 24C6 22 4 20 4 20Z" fill="#000" />
      <path d="M36 14C38 11 40 8 40 6" stroke="#000" strokeWidth="2.2" strokeLinecap="round" />
      <ellipse cx="26" cy="16" rx="1.8" ry="2" fill="#fff" />
      <path d="M2 22C0 25 0 28 2 30" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function Watermark() {
  return (
    <div className="pointer-events-none absolute top-1/2 left-0 z-0 flex w-full -translate-y-[55%] select-none items-center justify-center px-4" aria-hidden="true">
      <span className="inline-block text-center font-bold whitespace-nowrap text-black opacity-[0.045] tracking-tight text-[clamp(2.5rem,18vw,37.5rem)]">
        Cybertron
      </span>
    </div>
  )
}

export default function Home() {
  const [value, setValue] = useState('')
  const hasValue = value.trim().length > 0

  const handleSend = () => {
    if (!hasValue) return
    setValue('')
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-visible px-6 py-10">
      <Watermark />

      <div className="relative z-10 flex w-full max-w-[720px] flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center gap-5">
          <CybertronLogo size="lg" />

          <h1 className="bg-gradient-to-r from-[#00D4FF] via-[#22C55E] via-[#FACC15] via-[#F97316] via-[#EC4899] to-[#A855F7] bg-clip-text text-[clamp(42px,5vw,56px)] leading-tight font-bold tracking-tight text-transparent">
            Cybertron
          </h1>

          <div className="group relative mt-4 flex w-full max-w-[640px] items-center rounded-[28px] border border-[#E5E5E5] bg-white px-7 py-3.5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all focus-within:border-[#1E90FF] focus-within:shadow-[0_0_0_3px_rgba(30,144,255,0.15),0_2px_20px_rgba(0,0,0,0.06)]">
            {!hasValue && (
              <span className="pointer-events-none absolute left-7 bg-gradient-to-r from-[#00D4FF] via-[#22C55E] via-[#FACC15] via-[#F97316] via-[#EC4899] to-[#A855F7] bg-clip-text text-sm font-bold text-transparent group-focus-within:opacity-0" aria-hidden="true">
                Ask Anything
              </span>
            )}
            <input
              type="text"
              aria-label="Ask Anything"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && hasValue && handleSend()}
              className="relative z-10 flex-1 border-none bg-transparent py-5 text-sm text-[#333] outline-none"
            />
            {hasValue ? (
              <button type="button" aria-label="Send" onClick={handleSend} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E90FF] hover:bg-[#1878d8]">
                <SendIcon />
              </button>
            ) : (
              <button type="button" aria-label="Voice input" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E90FF] hover:bg-[#1878d8]">
                <WaveformIcon />
              </button>
            )}
          </div>
        </div>

        <footer className="mt-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <ZooQaiLogo />
            <span className="text-base font-bold tracking-tight">ZooQAI</span>
          </div>
        </footer>
      </div>
    </section>
  )
}

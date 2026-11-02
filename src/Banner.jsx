import { useEffect, useState } from 'react'

const bannerSlides = [
  {
    title: ['Create', 'Anything from', 'Anything'],
    subtitle: 'Start with',
    highlight: 'CyberImagin',
    bg: 'from-[#ff6b35] via-[#f72585] via-[#7209b7] to-[#4cc9f0]',
  },
  {
    title: ['Turn ideas into', 'Images with', 'ImageFX'],
    subtitle: 'Powered by',
    highlight: 'Google Labs',
    bg: 'from-[#0077b6] via-[#00b4d8] to-[#90e0ef]',
  },
  {
    title: ['Generate', 'Videos from', 'Text'],
    subtitle: 'Built with',
    highlight: 'Google Labs',
    bg: 'from-[#ff595e] via-[#ffca3a] to-[#8ac926]',
  },
  {
    title: ['Compose', 'Music with', 'MusicFX'],
    subtitle: 'Explore',
    highlight: 'Google Labs',
    bg: 'from-[#3a0ca3] via-[#7209b7] to-[#f72585]',
  },
  {
    title: ['Research smarter', 'with AI', 'NotebookLM'],
    subtitle: 'From',
    highlight: 'Google Labs',
    bg: 'from-[#023047] via-[#219ebc] to-[#8ecae6]',
  },
]

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = bannerSlides[activeIndex]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="create" className="relative bg-white px-6 py-12 md:px-12 md:py-16">
      <div className="relative mx-auto max-w-[1280px]">
        <div className={`relative min-h-[420px] overflow-hidden rounded-[28px] bg-gradient-to-br ${slide.bg} px-10 py-12 md:px-12 md:py-14`}>
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-orange-300 blur-3xl" />
            <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-purple-500 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          </div>

          <div className="relative z-10 flex min-h-[340px] flex-col justify-end">
            <h2 className="max-w-lg text-[clamp(36px,5vw,56px)] leading-[1.05] font-bold tracking-tight text-white">
              {slide.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-4 text-lg font-medium text-white">
              {slide.subtitle} <strong className="font-bold">{slide.highlight}</strong>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://labs.google/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black no-underline hover:bg-white/90"
              >
                Learn more
              </a>
              <a
                href="https://stitch.withgoogle.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[120px] items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black no-underline hover:bg-white/90"
              >
                Try now
              </a>
            </div>
          </div>

          <span className="absolute top-6 right-6 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-black">
            Google Labs
          </span>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? 'w-9 bg-black' : 'w-2 bg-[#c8c8c8]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

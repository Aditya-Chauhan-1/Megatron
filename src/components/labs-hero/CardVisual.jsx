const tagItems = [
  'Mind Map',
  'Gap Analysis',
  'Citations',
  'Literature Search',
  'Infographics',
  'Audio Overview',
]

export default function CardVisual({ card }) {
  if (card.visual === 'chat') {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-[#E8EDF2] p-6">
        <div className="mb-5 flex h-10 w-full max-w-[200px] items-end justify-center gap-1">
          {[14, 22, 18, 26, 16, 24, 12].map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-[#9DB4C8]"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
        <div className="relative w-full max-w-[240px] rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-xs leading-relaxed text-[#5a6570]">
            Transform your spoken ideas into polished, clear writing instantly.
          </p>
          <div className="absolute -bottom-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#4285F4] shadow-md ring-4 ring-[#E8EDF2]">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3z" />
              <path d="M19 11a1 1 0 10-2 0 5 5 0 01-10 0 1 1 0 10-2 0 7 7 0 006 6.92V19H9a1 1 0 100 2h6a1 1 0 100-2h-2v-1.08A7 7 0 0019 11z" />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  if (card.visual === 'tags') {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF8E1] via-[#FFF3C4] to-[#FFE082] p-6">
        <h4 className="text-center text-2xl font-bold tracking-tight text-[#3d3d3d]">
          Literature
          <br />
          Insights
        </h4>
        {tagItems.map((tag, i) => {
          const positions = [
            'top-[12%] left-[8%]',
            'top-[8%] right-[6%]',
            'top-[38%] left-[4%]',
            'top-[42%] right-[4%]',
            'bottom-[18%] left-[10%]',
            'bottom-[14%] right-[8%]',
          ]
          return (
            <span
              key={tag}
              className={`absolute ${positions[i]} rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-[#444] shadow-sm`}
            >
              {tag}
            </span>
          )
        })}
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      <img src={card.image} alt="" className="h-full w-full object-cover" loading="lazy" />
      {card.badge && (
        <span className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-widest text-black shadow-sm">
          {card.badge}
        </span>
      )}
      {card.id === 'dreambeans' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
          <span className="text-3xl">🌸</span>
          <span className="mt-1 text-xl font-bold tracking-tight text-white">dreambeans</span>
        </div>
      )}
    </div>
  )
}

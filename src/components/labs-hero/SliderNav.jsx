import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SliderNav({ onPrev, onNext }) {
  return (
    <div className="relative z-30 flex items-center justify-center gap-4 pb-2 pt-8">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous experiment"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dadada] bg-white text-black shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all hover:border-[#c8c8c8] hover:bg-[#fafafa] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] active:scale-95"
      >
        <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next experiment"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dadada] bg-white text-black shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all hover:border-[#c8c8c8] hover:bg-[#fafafa] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] active:scale-95"
      >
        <ChevronRight className="h-5 w-5 stroke-[2.5]" />
      </button>
    </div>
  )
}

import { ArrowRight } from 'lucide-react'
import CardVisual from './CardVisual'

export default function LabsCard({ card, width, height }) {
  return (
    <article
      className="labs-card-inner group flex shrink-0 flex-col overflow-hidden rounded-[32px] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-shadow duration-500 hover:shadow-[0_28px_72px_rgba(0,0,0,0.16)]"
      style={{ width, height, minHeight: height }}
    >
      <div className="h-[52%] overflow-hidden rounded-[20px]">
        <CardVisual card={card} />
      </div>

      <div className="flex flex-1 flex-col justify-between pt-5">
        <div>
          <h3 className="font-[Inter] text-[22px] leading-tight font-bold tracking-tight text-black">
            {card.title}
          </h3>
          <p className="mt-2.5 text-[15px] leading-relaxed text-[#5f5f5f]">
            {card.description}
          </p>
        </div>

        <a
          href={card.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-black no-underline transition-opacity hover:opacity-70"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  )
}

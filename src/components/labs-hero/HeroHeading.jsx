import { forwardRef } from 'react'

const HeroHeading = forwardRef(function HeroHeading(_, ref) {
  return (
    <div ref={ref} className="relative z-20 px-6 pt-20 md:px-12 md:pt-28 lg:px-20 lg:pt-32">
      <h1 className="home-carousel__title">
        <span className="block overflow-hidden">
          <span className="hero-line block">Be the first to experiment</span>
        </span>
      </h1>
    </div>
  )
})

export default HeroHeading

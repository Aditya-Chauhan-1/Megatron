import { useRef, useState } from 'react'

import gsap from 'gsap'

import { useGSAP } from '@gsap/react'

import HeroBackground from './HeroBackground'

import HeroHeading from './HeroHeading'

import HeroComposition from './HeroComposition'

import SliderNav from './SliderNav'

import { slideCards } from './cardData'



gsap.registerPlugin(useGSAP)



export default function LabsHero() {

  const sectionRef = useRef(null)

  const headingRef = useRef(null)

  const cardRefs = useRef([])

  const directionRef = useRef(1)

  const [activeIndex, setActiveIndex] = useState(1)



  const goPrev = () => {

    directionRef.current = -1

    setActiveIndex((i) => (i - 1 + slideCards.length) % slideCards.length)

  }



  const goNext = () => {

    directionRef.current = 1

    setActiveIndex((i) => (i + 1) % slideCards.length)

  }



  useGSAP(

    () => {

      const lines = headingRef.current?.querySelectorAll('.hero-line')

      const cards = cardRefs.current.filter(Boolean)



      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })



      if (lines?.length) {

        tl.from(lines, {

          y: 100,

          opacity: 0,

          duration: 1.1,

          stagger: 0.14,

        })

      }



      if (cards.length) {

        tl.from(

          cards,

          {

            scale: 0.82,

            opacity: 0,

            z: -200,

            y: 80,

            duration: 1.2,

            stagger: 0.2,

            ease: 'back.out(1.5)',

          },

          '-=0.55',

        )

      }

    },

    { scope: sectionRef },

  )



  return (

    <section

      ref={sectionRef}

      id="labs-hero"

      className="relative min-h-screen overflow-x-hidden bg-white font-[Inter]"

    >

      <HeroBackground />



      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col">

        <HeroHeading ref={headingRef} />



        <div className="relative flex flex-1 flex-col items-center justify-end pb-10 pt-2 md:pb-14 md:pt-0">

          <HeroComposition

            cardRefs={cardRefs}

            activeIndex={activeIndex}

            direction={directionRef.current}

          />

          <SliderNav onPrev={goPrev} onNext={goNext} />

        </div>

      </div>

    </section>

  )

}


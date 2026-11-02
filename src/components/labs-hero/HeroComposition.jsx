import { useRef } from 'react'

import gsap from 'gsap'

import { useGSAP } from '@gsap/react'

import LabsCard from './LabsCard'

import { getVisibleCards } from './cardData'



const layoutStyles = {

  left: 'left-[-14%] bottom-[6%] md:left-[-10%] lg:left-[-8%] xl:left-[-6%]',

  center: 'left-1/2 bottom-[6%] -translate-x-1/2',

  right: 'right-[-14%] bottom-[6%] md:right-[-10%] lg:right-[-8%] xl:right-[-6%]',

}



export default function HeroComposition({ cardRefs, activeIndex, direction = 1 }) {

  const sceneRef = useRef(null)

  const parallaxRefs = useRef([])

  const floatRefs = useRef([])

  const visibleCards = getVisibleCards(activeIndex)



  useGSAP(

    () => {

      visibleCards.forEach((card, i) => {

        const floatEl = floatRefs.current[i]

        if (!floatEl) return



        const { y, x, rot, duration } = card.float



        gsap.fromTo(

          floatEl,

          { y: -y / 2, x: -x / 2, rotation: card.rotation - rot },

          {

            y: y / 2,

            x: x / 2,

            rotation: card.rotation + rot,

            duration,

            repeat: -1,

            yoyo: true,

            ease: 'sine.inOut',

            delay: i * 0.45,

          },

        )

      })

    },

    { scope: sceneRef, dependencies: [activeIndex] },

  )



  useGSAP(

    () => {

      const slots = sceneRef.current?.querySelectorAll('.labs-card-slot')

      if (!slots?.length) return



      gsap.fromTo(

        slots,

        { opacity: 0.55, x: direction * 48 },

        {

          opacity: 1,

          x: 0,

          duration: 0.55,

          ease: 'power3.out',

          stagger: 0.06,

        },

      )

    },

    { scope: sceneRef, dependencies: [activeIndex] },

  )



  useGSAP(

    () => {

      const section = sceneRef.current

      if (!section) return



      const quickTos = parallaxRefs.current

        .filter(Boolean)

        .map((el, i) => ({

          x: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3.out' }),

          y: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3.out' }),

          factor: visibleCards[i]?.parallax ?? 0.4,

        }))



      const handleMove = (e) => {

        if (window.innerWidth < 768) return



        const rect = section.getBoundingClientRect()

        const relX = (e.clientX - rect.left) / rect.width - 0.5

        const relY = (e.clientY - rect.top) / rect.height - 0.5



        quickTos.forEach(({ x, y, factor }) => {

          x(relX * 90 * factor)

          y(relY * 70 * factor)

        })

      }



      const handleLeave = () => {

        quickTos.forEach(({ x, y }) => {

          x(0)

          y(0)

        })

      }



      section.addEventListener('mousemove', handleMove)

      section.addEventListener('mouseleave', handleLeave)



      return () => {

        section.removeEventListener('mousemove', handleMove)

        section.removeEventListener('mouseleave', handleLeave)

      }

    },

    { scope: sceneRef, dependencies: [activeIndex] },

  )



  return (

    <div

      ref={sceneRef}

      className="labs-scene relative mx-auto h-[min(78vh,760px)] w-full max-w-[1440px] px-6 md:h-[min(82vh,820px)] lg:px-16"

      style={{ perspective: '2000px' }}

    >

      <div

        className="relative h-full w-full"

        style={{ transformStyle: 'preserve-3d' }}

      >

        {visibleCards.map((card, index) => (

          <div

            key={`${card.id}-${card.role}`}

            className={`labs-card-slot absolute ${layoutStyles[card.role]}`}

            style={{ zIndex: card.zIndex }}

          >

            <div

              ref={(el) => {

                parallaxRefs.current[index] = el

                cardRefs.current[index] = el

              }}

              className="will-change-transform"

            >

              <div

                ref={(el) => {

                  floatRefs.current[index] = el

                }}

                className="origin-bottom will-change-transform"

                style={{

                  transformStyle: 'preserve-3d',

                  transform: `rotate(${card.rotation}deg)`,

                }}

              >

                <div

                  className="origin-bottom"

                  style={{

                    transform: `translateZ(${card.translateZ}px)`,

                    transformStyle: 'preserve-3d',

                  }}

                >

                  <LabsCard

                    card={card}

                    width={card.width}

                    height={card.height}

                  />

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}


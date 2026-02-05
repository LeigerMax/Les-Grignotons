'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function AnimatedHero() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      // Déclenchement plus progressif avec seuil à 50px
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calcul de l'opacité progressive
  const opacity = Math.max(0, 1 - (scrollY / 200))
  const scale = Math.max(0.9, 1 - (scrollY / 400))

  return (
    <>
      {/* Hero initial - Logo et image des animaux */}
      <section 
        className="relative flex items-center justify-center transition-all duration-1000 ease-in-out"
        style={{
          height: isScrolled ? '0px' : '70vh',
          minHeight: isScrolled ? '0px' : '500px',
          opacity: opacity,
          overflow: isScrolled ? 'hidden' : 'visible'
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 max-w-7xl mx-auto">
          {/* Image des deux animaux à gauche */}
          <div 
            className="relative transition-all duration-1000 ease-in-out"
            style={{
              opacity: opacity,
              transform: `scale(${scale}) translateZ(0)`
            }}
          >
            <div className="relative w-96 h-64 md:w-[600px] md:h-80">
              <Image
                src="/images/animaux-hero.png"
                alt="Nos adorables lapins et cobayes"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Logo en grand au centre */}
          <div 
            className="relative transition-all duration-1000 ease-in-out"
            style={{
              opacity: opacity,
              transform: `scale(${scale}) translateZ(0)`
            }}
          >
            <Image
              src="/logos/logo-full.png"
              alt="Les Grignotons"
              width={500}
              height={200}
              className="w-auto h-auto max-w-full"
              priority
            />
            <p className="text-center text-xl text-gray-700 mt-6 font-medium">
              Élevage familial de lapins et cobayes
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

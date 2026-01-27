'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Section d'accueil avec image de lapins et cobayes"
    >
      {/* Image de fond avec effet parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(107, 159, 110, 0.3), rgba(107, 159, 110, 0.3)), url("/images/hero-center.jpg")',
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
        role="img"
        aria-label="Lapins et cobayes de l'élevage Les Grignotons"
      >
        {/* Overlay pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Contenu du hero */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
          Venez partager ma passion pour les cobayes et les lapins
        </h1>
        <p className="text-xl md:text-2xl text-white mb-4 drop-shadow-lg">
          L'élevage des Grignotons est un élevage de lapins et cobayes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href="/adoption" 
            variant="primary"
            className="shadow-xl hover:scale-105 transition-transform"
          >
            Voir les animaux à l'adoption
          </Button>
          <Button 
            href="/contact" 
            variant="outline"
            className="shadow-xl hover:scale-105 transition-transform"
          >
           Nous contacter
          </Button>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg 
          className="w-6 h-6 text-white drop-shadow-lg" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-label="Faites défiler vers le bas"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  )
}

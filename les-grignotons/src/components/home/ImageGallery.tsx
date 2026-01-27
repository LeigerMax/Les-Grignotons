'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ImageItem {
  src: string
  alt: string
  title: string
}

// Images à afficher (à remplacer par de vraies images du centre)
const images: ImageItem[] = [
  {
    src: '/images/centre-1.jpg',
    alt: 'Le centre d\'élevage Les Grignotons',
    title: 'Notre centre d\'élevage'
  },
  {
    src: '/images/centre-2.jpg',
    alt: 'Espace de vie des animaux',
    title: 'Espaces confortables'
  },
  {
    src: '/images/animal-1.jpg',
    alt: 'Lapin adorable',
    title: 'Nos lapins'
  },
  {
    src: '/images/animal-2.jpg',
    alt: 'Cobaye mignon',
    title: 'Nos cobayes'
  },
  {
    src: '/images/centre-3.jpg',
    alt: 'Installations du centre',
    title: 'Installations modernes'
  },
  {
    src: '/images/animal-3.jpg',
    alt: 'Animaux heureux',
    title: 'Bien-être animal'
  }
]

export default function ImageGallery() {
  const [scrollY, setScrollY] = useState(0)
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Découvrez notre centre et nos animaux
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un environnement chaleureux et professionnel pour le bonheur de nos pensionnaires
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => {
            // Calcul de l'effet parallax différent pour chaque image
            const parallaxOffset = (scrollY - 800) * (0.05 + (index % 3) * 0.02)
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{
                  transform: `translateY(${Math.max(0, Math.min(parallaxOffset, 30))}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Image placeholder avec dégradé */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10">
                  {/* Afficher l'image */}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(index)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                  
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold drop-shadow-lg">
                        {image.title}
                      </h3>
                      <p className="text-white/90 text-sm mt-1 drop-shadow">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badge décoratif */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>

       
      </div>
    </section>
  )
}

'use client'

/**
 * Page client pour afficher les animaux favoris de l'utilisateur
 */

import { useEffect, useState } from 'react'
import { useFavorites } from '@/lib/hooks/useFavorites'
import { Animal } from '@/types/sanity'
import Section from '@/components/ui/Section'
import AnimalCard from '@/components/animals/AnimalCard'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function FavoritesClient() {
  const { favorites, isLoaded, clearFavorites, count } = useFavorites()
  const [animals, setAnimals] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFavoriteAnimals() {
      if (!isLoaded || favorites.length === 0) {
        setLoading(false)
        return
      }

      try {
        // Récupérer les animaux favoris depuis l'API
        const response = await fetch('/api/animals/favorites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids: favorites }),
        })

        if (response.ok) {
          const data = await response.json()
          setAnimals(data)
        }
      } catch (error) {
        console.error('Erreur lors du chargement des favoris:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFavoriteAnimals()
  }, [favorites, isLoaded])

  if (!isLoaded || loading) {
    return (
      <main>
        <Section className="bg-gradient-to-b from-primary/10 to-accent/10 py-12">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </Section>
        <Section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 h-64 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    )
  }

  return (
    <main>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-primary/10 to-accent/10 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes Favoris ❤️
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {count === 0 
              ? "Vous n'avez pas encore d'animaux favoris" 
              : `Vous avez ${count} ${count === 1 ? 'animal favori' : 'animaux favoris'}`
            }
          </p>
        </div>
      </Section>

      {/* Liste des favoris */}
      {count > 0 ? (
        <>
          <Section className="bg-white">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Vos animaux favoris
              </h2>
              <button
                onClick={() => {
                  if (confirm('Êtes-vous sûr de vouloir supprimer tous vos favoris ?')) {
                    clearFavorites()
                  }
                }}
                className="text-sm text-red-600 hover:text-red-800 transition-colors"
              >
                Tout supprimer
              </button>
            </div>

            {animals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {animals.map((animal) => (
                  <AnimalCard key={animal._id} animal={animal} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">
                  Certains de vos animaux favoris ne sont peut-être plus disponibles.
                </p>
                <Button href="/adoption" variant="primary">
                  Découvrir nos animaux
                </Button>
              </div>
            )}
          </Section>

          {/* CTA Contact */}
          <Section className="bg-primary/5">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Intéressé par un de ces animaux ?
              </h2>
              <p className="text-gray-700 mb-6">
                N'hésitez pas à nous contacter pour plus d'informations ou pour organiser une rencontre.
              </p>
              <Button href="/contact" variant="primary">
                Nous contacter
              </Button>
            </div>
          </Section>
        </>
      ) : (
        <Section className="bg-white">
          <div className="text-center py-12">
            <div className="mb-8">
              <svg 
                className="w-24 h-24 mx-auto text-gray-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Aucun favori pour le moment
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Parcourez nos animaux disponibles et cliquez sur le cœur pour ajouter vos préférés à cette liste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/adoption" variant="primary">
                Voir tous nos animaux
              </Button>
              <Button href="/categories" variant="outline">
                Parcourir par catégories
              </Button>
            </div>
          </div>
        </Section>
      )}
    </main>
  )
}

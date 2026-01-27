'use client'

import { useState } from 'react'
import Section from '@/components/ui/Section'
import AnimalCard from '@/components/animals/AnimalCard'
import { Animal } from '@/types/sanity'

interface AdoptionClientProps {
  animals: Animal[]
}

export default function AdoptionClient({ animals }: AdoptionClientProps) {
  const [filter, setFilter] = useState<'all' | 'Lapin' | 'Cobaye'>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | 'Disponible' | 'Réservé'>('all')

  // Filtrer les animaux
  const filteredAnimals = animals.filter((animal) => {
    const speciesMatch = filter === 'all' || animal.species === filter
    const statusMatch = statusFilter === 'all' || animal.status === statusFilter
    return speciesMatch && statusMatch
  })

  return (
    <>
      {/* Filtres */}
      <div className="bg-white shadow-sm border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Filtre espèce */}
            <div className="flex gap-2 flex-wrap justify-center">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setFilter('Lapin')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === 'Lapin'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Lapins
              </button>
              <button
                onClick={() => setFilter('Cobaye')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === 'Cobaye'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cobayes
              </button>
            </div>

            {/* Filtre statut */}
            <div className="flex gap-2 flex-wrap justify-center">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  statusFilter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setStatusFilter('Disponible')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  statusFilter === 'Disponible'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ✅ Disponibles
              </button>
              <button
                onClick={() => setStatusFilter('Réservé')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  statusFilter === 'Réservé'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ⏳ Réservés
              </button>
            </div>
          </div>

          {/* Compteur */}
          <div className="text-center mt-4 text-sm text-gray-600">
            {filteredAnimals.length} {filteredAnimals.length > 1 ? 'animaux trouvés' : 'animal trouvé'}
          </div>
        </div>
      </div>

      {/* Grille d'animaux */}
      <Section className="bg-secondary">
        {filteredAnimals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map((animal) => (
              <AnimalCard key={animal._id} animal={animal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">Aucun animal ne correspond à vos critères</p>
            <button
              onClick={() => {
                setFilter('all')
                setStatusFilter('all')
              }}
              className="text-primary font-semibold hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </Section>
    </>
  )
}

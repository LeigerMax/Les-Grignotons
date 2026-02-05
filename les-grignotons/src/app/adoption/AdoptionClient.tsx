'use client'

import { useState } from 'react'
import Section from '@/components/ui/Section'
import AnimalCard from '@/components/animals/AnimalCard'
import { Animal } from '@/types/sanity'

interface AdoptionClientProps {
  animals: Animal[]
}

export default function AdoptionClient({ animals }: AdoptionClientProps) {
  const [speciesFilter, setSpeciesFilter] = useState<'all' | 'Lapin' | 'Cobaye'>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | 'Disponible' | 'Réservé'>('all')

  // Filtrer les animaux
  const filteredAnimals = animals.filter((animal) => {
    const speciesMatch = speciesFilter === 'all' || animal.species === speciesFilter
    const statusMatch = statusFilter === 'all' || animal.status === statusFilter
    return speciesMatch && statusMatch
  })

  // Compter les animaux par catégorie
  const lapinsCount = animals.filter(a => a.species === 'Lapin').length
  const cobayesCount = animals.filter(a => a.species === 'Cobaye').length
  const disponiblesCount = animals.filter(a => a.status === 'Disponible').length
  const reservesCount = animals.filter(a => a.status === 'Réservé').length

  return (
    <>
      {/* Filtres avec design moderne */}
      <div className="mb-12">
        <div className="max-w-4xl mx-auto">
          {/* Filtre par espèce */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">
              Choisissez une espèce
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSpeciesFilter('all')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  speciesFilter === 'all'
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                🐾 Tous les animaux ({animals.length})
              </button>
              <button
                onClick={() => setSpeciesFilter('Lapin')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  speciesFilter === 'Lapin'
                    ? 'bg-amber-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-amber-200 hover:border-amber-500 hover:text-amber-500'
                }`}
              >
                🐰 Lapereaux ({lapinsCount})
              </button>
              <button
                onClick={() => setSpeciesFilter('Cobaye')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  speciesFilter === 'Cobaye'
                    ? 'bg-orange-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-orange-200 hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                🐹 Bébés cobayes ({cobayesCount})
              </button>
            </div>
          </div>

          {/* Filtre par statut */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">
              Statut de disponibilité
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  statusFilter === 'all'
                    ? 'bg-gray-800 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-800 hover:text-gray-800'
                }`}
              >
                Tous ({animals.length})
              </button>
              <button
                onClick={() => setStatusFilter('Disponible')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  statusFilter === 'Disponible'
                    ? 'bg-green-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-green-200 hover:border-green-500 hover:text-green-500'
                }`}
              >
                ✅ Disponibles ({disponiblesCount})
              </button>
              <button
                onClick={() => setStatusFilter('Réservé')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  statusFilter === 'Réservé'
                    ? 'bg-yellow-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-yellow-200 hover:border-yellow-500 hover:text-yellow-500'
                }`}
              >
                ⏳ Réservés ({reservesCount})
              </button>
            </div>
          </div>

          {/* Compteur de résultats */}
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-700">
              {filteredAnimals.length === 0 ? (
                'Aucun animal ne correspond à ces critères'
              ) : (
                <>
                  <span className="text-primary text-2xl">{filteredAnimals.length}</span>{' '}
                  animal{filteredAnimals.length > 1 ? 'aux' : ''} trouvé{filteredAnimals.length > 1 ? 's' : ''}
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Grille des animaux */}
      <Section>
        {filteredAnimals.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-xl font-medium">
              Aucun animal ne correspond à ces critères.
            </p>
            <p className="text-gray-400 mt-2">
              Essayez de modifier vos filtres pour voir plus d'animaux.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map((animal) => (
              <AnimalCard key={animal._id} animal={animal} />
            ))}
          </div>
        )}
      </Section>
    </>
  )
}

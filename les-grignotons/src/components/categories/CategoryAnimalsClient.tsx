'use client'

import { useState } from 'react'
import { Animal } from '@/types/sanity'
import AnimalCard from '@/components/animals/AnimalCard'

interface CategoryAnimalsClientProps {
  animals: Animal[]
}

export default function CategoryAnimalsClient({ animals }: CategoryAnimalsClientProps) {
  const [sexFilter, setSexFilter] = useState<Animal['sex'] | 'all'>('all')

  // Filtrage
  const filteredAnimals = animals.filter(animal => {
    const sexMatch = sexFilter === 'all' || animal.sex === sexFilter
    return sexMatch
  })

  // Compteurs
  const femaleCount = animals.filter(a => a.sex === 'Femelle').length
  const maleCount = animals.filter(a => a.sex === 'Male').length


  // Design commun : pill buttons
  return (
    <>
      {/* Filtres pill-style */}
      <div className="mb-8">

        <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
          {/* Sexe */}
          <button
            onClick={() => setSexFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${sexFilter === 'all' ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary hover:text-primary'}`}
          >
            Tous ({animals.length})
          </button>
          <button
            onClick={() => setSexFilter('Femelle')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${sexFilter === 'Femelle' ? 'bg-pink-300 text-white shadow-lg scale-105' : 'bg-white text-gray-700 border-2 border-pink-200 hover:border-pink-500 hover:text-pink-500'}`}
          >
            ♀️ Les Femelles ({femaleCount})
          </button>
          <button
            onClick={() => setSexFilter('Male')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${sexFilter === 'Male' ? 'bg-blue-300 text-white shadow-lg scale-105' : 'bg-white text-gray-700 border-2 border-blue-200 hover:border-blue-500 hover:text-blue-500'}`}
          >
            ♂️ Les Mâles ({maleCount})
          </button>
        </div>

        {/* Compteur */}
        <div className="mt-4 text-center md:text-left text-sm text-gray-600">
          <span className="font-semibold">{filteredAnimals.length}</span> animal
          {filteredAnimals.length > 1 ? 'aux' : ''} affiché
          {filteredAnimals.length > 1 ? 's' : ''}
        </div>
      </div>

      {/* Grille des animaux */}
      {filteredAnimals.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">
            Aucun animal ne correspond à ces critères.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnimals.map((animal) => (
            <AnimalCard key={animal._id} animal={animal} />
          ))}
        </div>
      )}
    </>
  )
}

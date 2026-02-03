'use client'

import { useState } from 'react'
import { Animal } from '@/types/sanity'
import AnimalCard from '@/components/animals/AnimalCard'

interface CategoryAnimalsClientProps {
  animals: Animal[]
}

export default function CategoryAnimalsClient({ animals }: CategoryAnimalsClientProps) {
  const [statusFilter, setStatusFilter] = useState<Animal['status'] | 'all'>('all')
  const [sexFilter, setSexFilter] = useState<Animal['sex'] | 'all'>('all')

  // Filtrer les animaux
  const filteredAnimals = animals.filter(animal => {
    const statusMatch = statusFilter === 'all' || animal.status === statusFilter
    const sexMatch = sexFilter === 'all' || animal.sex === sexFilter
    return statusMatch && sexMatch
  })

  return (
    <>
      {/* Filtres */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Filtre par statut */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Statut
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as Animal['status'] | 'all')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">Tous les statuts</option>
              <option value="Disponible">✅ Disponible</option>
              <option value="Réservé">⏳ Réservé</option>
              <option value="Adopté">❤️ Adopté</option>
            </select>
          </div>

          {/* Filtre par sexe */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Sexe
            </label>
            <select
              value={sexFilter}
              onChange={(e) => setSexFilter(e.target.value as Animal['sex'] | 'all')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">Tous</option>
              <option value="Male">♂️ Mâle</option>
              <option value="Femelle">♀️ Femelle</option>
            </select>
          </div>
        </div>

        {/* Compteur */}
        <div className="mt-4 text-sm text-gray-600">
          <span className="font-semibold">{filteredAnimals.length}</span> animal
          {filteredAnimals.length > 1 ? 'aux' : ''} trouvé
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

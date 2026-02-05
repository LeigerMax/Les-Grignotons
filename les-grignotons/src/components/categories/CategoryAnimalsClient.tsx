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

  // Vérifier s'il s'agit de reproducteurs
  const isReproducteurCategory = animals.length > 0 && animals[0]?.animalType === 'reproducteur'

  // Filtrer les animaux
  const filteredAnimals = animals.filter(animal => {
    // Pour les reproducteurs, on ne filtre que par sexe
    if (isReproducteurCategory) {
      return sexFilter === 'all' || animal.sex === sexFilter
    }
    // Pour les animaux à l'adoption, on filtre par statut et sexe
    const statusMatch = statusFilter === 'all' || animal.status === statusFilter
    const sexMatch = sexFilter === 'all' || animal.sex === sexFilter
    return statusMatch && sexMatch
  })

  // Compter les animaux par sexe pour les reproducteurs
  const femaleCount = animals.filter(a => a.sex === 'Femelle').length
  const maleCount = animals.filter(a => a.sex === 'Male').length

  return (
    <>
      {/* Filtres */}
      {isReproducteurCategory ? (
        // Design onglets pour les reproducteurs
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button
              onClick={() => setSexFilter('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                sexFilter === 'all'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              Tous ({animals.length})
            </button>
            <button
              onClick={() => setSexFilter('Femelle')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                sexFilter === 'Femelle'
                  ? 'bg-pink-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-pink-200 hover:border-pink-500 hover:text-pink-500'
              }`}
            >
              ♀️ Les Femelles ({femaleCount})
            </button>
            <button
              onClick={() => setSexFilter('Male')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                sexFilter === 'Male'
                  ? 'bg-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-blue-200 hover:border-blue-500 hover:text-blue-500'
              }`}
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
      ) : (
        // Design classique pour les animaux à l'adoption
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
      )}

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

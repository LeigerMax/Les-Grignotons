'use client'

/**
 * Bouton Favori pour ajouter/retirer un animal des favoris
 */

import { useFavorites } from '@/lib/hooks/useFavorites'

interface FavoriteButtonProps {
  animalId: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function FavoriteButton({ animalId, className = '', size = 'md' }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites()
  const favorite = isFavorite(animalId)

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  // Ne rien afficher pendant le chargement (évite le flash)
  if (!isLoaded) {
    return (
      <button
        disabled
        className={`${sizeClasses[size]} rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center ${className}`}
        aria-label="Chargement..."
      >
        <svg className={`${iconSizes[size]} text-gray-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    )
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault() // Empêche la navigation si dans un Link
        toggleFavorite(animalId)
      }}
      className={`${sizeClasses[size]} rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group ${className}`}
      aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      title={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
    >
      {favorite ? (
        // Coeur plein (favori actif)
        <svg 
          className={`${iconSizes[size]} text-red-500 transition-transform group-hover:scale-110`}
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : (
        // Coeur vide (non favori)
        <svg 
          className={`${iconSizes[size]} text-gray-600 group-hover:text-red-500 transition-all group-hover:scale-110`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )}
    </button>
  )
}

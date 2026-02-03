/**
 * Hook personnalisé pour gérer les favoris dans localStorage
 * Permet de sauvegarder les animaux préférés de l'utilisateur
 */

import { useState, useEffect } from 'react'

const FAVORITES_KEY = 'les-grignotons-favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Charger les favoris depuis localStorage au montage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY)
      if (stored) {
        setFavorites(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Erreur lors du chargement des favoris:', error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Sauvegarder les favoris dans localStorage à chaque changement
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
      } catch (error) {
        console.error('Erreur lors de la sauvegarde des favoris:', error)
      }
    }
  }, [favorites, isLoaded])

  /**
   * Vérifie si un animal est dans les favoris
   */
  const isFavorite = (animalId: string): boolean => {
    return favorites.includes(animalId)
  }

  /**
   * Ajoute un animal aux favoris
   */
  const addFavorite = (animalId: string): void => {
    setFavorites(prev => {
      if (prev.includes(animalId)) {
        return prev
      }
      return [...prev, animalId]
    })
  }

  /**
   * Retire un animal des favoris
   */
  const removeFavorite = (animalId: string): void => {
    setFavorites(prev => prev.filter(id => id !== animalId))
  }

  /**
   * Toggle un animal dans les favoris
   */
  const toggleFavorite = (animalId: string): void => {
    if (isFavorite(animalId)) {
      removeFavorite(animalId)
    } else {
      addFavorite(animalId)
    }
  }

  /**
   * Vide tous les favoris
   */
  const clearFavorites = (): void => {
    setFavorites([])
  }

  return {
    favorites,
    isLoaded,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    clearFavorites,
    count: favorites.length
  }
}

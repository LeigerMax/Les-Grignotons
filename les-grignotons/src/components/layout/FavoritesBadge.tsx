'use client'

/**
 * Composant pour afficher le badge de favoris dans le header
 */

import Link from 'next/link'
import { useFavorites } from '@/lib/hooks/useFavorites'

export default function FavoritesBadge() {
  const { count, isLoaded } = useFavorites()

  if (!isLoaded) {
    return (
      <Link
        href="/favoris"
        className="relative p-2 text-gray-700 hover:text-primary transition-colors"
        aria-label="Mes favoris"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </Link>
    )
  }

  return (
    <Link
      href="/favoris"
      className="relative p-2 text-gray-700 hover:text-primary transition-colors group"
      aria-label={`Mes favoris (${count})`}
      title={`Mes favoris (${count})`}
    >
      <svg 
        className={`w-6 h-6 transition-colors ${count > 0 ? 'text-red-500' : ''}`}
        fill={count > 0 ? 'currentColor' : 'none'} 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      
      {/* Badge avec le nombre de favoris */}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </Link>
  )
}

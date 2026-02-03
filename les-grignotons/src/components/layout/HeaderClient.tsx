'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Category } from '@/types/sanity'
import FavoritesBadge from './FavoritesBadge'

interface HeaderClientProps {
  categories: Category[]
}

export default function HeaderClient({ categories }: HeaderClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  const linkStyle = {
    color: '#4B5563',
    transition: 'all 0.2s'
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#6B9F6E'
    e.currentTarget.style.fontWeight = '700'
    e.currentTarget.style.transform = 'scale(1.05)'
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#4B5563'
    e.currentTarget.style.fontWeight = '500'
    e.currentTarget.style.transform = 'scale(1)'
  }

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setIsDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 150)
    setDropdownTimeout(timeout)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logos/logo-full.png" 
              alt="Les Grignotons" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="font-medium"
            >
              Accueil
            </Link>
            
            {/* Dropdown "Nos animaux" */}
            <div 
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link 
                href="/adoption" 
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="font-medium flex items-center gap-1"
              >
                Nos animaux
                <svg 
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Menu déroulant */}
              {isDropdownOpen && categories.length > 0 && (
                <div className="absolute left-0 mt-0 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    <Link
                      href="/adoption"
                      className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Toutes les catégories
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    {categories.map((category) => (
                      <Link
                        key={category._id}
                        href={`/categories/${category.slug.current}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/conseils" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="font-medium"
            >
              Conseils & Guides
            </Link>
            <Link 
              href="/temoignages" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="font-medium"
            >
              Témoignages
            </Link>
            <Link 
              href="/contact" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="font-medium"
            >
              Contact
            </Link>

            {/* Badge favoris */}
            <FavoritesBadge />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            
            <Link 
              href="/adoption" 
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos animaux
            </Link>
            
            {/* Catégories en mobile */}
            {categories.length > 0 && (
              <div className="pl-4 space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/categories/${category.slug.current}`}
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    → {category.name}
                  </Link>
                ))}
              </div>
            )}
            
            <Link 
              href="/conseils" 
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Conseils & Guides
            </Link>
            <Link 
              href="/temoignages" 
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Link 
              href="/favoris" 
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 font-medium flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Mes Favoris
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

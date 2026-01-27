'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="font-medium"
            >
              Accueil
            </Link>
            <Link 
              href="/adoption" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="font-medium"
            >
              Nos animaux
            </Link>
            <Link 
              href="/conseils" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="font-medium"
            >
              Conseils
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
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 font-medium">
              Accueil
            </Link>
            <Link href="/adoption" className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 font-medium">
              Nos animaux
            </Link>
            <Link href="/conseils" className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 font-medium">
              Conseils
            </Link>
            <Link href="/temoignages" className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 font-medium">
              Témoignages
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 font-medium">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

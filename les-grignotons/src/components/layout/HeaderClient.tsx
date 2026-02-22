'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Category } from '@/types/sanity'
import FavoritesBadge from './FavoritesBadge'

interface HeaderClientProps {
  categories: Category[]
}

export default function HeaderClient({ categories }: HeaderClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Header avec logo centré et image animée */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-center h-20 px-4 relative">
          {/* Image des animaux - À GAUCHE du logo  */}
          <div className="hidden md:block absolute left-1/2 -translate-x-[300px]">
            <div className="relative w-30 h-16">
              <Image
                src="/images/animaux-hero.png"
                alt="Nos animaux"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Logo centré */}
          <Link href="/" className="flex items-center z-10">
            <img 
              src="/logos/logo-full.png" 
              alt="Les Grignotons" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute right-4 p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Badge favoris en haut à droite */}
          <div className="hidden md:block absolute right-8">
            <FavoritesBadge />
          </div>
        </div>
      </header>

      {/* Menu latéral gauche - Desktop uniquement */}
      <aside className="hidden md:block fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-white shadow-lg border-r border-gray-200 overflow-y-auto z-40">
        <nav className="py-6 px-4 space-y-1">
          <Link 
            href="/" 
            className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all font-medium"
          >
            Accueil
          </Link>
          
          <Link 
            href="/adoptants" 
            className="block px-3 py-2 text-red-600 font-bold hover:bg-primary/10 rounded-md transition-all"
          >
            Conseils aux adoptants
          </Link>
          
          <div className="border-t border-gray-300 my-3"></div>
          
          {/* Section Lapins */}
          <div className="py-2">
            <div className="px-3 mb-2">
              <h3 className="text-lg font-bold text-gray-900">LAPINS</h3>
            </div>
            <div className="space-y-1">
            <Link              
              href="/race-et-couleurs-les-lapins"
              className="block px-3 py-2 mt-2 text-sm font-semibold text-primary hover:bg-primary/10 rounded-md transition-all"
            >
             Race et couleurs
            </Link>
              {/* LAPINS BÉLIERS */}
              <div className="px-3 py-1 text-sm font-semibold text-gray-800 uppercase">
                Lapins béliers
              </div>
              <Link
                href="/categories/beliers-nains-neerlandais"
                className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all pl-6"
              >
                Mes béliers nains néerlandais
              </Link>
              <Link
                href="/categories/beliers-nains-rex"
                className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all pl-6"
              >
                Mes béliers nains rex
              </Link>
              <Link
                href="/categories/beliers-nains-angoras"
                className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all pl-6"
              >
                Mes béliers nains angoras
              </Link>
              <Link
                href="/categories/beliers-geants-francais"
                className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all pl-6"
              >
                Mes béliers Géants Français
              </Link>
              
              <Link
                href="/categories/extra-nains-de-couleurs"
                className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all pl-6"
              >
                Mes extra nains de couleurs
              </Link>
            </div>

            <Link
              href="/adoption/lapins"
              className="block px-3 py-2 mt-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              Lapereaux à l'adoption
            </Link>
          </div>
          
          <div className="border-t border-gray-300 my-3"></div>
          
          {/* Section Cobayes */}
          <div className="py-2">
            <div className="px-3 mb-2">
              <h3 className="text-lg font-bold text-gray-900">COBAYES</h3>
            </div>
            <div className="space-y-1">
              <Link              href="/race-et-couleurs-les-cobayes"
              className="block px-3 py-2 mt-2 text-sm font-semibold text-primary hover:bg-primary/10 rounded-md transition-all"
            >
              Race et couleurs
            </Link>
              <Link
                href="/categories/peruviens"
                className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
              >
                Péruviens
              </Link>
              <Link
                href="/categories/teddys-suisses"
                className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
              >
                Teddys suisses
              </Link>
              <Link
                href="/categories/poils-courts"
                className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
              >
                Poils courts
              </Link>
              <Link
                href="/categories/alpaga"
                className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
              >
                Alpaga
              </Link>
            </div>

            <Link
              href="/adoption/cobayes"
              className="block px-3 py-2 mt-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              Bébés cobayes à l'adoption
            </Link>
          </div>
          

          <div className="border-t border-gray-300 my-3"></div>
          
          
          <Link 
            href="/temoignages" 
            className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all font-medium"
          >
            Témoignages
          </Link>
          
          <Link 
            href="/contact" 
            className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all font-medium"
          >
            Contact
          </Link>
        </nav>
      </aside>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
          <nav className="py-4 px-4 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            
            <Link 
              href="/adoptants" 
              className="block px-3 py-2 text-red-600 font-bold hover:bg-primary/10 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Conseils aux adoptants
            </Link>
            
            <div className="border-t border-gray-300 my-3"></div>
            
            {/* Section Lapins mobile */}
            <div className="py-2">
              <div className="px-3 mb-2">
                <h3 className="text-lg font-bold text-gray-900">LAPINS</h3>
              </div>
              <div className="space-y-1 pl-3">
                {/* LAPINS BÉLIERS */}
                <div className="px-3 py-1 text-sm font-semibold text-gray-800 uppercase">
                  Lapins béliers
                </div>
                <Link
                  href="/categories/beliers-nains-neerlandais"
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mes béliers nains néerlandais
                </Link>
                <Link
                  href="/categories/beliers-nains-rex"
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mes béliers nains rex
                </Link>
                <Link
                  href="/categories/beliers-nains-angoras"
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mes béliers nains angoras
                </Link>
                <Link
                  href="/categories/beliers-geants-francais"
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mes béliers Géants Français
                </Link>
                
                <Link
                  href="/categories/extra-nains-de-couleurs"
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mes extra nains de couleurs
                </Link>
              </div>
              <Link
                href="/adoption?species=Lapin"
                className="block px-3 py-2 mt-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lapereaux à l'adoption
              </Link>
            </div>
            
            <div className="border-t border-gray-300 my-3"></div>
            
            {/* Section Cobayes mobile */}
            <div className="py-2">
              <div className="px-3 mb-2">
                <h3 className="text-lg font-bold text-gray-900">COBAYES</h3>
              </div>
              <div className="space-y-1 pl-3">
                <Link
                  href="/categories/peruviens"
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Péruviens
                </Link>
                <Link
                  href="/categories/teddys-suisses"
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Teddys suisses
                </Link>
                <Link
                  href="/categories/poils-courts"
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Poils courts
                </Link>
                <Link
                  href="/categories/alpaga"
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Alpaga
                </Link>
              </div>
              <Link
                href="/adoption?species=Cobaye"
                className="block px-3 py-2 mt-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bébés cobayes à l'adoption
              </Link>
            </div>
            
            
            <div className="border-t border-gray-300 my-3"></div>
            
            
            <Link 
              href="/temoignages" 
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Témoignages
            </Link>
            
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Link 
              href="/favoris" 
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md font-medium flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Mes Favoris
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}

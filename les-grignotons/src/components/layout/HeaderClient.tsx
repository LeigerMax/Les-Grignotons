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
      // Déclenchement plus progressif avec seuil à 50px
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Séparer les catégories par type
  const lapinCategories = categories.filter(cat => cat.type === 'lapin')
  const cobayeCategories = categories.filter(cat => cat.type === 'cobaye')
  const autreCategories = categories.filter(cat => cat.type === 'autre')

  return (
    <>
      {/* Header avec logo centré et image animée */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-center h-20 px-4 relative">
          {/* Image des animaux qui apparaît au scroll - À GAUCHE du logo */}
          <div 
            className={`hidden md:block absolute left-1/2 -translate-x-[300px] transition-all duration-1000 ease-in-out ${
              isScrolled ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-2'
            }`}
          >
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
      <aside className="hidden md:block fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-secondary border-r border-gray-200 overflow-y-auto z-40">
        <nav className="py-6 px-4 space-y-1">
          <Link 
            href="/" 
            className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all font-medium"
          >
            Accueil
          </Link>
          
          <Link 
            href="/adoption" 
            className="block px-3 py-2 text-primary font-bold hover:bg-primary/10 rounded-md transition-all"
          >
            Conseils aux adoptants
          </Link>
          
          <div className="border-t border-gray-300 my-3"></div>
          
          {/* Section Lapins */}
          <div className="py-2">
            <div className="px-3 mb-2">
              <h3 className="text-lg font-bold text-gray-900">Lapins</h3>
            </div>
            <div className="space-y-1">
              {lapinCategories.map((category) => (
                <Link
                  key={category._id}
                  href={`/categories/${category.slug.current}`}
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/categories?type=lapin"
                className="block px-3 py-2 text-sm text-gray-900 font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all uppercase"
              >
                Lapins béliers
              </Link>
              <Link
                href="/categories?type=lapin-nain"
                className="block px-3 py-2 text-sm text-gray-900 font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all uppercase"
              >
                Lapins nains de couleurs
              </Link>
              <Link
                href="/adoption"
                className="block px-3 py-2 text-sm text-gray-900 font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all uppercase"
              >
                L'apereaux a l'adoption
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-300 my-3"></div>
          
          {/* Section Cobayes */}
          <div className="py-2">
            <div className="px-3 mb-2">
              <h3 className="text-lg font-bold text-gray-900">Cobayes</h3>
            </div>
            <div className="space-y-1">
              {cobayeCategories.map((category) => (
                <Link
                  key={category._id}
                  href={`/categories/${category.slug.current}`}
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/adoption?type=cobaye"
                className="block px-3 py-2 text-sm text-gray-900 font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all uppercase"
              >
                Bebes cobayes a l'adoption
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-300 my-3"></div>
          
          {/* Section Autres animaux - seulement si des catégories existent */}
          {autreCategories.length > 0 && (
            <>
              <div className="py-2">
                <div className="px-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Autres animaux</h3>
                </div>
                <div className="space-y-1">
                  {autreCategories.map((category) => (
                    <Link
                      key={category._id}
                      href={`/categories/${category.slug.current}`}
                      className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-300 my-3"></div>
            </>
          )}
          
          <Link 
            href="/categories" 
            className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
          >
            Toutes les catégories
          </Link>
        
          <div className="border-t border-gray-300 my-3"></div>
          
          <Link 
            href="/conseils" 
            className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-all font-medium"
          >
            Conseils & Guides
          </Link>
          
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
              href="/adoption" 
              className="block px-3 py-2 text-primary font-bold hover:bg-primary/10 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Conseils aux adoptants
            </Link>
            
            <div className="border-t border-gray-300 my-3"></div>
            
            {/* Section Lapins mobile */}
            <div className="py-2">
              <div className="px-3 mb-2">
                <h3 className="text-lg font-bold text-gray-900">Lapins</h3>
              </div>
              <div className="space-y-1 pl-3">
                {lapinCategories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/categories/${category.slug.current}`}
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  href="/adoption"
                  className="block px-3 py-2 text-sm text-gray-900 font-semibold hover:bg-primary/10 hover:text-primary rounded-md uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  L'apereaux a l'adoption
                </Link>
              </div>
            </div>
            
            <div className="border-t border-gray-300 my-3"></div>
            
            {/* Section Cobayes mobile */}
            <div className="py-2">
              <div className="px-3 mb-2">
                <h3 className="text-lg font-bold text-gray-900">Cobayes</h3>
              </div>
              <div className="space-y-1 pl-3">
                {cobayeCategories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/categories/${category.slug.current}`}
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  href="/adoption?type=cobaye"
                  className="block px-3 py-2 text-sm text-gray-900 font-semibold hover:bg-primary/10 hover:text-primary rounded-md uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bebes cobayes a l'adoption
                </Link>
              </div>
            </div>
            
            <div className="border-t border-gray-300 my-3"></div>
            
            {/* Section Autres animaux mobile - seulement si des catégories existent */}
            {autreCategories.length > 0 && (
              <>
                <div className="py-2">
                  <div className="px-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">Autres animaux</h3>
                  </div>
                  <div className="space-y-1 pl-3">
                    {autreCategories.map((category) => (
                      <Link
                        key={category._id}
                        href={`/categories/${category.slug.current}`}
                        className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-300 my-3"></div>
              </>
            )}
            
            <Link 
              href="/categories" 
              className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Toutes les catégories
            </Link>
            
            
            <div className="border-t border-gray-300 my-3"></div>
            
            <Link 
              href="/conseils" 
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Conseils & Guides
            </Link>
            
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

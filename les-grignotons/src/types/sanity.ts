/**
 * Types TypeScript pour les entités du CMS Sanity
 */

// Type de base pour les documents Sanity
export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

// Type pour les images Sanity
export interface SanityImage {
  _type: 'image'
  asset: {
    _id: string
    url: string
    _ref?: string
    _type?: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

// Category
export interface Category extends SanityDocument {
  _type: 'category'
  name: string
  slug: {
    current: string
  }
  type: 'lapin' | 'cobaye' | 'autre'
  hidden: boolean
  description: string
  image?: SanityImage
  order?: number
  animalCount?: number
}

// Parent information
export interface ParentInfo {
  type: 'reference' | 'manual'
  reference?: {
    _id: string
    name: string
    species: string
    category: {
      name: string
      slug: {
        current: string
      }
    }
  }
  name?: string
}

// Animal
export interface Animal extends SanityDocument {
  _type: 'animal'
  name: string
  species: 'Lapin' | 'Cobaye'
  category: {
    _id: string
    name: string
    slug: {
      current: string
    }
  }
  sex: 'Male' | 'Femelle'
  animalType: 'reproducteur' | 'adoption'
  birthDate?: string
  description?: string
  image: SanityImage
  status: 'Disponible' | 'Réservé' | 'Adopté'
  father?: ParentInfo
  mother?: ParentInfo
}

// Témoignage
export interface Testimonial extends SanityDocument {
  _type: 'testimonial'
  authorName: string
  animalName?: string
  content: string
  rating: number
  publishedAt: string
  isVisible: boolean
}

// Article (anciennement Conseil)
export interface Article extends SanityDocument {
  _type: 'article'
  title: string
  slug: {
    current: string
  }
  mainImage: SanityImage
  excerpt?: string
  content: any[] // Portable Text avec images et tableaux
  category: 'race' | 'adoption' | 'preparation' | 'alimentation' | 'sante' | 'activites'
  publishedAt: string
  isVisible: boolean
}

// Types pour les filtres
export type AnimalStatus = Animal['status']
export type AnimalSpecies = Animal['species']
export type ArticleCategory = Article['category']

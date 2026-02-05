import { sanityClient } from './client'
import { Animal, Testimonial, Category, Article } from '@/types/sanity'

/**
 * Queries GROQ centralisées pour Sanity
 * Toute la logique de récupération de données est ici
 */

// ===== ANIMAUX =====

/**
 * Récupère tous les animaux avec un filtre optionnel sur le statut
 * Inclut maintenant la catégorie, le sexe et la date de naissance
 * IMPORTANT: Filtre automatiquement les reproducteurs pour n'afficher que les animaux à adopter
 */
export async function getAnimals(status?: Animal['status']): Promise<Animal[]> {
  const baseFilter = `_type == "animal" && animalType == "adoption" && (!defined(category) || category->hidden != true)`
  const filter = status ? `*[${baseFilter} && status == "${status}"]` : `*[${baseFilter}]`
  
  const query = `${filter} | order(_createdAt desc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    species,
    category->{
      _id,
      name,
      slug
    },
    sex,
    animalType,
    birthDate,
    description,
    image {
      asset->{
        _id,
        url
      },
      hotspot
    },
    status,
    father{
      type,
      reference->{
        _id,
        name,
        species,
        category->{
          name,
          slug
        }
      },
      name
    },
    mother{
      type,
      reference->{
        _id,
        name,
        species,
        category->{
          name,
          slug
        }
      },
      name
    }
  }`
  
  return sanityClient.fetch<Animal[]>(query, {}, {
    next: { tags: ['animals'] }
  })
}

/**
 * Récupère un animal par son ID
 * Inclut tous les détails y compris les parents
 */
export async function getAnimalById(id: string): Promise<Animal | null> {
  const query = `*[_type == "animal" && _id == $id][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    species,
    category->{
      _id,
      name,
      slug
    },
    sex,
    animalType,
    birthDate,
    description,
    image {
      asset->{
        _id,
        url
      },
      hotspot
    },
    status,
    father{
      type,
      reference->{
        _id,
        name,
        species,
        category->{
          name,
          slug
        }
      },
      name
    },
    mother{
      type,
      reference->{
        _id,
        name,
        species,
        category->{
          name,
          slug
        }
      },
      name
    }
  }`
  
  return sanityClient.fetch<Animal>(query, { id }, {
    next: { tags: ['animals', `animal-${id}`] }
  })
}

/**
 * Récupère les animaux disponibles à l'adoption
 */
export async function getAvailableAnimals(): Promise<Animal[]> {
  return getAnimals('Disponible')
}

// ===== CATÉGORIES =====

/**
 * Récupère toutes les catégories visibles, triées par ordre d'affichage
 */
export async function getCategories(): Promise<Category[]> {
  const query = `*[_type == "category" && hidden != true] | order(order asc, name asc) {
    _id,
    _updatedAt,
    name,
    slug,
    type,
    hidden,
    description,
    image {
      asset->{
        _id,
        url
      },
      hotspot
    },
    order,
    "animalCount": count(*[_type == "animal" && references(^._id)])
  }`
  
  return sanityClient.fetch<Category[]>(query, {}, {
    next: { revalidate: 3600, tags: ['categories'] }
  })
}

/**
 * Récupère une catégorie par son slug (seulement si visible)
 */
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const query = `*[_type == "category" && slug.current == $slug && hidden != true][0] {
    _id,
    name,
    slug,
    type,
    hidden,
    description,
    image {
      asset->{
        _id,
        url
      },
      hotspot
    },
    order
  }`
  
  return sanityClient.fetch<Category>(query, { slug }, {
    next: { revalidate: 3600, tags: ['categories', `category-${slug}`] }
  })
}

/**
 * Récupère les animaux d'une catégorie spécifique
 * Permet de filtrer par statut et sexe
 * Affiche TOUS les animaux (reproducteurs et à adopter)
 */
export async function getAnimalsByCategory(
  categorySlug: string, 
  filters?: { 
    status?: Animal['status']
    sex?: Animal['sex']
  }
): Promise<Animal[]> {
  let filterStr = `_type == "animal" && category->slug.current == $categorySlug && category->hidden != true`
  
  if (filters?.status) {
    filterStr += ` && status == "${filters.status}"`
  }
  
  if (filters?.sex) {
    filterStr += ` && sex == "${filters.sex}"`
  }
  
  const query = `*[${filterStr}] | order(_createdAt desc) {
    _id,
    _type,
    _createdAt,
    name,
    species,
    category->{
      _id,
      name,
      slug
    },
    sex,
    animalType,
    birthDate,
    description,
    image {
      asset->{
        _id,
        url
      },
      hotspot
    },
    status,
    father{
      type,
      reference->{
        _id,
        name,
        species,
        category->{
          name,
          slug
        }
      },
      name
    },
    mother{
      type,
      reference->{
        _id,
        name,
        species,
        category->{
          name,
          slug
        }
      },
      name
    }
  }`
  
  return sanityClient.fetch<Animal[]>(query, { categorySlug }, {
    next: { tags: ['animals', `category-${categorySlug}`] }
  })
}

// ===== TÉMOIGNAGES =====

/**
 * Récupère tous les témoignages visibles, triés par date
 */
export async function getTestimonials(limit = 10): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial" && isVisible == true] | order(publishedAt desc) [0...${limit}] {
    _id,
    _type,
    _createdAt,
    authorName,
    animalName,
    content,
    rating,
    publishedAt,
    isVisible
  }`
  
  return sanityClient.fetch<Testimonial[]>(query, {}, {
    next: { tags: ['testimonials'] }
  })
}

// ===== ARTICLES =====

/**
 * Récupère tous les articles visibles
 */
export async function getArticles(category?: Article['category']): Promise<Article[]> {
  const filter = category 
    ? `*[_type == "article" && isVisible == true && category == "${category}"]`
    : `*[_type == "article" && isVisible == true]`
  
  const query = `${filter} | order(publishedAt desc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    mainImage {
      asset->{
        _id,
        url
      },
      hotspot
    },
    excerpt,
    category,
    publishedAt
  }`
  
  return sanityClient.fetch<Article[]>(query, {}, {
    next: { tags: ['articles'] }
  })
}

/**
 * Récupère un article par son slug
 * Note: Ne filtre pas par isVisible pour permettre la gestion côté client
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    mainImage {
      asset->{
        _id,
        url
      },
      hotspot
    },
    excerpt,
    content,
    category,
    publishedAt,
    isVisible
  }`
  
  return sanityClient.fetch<Article>(query, { slug })
}

// ===== STATS & DIVERS =====

/**
 * Récupère des statistiques globales pour la page d'accueil
 */
export async function getStats() {
  const query = `{
    "totalAnimals": count(*[_type == "animal"]),
    "availableAnimals": count(*[_type == "animal" && status == "Disponible"]),
    "adoptedAnimals": count(*[_type == "animal" && status == "Adopté"]),
    "testimonials": count(*[_type == "testimonial" && isVisible == true])
  }`
  
  return sanityClient.fetch<{
    totalAnimals: number
    availableAnimals: number
    adoptedAnimals: number
    testimonials: number
  }>(query)
}

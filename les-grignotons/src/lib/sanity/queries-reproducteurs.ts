import { sanityClient } from './client'
import { Animal } from '@/types/sanity'

/**
 * Queries spécifiques pour les reproducteurs
 * Ces animaux ne sont PAS disponibles à l'adoption
 */

/**
 * Récupère tous les reproducteurs
 */
export async function getReproducteurs(): Promise<Animal[]> {
  const query = `*[_type == "animal" && animalType == "reproducteur"] | order(_createdAt desc) {
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
    next: { tags: ['animals', 'reproducteurs'] }
  })
}

/**
 * Récupère un reproducteur par son ID
 */
export async function getReproducteurById(id: string): Promise<Animal | null> {
  const query = `*[_type == "animal" && _id == $id && animalType == "reproducteur"][0] {
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
    next: { tags: ['animals', 'reproducteurs', `animal-${id}`] }
  })
}

import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

/**
 * Configuration du client Sanity
 * Utilise les variables d'environnement pour la sécurité
 */
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'arbgz41i',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-27',
  useCdn: process.env.NODE_ENV === 'production', // Utiliser le CDN en production pour les performances
}

// Client Sanity pour les requêtes
export const sanityClient = createClient(sanityConfig)

// Helper pour générer les URLs d'images optimisées
const builder = createImageUrlBuilder(sanityClient)

export function urlForImage(source: any) {
  return builder.image(source)
}

export const urlFor = urlForImage

/**
 * Helper pour obtenir une image optimisée avec des dimensions spécifiques
 * @param source - Source de l'image Sanity
 * @param width - Largeur souhaitée
 * @param height - Hauteur souhaitée (optionnelle)
 */
export function getOptimizedImageUrl(
  source: any,
  width: number,
  height?: number
): string {
  let imageBuilder = urlForImage(source).width(width).quality(85).auto('format')
  
  if (height) {
    imageBuilder = imageBuilder.height(height).fit('crop')
  }
  
  return imageBuilder.url()
}

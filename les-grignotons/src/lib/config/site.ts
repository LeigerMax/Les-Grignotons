/**
 * Configuration globale du site
 * Centralise les URLs et métadonnées pour faciliter les changements
 */

// URL du site - À mettre à jour avec l'URL définitive
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://les-grignotons-elevage.vercel.app/'

// Informations du site
export const SITE_CONFIG = {
  name: 'Les Grignotons',
  description: 'Association de sauvetage et placement de lapins et cobayes en Belgique',
  url: SITE_URL,
  email: 'pirard.laure@skynet.be',
  phone: '0476/74.21.93',
  
  // Informations légales
  responsable: 'Laure Pirard',
  address: 'Rue du Pisselet 21, 1390 Grez-Doiceau',
  bce: 'BE0685592436',
  agrement: 'HK55220001',
  
  // Réseaux sociaux
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
  },
  
  // Images par défaut
  defaultImages: {
    og: '/images/hero-center.jpg',
    logo: '/logos/logo.png',
  },
  
  // SEO
  seo: {
    titleTemplate: '%s | Les Grignotons',
    defaultTitle: 'Les Grignotons - Association de sauvetage de lapins et cobayes',
  }
} as const

/**
 * Génère l'URL complète d'une page
 */
export function getPageUrl(path: string): string {
  // Enlever le slash initial si présent pour éviter les doubles slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${SITE_URL}/${cleanPath}`
}

/**
 * Génère le titre complet d'une page
 */
export function getPageTitle(title: string): string {
  return `${title} | ${SITE_CONFIG.name}`
}

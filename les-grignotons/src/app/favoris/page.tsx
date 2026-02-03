import { Metadata } from 'next'
import FavoritesClient from './FavoritesClient'
import { getPageUrl, SITE_CONFIG } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Mes Favoris',
  description: 'Retrouvez tous vos animaux favoris et contactez-nous pour une adoption.',
  openGraph: {
    title: 'Mes Favoris - Les Grignotons',
    description: 'Retrouvez tous vos animaux favoris.',
    url: getPageUrl('favoris'),
    images: [SITE_CONFIG.defaultImages.og],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mes Favoris - Les Grignotons',
    description: 'Retrouvez tous vos animaux favoris.',
  },
  alternates: {
    canonical: getPageUrl('favoris'),
  },
}

export default function FavoritesPage() {
  return <FavoritesClient />
}

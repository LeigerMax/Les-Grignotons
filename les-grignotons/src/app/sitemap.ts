import { MetadataRoute } from 'next'
import { getAnimals, getArticles, getCategories } from '@/lib/sanity/queries'
import { SITE_CONFIG } from '@/lib/config/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url

  // Récupérer toutes les données dynamiques
  const [animals, articles, categories] = await Promise.all([
    getAnimals(),
    getArticles(),
    getCategories(),
  ])

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/adoption`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/conseils`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/temoignages`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Pages dynamiques - Catégories
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => {
    const lastModified = category._updatedAt ? new Date(category._updatedAt) : new Date()
    return {
      url: `${baseUrl}/categories/${category.slug.current}`,
      lastModified: isNaN(lastModified.getTime()) ? new Date() : lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }
  })

  // Pages dynamiques - Articles
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => {
    const lastModified = article._updatedAt ? new Date(article._updatedAt) : new Date()
    return {
      url: `${baseUrl}/conseils/${article.slug.current}`,
      lastModified: isNaN(lastModified.getTime()) ? new Date() : lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }
  })

  return [...staticPages, ...categoryPages, ...articlePages]
}

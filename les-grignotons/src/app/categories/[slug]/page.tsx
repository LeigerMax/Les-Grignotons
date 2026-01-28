import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getCategoryBySlug, getAnimalsByCategory, getCategories } from '@/lib/sanity/queries'
import { getOptimizedImageUrl } from '@/lib/sanity/client'
import Section from '@/components/ui/Section'
import CategoryAnimalsClient from '@/components/categories/CategoryAnimalsClient'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import AnimalWarning from '@/components/ui/AnimalWarning'

export const revalidate = 60

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({
    slug: category.slug.current
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    return {
      title: 'Catégorie non trouvée'
    }
  }

  const imageUrl = category.image?.asset?.url 
    ? getOptimizedImageUrl(category.image.asset.url, 1200, 630)
    : '/images/hero-center.jpg'

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} - Les Grignotons`,
      description: category.description,
      url: `https://les-grignotons.be/categories/${slug}`,
      images: [imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} - Les Grignotons`,
      description: category.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://les-grignotons.be/categories/${slug}`,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const animals = await getAnimalsByCategory(slug)

  const imageUrl = category.image?.asset?.url 
    ? getOptimizedImageUrl(category.image.asset.url, 1200, 600)
    : null

  return (
    <>
      {/* Breadcrumb Schema.org */}
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://les-grignotons.be' },
          { name: 'Adoptions', url: 'https://les-grignotons.be/adoption' },
          { name: category.name, url: `https://les-grignotons.be/categories/${slug}` },
        ]}
      />

      {/* Hero avec image de catégorie */}
      <Section className="bg-gradient-to-br from-primary to-accent text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texte */}
          <div>
            <Link 
              href="/adoption" 
              className="inline-flex items-center gap-2 text-sm mb-4 opacity-90 hover:opacity-100 transition-opacity group"
            >
              <svg 
                className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour aux catégories
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              {category.name}
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt={category.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </Section>

      {/* Avertissement important */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <AnimalWarning />
        </div>
      </Section>

      {/* Liste des animaux avec filtres */}
      <Section>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Nos {category.name.toLowerCase()}
          </h2>
          <p className="text-lg text-gray-600">
            {animals.length === 0 
              ? 'Aucun animal disponible dans cette catégorie pour le moment.' 
              : `${animals.length} animal${animals.length > 1 ? 'aux' : ''} dans cette catégorie`}
          </p>
        </div>

        {animals.length > 0 && (
          <CategoryAnimalsClient animals={animals} />
        )}
      </Section>

      {/* CTA */}
      <Section className="bg-secondary">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Intéressé par un animal ?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Contactez-nous pour en savoir plus, organiser une visite ou réserver votre futur compagnon.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition"
          >
            Nous contacter
          </Link>
        </div>
      </Section>
    </>
  )
}

/**
 * Composant pour injecter des données structurées JSON-LD
 * Améliore le SEO avec Schema.org
 */

interface JsonLdProps {
  data: object
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * Schema.org pour l'organisation
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    name: 'Les Grignotons',
    description: 'Élevage familial responsable de lapins et cobayes en Belgique',
    url: 'https://les-grignotons.be', 
    logo: 'https://les-grignotons.be/logos/logo-full.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BE',
    },
    sameAs: [
      // Ajoutez vos réseaux sociaux ici
      // 'https://www.facebook.com/les-grignotons',
      // 'https://www.instagram.com/les-grignotons',
    ],
  }

  return <JsonLd data={schema} />
}

/**
 * Schema.org pour un animal (Product)
 */
interface AnimalSchemaProps {
  name: string
  description: string
  image: string
  status: string
  category: string
  url: string
}

export function AnimalSchema({ name, description, image, status, category, url }: AnimalSchemaProps) {
  const availability = status === 'Disponible' 
    ? 'https://schema.org/InStock'
    : status === 'Réservé'
    ? 'https://schema.org/PreOrder'
    : 'https://schema.org/OutOfStock'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    category,
    url,
    offers: {
      '@type': 'Offer',
      availability,
      priceCurrency: 'EUR',
      seller: {
        '@type': 'Organization',
        name: 'Les Grignotons',
      },
    },
  }

  return <JsonLd data={schema} />
}

/**
 * Schema.org pour un article de blog
 */
interface ArticleSchemaProps {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified: string
  author: string
  url: string
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Les Grignotons',
      logo: {
        '@type': 'ImageObject',
        url: 'https://les-grignotons.be/logos/logo-full.png',
      },
    },
    url,
  }

  return <JsonLd data={schema} />
}

/**
 * Schema.org pour les breadcrumbs
 */
interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <JsonLd data={schema} />
}

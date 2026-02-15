import { notFound } from 'next/navigation'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { getArticleBySlug } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/client'
import { PortableText } from 'next-sanity'
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'
import { getPageUrl, SITE_CONFIG } from '@/lib/config/site'

interface ArticlePageLayoutProps {
  slug: string
  breadcrumbs?: Array<{ name: string; url: string }>
  backButton?: { href: string; label: string }
}

export async function ArticlePageLayout({ 
  slug, 
  breadcrumbs,
  backButton 
}: ArticlePageLayoutProps) {
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const imageUrl = article.mainImage 
    ? urlFor(article.mainImage).width(1200).height(675).url()
    : SITE_CONFIG.defaultImages.og

  // Breadcrumbs par défaut si non fournis
  const finalBreadcrumbs = breadcrumbs || [
    { name: 'Accueil', url: SITE_CONFIG.url },
    { name: article.title, url: getPageUrl(slug) },
  ]

  // Bouton retour par défaut
  const finalBackButton = backButton || {
    href: '/categories',
    label: '← Nos races'
  }

  return (
    <main>
      {/* Schema.org pour l'article */}
      <ArticleSchema
        headline={article.title}
        description={article.excerpt || article.title}
        image={imageUrl}
        datePublished={article.publishedAt || article._createdAt}
        dateModified={article._updatedAt}
        author="Les Grignotons"
        url={getPageUrl(slug)}
      />

      

      {/* Contenu */}
      <Section className="bg-beige/20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-xl shadow-lg">
            {/* Breadcrumb Schema.org */}
      <BreadcrumbSchema items={finalBreadcrumbs} />

      {/* Titre */}

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold  mb-6 drop-shadow-lg">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="text-xl  drop-shadow">
              {article.excerpt}
            </p>
          )}
        </div>

      {/* Image principale */}
      {article.mainImage && (
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src={urlFor(article.mainImage).width(1200).height(675).url()}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>
      )}

      {/* Contenu de l'article */}
            <PortableText 
              value={article.content}
              components={{
                types: {
                  image: ({value}) => (
                    <figure className="my-8">
                      <img
                        src={urlFor(value).width(800).url()}
                        alt={value.alt || ''}
                        className="rounded-lg shadow-md w-full"
                      />
                      {value.caption && (
                        <figcaption className="text-center text-gray-600 mt-2 italic">
                          {value.caption}
                        </figcaption>
                      )}
                    </figure>
                  ),
                  table: ({value}) => (
                    <div className="my-8 overflow-x-auto">
                      {value.title && (
                        <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                      )}
                      <table className="min-w-full border-collapse border border-gray-300">
                        <tbody>
                          {value.rows?.map((row: any, rowIndex: number) => (
                            <tr 
                              key={rowIndex}
                              className={value.hasHeader && rowIndex === 0 ? 'bg-primary text-white' : rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                            >
                              {row.cells?.map((cell: string, cellIndex: number) => {
                                const Tag = value.hasHeader && rowIndex === 0 ? 'th' : 'td'
                                return (
                                  <Tag 
                                    key={cellIndex}
                                    className="border border-gray-300 px-4 py-2 text-left"
                                  >
                                    {cell}
                                  </Tag>
                                )
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                },
                block: {
                  h2: ({children}) => <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">{children}</h2>,
                  h3: ({children}) => <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>,
                  h4: ({children}) => <h4 className="text-xl font-bold text-gray-900 mt-6 mb-2">{children}</h4>,
                  normal: ({children}) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 my-6">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({children}) => <ul className="list-disc list-inside space-y-2 mb-4">{children}</ul>,
                  number: ({children}) => <ol className="list-decimal list-inside space-y-2 mb-4">{children}</ol>,
                },
                marks: {
                  strong: ({children}) => <strong className="font-bold text-gray-900">{children}</strong>,
                  em: ({children}) => <em className="italic">{children}</em>,
                  underline: ({children}) => <span className="underline">{children}</span>,
                }
              }}
            />
          </article>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary/5">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Des questions ?
          </h2>
          <p className="text-gray-700 mb-6">
            N'hésitez pas à nous contacter pour plus d'informations ou des conseils personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={finalBackButton.href} variant="outline">
              {finalBackButton.label}
            </Button>
            <Button href="/contact" variant="primary">
              Nous contacter
            </Button>
          </div>
        </div>
      </Section>
    </main>
  )
}

// Helper pour générer les métadonnées
export async function generateArticleMetadata(slug: string) {
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article non trouvé'
    }
  }

  const imageUrl = article.mainImage?.asset?.url 
    ? urlFor(article.mainImage).width(1200).height(630).url()
    : SITE_CONFIG.defaultImages.og

  return {
    title: article.title,
    description: article.excerpt || article.title,
    openGraph: {
      title: `${article.title} - Les Grignotons`,
      description: article.excerpt || article.title,
      url: getPageUrl(slug),
      type: 'article' as const,
      publishedTime: article.publishedAt || article._createdAt,
      modifiedTime: article._updatedAt,
      images: [imageUrl],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: article.title,
      description: article.excerpt || article.title,
      images: [imageUrl],
    },
    alternates: {
      canonical: getPageUrl(slug),
    },
  }
}

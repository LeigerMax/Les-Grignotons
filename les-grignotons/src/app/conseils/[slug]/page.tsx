import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { getArticleBySlug, getArticles } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/client'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug.current
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article non trouvé'
    }
  }

  const imageUrl = article.mainImage?.asset?.url 
    ? urlFor(article.mainImage).width(1200).height(630).url()
    : '/images/hero-center.jpg'

  return {
    title: article.title,
    description: article.excerpt || article.title,
    openGraph: {
      title: `${article.title} - Les Grignotons`,
      description: article.excerpt || article.title,
      url: `https://les-grignotons.be/conseils/${slug}`,
      type: 'article',
      publishedTime: article._createdAt,
      modifiedTime: article._updatedAt,
      images: [imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.title,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://les-grignotons.be/conseils/${slug}`,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const [article, allArticles] = await Promise.all([
    getArticleBySlug(slug),
    getArticles()
  ])

  if (!article) {
    notFound()
  }

  // Récupérer 3 autres articles (exclure l'article actuel)
  const otherArticles = allArticles
    .filter(a => a._id !== article._id)
    .slice(0, 3)

  const categoryLabels = {
    race: '🐰 Race et couleur',
    adoption: '❤️ Conseils aux adoptants',
    preparation: '🏠 Préparation',
    alimentation: '🥕 Alimentation',
    sante: '🏥 Santé',
    activites: '🎾 Activités'
  }

  const imageUrl = article.mainImage 
    ? urlFor(article.mainImage).width(1200).height(675).url()
    : '/images/hero-center.jpg'

  return (
    <main>
      {/* Schema.org pour l'article */}
      <ArticleSchema
        headline={article.title}
        description={article.excerpt || article.title}
        image={imageUrl}
        datePublished={article._createdAt}
        dateModified={article._updatedAt}
        author="Les Grignotons"
        url={`https://les-grignotons.be/conseils/${slug}`}
      />

      {/* Breadcrumb Schema.org */}
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://les-grignotons.be' },
          { name: 'Conseils', url: 'https://les-grignotons.be/conseils' },
          { name: article.title, url: `https://les-grignotons.be/conseils/${slug}` },
        ]}
      />

      {/* Hero avec image principale */}
      <Section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
              {categoryLabels[article.category]}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="text-xl text-gray-700">
              {article.excerpt}
            </p>
          )}
        </div>
      </Section>

      {/* Image principale */}
      {article.mainImage && (
        <Section className="bg-white pt-0">
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

      {/* Contenu */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
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

      {/* Autres articles */}
      {otherArticles.length > 0 && (
        <Section className="bg-beige">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Découvrez d'autres articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherArticles.map((related) => (
                <Link 
                  key={related._id} 
                  href={`/conseils/${related.slug.current}`}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {related.mainImage && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={urlFor(related.mainImage).width(400).height(225).url()}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {categoryLabels[related.category]}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    {related.excerpt && (
                      <p className="text-gray-600 text-sm line-clamp-3">{related.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

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
            <Button href="/conseils" variant="outline">
              ← Tous les conseils
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

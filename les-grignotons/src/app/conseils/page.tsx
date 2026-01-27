import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import { getArticles } from '@/lib/sanity/queries'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/client'

export const metadata: Metadata = {
  title: 'Conseils',
  description: 'Tous nos conseils pour bien accueillir et prendre soin de votre lapin ou cobaye.',
  openGraph: {
    title: 'Conseils - Les Grignotons',
    description: 'Tous nos conseils pour bien accueillir et prendre soin de votre lapin ou cobaye.',
    url: 'https://les-grignotons.be/conseils',
    images: ['/images/hero-center.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conseils - Les Grignotons',
    description: 'Tous nos conseils pour bien accueillir et prendre soin de votre lapin ou cobaye.',
  },
  alternates: {
    canonical: 'https://les-grignotons.be/conseils',
  },
}

export const revalidate = 300 // 5 minutes

export default async function AdvicesPage() {
  const articles = await getArticles()

  // Grouper les articles par catégorie
  const articlesByCategory = articles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = []
    }
    acc[article.category].push(article)
    return acc
  }, {} as Record<string, typeof articles>)

  const categoryLabels = {
    race: '🐰 Race et couleur',
    adoption: '❤️ Conseils aux adoptants',
    preparation: '🏠 Préparation',
    alimentation: '🥕 Alimentation',
    sante: '🏥 Santé',
    activites: '🎾 Activités'
  }

  return (
    <main>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conseils & Guides
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Tout ce qu'il faut savoir pour accueillir et prendre soin de votre compagnon
          </p>
        </div>
      </Section>

      {/* Articles par catégorie */}
      {Object.entries(articlesByCategory).map(([category, categoryArticles]) => (
        <Section key={category} className={category === 'race' ? 'bg-beige' : 'bg-white'}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {categoryLabels[category as keyof typeof categoryLabels]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <Link 
                key={article._id} 
                href={`/conseils/${article.slug.current}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {article.mainImage && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={urlFor(article.mainImage).width(600).height(400).url()}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ))}

      {/* Message si aucun article */}
      {articles.length === 0 && (
        <Section className="bg-white">
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-8">
              Les articles de conseil arrivent bientôt !
            </p>
            <div className="bg-primary/5 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="font-bold text-xl text-gray-900 mb-4">En attendant, quelques conseils de base :</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li>✅ Préparez un espace adapté avant l'arrivée</li>
                <li>✅ Offrez de l'eau fraîche à volonté</li>
                <li>✅ Laissez du temps d'adaptation à votre animal</li>
              </ul>
            </div>
          </div>
        </Section>
      )}
    </main>
  )
}

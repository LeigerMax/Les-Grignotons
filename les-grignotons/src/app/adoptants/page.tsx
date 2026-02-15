import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import { getPageUrl, SITE_CONFIG } from '@/lib/config/site'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import AnimalWarning from '@/components/ui/AnimalWarning'

export const metadata: Metadata = {
  title: 'Conseils aux adoptants',
  description: 'Conseils pour bien accueillir votre nouveau compagnon : lapins et cobayes',
  openGraph: {
    title: 'Conseils aux adoptants - Les Grignotons',
    description: 'Conseils pour bien accueillir votre nouveau compagnon : lapins et cobayes',
    url: getPageUrl('adoptants'),
    type: 'website',
  },
  alternates: {
    canonical: getPageUrl('adoptants'),
  },
}

export default function ConseilsAdoptantsPage() {
  const articles = [
    {
      title: 'Conseils aux adoptants pour les lapins',
      slug: 'conseils-aux-adoptants-pour-les-lapins',
      emoji: '🐰',
      description: 'Tout ce que vous devez savoir avant d\'adopter un lapin',
    },
    {
      title: 'Conseils aux adoptants pour les cobayes',
      slug: 'conseils-aux-adoptants-pour-les-cobayes',
      emoji: '🐹',
      description: 'Tout ce que vous devez savoir avant d\'adopter un cobaye',
    },
  ]

  return (
    <main>
      {/* Breadcrumb Schema.org */}
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: SITE_CONFIG.url },
          { name: 'Conseils aux adoptants', url: getPageUrl('adoptants') },
        ]}
      />

      {/* Hero */}
      <Section className="bg-gradient-to-b from-primary to-beige text-white py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Conseils aux adoptants
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Découvrez nos guides pour bien accueillir votre nouveau compagnon
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <AnimalWarning />
        </div>
      </Section>

      {/* Menu de sélection des articles */}
      <Section className="bg-beige">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choisissez votre espèce
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.slug}`}
                className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {article.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold">
                    Lire le guide
                    <svg 
                      className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}

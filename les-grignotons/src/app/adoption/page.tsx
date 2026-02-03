import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import { getCategories } from '@/lib/sanity/queries'
import CategoryCard from '@/components/ui/CategoryCard'
import AnimalWarning from '@/components/ui/AnimalWarning'
import { getPageUrl, SITE_CONFIG } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Adoptions',
  description: 'Découvrez toutes nos races de lapins et cobayes disponibles à l\'adoption. Élevage familial responsable.',
  openGraph: {
    title: 'Adoptions - Les Grignotons',
    description: 'Découvrez toutes nos races de lapins et cobayes disponibles à l\'adoption. Élevage familial responsable.',
    url: getPageUrl('adoption'),
    images: [SITE_CONFIG.defaultImages.og],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adoptions - Les Grignotons',
    description: 'Découvrez toutes nos races de lapins et cobayes disponibles à l\'adoption.',
  },
  alternates: {
    canonical: getPageUrl('adoption'),
  },
}


export default async function AdoptionPage() {
  const categories = await getCategories()

  return (
    <main>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos animaux
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez nos différentes races de lapins et cobayes.
            Chaque animal est suivi, socialisé et prêt à rejoindre son nouveau foyer.
          </p>
        </div>
      </Section>

      {/* Avertissement important */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <AnimalWarning />
        </div>
      </Section>

      {/* Présentation des catégories */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Toutes nos races
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chaque catégorie présente des animaux avec leurs propres caractéristiques et besoins. 
            Cliquez sur une race pour découvrir les animaux disponibles.
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500 text-lg mb-4">
              Aucune catégorie disponible pour le moment.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Nous contacter
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        )}
      </Section>

      {/* Informations adoption */}
      <Section className="bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Le processus d'adoption
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Parcourez nos catégories
              </h3>
              <p className="text-gray-600">
                Découvrez nos différentes races et choisissez celle qui vous correspond
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Contactez-nous
              </h3>
              <p className="text-gray-600">
                Posez vos questions et organisez une visite pour rencontrer nos animaux
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Adoptez avec confiance
              </h3>
              <p className="text-gray-600">
                Repartez avec votre compagnon et tous nos conseils pour bien démarrer
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Commencer mon adoption
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}

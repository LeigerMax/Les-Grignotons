import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import { getAnimals } from '@/lib/sanity/queries'
import AnimalWarning from '@/components/ui/AnimalWarning'
import AnimalCard from '@/components/animals/AnimalCard'
import { getPageUrl, SITE_CONFIG } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Adoptions - Lapins',
  description: 'Découvrez nos lapereaux disponibles à l\'adoption. Élevage familial responsable avec sevrage tardif.',
  openGraph: {
    title: 'Adoptions Lapins - Les Grignotons',
    description: 'Découvrez nos lapereaux disponibles à l\'adoption. Élevage familial responsable avec sevrage tardif.',
    url: getPageUrl('adoption/lapins'),
    images: [SITE_CONFIG.defaultImages.og],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adoptions Lapins - Les Grignotons',
    description: 'Découvrez nos lapereaux disponibles à l\'adoption.',
  },
  alternates: {
    canonical: getPageUrl('adoption/lapins'),
  },
}

export default async function AdoptionLapinsPage() {
  const allAnimals = await getAnimals()
  const adoptionLapins = allAnimals.filter(
    (animal) => animal.animalType === 'adoption' && animal.species === 'Lapin'
  )

  return (
    <main>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-primary to-beige text-white py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            🐰 Adoptez un lapin
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Découvrez nos lapereaux disponibles à l'adoption.
            <br />
            Élevés avec soin dans un environnement familial.
          </p>
        </div>
      </Section>

      {/* Avertissement important */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <AnimalWarning />
        </div>
      </Section>

      {/* Informations importantes sur l'adoption */}
      <Section className="bg-gradient-to-b from-primary/5 to-beige/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Informations importantes
          </h2>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="font-bold text-gray-900 text-lg">Avant d'adopter</h3>
              </div>
              <p className="text-gray-700">
                Tous les conseils pour accueillir votre nouveau compagnon se trouvent dans{' '}
                <Link href="/conseils-aux-adoptants-pour-les-lapins" className="text-primary font-semibold hover:underline">
                  Conseils aux adoptants
                </Link>
                {' '}et{' '}
                <Link href="/race-et-couleurs-les-lapins" className="text-primary font-semibold hover:underline">
                  Race et couleur
                </Link>
                .
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 color-secondary hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-gray-900 text-lg">Sevrage responsable</h3>
              </div>
              <p className="text-gray-700">
                Nos lapereaux sont sevrés à l'âge de <strong>6 semaines (42 jours)</strong>, bien plus tard que la date légale. Ce sevrage tardif garantit une meilleure santé.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-accent hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="font-bold text-gray-900 text-lg">Disponibilité</h3>
              </div>
              <p className="text-gray-700">
                Les lapins sont disponibles à l'adoption dès qu'ils atteignent l'âge de sevrage. Les dates sont indiquées sur chaque fiche.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Processus d'adoption */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            Le processus d'adoption
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Découvrez nos lapins
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Parcourez les fiches de nos lapereaux disponibles ci-dessous
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-primary-dark text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Contactez-nous
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Posez vos questions et organisez une visite pour rencontrer le lapin de votre choix
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-earth text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Adoptez sereinement
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Repartez avec votre compagnon, ses documents et tous nos conseils personnalisés
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Liste des lapins disponibles */}
      <Section className="bg-gray-50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
            Nos lapins disponibles
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {adoptionLapins.length === 0 
              ? 'Aucun lapin disponible à l\'adoption pour le moment. Revenez bientôt !' 
              : `${adoptionLapins.length} lapin${adoptionLapins.length > 1 ? 's' : ''} disponible${adoptionLapins.length > 1 ? 's' : ''} à l'adoption`}
          </p>
        </div>

        {adoptionLapins.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adoptionLapins.map((animal) => (
              <AnimalCard key={animal._id} animal={animal} />
            ))}
          </div>
        )}
      </Section>

      {/* CTA Final */}
      <Section className="bg-gradient-to-b from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Vous avez des questions ?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            N'hésitez pas à nous contacter pour toute question sur nos lapins, 
            le processus d'adoption ou pour organiser une visite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition text-lg"
            >
              📧 Nous contacter
            </Link>
            <Link
              href="/conseils-aux-adoptants-pour-les-lapins"
              className="inline-block bg-white hover:bg-gray-50 text-primary font-bold py-4 px-8 rounded-lg shadow-lg transition border-2 border-primary text-lg"
            >
              📚 Conseils aux adoptants
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import { getPageUrl, SITE_CONFIG } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Adoptions',
  description: 'Découvrez nos lapereaux et bébés cobayes disponibles à l\'adoption. Élevage familial responsable avec sevrage tardif.',
  openGraph: {
    title: 'Adoptions - Les Grignotons',
    description: 'Découvrez nos lapereaux et bébés cobayes disponibles à l\'adoption. Élevage familial responsable avec sevrage tardif.',
    url: getPageUrl('adoption'),
    images: [SITE_CONFIG.defaultImages.og],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adoptions - Les Grignotons',
    description: 'Découvrez nos lapereaux et bébés cobayes disponibles à l\'adoption.',
  },
  alternates: {
    canonical: getPageUrl('adoption'),
  },
}

export default async function AdoptionPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-primary to-beige text-white py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Adoptez votre compagnon
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Découvrez nos lapereaux et bébés cobayes disponibles à l'adoption.
            <br />
            Élevés avec soin dans un environnement familial.
          </p>
        </div>
      </Section>

      {/* Choix de l'espèce */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            Quelle espèce souhaitez-vous adopter ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Carte Lapins */}
            <Link 
              href="/adoption/lapins"
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-primary to-primary-light p-8 text-white text-center">
                <div className="text-6xl mb-4">🐰</div>
                <h3 className="text-3xl font-extrabold">Lapins</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Découvrez nos adorables lapereaux disponibles à l'adoption. 
                  Sevrage responsable à 6 semaines pour une santé optimale.
                </p>
                <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg group-hover:gap-4 transition-all">
                  <span>Voir les lapins</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Carte Cobayes */}
            <Link 
              href="/adoption/cobayes"
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-accent to-earth p-8 text-white text-center">
                <div className="text-6xl mb-4">🐹</div>
                <h3 className="text-3xl font-extrabold">Cobayes</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Découvrez nos adorables bébés cobayes disponibles à l'adoption. 
                  Élevés avec amour dans un environnement familial.
                </p>
                <div className="flex items-center justify-center gap-2 text-accent font-bold text-lg group-hover:gap-4 transition-all">
                  <span>Voir les cobayes</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Section>

      {/* Pourquoi adopter chez nous */}
      <Section className="bg-gradient-to-br from-primary/5 to-beige/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            Pourquoi adopter chez nous ?
          </h2>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-gray-900 text-lg">Élevage responsable</h3>
              </div>
              <p className="text-gray-700">
                Sevrage tardif, suivi vétérinaire, et respect du bien-être animal pour des compagnons en pleine santé.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-accent hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="font-bold text-gray-900 text-lg">Conseils personnalisés</h3>
              </div>
              <p className="text-gray-700">
                Accompagnement complet avant et après l'adoption pour garantir le bonheur de votre animal.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-earth hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-earth flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h3 className="font-bold text-gray-900 text-lg">Élevage familial</h3>
              </div>
              <p className="text-gray-700">
                Nos animaux grandissent dans un environnement aimant, socialisés dès leur plus jeune âge.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Des questions avant d'adopter ?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Consultez nos guides complets pour tout savoir sur l'accueil et les soins de votre futur compagnon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/adoptants"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition text-lg"
            >
              📚 Conseils aux adoptants
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-50 text-primary font-bold py-4 px-8 rounded-lg shadow-lg transition border-2 border-primary text-lg"
            >
              📧 Nous contacter
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}

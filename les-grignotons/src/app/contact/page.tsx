import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { getPageUrl, SITE_CONFIG } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez-nous pour adopter un de nos lapins ou cobayes, ou pour toute question.',
  openGraph: {
    title: 'Contact - Les Grignotons',
    description: 'Contactez-nous pour adopter un de nos lapins ou cobayes, ou pour toute question.',
    url: getPageUrl('contact'),
    images: [SITE_CONFIG.defaultImages.og],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Les Grignotons',
    description: 'Contactez-nous pour adopter un de nos lapins ou cobayes.',
  },
  alternates: {
    canonical: getPageUrl('contact'),
  },
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-primary to-beige text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-white-700">
            Une question ? Envie d'adopter ? Nous sommes là pour vous aider !
          </p>
        </div>
      </Section>

      {/* Contenu */}
      <Section className="bg-beige/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choisissez votre méthode de contact
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <div className="p-6 bg-green-50 rounded-xl border-2 border-green-500 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="flex flex-col items-center text-center flex-grow">
                <svg className="w-16 h-16 text-green-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  WhatsApp
                </h3>
                <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold mb-3">Recommandé</span>
                <p className="text-sm text-gray-700 mb-4">
                  Réponse rapide garantie dans l'heure
                </p>
                
                {/* Spacer pour pousser le bouton vers le bas */}
                <div className="flex-grow"></div>
                
                <Button 
                  href="https://wa.me/32476742193?text=Bonjour, je vous contacte depuis le site Les Grignotons"
                  variant="primary"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Ouvrir WhatsApp
                </Button>
              </div>
            </div>

            {/* Téléphone */}
            <div className="p-6 bg-white rounded-xl border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="flex flex-col items-center text-center flex-grow">
                <svg className="w-16 h-16 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  Téléphone
                </h3>
                <p className="text-sm text-gray-700 mb-1 font-semibold">
                  +32 476 74 21 93
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Lun-Sam, 10h-18h
                </p>
                
                {/* Spacer pour pousser le bouton vers le bas */}
                <div className="flex-grow"></div>
                
                <Button 
                  href="tel:+32476742193"
                  variant="secondary"
                  className="w-full"
                >
                  Appeler
                </Button>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="flex flex-col items-center text-center flex-grow">
                <svg className="w-16 h-16 text-gray-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  Email
                </h3>
                <p className="text-sm text-gray-700 mb-1 font-semibold">
                  pirard.laure@skynet.be
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Réponse sous 48-72h
                </p>
                
                {/* Spacer pour pousser le bouton vers le bas */}
                <div className="flex-grow"></div>
                
                <Button 
                  href="mailto:pirard.laure@skynet.be?subject=Contact depuis le site Les Grignotons"
                  variant="outline"
                  className="w-full"
                >
                  Envoyer un email
                </Button>
              </div>
            </div>
          </div>

          {/* Informations complémentaires */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-amber-50 rounded-xl border-2 border-amber-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Localisation</h3>
                  <p className="text-gray-700">Belgique, Brabant Wallon</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Visites sur rendez-vous uniquement
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Bon à savoir</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Visites sur rendez-vous</li>
                    <li>• Pas de vente en ligne</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}

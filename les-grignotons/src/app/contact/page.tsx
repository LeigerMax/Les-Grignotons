import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez-nous pour adopter un de nos lapins ou cobayes, ou pour toute question.',
  openGraph: {
    title: 'Contact - Les Grignotons',
    description: 'Contactez-nous pour adopter un de nos lapins ou cobayes, ou pour toute question.',
    url: 'https://les-grignotons.be/contact',
    images: ['/images/hero-center.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Les Grignotons',
    description: 'Contactez-nous pour adopter un de nos lapins ou cobayes.',
  },
  alternates: {
    canonical: 'https://les-grignotons.be/contact',
  },
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-700">
            Une question ? Envie d'adopter ? Nous sommes là pour vous aider !
          </p>
        </div>
      </Section>

      {/* Contenu */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Informations de contact */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nos coordonnées
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:pirard.laure@skynet.be"
                    className="text-primary hover:underline"
                  >
                    pirard.laure@skynet.be
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Nous répondons sous 24-48h
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                  <div className="space-y-1">
                    <div>
                      <a
                        href="tel:+32476742193"
                        className="text-primary hover:underline"
                      >
                        GSM: 0476/74.21.93
                      </a>
                    </div>
                    <div>
                      <a
                        href="tel:+32108430017"
                        className="text-primary hover:underline"
                      >
                        Fixe: 010/84.30.17
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Du lundi au samedi, 10h-18h
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Localisation</h3>
                  <p className="text-gray-700">Belgique, Brabant Wallon</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Visites sur rendez-vous uniquement
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">💡 Bon à savoir</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Les visites sont organisées sur rendez-vous</li>
                <li>• Nous ne vendons pas d'animaux en ligne</li>
                <li>• Un questionnaire d'adoption peut être demandé</li>
                <li>• Nous assurons un suivi post-adoption</li>
              </ul>
            </div>
          </div>

          {/* Actions de contact */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nous contacter
            </h2>

            <div className="space-y-4">
              <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">📧</span>
                  Envoyez-nous un email
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Décrivez votre demande, nous vous répondrons dans les 24-48h
                </p>
                <Button 
                  href="mailto:pirard.laure@skynet.be?subject=Contact depuis le site Les Grignotons"
                  variant="primary"
                  className="w-full"
                >
                   Ouvrir mon client email
                </Button>
              </div>

              <div className="p-6 bg-accent/10 rounded-lg border-2 border-accent/30">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">📞</span>
                  Appelez-nous directement
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Disponibles du lundi au samedi, 10h-18h
                </p>
                <div className="space-y-2">
                  <Button 
                    href="tel:+32476742193"
                    variant="secondary"
                    className="w-full"
                  >
                    GSM: 0476/74.21.93
                  </Button>
                  <Button 
                    href="tel:+32108430017"
                    variant="outline"
                    className="w-full"
                  >
                     Fixe: 010/84.30.17
                  </Button>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}

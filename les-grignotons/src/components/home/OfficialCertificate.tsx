import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function OfficialCertificate() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary/20">
          <div className="flex flex-col items-center gap-8">
            {/* Informations de certification */}
            <div className="w-full text-center max-w-3xl">
              
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🏅 Élevage Certifié & Reconnu
              </h2>
              
              <p className="text-lg font-semibold text-primary mb-6">
                Site reconnu par le Service Public Wallon: <span className="font-bold">WEB-048</span>
              </p>

              {/* Certificat visible directement */}
              
              <div className="relative w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-2xl mb-6">
                <Image
                  src="/certificat-spw.webp"
                  alt="Certificat officiel SPW - Élevage agréé WEB-048"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <p className="text-sm text-gray-600 italic mb-6">
                14 août 1986 - Loi relative à la protection et au bien-être des animaux
              </p>

              <div className="mt-6">
                <Button 
                  href="https://www.wallonie.be/fr/demarches/obtenir-un-numero-dagrement-pour-un-elevage-danimaux" 
                  variant="primary"
                  target="_blank"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Portail SPW Bien-être animal
                </Button>
              </div>
              
            </div>
            {/* Logo Wallonie Service Public SPW */}
              <div className="flex justify-center mb-6">
                <Image
                  src="/logos/wallonie-spw-logo.jpg"
                  alt="Wallonie Service Public SPW"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

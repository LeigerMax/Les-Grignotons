import Button from '@/components/ui/Button'

export default function OfficialCertificate() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary/20">
          {/* Informations de certification */}
          <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🏅 Élevage Certifié & Reconnu
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="text-lg font-semibold text-primary">
                  Site reconnu par le Service Public Wallon: <span className="font-bold">WEB-048</span>
                </p>
                <p className="text-base">
                  Redirige également vers le <strong>Site SPW, portail bien-être animal</strong>
                </p>
                <p className="text-sm text-gray-600 italic">
                  14 août 1986 - Loi relative à la protection et au bien-être des animaux
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                <Button 
                  href="/certificat-spw.webp" 
                  variant="primary"
                  target="_blank"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                   Voir le certificat
                </Button>
                <Button 
                  href="https://www.wallonie.be/fr/demarches/obtenir-un-numero-dagrement-pour-un-elevage-danimaux" 
                  variant="outline"
                  target="_blank"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Portail SPW Bien-être animal
                </Button>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

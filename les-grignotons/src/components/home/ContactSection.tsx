export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📞 Contactez-nous
          </h2>
          <p className="text-xl text-gray-600">
            Nous sommes à votre écoute pour toute question ou demande d'adoption
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Carte de contact principale */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                <span className="text-3xl">👋</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  LAURE PIRARD
                </h3>
                <p className="text-gray-600">Éleveuse passionnée</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* GSM */}
              <a 
                href="tel:0476742193" 
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">GSM</div>
                  <div className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    0476/74.21.93
                  </div>
                </div>
              </a>

              {/* Téléphone fixe */}
              <a 
                href="tel:010843017" 
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Téléphone</div>
                  <div className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    010/84.30.17
                  </div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:pirard.laure@skynet.be" 
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Email</div>
                  <div className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors break-all">
                    pirard.laure@skynet.be
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Carte vétérinaire référent */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl shadow-xl p-8 border-2 border-accent/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-earth rounded-full flex items-center justify-center">
                <span className="text-3xl">🩺</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Vétérinaire référent
                </h3>
                <p className="text-gray-600 text-sm">Pour la santé de nos animaux</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/60 rounded-xl p-6">
                <div className="text-lg font-bold text-gray-900 mb-2">
                  Docteur Jean-Marc DEPUYDT
                </div>
                <div className="flex items-center gap-2 text-gray-700 mb-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Jodoigne</span>
                </div>
                <a 
                  href="tel:010225878" 
                  className="flex items-center gap-3 text-accent hover:text-earth transition-colors font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  010/22.58.78
                </a>
              </div>

              <div className="bg-white/40 rounded-lg p-4 text-sm text-gray-700">
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Tous nos animaux bénéficient d'un suivi vétérinaire régulier pour garantir leur santé et leur bien-être.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note additionnelle */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <p className="text-gray-700 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                N'hésitez pas à nous appeler ou à nous écrire pour toute question sur l'adoption ou les soins de nos animaux
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

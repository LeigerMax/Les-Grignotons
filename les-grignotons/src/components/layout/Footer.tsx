import Link from 'next/link'
import CertificateModal from './CertificateModal'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Les Grignotons</h3>
            <p className="text-sm text-gray-300">
              Élevage familial de lapins et cobayes, avec passion et respect du bien-être animal.
            </p>
            <div className="flex justify-center items-center mb-2">
            <CertificateModal />
          </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/adoption" className="text-gray-300 hover:text-primary transition">
                  Animaux à l'adoption
                </Link>
              </li>
              <li>
                <Link href="/favoris" className="text-gray-300 hover:text-primary transition">
                  Mes Favoris
                </Link>
              </li>
              <li>
                <Link href="/adoptants" className="text-gray-300 hover:text-primary transition">
                  Conseils aux adoptants
                </Link>
              </li>
              <li>
                <Link href="/temoignages" className="text-gray-300 hover:text-primary transition">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 pirard.laure@skynet.be</li>
              <li>📞 GSM 0476/74.21.93</li>
              <li>📍 Belgique, Brabant Wallon</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <Link href="/mentions-legales" className="hover:text-primary transition">
              Mentions légales
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/politique-de-confidentialite" className="hover:text-primary transition">
              Politique de confidentialité
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Les Grignotons. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <main>
      <Section className="bg-gradient-to-br from-primary/10 to-accent/10 min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* Illustration 404 */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-primary/20 select-none">404</div>
          </div>

          {/* Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page introuvable
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
            Nos petits grignotons ont peut-être grignoté cette page ! 🐰
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              Retour à l'accueil
            </Button>
            <Button href="/adoption" variant="outline">
              Voir les animaux
            </Button>
            <Button href="/conseils" variant="outline">
              Lire nos conseils
            </Button>
          </div>

          {/* Liens supplémentaires */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-600 mb-4">
              Vous cherchez quelque chose en particulier ?
            </p>
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/categories" className="text-primary hover:underline">
                Catégories
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/temoignages" className="text-primary hover:underline">
                Témoignages
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/contact" className="text-primary hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </Section>
    </main>
  )
}

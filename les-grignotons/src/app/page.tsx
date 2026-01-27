import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import AnimalCard from '@/components/animals/AnimalCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import HeroSection from '@/components/home/HeroSection'
import OfficialCertificate from '@/components/home/OfficialCertificate'
import ImageGallery from '@/components/home/ImageGallery'
import ContactSection from '@/components/home/ContactSection'
import { getAvailableAnimals, getTestimonials, getStats } from '@/lib/sanity/queries'
import { OrganizationSchema } from '@/components/seo/JsonLd'

export const revalidate = 60 // Revalider toutes les 60 secondes

export default async function HomePage() {
  // Récupération des données
  const [animals, testimonials, stats] = await Promise.all([
    getAvailableAnimals(),
    getTestimonials(3),
    getStats()
  ])

  // Limiter à 6 animaux sur la page d'accueil
  const featuredAnimals = animals.slice(0, 6)

  return (
    <main>
      {/* Schema.org pour l'organisation */}
      <OrganizationSchema />
      
      {/* Hero Section avec parallax */}
      <HeroSection />

      {/* Certificat officiel SPW */}
      <OfficialCertificate />

      {/* Statistiques */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Les Grignotons en chiffres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stats.totalAnimals}</div>
              <div className="text-gray-600 font-medium">Animaux</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stats.availableAnimals}</div>
              <div className="text-gray-800 font-semibold">Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stats.adoptedAnimals}</div>
              <div className="text-gray-800 font-semibold">Adoptés</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stats.testimonials}</div>
              <div className="text-gray-800 font-semibold">Témoignages</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Animaux à l'adoption */}
      <Section
        title="Nos compagnons à l'adoption"
        subtitle="Découvrez nos adorables lapins et cobayes qui attendent une famille aimante"
        className="bg-secondary"
      >
        {featuredAnimals.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAnimals.map((animal) => (
                <AnimalCard key={animal._id} animal={animal} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button href="/adoption" variant="primary">
                Voir tous les animaux
              </Button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600">
            Aucun animal disponible pour le moment. Revenez bientôt !
          </p>
        )}
      </Section>

      {/* Valeurs & Engagement */}
      <Section
        title="Notre engagement"
        subtitle="Un élevage responsable et transparent"
        className="bg-beige"
      >
        {/* Avertissement légal */}
        <div className="mb-12 p-6 bg-white rounded-lg shadow-lg border-l-4 border-primary">
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-4xl">⚠️</div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Information importante</h3>
              <p className="text-gray-700 mb-3">
                <strong>Un animal n'est pas un jouet.</strong> L'achat ou l'adoption d'un animal se fait en pleine conscience 
                des responsabilités qui incombent à son nouveau propriétaire. L'abandon d'un animal constitue une infraction 
                susceptible de poursuites pénales ou administratives.
              </p>
              <p className="text-gray-700">
                Pour toute adoption, tous les conseils pour accueillir votre nouveau compagnon se trouvent dans la rubrique 
                <Button href="/conseils" variant="outline" className="inline-flex mx-2 px-4 py-1 text-sm">
                   Conseils & Guides
                </Button>
              </p>
            </div>
          </div>
        </div> 

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bien-être animal</h3>
            <p className="text-gray-700">
              Nos animaux sont élevés avec amour dans un environnement sain et spacieux.
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl mb-4">🏥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Suivi vétérinaire</h3>
            <p className="text-gray-700">
              Tous nos animaux sont suivis régulièrement par un vétérinaire NAC.
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl mb-4">🌟</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Accompagnement</h3>
            <p className="text-gray-700">
              Nous vous conseillons avant et après l'adoption pour une intégration réussie.
            </p>
          </div>
        </div>
      </Section>

      {/* Galerie d'images avec parallax */}
      <ImageGallery />

      {/* Témoignages */}
      {testimonials.length > 0 && (
        <Section
          title="Ce que disent nos adoptants"
          subtitle="Des familles heureuses et des animaux épanouis"
          className="bg-primary/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial._id} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/temoignages" variant="outline">
              Voir tous les témoignages
            </Button>
          </div>
        </Section>
      )}

      {/* Section Contact */}
      <ContactSection />

      {/* CTA Final */}
      <Section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Prêt à adopter ?
          </h2>
          <p className="text-lg mb-8 text-white/95">
            Contactez-nous pour plus d'informations ou pour organiser une visite.
            Nous serons ravis de vous aider à trouver votre compagnon idéal !
          </p>
          <Button 
            href="/contact" 
            variant="primary" 
            className="bg-primary text-primary hover:bg-accent-light font-bold shadow-xl hover:scale-105 transition-transform"
          >
            📧 Nous contacter maintenant
          </Button>
        </div>
      </Section>
    </main>
  )
}

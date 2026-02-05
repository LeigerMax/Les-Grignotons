import dynamic from 'next/dynamic'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import AnimalCard from '@/components/animals/AnimalCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import AnimatedHero from '@/components/home/AnimatedHero'
import OfficialCertificate from '@/components/home/OfficialCertificate'
import { getAvailableAnimals, getTestimonials, getStats } from '@/lib/sanity/queries'
import { OrganizationSchema } from '@/components/seo/JsonLd'
import AnimalWarning from '@/components/ui/AnimalWarning'



const ContactSection = dynamic(() => import('@/components/home/ContactSection'), {
  loading: () => <div className="py-20 bg-gradient-to-br from-primary/5 to-white"><div className="max-w-7xl mx-auto px-4 text-center"><p className="text-gray-500">Chargement des informations de contact...</p></div></div>
})




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
      
      {/* Hero animé avec logo et image */}
      <AnimatedHero />

      {/* Certificat officiel SPW */}
      <OfficialCertificate />

      {/* Statistiques */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Les Grignotons en chiffres
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stats.totalAnimals}</div>
              <div className="text-gray-600 font-medium">Animaux</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stats.availableAnimals}</div>
              <div className="text-gray-800 font-semibold">Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-800 font-semibold">Animaux ont trouvé une nouvelle famille</div>
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
      {/* Avertissement important */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <AnimalWarning />
        </div>
      </Section>
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
                  <Button href="/conseils" variant="outline" className="inline-flex mx-2 px-4 py-1 text-sm">
                   Conseils & Guides
                </Button>
          </div>
        </div>
      </Section>



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

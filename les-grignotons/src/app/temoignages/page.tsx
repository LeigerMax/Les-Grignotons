import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import TestimonialCard from '@/components/ui/TestimonialCard'
import Button from '@/components/ui/Button'
import { getTestimonials } from '@/lib/sanity/queries'
import { getPageUrl, SITE_CONFIG } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Témoignages',
  description: 'Découvrez les avis de nos adoptants heureux. Des familles et des animaux épanouis.',
  openGraph: {
    title: 'Témoignages - Les Grignotons',
    description: 'Découvrez les avis de nos adoptants heureux. Des familles et des animaux épanouis.',
    url: getPageUrl('temoignages'),
    images: [SITE_CONFIG.defaultImages.og],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Témoignages - Les Grignotons',
    description: 'Découvrez les avis de nos adoptants heureux.',
  },
  alternates: {
    canonical: getPageUrl('temoignages'),
  },
}



export default async function TestimonialsPage() {
  const testimonials = await getTestimonials(20)

  return (
    <main>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Témoignages
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez ce que nos adoptants pensent de nos compagnons et de notre accompagnement.
            Chaque adoption est une belle histoire !
          </p>
        </div>
      </Section>

      {/* Témoignages */}
      <Section className="bg-white">
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial._id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Aucun témoignage pour le moment. Soyez le premier à partager votre expérience !
          </p>
        )}
      </Section>

      {/* CTA */}
      <Section className="bg-primary/5">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Vous avez adopté chez nous ?
          </h2>
          <p className="text-gray-700 mb-6">
            Partagez votre expérience et aidez d'autres familles à sauter le pas !
          </p>
          <Button href="/contact" variant="primary">
            Envoyer votre témoignage
          </Button>
        </div>
      </Section>
    </main>
  )
}

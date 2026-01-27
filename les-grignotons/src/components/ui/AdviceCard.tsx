import Link from 'next/link'
import Image from 'next/image'
import { Advice } from '@/types/sanity'
import { getOptimizedImageUrl } from '@/lib/sanity/client'

interface AdviceCardProps {
  advice: Advice
}

const categoryLabels = {
  preparation: '🏠 Préparation',
  alimentation: '🥕 Alimentation',
  sante: '🏥 Santé',
  activites: '🎾 Activités',
  adoption: '❤️ Adoption'
}

export default function AdviceCard({ advice }: AdviceCardProps) {
  const imageUrl = advice.coverImage?.asset
    ? getOptimizedImageUrl(advice.coverImage, 600, 400)
    : '/placeholder-advice.jpg'

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <Image
          src={imageUrl}
          alt={advice.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenu */}
      <div className="p-5">
        {/* Catégorie */}
        <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">
          {categoryLabels[advice.category]}
        </span>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {advice.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {advice.excerpt}
        </p>

        <Link
          href={`/conseils/${advice.slug.current}`}
          className="text-primary font-semibold hover:text-primary/80 transition inline-flex items-center"
        >
          Lire la suite
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

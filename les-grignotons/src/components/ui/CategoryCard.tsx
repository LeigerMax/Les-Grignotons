import Link from 'next/link'
import Image from 'next/image'
import { Category } from '@/types/sanity'
import { getOptimizedImageUrl } from '@/lib/sanity/client'

interface CategoryCardProps {
  category: Category & { animalCount?: number }
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const imageUrl = category.image?.asset?.url 
    ? getOptimizedImageUrl(category.image.asset.url, 600, 400)
    : '/placeholder-category.jpg'

  return (
    <Link 
      href={`/categories/${category.slug.current}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-secondary">
        <Image
          src={imageUrl}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {category.description}
        </p>

        {/* Compteur d'animaux */}
        {category.animalCount !== undefined && (
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-semibold">{category.animalCount}</span>
            <span className="ml-1">
              {category.animalCount === 0 
                ? 'animal' 
                : category.animalCount === 1 
                  ? 'animal' 
                  : 'animaux'}
            </span>
          </div>
        )}

        {/* Indicateur "Voir plus" */}
        <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
          <span>Découvrir</span>
          <span className="ml-1 group-hover:ml-2 transition-all">→</span>
        </div>
      </div>
    </Link>
  )
}

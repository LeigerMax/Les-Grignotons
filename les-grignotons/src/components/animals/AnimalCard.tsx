import Link from 'next/link'
import Image from 'next/image'
import { Animal } from '@/types/sanity'
import { getOptimizedImageUrl } from '@/lib/sanity/client'
import { calculateAge, getSexEmoji } from '@/lib/utils/age'
import FavoriteButton from '@/components/ui/FavoriteButton'

interface AnimalCardProps {
  animal: Animal
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  const imageUrl = animal.image?.asset 
    ? getOptimizedImageUrl(animal.image, 400, 400)
    : '/placeholder-animal.jpg'

  const age = animal.birthDate ? calculateAge(animal.birthDate) : 'Âge inconnu'
  const sexEmoji = animal.sex ? getSexEmoji(animal.sex) : ''

  // Badge de statut
  const statusStyles = {
    'Disponible': 'bg-green-100 text-green-800',
    'Réservé': 'bg-yellow-100 text-yellow-800',
    'Adopté': 'bg-red-100 text-red-800'
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 bg-gray-200">
        <Image
          src={imageUrl}
          alt={animal.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badge statut */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[animal.status]}`}>
            {animal.status}
          </span>
        </div>

        {/* Bouton favori */}
        <div className="absolute top-3 left-3">
          <FavoriteButton animalId={animal._id} size="md" />
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{animal.name}</h3>
        
        </div>

        <div className="space-y-1 text-sm text-gray-600 mb-3">
          {animal.category?.name && (
            <p>🏷️ <span className="font-medium">{animal.category.name}</span></p>
          )}
          <p>🎂 {age}</p>
          {sexEmoji && <p>{sexEmoji} {animal.sex === 'Male' ? 'Mâle' : 'Femelle'}</p>}
        </div>

        <p className="text-gray-700 text-sm line-clamp-3 mb-4">
          {animal.description}
        </p>

        {animal.status === 'Disponible' && (
          <Link
            href="/contact"
            className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Me contacter pour adopter
          </Link>
        )}
      </div>
    </div>
  )
}

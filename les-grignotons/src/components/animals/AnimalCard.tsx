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

  // Déterminer si c'est un reproducteur
  const isReproducteur = animal.animalType === 'reproducteur'

  // Vérifier si les parents ont du contenu
  const hasFather = animal.father && (
    (animal.father.type === 'reference' && animal.father.reference) ||
    (animal.father.type === 'manual' && animal.father.name)
  )
  const hasMother = animal.mother && (
    (animal.mother.type === 'reference' && animal.mother.reference) ||
    (animal.mother.type === 'manual' && animal.mother.name)
  )
  const hasParents = hasFather || hasMother

  // Badge de statut (uniquement pour les animaux à l'adoption)
  const statusStyles = {
    'Disponible': 'bg-green-100 text-green-800',
    'Réservé': 'bg-yellow-100 text-yellow-800',
    'Adopté': 'bg-red-100 text-red-800'
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-64 bg-gray-200 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={animal.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badge statut ou reproducteur */}
        <div className="absolute top-3 right-3">
          {isReproducteur ? (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">
              🏠 Reproducteur
            </span>
          ) : (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[animal.status]}`}>
              {animal.status}
            </span>
          )}
        </div>

        {/* Bouton favori */}
        <div className="absolute top-3 left-3">
          <FavoriteButton animalId={animal._id} size="md" />
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{animal.name}</h3>
        
        </div>

        <div className="space-y-1 text-sm text-gray-600 mb-3">
          {animal.category?.name && (
            <p>🏷️ <span className="font-medium">{animal.category.name}</span></p>
          )}
          {animal.birthDate && <p>🎂 {age}</p>}
          {sexEmoji && <p>{sexEmoji} {animal.sex === 'Male' ? 'Mâle' : 'Femelle'}</p>}
          
          {/* Affichage des parents - uniquement si au moins un parent est renseigné */}
          {hasParents && (
            <div className="pt-2 border-t border-gray-200 mt-2">
              <p className="font-semibold text-gray-700 mb-1">Parents :</p>
              {hasFather && (
                <div className="flex items-center gap-2">
                  <span>👨 Père :</span>
                  {animal.father.type === 'reference' && animal.father.reference ? (
                    <Link 
                      href={`/categories/${animal.father.reference.category.slug.current}#${animal.father.reference._id}`}
                      className="text-primary hover:underline font-medium"
                      title="Voir la fiche du père"
                    >
                      {animal.father.reference.name} 🔗
                    </Link>
                  ) : (
                    <span className="text-gray-600 italic">{animal.father.name}</span>
                  )}
                </div>
              )}
              {hasMother && (
                <div className="flex items-center gap-2">
                  <span>👩 Mère :</span>
                  {animal.mother.type === 'reference' && animal.mother.reference ? (
                    <Link 
                      href={`/categories/${animal.mother.reference.category.slug.current}#${animal.mother.reference._id}`}
                      className="text-primary hover:underline font-medium"
                      title="Voir la fiche de la mère"
                    >
                      {animal.mother.reference.name} 🔗
                    </Link>
                  ) : (
                    <span className="text-gray-600 italic">{animal.mother.name}</span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {animal.description && (
          <p className="text-gray-700 text-sm line-clamp-3 mb-4">
            {animal.description}
          </p>
        )}

        {/* Spacer pour pousser les boutons en bas */}
        <div className="flex-grow"></div>

        {/* Bouton adoption - uniquement pour les animaux disponibles ET non reproducteurs */}
        {!isReproducteur && animal.status === 'Disponible' && (
          <Link
            href="/contact"
            className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Me contacter pour adopter
          </Link>
        )}
        
        {/* Message pour les reproducteurs */}
        {isReproducteur && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-xs text-amber-800 text-center">
              <span className="font-semibold">Reproducteur :</span> Cet animal n'est pas disponible à l'adoption
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

import { Testimonial } from '@/types/sanity'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = Number(testimonial.rating) || 5
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* Étoiles */}
      <div className="flex gap-0.5 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <span 
            key={star} 
            className={star <= rating ? 'text-yellow-400 text-xl' : 'text-gray-300 text-xl'}
          >
            {star <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>

      {/* Contenu */}
      <p className="text-gray-700 italic mb-4 line-clamp-4">
        "{testimonial.content}"
      </p>

      {/* Auteur */}
      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{testimonial.authorName}</p>
        {testimonial.animalName && (
          <p className="text-sm text-gray-600">A adopté {testimonial.animalName}</p>
        )}
      </div>
    </div>
  )
}

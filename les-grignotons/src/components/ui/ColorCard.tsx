import Image from 'next/image'
import { HardcodedColor } from '@/lib/data/colors'

interface ColorCardProps {
  color: HardcodedColor
}

export default function ColorCard({ color }: ColorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 bg-gray-200">
        <Image
          src={color.image}
          alt={color.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
           {color.name}
        </h3>
      </div>
    </div>
  )
}

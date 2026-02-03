import { NextRequest, NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity/client'
import { Animal } from '@/types/sanity'

/**
 * API route pour récupérer les animaux favoris par leurs IDs
 */
export async function POST(request: NextRequest) {
  try {
    const { ids } = await request.json()

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'IDs invalides' }, { status: 400 })
    }

    // Limiter à 50 IDs maximum
    const limitedIds = ids.slice(0, 50)

    // Requête GROQ pour récupérer les animaux par IDs
    const query = `*[_type == "animal" && _id in $ids] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      name,
      species,
      category->{
        _id,
        name,
        slug
      },
      sex,
      birthDate,
      description,
      image {
        asset->{
          _id,
          url
        },
        hotspot
      },
      status
    }`

    const animals = await sanityClient.fetch<Animal[]>(query, { ids: limitedIds })

    return NextResponse.json(animals)
  } catch (error) {
    console.error('Erreur lors de la récupération des favoris:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

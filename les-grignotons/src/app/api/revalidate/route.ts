import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * API Route pour revalider le cache Next.js depuis Sanity Webhooks
 * 
 * Configuration dans Sanity :
 * 1. Aller dans Settings → API → Webhooks
 * 2. Créer un webhook avec l'URL : https://votre-domaine.com/api/revalidate
 * 3. Ajouter un secret (SANITY_REVALIDATE_SECRET)
 * 4. Sélectionner les événements : Create, Update, Delete
 */

export async function POST(request: NextRequest) {
  try {
    // Vérifier le secret pour la sécurité
    const secret = request.nextUrl.searchParams.get('secret')
    
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Parser le body du webhook
    const body = await request.json()
    const documentType = body._type

    // Revalider selon le type de document
    switch (documentType) {
      case 'animal':
        revalidatePath('/adoption', 'layout')
        revalidatePath('/favoris', 'page')
        revalidatePath('/', 'page')
        console.log('✅ Revalidated: animals')
        break
      
      case 'testimonial':
        revalidatePath('/temoignages', 'page')
        revalidatePath('/', 'page')
        console.log('✅ Revalidated: testimonials')
        break
      
      case 'category':
        revalidatePath('/adoption', 'layout')
        revalidatePath('/categories', 'layout')
        console.log('✅ Revalidated: categories')
        break
      
      case 'article':
        revalidatePath('/conseils', 'layout')
        console.log('✅ Revalidated: articles')
        break
      
      default:
        console.log(`⚠️ Unknown document type: ${documentType}`)
    }

    return NextResponse.json({ 
      revalidated: true, 
      type: documentType,
      now: Date.now() 
    })
  } catch (err) {
    console.error('❌ Error revalidating:', err)
    return NextResponse.json({ 
      message: 'Error revalidating', 
      error: err instanceof Error ? err.message : 'Unknown error' 
    }, { status: 500 })
  }
}

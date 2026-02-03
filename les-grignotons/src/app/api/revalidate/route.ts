import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // 1. Vérification du secret dans l'URL
    const secret = request.nextUrl.searchParams.get('secret')
    
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // 2. Parser le body en toute sécurité
    let body;
    try {
      body = await request.json()
    } catch (e) {
      return NextResponse.json({ message: 'Bad Request: No JSON Body' }, { status: 400 })
    }

    const documentType = body?._type

    if (!documentType) {
        return NextResponse.json({ message: 'No document type found in webhook body' }, { status: 400 })
    }

    console.log(`🔄 Revalidating type: ${documentType}`)

    // 3. Revalidation
    switch (documentType) {
      case 'animal':
        revalidatePath('/adoption', 'layout') // Layout revalide tout ce qu'il y a en dessous
        revalidatePath('/favoris')
        revalidatePath('/')
        break
      
      case 'testimonial':
        revalidatePath('/temoignages')
        revalidatePath('/')
        break
      
      case 'category':
        revalidatePath('/adoption', 'layout')
        revalidatePath('/categories', 'layout')
        break
      
      case 'article':
        revalidatePath('/conseils', 'layout')
        break
      
      default:
        // Optionnel : Revalider tout le site si le type est inconnu, ou ne rien faire
        console.log(`⚠️ Unhandled document type: ${documentType}`)
    }

    return NextResponse.json({ 
      revalidated: true, 
      type: documentType,
      now: Date.now() 
    })

  } catch (err) {
    console.error('❌ Error revalidating:', err)
    return NextResponse.json({ 
      message: 'Server Error', 
      error: err instanceof Error ? err.message : 'Unknown error' 
    }, { status: 500 })
  }
}
/**
 * Script d'importation des animaux depuis l'ancien site
 * Usage: node scripts/import-animals.js
 */

const sanityClient = require('@sanity/client')
const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')

// Configuration du client Sanity
const client = sanityClient.default({
  projectId: 'arbgz41i', // À REMPLACER
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skIa8lTekRYs5aahvZCtBRTjyrU5N35ZZVPQIDHA0vZJ40oEo5lSsqwZW9oD80saZ7sDfYljHLxCdhUxeeq6lErAbwksKBIIAziXpm38ljMVLoNGGk9mWdTW6YqW12s8tr8v9dLzxcF6W3nEwx2i1yjEddjOTWEbsR8OWlqPx5aRnjw5dSXw', // À REMPLACER avec un token avec droits d'écriture
  useCdn: false
})

// Données scrapées - tous reproducteurs, pas de parents, pas de date de naissance
const animals = [
    // Femelles
// Femelles
  {name: 'ATOMIC', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/1.jpeg', description: 'chamois havane et blanc', sex: 'Femelle'},
  {name: 'GINGER', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/2.jpg', description: 'bleu et blanc porteuse Loffel', sex: 'Femelle'},
  {name: 'BONBON', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/3.jpeg', description: 'bleu et blanc yb', sex: 'Femelle'},
  {name: 'CERISE', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/4.jpg', description: '', sex: 'Femelle'},
  {name: 'LOULOU', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/5.jpeg', description: 'Loutre noir', sex: 'Femelle'},
  {name: 'CHEWING GUM', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/6.jpeg', description: 'havane', sex: 'Femelle'},
  {name: 'BALZAMIC', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/7.jpg', description: 'rex havane', sex: 'Femelle'},
  {name: 'NUAGE', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/8.jpg', description: 'siamois feh liste bl yb', sex: 'Femelle'},
  {name: 'CITRONELLE', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/9.jpg', description: 'crème fine liste blanche', sex: 'Femelle'},
  {name: 'LILLY', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/10.jpg', description: 'chinchilla bleue', sex: 'Femelle'},
  {name: 'LIME', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/11.jpg', description: 'japonais bleu', sex: 'Femelle'},
  {name: 'TRICA', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/12.jpg', description: 'tricolore', sex: 'Femelle'},
  {name: 'JACUZI', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Femelle/13.jpg', description: 'bleu patte blanche pt loffel', sex: 'Femelle'},

  // Mâles
  {name: 'LIO', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Male/1.jpeg', description: 'lynx', sex: 'Male'},
  {name: 'LOFFO', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Male/2.jpg', description: 'bleu et blanc loffel', sex: 'Male'},
  {name: 'SNOEPJES', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Male/3.jpeg', description: 'havane et blanc yb', sex: 'Male'},
  {name: 'CHAMALO', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Male/4.jpg', description: 'chamois et blanc yb loffel', sex: 'Male'},
  {name: 'MICKEY', imageUrl: 'https://ik.imagekit.io/368zwku0l/extra-nain-couleur/Male/5.jpg', description: 'Loffel Havane et blanc', sex: 'Male'},
]

// Fonction pour télécharger une image
async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http
    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`))
        return
      }
      
      const chunks = []
      response.on('data', (chunk) => chunks.push(chunk))
      response.on('end', () => resolve(Buffer.concat(chunks)))
      response.on('error', reject)
    }).on('error', reject)
  })
}

// Fonction pour uploader une image dans Sanity
async function uploadImageToSanity(imageBuffer, filename) {
  try {
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: filename
    })
    return asset
  } catch (error) {
    console.error(`Erreur lors de l'upload de ${filename}:`, error.message)
    throw error
  }
}

// Fonction principale d'importation
async function importAnimals() {
  console.log('🚀 Début de l\'importation...')
  
  // 1. Récupérer l'ID de la catégorie "Extra nains de couleurs"
  console.log('📋 Recherche de la catégorie...')
  const categories = await client.fetch(
    `*[_type == "category" && name == "Extra nains de couleurs"][0]`
  )
  
  if (!categories) {
    console.error('❌ Catégorie "Extra nains de couleurs" introuvable!')
    console.log('Veuillez créer cette catégorie dans Sanity Studio d\'abord.')
    return
  }
  
  console.log(`✅ Catégorie trouvée: ${categories._id}`)
  
  // 2. Importer chaque animal
  let successCount = 0
  let errorCount = 0
  let noImageCount = 0
  const animalsWithoutImages = []
  
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i]
    console.log(`\n[${i + 1}/${animals.length}] Importation de ${animal.name}...`)
    
    try {
      let imageAsset = null
      
      // Tenter de télécharger l'image
      try {
        console.log('  📥 Téléchargement de l\'image...')
        const imageBuffer = await downloadImage(animal.imageUrl)
        
        // Upload dans Sanity
        console.log('  📤 Upload dans Sanity...')
        imageAsset = await uploadImageToSanity(
          imageBuffer,
          `${animal.name.toLowerCase().replace(/\s+/g, '-')}.jpg`
        )
      } catch (imageError) {
        console.log(`  ⚠️  Image non disponible (${imageError.message}) - création sans image`)
        noImageCount++
        animalsWithoutImages.push(animal.name)
      }
      
      // Créer le document animal (avec ou sans image)
      console.log('  📝 Création du document...')
      const docData = {
        _type: 'animal',
        name: animal.name,
        species: 'Lapin',
        sex: animal.sex,
        animalType: 'reproducteur',
        description: animal.description || undefined,
        category: {
          _type: 'reference',
          _ref: categories._id
        }
      }
      
      // Ajouter l'image seulement si elle existe
      if (imageAsset) {
        docData.image = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id
          }
        }
      }
      
      const doc = await client.create(docData)
      
      console.log(`  ✅ ${animal.name} créé avec succès (ID: ${doc._id})`)
      successCount++
      
      // Petite pause pour éviter de surcharger l'API
      await new Promise(resolve => setTimeout(resolve, 500))
      
    } catch (error) {
      console.error(`  ❌ Erreur lors de l'importation de ${animal.name}:`, error.message)
      errorCount++
    }
  }
  
  console.log('\n' + '='.repeat(50))
  console.log(`✅ Importation terminée!`)
  console.log(`   Réussis: ${successCount}`)
  console.log(`   Erreurs: ${errorCount}`)
  if (noImageCount > 0) {
    console.log(`   ⚠️  Sans image: ${noImageCount}`)
    console.log('\n📋 Animaux sans image (à ajouter manuellement dans Sanity Studio):')
    animalsWithoutImages.forEach(name => console.log(`   - ${name}`))
  }
  console.log('='.repeat(50))
}

// Lancer l'importation
importAnimals().catch(console.error)

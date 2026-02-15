import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Les Grignotons',

  projectId: 'arbgz41i',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            // Section Animaux
            S.listItem()
              .title('🐾 Animaux')
              .child(
                S.list()
                  .title('Animaux')
                  .items([
                    S.listItem()
                      .title('Tous les animaux')
                      .child(S.documentTypeList('animal').title('Tous les animaux')),
                    S.divider(),
                    S.listItem()
                      .title('🏠 Reproducteurs')
                      .child(
                        S.documentList()
                          .title('Reproducteurs')
                          .filter('_type == "animal" && animalType == "reproducteur"')
                          .defaultOrdering([{field: 'category.name', direction: 'asc'}, {field: 'name', direction: 'asc'}])
                      ),
                    S.listItem()
                      .title('❤️ À l\'adoption')
                      .child(
                        S.documentList()
                          .title('À l\'adoption')
                          .filter('_type == "animal" && animalType == "adoption"')
                          .defaultOrdering([{field: 'status', direction: 'asc'}, {field: 'name', direction: 'asc'}])
                      ),
                    S.divider(),
                    S.listItem()
                      .title('🐰 Lapins')
                      .child(
                        S.documentList()
                          .title('Lapins')
                          .filter('_type == "animal" && species == "Lapin"')
                          .defaultOrdering([{field: 'category.name', direction: 'asc'}, {field: 'name', direction: 'asc'}])
                      ),
                    S.listItem()
                      .title('🐹 Cobayes')
                      .child(
                        S.documentList()
                          .title('Cobayes')
                          .filter('_type == "animal" && species == "Cobaye"')
                          .defaultOrdering([{field: 'category.name', direction: 'asc'}, {field: 'name', direction: 'asc'}])
                      ),
                    S.divider(),
                    S.listItem()
                      .title('✅ Disponibles')
                      .child(
                        S.documentList()
                          .title('Disponibles')
                          .filter('_type == "animal" && status == "Disponible"')
                          .defaultOrdering([{field: 'name', direction: 'asc'}])
                      ),
                    S.listItem()
                      .title('⏳ Réservés')
                      .child(
                        S.documentList()
                          .title('Réservés')
                          .filter('_type == "animal" && status == "Réservé"')
                          .defaultOrdering([{field: 'name', direction: 'asc'}])
                      ),
                    S.listItem()
                      .title('💚 Adoptés')
                      .child(
                        S.documentList()
                          .title('Adoptés')
                          .filter('_type == "animal" && status == "Adopté"')
                          .defaultOrdering([{field: 'name', direction: 'asc'}])
                      ),
                  ])
              ),
            
            S.divider(),
            
            // Catégories
            S.listItem()
              .title('🏷️ Catégories')
              .schemaType('category')
              .child(S.documentTypeList('category').title('Catégories')),
            

            S.divider(),
            
            // Témoignages
            S.listItem()
              .title('💬 Témoignages')
              .schemaType('testimonial')
              .child(S.documentTypeList('testimonial').title('Témoignages')),
            
            // Articles
            S.listItem()
              .title('📚 Articles & Conseils')
              .schemaType('article')
              .child(S.documentTypeList('article').title('Articles & Conseils')),
          ])
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})

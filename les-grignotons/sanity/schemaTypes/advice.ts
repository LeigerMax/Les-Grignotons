import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'advice',
  title: 'Conseil',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: 'Ex: Comment préparer l\'arrivée d\'un lapin',
      validation: (Rule) => Rule.required().error('Le titre est obligatoire')
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      description: 'Cliquez sur "Générer" pour créer l\'URL automatiquement',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required().error('L\'URL est obligatoire')
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: '🏠 Préparation', value: 'preparation' },
          { title: '🥕 Alimentation', value: 'alimentation' },
          { title: '🏥 Santé', value: 'sante' },
          { title: '🎾 Activités', value: 'activites' },
          { title: '❤️ Adoption', value: 'adoption' }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Résumé',
      type: 'text',
      description: 'Court résumé (affiché dans la liste)',
      rows: 3,
      validation: (Rule) => Rule.required().max(200).error('Le résumé doit faire maximum 200 caractères')
    }),
    defineField({
      name: 'content',
      title: 'Contenu complet',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Le contenu détaillé de l\'article'
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage'
    }
  }
})

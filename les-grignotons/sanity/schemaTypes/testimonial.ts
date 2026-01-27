import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    defineField({
      name: 'authorName',
      title: 'Nom de l\'adoptant',
      type: 'string',
      description: 'Le prénom ou nom de la personne',
      validation: (Rule) => Rule.required().error('Le nom est obligatoire')
    }),
    defineField({
      name: 'animalName',
      title: 'Nom de l\'animal adopté',
      type: 'string',
      description: 'Quel animal a été adopté ?'
    }),
    defineField({
      name: 'content',
      title: 'Témoignage',
      type: 'text',
      description: 'Le message de l\'adoptant',
      rows: 5,
      validation: (Rule) => Rule.required().min(20).max(500).error('Le témoignage doit faire entre 20 et 500 caractères')
    }),
    defineField({
      name: 'rating',
      title: 'Note',
      type: 'number',
      description: 'Note sur 5',
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
      initialValue: 5
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'isVisible',
      title: 'Afficher sur le site',
      type: 'boolean',
      description: 'Cocher pour publier ce témoignage',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'authorName',
      subtitle: 'animalName',
      rating: 'rating'
    },
    prepare({ title, subtitle, rating }) {
      return {
        title: `${title} ${subtitle ? `- ${subtitle}` : ''}`,
        subtitle: `${'⭐'.repeat(rating || 0)}`
      }
    }
  }
})

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'category',
  title: '🏷️ Catégories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom de la catégorie',
      type: 'string',
      validation: (Rule) => Rule.required().error('Le nom est obligatoire'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Génère automatiquement l\'URL de la page (ex: beliers-nains-neerlandais)',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Le slug est obligatoire'),
    }),
    defineField({
      name: 'type',
      title: 'Type d\'animal',
      type: 'string',
      description: 'Sélectionnez le type d\'animal pour cette catégorie',
      options: {
        list: [
          { title: 'Lapin', value: 'lapin' },
          { title: 'Cobaye', value: 'cobaye' },
          { title: 'Autre animal', value: 'autre' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Le type d\'animal est obligatoire'),
      initialValue: 'lapin',
    }),
    defineField({
      name: 'hidden',
      title: 'Masquer cette catégorie',
      type: 'boolean',
      description: '⚠️ Si activé, cette catégorie sera invisible sur le site et tous les animaux associés seront également cachés',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      description: 'Texte descriptif affiché en haut de la page catégorie (particularités, comportement, soins...)',
      validation: (Rule) => Rule.required().min(50).error('Minimum 50 caractères'),
    }),
    defineField({
      name: 'image',
      title: 'Image représentative',
      type: 'image',
      description: 'Photo qui représente cette catégorie (optionnel)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Plus le nombre est petit, plus la catégorie apparaît en premier (optionnel)',
      validation: (Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image',
      type: 'type',
      hidden: 'hidden',
    },
    prepare({ title, subtitle, media, type, hidden }) {
      const typeLabel = type === 'lapin' ? '🐰 Lapin' : type === 'cobaye' ? '🐹 Cobaye' : '🐾 Autre'
      const hiddenLabel = hidden ? '🚫 MASQUÉ' : ''
      return {
        title: `${hiddenLabel} ${title}`.trim(),
        subtitle: `${typeLabel} - ${subtitle ? subtitle.substring(0, 50) + '...' : ''}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Nom (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Type d\'animal',
      name: 'typeAsc',
      by: [{ field: 'type', direction: 'asc' }],
    },
  ],
})

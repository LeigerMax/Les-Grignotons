import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'animal',
  title: 'Animal à l\'adoption',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      description: 'Le prénom de l\'animal',
      validation: (Rule) => Rule.required().error('Le nom est obligatoire')
    }),
    defineField({
      name: 'species',
      title: 'Espèce',
      type: 'string',
      description: 'Choisir Lapin ou Cobaye',
      options: {
        list: [
          { title: 'Lapin', value: 'Lapin' },
          { title: 'Cobaye', value: 'Cobaye' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required().error('L\'espèce est obligatoire')
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Sélectionnez la catégorie/race de l\'animal',
      validation: (Rule) => Rule.required().error('La catégorie est obligatoire')
    }),
    defineField({
      name: 'sex',
      title: 'Sexe',
      type: 'string',
      description: 'Sexe de l\'animal',
      options: {
        list: [
          { title: '♂️ Mâle', value: 'Male' },
          { title: '♀️ Femelle', value: 'Femelle' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required().error('Le sexe est obligatoire')
    }),
    defineField({
      name: 'birthDate',
      title: 'Date de naissance',
      type: 'date',
      description: 'Date de naissance de l\'animal (l\'âge sera calculé automatiquement)',
      validation: (Rule) => Rule.required().max(new Date().toISOString().split('T')[0]).error('La date de naissance est obligatoire et ne peut pas être dans le futur')
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Décrivez le caractère, les particularités de l\'animal',
      rows: 5,
      validation: (Rule) => Rule.required().min(20).max(500).error('La description doit faire entre 20 et 500 caractères')
    }),
    defineField({
      name: 'image',
      title: 'Photo principale',
      type: 'image',
      description: 'Photo de l\'animal (format carré recommandé)',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required().error('Une photo est obligatoire')
    }),
    defineField({
      name: 'status',
      title: 'Statut',
      type: 'string',
      description: 'Disponibilité actuelle de l\'animal',
      options: {
        list: [
          { title: '✅ Disponible', value: 'Disponible' },
          { title: '⏳ Réservé', value: 'Réservé' },
          { title: '❤️ Adopté', value: 'Adopté' }
        ],
        layout: 'radio'
      },
      initialValue: 'Disponible',
      validation: (Rule) => Rule.required().error('Le statut est obligatoire')
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'species',
      media: 'image',
      status: 'status'
    },
    prepare({ title, subtitle, media, status }) {
      return {
        title: `${title} (${status})`,
        subtitle: subtitle,
        media: media
      }
    }
  }
})

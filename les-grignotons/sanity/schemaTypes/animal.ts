import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'animal',
  title: 'Animal',
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
      description: 'Choisir Lapin, Cobaye ou Autre',
      options: {
        list: [
          { title: 'Lapin', value: 'Lapin' },
          { title: 'Cobaye', value: 'Cobaye' },
          { title: 'Autre', value: 'Autre' }
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
      name: 'animalType',
      title: 'Type d\'animal',
      type: 'string',
      description: 'Définir si l\'animal est reproducteur ou à adopter',
      options: {
        list: [
          { title: '🏠 Reproducteur', value: 'reproducteur' },
          { title: '❤️ À adopter', value: 'adoption' }
        ],
        layout: 'radio'
      },
      initialValue: 'adoption',
      validation: (Rule) => Rule.required().error('Le type d\'animal est obligatoire')
    }),
    defineField({
      name: 'birthDate',
      title: 'Date de naissance',
      type: 'date',
      description: 'Date de naissance de l\'animal (optionnel, l\'âge sera calculé automatiquement si renseigné)',
      validation: (Rule) => Rule.max(new Date().toISOString().split('T')[0]).error('La date de naissance ne peut pas être dans le futur')
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Décrivez le caractère, les particularités de l\'animal (optionnel)',
      rows: 8
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
      title: 'Statut d\'adoption',
      type: 'string',
      description: 'Disponibilité actuelle de l\'animal (uniquement pour les animaux à adopter)',
      options: {
        list: [
          { title: '✅ Disponible', value: 'Disponible' },
          { title: '⏳ Réservé', value: 'Réservé' },
          { title: '❤️ Adopté', value: 'Adopté' }
        ],
        layout: 'radio'
      },
      initialValue: 'Disponible',
      validation: (Rule) => Rule.required().error('Le statut est obligatoire'),
      hidden: ({ document }) => document?.animalType === 'reproducteur'
    }),
    defineField({
      name: 'father',
      title: 'Père',
      type: 'object',
      description: 'Informations sur le père (optionnel)',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'type',
          title: 'Type de référence',
          type: 'string',
          options: {
            list: [
              { title: 'Sélectionner un animal existant', value: 'reference' },
              { title: 'Saisir le nom manuellement', value: 'manual' }
            ],
            layout: 'radio'
          },
          initialValue: 'reference'
        },
        {
          name: 'reference',
          title: 'Animal existant',
          type: 'reference',
          to: [{ type: 'animal' }],
          options: {
            filter: 'sex == "Male"'
          },
          hidden: ({ parent }) => parent?.type !== 'reference'
        },
        {
          name: 'name',
          title: 'Nom du père',
          type: 'string',
          hidden: ({ parent }) => parent?.type !== 'manual'
        }
      ]
    }),
    defineField({
      name: 'mother',
      title: 'Mère',
      type: 'object',
      description: 'Informations sur la mère (optionnel)',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'type',
          title: 'Type de référence',
          type: 'string',
          options: {
            list: [
              { title: 'Sélectionner un animal existant', value: 'reference' },
              { title: 'Saisir le nom manuellement', value: 'manual' }
            ],
            layout: 'radio'
          },
          initialValue: 'reference'
        },
        {
          name: 'reference',
          title: 'Animal existant',
          type: 'reference',
          to: [{ type: 'animal' }],
          options: {
            filter: 'sex == "Femelle"'
          },
          hidden: ({ parent }) => parent?.type !== 'reference'
        },
        {
          name: 'name',
          title: 'Nom de la mère',
          type: 'string',
          hidden: ({ parent }) => parent?.type !== 'manual'
        }
      ]
    })
  ],
  orderings: [
    {
      title: 'Par catégorie A-Z',
      name: 'categoryAsc',
      by: [
        { field: 'category.name', direction: 'asc' },
        { field: 'name', direction: 'asc' }
      ]
    },
    {
      title: 'Par espèce et catégorie',
      name: 'speciesCategoryAsc',
      by: [
        { field: 'species', direction: 'asc' },
        { field: 'category.name', direction: 'asc' },
        { field: 'name', direction: 'asc' }
      ]
    },
    {
      title: 'Par type (Reproducteur/Adoption)',
      name: 'animalTypeAsc',
      by: [
        { field: 'animalType', direction: 'asc' },
        { field: 'category.name', direction: 'asc' },
        { field: 'name', direction: 'asc' }
      ]
    },
    {
      title: 'Par statut d\'adoption',
      name: 'statusAsc',
      by: [
        { field: 'status', direction: 'asc' },
        { field: 'name', direction: 'asc' }
      ]
    },
    {
      title: 'Par sexe',
      name: 'sexAsc',
      by: [
        { field: 'sex', direction: 'asc' },
        { field: 'name', direction: 'asc' }
      ]
    },
    {
      title: 'Plus récent d\'abord',
      name: 'dateDesc',
      by: [{ field: '_createdAt', direction: 'desc' }]
    },
    {
      title: 'Plus ancien d\'abord',
      name: 'dateAsc',
      by: [{ field: '_createdAt', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'species',
      media: 'image',
      status: 'status',
      animalType: 'animalType'
    },
    prepare({ title, subtitle, media, status, animalType }) {
      const typeIcon = animalType === 'reproducteur' ? '🏠' : '❤️'
      const statusText = animalType === 'reproducteur' ? 'Reproducteur' : status
      return {
        title: `${typeIcon} ${title} (${statusText})`,
        subtitle: subtitle,
        media: media
      }
    }
  }
})

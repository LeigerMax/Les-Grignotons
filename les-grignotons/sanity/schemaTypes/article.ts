import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre principal',
      type: 'string',
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
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Résumé',
      type: 'text',
      description: 'Court résumé de l\'article',
      rows: 3,
      validation: (Rule) => Rule.max(250)
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [
        { 
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Titre H2', value: 'h2'},
            {title: 'Titre H3', value: 'h3'},
            {title: 'Titre H4', value: 'h4'},
            {title: 'Citation', value: 'blockquote'}
          ],
          lists: [
            {title: 'Liste à puces', value: 'bullet'},
            {title: 'Liste numérotée', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Gras', value: 'strong'},
              {title: 'Italique', value: 'em'},
              {title: 'Souligné', value: 'underline'}
            ]
          }
        },
        {
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif',
              description: 'Important pour l\'accessibilité et le SEO'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Légende'
            }
          ]
        },
        {
          type: 'object',
          name: 'table',
          title: 'Tableau',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Titre du tableau'
            },
            {
              name: 'rows',
              type: 'array',
              title: 'Lignes',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'cells',
                      type: 'array',
                      title: 'Cellules',
                      of: [{type: 'string'}]
                    }
                  ],
                  preview: {
                    select: {
                      cells: 'cells'
                    },
                    prepare({cells}) {
                      return {
                        title: cells?.join(' | ') || 'Ligne vide'
                      }
                    }
                  }
                }
              ]
            },
            {
              name: 'hasHeader',
              type: 'boolean',
              title: 'La première ligne est un en-tête',
              initialValue: true
            }
          ],
          preview: {
            select: {
              title: 'title',
              rows: 'rows'
            },
            prepare({title, rows}) {
              return {
                title: title || 'Tableau',
                subtitle: `${rows?.length || 0} lignes`
              }
            }
          }
        }
      ]
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: '🐰 Race et couleur', value: 'race' },
          { title: '❤️ Conseils aux adoptants', value: 'adoption' },
          { title: '🏠 Préparation', value: 'preparation' },
          { title: '🥕 Alimentation', value: 'alimentation' },
          { title: '🏥 Santé', value: 'sante' },
          { title: '🎾 Activités', value: 'activites' }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'isVisible',
      title: 'Visible sur le site',
      type: 'boolean',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage'
    }
  },
  orderings: [
    {
      title: 'Date de publication, plus récent',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    }
  ]
})

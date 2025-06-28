import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Catégorie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'color',
      title: 'Couleur',
      type: 'string',
      options: {
        list: [
          {title: 'Bleu', value: 'blue'},
          {title: 'Vert', value: 'green'},
          {title: 'Rouge', value: 'red'},
          {title: 'Jaune', value: 'yellow'},
          {title: 'Violet', value: 'purple'},
          {title: 'Rose', value: 'pink'},
        ],
      },
      initialValue: 'blue',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
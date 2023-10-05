import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'klodin',
  title: 'Klodin',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),

    defineField({
      title: 'Stock status',
      name: 'stockstatus',
      type: 'string',
      options: {
        list: [
          { title: 'In stock', value: 'instock' },
          { title: 'Out of stock', value: 'outofstock' },
        ],
      },

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
    }),
    defineField({
      name: 'mainImage',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
  initialValue: {
    size: "XXL,XL,L,M,S"
  }
});

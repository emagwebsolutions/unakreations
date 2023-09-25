import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Contacts',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'mobile1',
      title: 'Mobile 1',
      type: 'string',
    }),
    defineField({
      name: 'mobile2',
      title: 'Mobile 2',
      type: 'string',
    }),
    defineField({
      name: 'gpsaddress',
      title: 'GPS ADDRESS',
      type: 'string',
    }),

    defineField({
      name: 'officelocation',
      title: 'Office Location',
      type: 'string',
    }),

    defineField({
      name: 'googlemap',
      title: 'Google Map',
      type: 'string',
    }),

    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),

    defineField({
      name: 'twitter',
      title: 'Twitter URL',
      type: 'string',
    }),

    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'string',
    }),

  ],
})

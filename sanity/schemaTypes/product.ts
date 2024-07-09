export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'slug',
      options: {
        source: 'name',
        disableArrayWarning: true,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      title: 'Stripe Product Id',
      name: 'stripeProductId',
      type: 'string',
    },
    {
      name: 'image',
      type: 'array',
      title: 'Image',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
  ],
}

const schema={
  name: 'resource',
  title: 'Resource',
  type: 'document',
  field:[ 
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      require,
      validation: (Rule:any) => Rule.required()
    },

    {
      name:'slug',
      title: 'Slug',
      type: 'slug',
      Option:{source:'title'}
    },

    {
      name:'downloadlink',
      title: 'Download Link',
      type: 'url',
      Validations:(Rule:any) => Rule.required()
    },

    {
      name:'views',
      title: 'Views',
      type:'number',
      initalValue: 0,
    },

    {
      name:'poster',
      title:'Poster',
      type:'image',
      validation:(Rule:any) => Rule.required(),
      Options: {
      hotspot:true,
      }
    },

    {
      name:'category',
      title:'Category',
      type:'string',
      validation:(Rule:any) => Rule.required(),
      Options: {
        list:['FrontEnd', 'Backend', 'FullStack', 'Others']
      }

    }

  ]

}
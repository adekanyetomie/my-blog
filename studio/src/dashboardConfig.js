export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604a197bde3cefc6c7097526',
                  title: 'Sanity Studio',
                  name: 'my-blog-studio-bajniqg4',
                  apiId: 'de3ad67b-ad7a-4ce2-95df-d5390238096b'
                },
                {
                  buildHookId: '604a197c43fd6a9a2ec22c4a',
                  title: 'Blog Website',
                  name: 'my-blog-web-o9euz928',
                  apiId: 'a838f389-d913-4e11-9fa0-1302da2cf2d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adekanyetomie/my-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://my-blog-web-o9euz928.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

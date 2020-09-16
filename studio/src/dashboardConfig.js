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
                  buildHookId: '5f620e14a289193f4cb86559',
                  title: 'Sanity Studio',
                  name: 'itp-blog-studio',
                  apiId: 'e3e28135-a753-49a8-a2ea-894af41c9c20'
                },
                {
                  buildHookId: '5f620e14e35d983901b80101',
                  title: 'Blog Website',
                  name: 'itp-blog',
                  apiId: '264a13f7-8547-41a2-be33-cfb983c6054b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vrimages/itp-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://itp-blog.netlify.app', category: 'apps' }
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

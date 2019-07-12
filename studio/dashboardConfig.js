export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d284fa5cd5da78187bab11b',
                  title: 'Sanity Studio',
                  name: 'dos-gc-jamstack-studio',
                  apiId: '2d6ab8c1-b8df-40b5-be61-ac07b7d2722c'
                },
                {
                  buildHookId: '5d284fa51e2fe7aedbdf2969',
                  title: 'Landing pages Website',
                  name: 'dos-gc-jamstack',
                  apiId: 'af10211e-5250-4bd1-b8c2-0788d18615cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elektronikasa/dos-gc-jamstack',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dos-gc-jamstack.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

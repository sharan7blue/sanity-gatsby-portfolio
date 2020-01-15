export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e1f161ccd86a31ed30a71d9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kgc9cdhp',
                  apiId: '0b3d50ba-67e0-4dbc-bffc-cd994a79ebe5'
                },
                {
                  buildHookId: '5e1f161c8225f33b2a6f3ce7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-u1ihcs48',
                  apiId: 'f4618eb3-8571-400a-ba16-bbe9c637a219'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sharan7blue/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-u1ihcs48.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

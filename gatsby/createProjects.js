const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsProject(sort: { fields: [position], order: ASC }) {
          edges {
            node {
              slug
            }
          }
        }
      }   
    `).then(result => {
      // result.data.allDatoCmsProject.edges.map(edge => {
      //   createPage({
      //     path: `about/${edge.node.slug}`,
      //     component: path.resolve(`./src/templates/project.js`),
      //     context: {
      //       slug: edge.node.slug,
      //     },
      //   })
      // })
      const articleData = result.data.allDatoCmsProject.edges;
      const articleTemplate = path.resolve(`./src/templates/project.js`);

      articleData.map((edge, index) => {
        const prev = index < articleData.length - 1 ? articleData[index + 1] : null;

        createPage({
          path: `about/${edge.node.slug}`,
          component: articleTemplate,
          context: { 
            slug: edge.node.slug,
            prev
          },
        })
      })
      resolve()
    })
  })
}
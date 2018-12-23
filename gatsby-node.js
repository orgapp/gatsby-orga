const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/post.js`)
    graphql(
      `
        {
          allOrgContent(
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }

      // Create blog posts pages.
      result.data.allOrgContent.edges.forEach(edge => {
        createPage({
          path: edge.node.fields.slug, // required
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.fields.slug,
          },
        })
      })

      resolve()
    })
  })
}

// Add custom url pathname for blog posts.
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `File`) {
//     const folder = node.relativeDirectory
//     const fileName = path.parse(node.absolutePath).name
//     const slug = `/${path.join(folder, fileName)}/`
//     createNodeField({ node, name: `slug`, value: slug })
//   } else if (
//     node.internal.type === `Orga` &&
//       typeof node.slug === `undefined`
//   ) {
//     const fileNode = getNode(node.parent)
//     createNodeField({
//       node,
//       name: `slug`,
//       value: fileNode.fields.slug,
//     })

//   }
// }

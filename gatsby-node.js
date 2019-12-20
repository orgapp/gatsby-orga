const path = require(`path`)

const PostTemplate = require.resolve(`./src/templates/post`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const documents = await graphql(`
  {
    allOrgContent {
      edges {
        node {
          id
          fields { slug }
        }
      }
    }
  }`)

  if (documents.errors) {
    reporter.panic(documents.errors)
  }

  documents.data.allOrgContent.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: PostTemplate,
      context: {
        id: node.id,
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {

  if (node.internal.type !== `OrgContent`) return

  const { createNodeField } = actions
  const { category, export_file_name } = node.metadata
  const paths = [
    '/',
    category,
    export_file_name,
  ].filter(lpath => lpath)
  const slug = path.posix.join(...paths)
  createNodeField({
    node,
    name: `slug`,
    value: slug,
  })
}

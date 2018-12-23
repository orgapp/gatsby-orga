import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allOrgContent.edges
    const _posts = posts.map ( ({ node }) => {
      const title = node.meta.title || node.fields.slug
      const date = node.meta.date || 'no date'
      return (
        <div>
          <h3 style={{ marginBottom: '0.2em' }}>
            <Link to={node.fields.slug}>{title}</Link>
          </h3>
          <small>{date}</small>
        </div>
      )
    })
    return (
      <Layout>
        <h1>Hi org-mode people</h1>
        <p>Welcome to your new org-mode based Gatsby site.</p>
        {_posts}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allOrgContent {
      edges {
        node {
          fields {
            slug
          }
          meta { title date }
        }
      }
    }
  }
`

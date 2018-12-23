import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.orgContent
    const { title, date } = post.meta

    return (
      <Layout>
        <center>
          <h1>{title}</h1>
          <small>{date}</small>
        </center>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    orgContent(fields: { slug: { eq: $slug }}) {
      html
      meta {
        title
        date
      }
    }
  }
`

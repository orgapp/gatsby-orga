import React from "react"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.orga
    const { title, tags } = post

    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  orga(fields: { slug: { eq: $slug }}) {
    html
  }
}
`

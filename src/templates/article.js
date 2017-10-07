import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
      <article>
          <h1>{post.frontmatter.title}</h1>
          <section dangerouslySetInnerHTML={{__html: post.html}}/>
      </article>
  )
}
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
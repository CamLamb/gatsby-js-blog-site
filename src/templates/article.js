import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
      <article>
          <h1 className='text-big'>{post.frontmatter.title}</h1>
          <ul className='badges-list'>
              <li className='badges-list-item badge-dark'>{post.frontmatter.date}</li>
          </ul>
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
        date
        summary
      }
    }
  }
`
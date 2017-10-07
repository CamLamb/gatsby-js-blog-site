import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
    <article>
        <div className='background-dark'>
            <div className='container'>
                <div className='section align-center'>
                    <div className='col-xs-8 col-sm-4 vcenter'>
                        <h2 className='text-with-subtitle text-big text-white'>
                            <img className='rounded' src="http://www.grupocanton.com/all/imagenes/upload/2017/05/25/programador-unis-ymas-1-.png" alt="Image 1" width="45%" />
                            <div><br/>Open Source</div>
                            <span className='text-medium text-gray'>I work with a variety of open source tools</span>
                        </h2>
                    </div>

                    <div className='col-xs-8 col-sm-4 vcenter'>
                        <h2 className='text-with-subtitle text-big text-white'>
                            <img src="https://www.drupal.org/files/drupal%208%20logo%20isolated%20CMYK%2072.png" alt="Image 1" width="45%" />
                            <div><br/>Drupal</div>
                            <span className='text-medium text-gray'>I have great knowledge and understanding of the Drupal 7 and 8 backends.</span>
                        </h2>
                    </div>

                    <div className='col-xs-8 col-sm-4 vcenter'>
                        <h2 className='text-with-subtitle text-big text-white'>
                            <img src="https://drupalcommerce.org/sites/default/files/dclogo_stacked_2c_on_white.png" alt="Image 1" width="90%" />
                            <div><br/>Drupal Commerce</div>
                            <span className='text-medium text-gray'>I have a great understanding of the Drupal Commerce module/ecosystem, and have contributed code back into Drupal Commerce</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='section'>
                <h2 className='text-huge align-center'>Recent blog posts</h2>
                <div className='container background-dark'>
                    {data.allMarkdownRemark.edges.map(post =>(
                        <div className='section'>
                            <Link to={post.node.frontmatter.path}>
                                <div className='col-xs-5 col-sm-3 col-md-2 vcenter'>
                                    <img className='rounded-corners' src="http://sierra-library.github.io/img/img4.jpg" alt="Image 4" width="100%" />
                                </div>
                                <div className='col-xs-7 col-sm-9 col-md-10 vcenter'>
                                    <h3 className='text-medium'>{post.node.frontmatter.title}</h3>
                                    <ul className='badges-list'>
                                        <li className='badges-list-item'>{post.node.frontmatter.date}</li>
                                    </ul>
                                    <span className='text-small text-gray'>{post.node.frontmatter.summary}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </article>
)

export const pageQuery = graphql`
    query BlogPosts {
        allMarkdownRemark(limit: null) {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        date
                        summary
                    }
                }
            }
        }
    }
`

export default IndexPage

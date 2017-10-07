import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../styles/sierra/src/sierra.scss'
import '../styles/font-awesome-4.7.0/scss/font-awesome.scss'
import '../styles/custom.scss'

const Header = () => (
    <div className='container'>
        <section className='section'>
            <div className='align-center'>
                <img src='http://sierra-library.github.io/img/logo.png' alt='Cameron Lamb' width='25%' />
                <h1 className='text-huge text-with-subtitle'>Jafacakes2011 <span className="text-small text-gray">Cameron Lamb</span></h1>
                <div className='header_buttons'>
                    <a className='button button-outlined block-mobile' target='_blank' href='https://www.drupal.org/u/jafacakes2011'><i className='fa fa-drupal'></i> Drupal</a>
                    <a className='button button-outlined block-mobile' target='_blank' href='https://twitter.com/jafacakes2011'><i className='fa fa-twitter'></i> Twitter</a>
                    <a className='button button-outlined block-mobile' target='_blank' href='https://github.com/jafacakes2011'><i className='fa fa-hand-spock-o'></i> Github</a>
                </div>
            </div>
        </section>
    </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jafackes Developer Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

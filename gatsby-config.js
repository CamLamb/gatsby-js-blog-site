module.exports = {
  siteMetadata: {
    title: `Jafackes Developmer blog`,
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`,
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: `${__dirname}/src/articles`,
              name: 'articles'
          },
      },
      `gatsby-transformer-remark`
  ],
}

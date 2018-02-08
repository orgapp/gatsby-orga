module.exports = {
  siteMetadata: {
    title: 'Gatsby Orga Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-orga`,
      options: {
        // if you don't want to have server side prism code highlight
        // noHighlight: true,
      },
    }
  ],
};

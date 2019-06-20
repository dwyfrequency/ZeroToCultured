module.exports = {
  siteMetadata: {
    title: 'Gatsby With Apollo',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'RMAPI',
        fieldName: 'rickAndMorty',
        url: 'https://rickandmortyapi-gql.now.sh/',
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-playground`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
};

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Slingaling Dingaling | A tabletop, slingshot billiard game for everyone!',
    description: "Catapult your puck across the board, ricocheting off the walls to ring your opponent's bell!",
    author: '@jakekring',
    siteUrl: 'https://www.slingaling.com'
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'slingaling-dingaling',
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        apiVersion: '2020-01',
        verbose: true,
        paginationSize: 250,
        includeCollections: ['shop', 'content'],
        shopifyQueries: {
          products: `
            query GetProducts($first: Int!, $after: String) {
              products(first: $first, after: $after) {
                pageInfo {
                  hasNextPage
                }
                edges {
                  cursor
                  node {
                    availableForSale
                  }
                }
              }
            }
          `,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Rock Salt', 'Open Sans'],
        display: 'swap'
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-257421758-1',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Slingaling Dingaling | A tabletop, slingshot billiard game for everyone!',
    description: "Catapult your puck across the board, ricocheting off the walls to ring your opponent's bell!",
    author: '@jakekring',
    siteUrl: 'slingaling.com'
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'slingaling-dingaling',
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        // Set the API version you want to use. For a list of available API versions,
        // see: https://help.shopify.com/en/api/storefront-api/reference/queryroot
        // Defaults to 2019-07
        apiVersion: '2020-01',

        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true,

        // Number of records to fetch on each request when building the cache
        // at startup. If your application encounters timeout errors during
        // startup, try decreasing this number.
        paginationSize: 250,

        // List of collections you want to fetch.
        // Possible values are: 'shop' and 'content'.
        // Defaults to ['shop', 'content'].
        includeCollections: ['shop', 'content'],

        // Allow overriding the default queries
        // This allows you to include/exclude extra fields when sourcing nodes
        // Available keys are: articles, blogs, collections, products, shopPolicies, and pages
        // Queries need to accept arguments for first and after
        // You will need to include all the fields you want available for a
        // specific key. View the `shopifyQueries Defaults` section below for a
        // full list of keys and fields.
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
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-ZTSN6F2BRH',
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

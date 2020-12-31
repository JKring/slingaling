module.exports = {
  siteMetadata: {
    title: "Slingaling Dingaling",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "slingaling-dingaling",
        accessToken: "",
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-ZTSN6F2BRH",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

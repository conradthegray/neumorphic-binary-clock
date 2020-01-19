module.exports = {
  siteMetadata: {
    title: `Neumorphic Binary Clock #Neumorphism`,
    description: `Binary Clock in Neumorphic UI`,
    author: `@conradthegray`,
    baseUrl: `https://conradthegray.github.io/neumorphic-binary-clock/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `neumorphic-binary-clock`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#282c34`,
        theme_color: `#282c34`,
        display: `minimal-ui`,
        icon: `src/images/clock-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Brennan A. Best - Software Engineer`,
    description: `Professional portfolio of Brennan A. Best, Software Engineer with expertise in full-stack development, DevOps, and team leadership. Explore my professional experience, projects, and technical skills.`,
    author: `Brennan A. Best`,
    email: `bbest@chapman.edu`,
    phone: `916-257-0302`,
    linkedin: `https://linkedin.com/in/brennan-best`,
    siteUrl: `https://brennanbest.dev/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
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
        name: `Brennan A. Best - Software Engineer Portfolio`,
        short_name: `Brennan Best`,
        start_url: `/`,
        background_color: `#1a1a1a`,
        theme_color: `#3b82f6`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

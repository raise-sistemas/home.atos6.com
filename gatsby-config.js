const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const languages = require("./src/locales/languages")
const path = require("path")

const SITE_URL = new URL(process.env.SITE_URL || "https://home.atos6.com")

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Atos6`,
    description: `O mais completo sistema para igrejas integrado ao aplicativo para igrejas mais inovador! Atos6 te ajuda a pastorear com qualidade, sua gestão e comunicação mais eficientes. Clique e confira`,
    author: `@atos6`,
    siteUrl: SITE_URL.href,
    languages,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      resolve: `gatsby-plugin-sass`,
      options: {
        siteUrl: SITE_URL.href.slice(0, -1),
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve("./src/components/layout.js") },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Raleway"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://googleads.g.doubleclick.net",
          "https://static.doubleclick.net",
          "https://stats.g.doubleclick.net",
          "https://connect.facebook.net",
          "https://fonts.googleapis.com",
          "https://blog.atos6.com",
          "https://www.googletagmanager.com",
          "https://js.intercomcdn.com",
          "https://api-iam.intercom.io",
          "https://widget.intercom.io",
          "https://marketingplatform.google.com",
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FACEBOOK_PIXEL_ID,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_IDS || null,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `home.atos6.com`,
        short_name: `atos6`,
        start_url: `/`,
        background_color: `#39007C`,
        theme_color: `#39007C`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-minify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const languages = require("./src/locales/languages")
const path = require("path")

const SITE_URL = new URL(process.env.SITE_URL || "https://www.atos6.com")
const AWS_S3_BUCKET = process.env.AWS_S3_BUCKET || "atos6-landing-page-production"
const GOOGLE_ANALYTICS_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID || ''

module.exports = {
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
      options: {
        siteUrl: SITE_URL.href.slice(0, -1),
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: AWS_S3_BUCKET,
        acl: null,
        protocol: SITE_URL.protocol.slice(0, -1),
        hostname: SITE_URL.hostname,
      },
    },
    `gatsby-plugin-sass`,
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
          "https://stats.g.doubleclick.net",
          "https://fonts.googleapis.com",
          "https://www.google.com.br",
          "https://www.google.com",
          "https://blog.atos6.com",
          "https://www.googletagmanager.com",
          "https://js.intercomcdn.com",
          "https://api-iam.intercom.io",
          "https://widget.intercom.io",
          "https://marketingplatform.google.com"
        ]
      }
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
        name: `images`,
        path: `${__dirname}/src/images`,
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        anonymize: true
      },
    },
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
        name: `atos6.com`,
        short_name: `atos6`,
        start_url: `/`,
        background_color: `#267D8C`,
        theme_color: `#267D8C`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Spotify report tool',
        description: '',
    },
    flags: {
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
        PRESERVE_WEBPACK_CACHE: true,
    },
    plugins: [
        `gatsby-plugin-use-dark-mode`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-json`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-spotify`,
            options: {
                clientId: process.env.SPOTIFY_CLIENT_ID,
                clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
                refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,

                fetchPlaylists: false, // optional. Set to false to disable fetching of your playlists
                fetchRecent: false, // optional. Set to false to disable fetching of your recently played tracks
                timeRanges: ['short_term'], // optional. Set time ranges to be fetched
            },
        },
    ],
}

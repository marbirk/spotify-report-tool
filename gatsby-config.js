/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Marcel Birkhahn',
        description: 'This is me!',
        siteUrl: `https://marcelbirkhahn.com/`,
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
                clientId: `aadcee04e02d42bd9c6b3e3b96de851f`,
                clientSecret: `9bcbb5de393d437fb14760a8611e22a3`,
                refreshToken: `AQAqiPp8Rvjo6aZKwKeplKK8j99DJKlrjk27WtphQvJxxlw6bFdw5W_AyjoRpxLv6sopnzQZlqDxwO0LB0Nwi5Ssa8tid6U7QqO9NCDbWt3PCJaEaOib0JHNxso4eA7gcgI`,

                fetchPlaylists: false, // optional. Set to false to disable fetching of your playlists
                fetchRecent: false, // optional. Set to false to disable fetching of your recently played tracks
                timeRanges: ['short_term'], // optional. Set time ranges to be fetched
            },
        },
    ],
}

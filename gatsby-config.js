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
        keywords: ['Portfolio', 'Frontend Engineer'],
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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data/`,
            },
        },
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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-47721885-1',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ['/preview/**', '/do-not-track/me/too/'],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
                // Enables Google Optimize Experiment ID
                experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
                // Set Variation ID. 0 for original 1,2,3....
                variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: 'example.com',
            },
        },
    ],
}

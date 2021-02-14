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
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data/`,
            },
        },
        {
            resolve: 'gatsby-source-custom-api',
            options: {
                url: `https://602935da289eb50017cf7796.mockapi.io/contacts/`,
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
            resolve: `gatsby-plugin-google-analytics-gdpr`,
            options: {
                // The property ID; the tracking code won't be generated without it.
                trackingId: 'UA-47721885-1',
                // Optional parameter (default false) - Enable analytics in development mode.
                enableDevelopment: false, // default false
                // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
                anonymizeIP: true,
                // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
                autoStartWithCookiesEnabled: false,
                // Optional parameter - Configuration for react-ga and google analytics
                reactGaOptions: {
                    debug: true,
                    gaOptions: {
                        sampleRate: 10,
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-cookiehub-banner`,
            options: {
                // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
                cookieHubId: '3310b0ee',
                // Optional parameter (default false) - Use new v2 API.
                cookieHubV2Api: true,
                // Categories configured with CookieHub
                categories: [
                    {
                        categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
                        cookieName:
                            'gatsby-plugin-google-analytics-gdpr_cookies-enabled', // Your custom cookie name
                    },
                ],
            },
        },
    ],
}

import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

const HomePage = ({ data }) => {
    const { title, description, keywords } = data.site.siteMetadata
    const topFiveArtists = data.allSpotifyTopArtist.edges
    const headlineStrings = [
        'Marcel Birkhahn',
        'Frontend Engineer (B.Sc.)',
        'Student of media informatics (M.Sc.)',
        'Rock music enthusiast',
        'Festival fan',
    ]
    useEffect(() => {
        startTextAnimation(0)
    }, [])
    return (
        <Layout>
            <Helmet
                title={`Home | ${title}`}
                meta={[
                    { name: 'description', content: description },
                    { name: 'keywords', content: keywords.join() },
                ]}
            >
                <html lang="en" />
                <noscript>
                    This site runs best with JavaScript enabled.
                </noscript>
            </Helmet>
            <section>
                <p className="text-5xl uppercase">I am</p>
                <h1 className="text-5xl uppercase squishy-text">
                    Marcel Birkhahn
                </h1>
            </section>
            <section>
                <p>
                    I'm working for Steinberg Media Technologies GmbH as a
                    Frontend Engineer in Hamburg.
                </p>
            </section>
            <section>
                <p>
                    Master student at TH Lübeck, study focus: Modern and clean
                    software development & Data Science
                </p>
                <p>
                    My last project: Personas in e-commerce - evaluation of the
                    data-driven persona method as a basis for product
                    recommendations in online retail for customers with musical
                    interest
                </p>
            </section>
            <section>
                My favourite bands in the last month are:
                <ol>{renderBandList()}</ol>
            </section>
            network page?, Storybook?, Unit tests?
        </Layout>
    )

    function startTextAnimation(i) {
        if (typeof headlineStrings[i] === 'undefined') {
            setTimeout(function () {
                startTextAnimation(0)
            }, 20000)
        }
        console.log(headlineStrings[i])
        // check if dataText[i] exists
        if (i < headlineStrings[i].length) {
            // text exists! start typewriter animation
            typeWriter(headlineStrings[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                startTextAnimation(i + 1)
            })
        }
    }

    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < text.length) {
            // add next character to h1
            document.querySelector('h1').innerHTML =
                text.substring(0, i + 1) + '<span aria-hidden="true"></span>'

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100)
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700)
        }
    }

    function renderBandList() {
        return topFiveArtists.map(artist => {
            return (
                <li key={artist.node.id} className="capitalize">
                    {artist.node.name}, {artist.node.genres[0]}
                    <Img
                        fluid={
                            artist.node.image.localFile.childImageSharp.fluid
                        }
                    />
                </li>
            )
        })
    }
}

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                title
                description
                keywords
            }
        }
        allSpotifyTopArtist(sort: { fields: order }, limit: 5) {
            edges {
                node {
                    name
                    genres
                    id
                    image {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 400) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default HomePage

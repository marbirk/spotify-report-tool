import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

const HomePage = ({ location, data }) => {
    const { title, description, keywords } = data.site.siteMetadata
    const topFiveArtists = data.allSpotifyTopArtist.edges
    return (
        <Layout location={location}>
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
                <p>
                    I'm working for Steinberg Media Technologies GmbH as a
                    Frontend Engineer (B.Sc.) in Hamburg.
                </p>
            </section>
            <section>
                <p>
                    I'm doing my studies of media informatics (M.Sc.) at TH
                    Lübeck, study focus: Modern and clean software development &
                    Data Science, My last project:
                </p>
                <p>
                    Personas in e-commerce - evaluation of the data-driven
                    persona method as a basis for product recommendations in
                    online retail for customers with musical interest
                </p>
            </section>
            <section>
                <p>
                    Discover my <Link to="/network">network</Link>
                </p>
            </section>
            <section>
                <p>
                    While I'm working I listen to music every day and I'm always
                    interested in new bands. The following list contains my
                    favourite artists in the past month:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16">
                    {renderBandList()}
                </div>
            </section>
            Unit tests?, font for headline and text?, filter to network?,
            Impressum-Text, Privacy-Text, Cookie Consent
        </Layout>
    )

    function renderBandList() {
        return topFiveArtists.map(artist => {
            return (
                <div
                    key={artist.node.id}
                    className="bg-gray-200 dark:bg-gray-700 capitalize p-4"
                >
                    <Img
                        fluid={
                            artist.node.image.localFile.childImageSharp.fluid
                        }
                    />
                    <div className="mt-4">
                        <p>{artist.node.name}</p>
                        <p className="italic">{artist.node.genres[0]}</p>
                    </div>
                </div>
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

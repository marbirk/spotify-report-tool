import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Typewriter from 'typewriter-effect'

const HomePage = ({ data }) => {
    const { title, description, keywords } = data.site.siteMetadata
    const topFiveArtists = data.allSpotifyTopArtist.edges
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
                    <Typewriter
                        options={{
                            strings: [
                                'Marcel Birkhahn',
                                'Frontend Engineer',
                                'Informatics Student',
                                'Hardrock enthusiast',
                                'Festival fan',
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
            </section>
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
                    Data Science
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

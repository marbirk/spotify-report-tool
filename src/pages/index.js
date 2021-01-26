import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

const HomePage = ({ data }) => {
    const { title, description, keywords } = data.site.siteMetadata
    const topFiveArtists = data.allSpotifyTopArtist.edges
    console.log(data.allSpotifyTopArtist.edges)
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
                <h1>
                    I'm Marcel Birkhahn, Frontend Engineer (B.Sc.) oder Software
                    Engineer (B.Sc.), Student of media informatics (M.Sc.), rock
                    music enthusiast, festival fan // groß und type writter
                    effect?
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
                network page? My favourite bands in the last month are:
                <ol>
                    {topFiveArtists.map(artist => {
                        return (
                            <li key={artist.node.id}>
                                {artist.node.name}
                                <Img
                                    fixed={
                                        artist.node.image.localFile
                                            .childImageSharp.fixed
                                    }
                                />
                            </li>
                        )
                    })}
                </ol>
            </section>
        </Layout>
    )
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
                                fixed(width: 125, height: 125) {
                                    ...GatsbyImageSharpFixed
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

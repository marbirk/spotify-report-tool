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
            <div>
                Frontend Engineer (B.Sc.) oder Software Engineer (B.Sc.),
                Working for Steinberg, Master student at TH Lübeck, last
                project: Personas in e-commerce - evaluation of the data-driven
                persona method as a basis for product recommendations in online
                retail for customers with musical interest, study focus: Modern
                and clean software development & Data Science, network page?
            </div>
            <div>
                My favourite bands in the last month are:
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
            </div>
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
        allSpotifyTopArtist(
            filter: { time_range: { eq: "short_term" } }
            sort: { fields: order }
            limit: 5
        ) {
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

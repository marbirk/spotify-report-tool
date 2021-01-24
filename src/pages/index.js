import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const HomePage = ({ data }) => {
    const { title, description, keywords } = data.site.siteMetadata
    console.log(data)
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
        ) {
            edges {
                node {
                    name
                    genres
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

import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import Grid from '../components/grid/Grid'
import Seo from '../components/Seo'

interface HomePageProps extends PageProps {
    data: {
        site: {
            siteMetadata: SiteMetadataProps
        }
        allSpotifyTopArtist: {
            edges: Array<SpotifyTopArtistProps>
        }
    }
}

export interface SiteMetadataProps {
    title: string
    description: string
    siteUrl: string
}

interface SpotifyTopArtistProps {
    node: {
        name: string
        genres: Array<string>
        id: string
        image: {
            localFile: {
                childImageSharp: {
                    fluid: {
                        base64: string
                        aspectRatio: number
                        sizes: string
                        src: string
                        srcSet: string
                        srcSetWebp: string
                        srcWebp: string
                    }
                }
            }
        }
    }
}

const HomePage = (props: HomePageProps) => {
    const { title, description, siteUrl } = props.data.site.siteMetadata
    return (
        <Layout>
            <Seo
                pageTitle="Start"
                siteTitle={title}
                description={description}
                siteUrl={siteUrl}
            />
            <section>
                <h2>Top songs</h2>
                <Grid>Songs</Grid>
            </section>
            <section>
                <h2>Top artists</h2>
                <Grid>{renderBandList()}</Grid>
            </section>
        </Layout>
    )

    function renderBandList() {
        return props.data.allSpotifyTopArtist.edges.map(artist => {
            return (
                <div
                    key={artist.node.id}
                    className="bg-gray-200 dark:bg-gray-700 capitalize p-8"
                >
                    <Img
                        className="u-ratio-square"
                        fluid={
                            artist.node.image.localFile.childImageSharp.fluid
                        }
                    />
                    <div className="mt-4">
                        <p>{artist.node.name}</p>
                        <p className="italic text-xs">
                            {artist.node.genres[0]}
                        </p>
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
                siteUrl
            }
        }
        allSpotifyTopArtist(sort: { fields: order }, limit: 6) {
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

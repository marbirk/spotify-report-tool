import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, PageProps } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import Grid from '../components/grid/Grid'
import Seo from '../components/Seo'
import Link from '../components/link/Link'

interface HomePageProps extends PageProps {
    data: {
        site: {
            siteMetadata: SiteMetadataProps
        }
        allSpotifyTopArtist: {
            edges: SpotifyTopArtistProps[]
        }
        allSpotifyTopTrack: {
            edges: SpotifyTopTrackProps[]
        }
    }
}

export type SiteMetadataProps = {
    title: string
    description: string
    siteUrl: string
}

type Image = {
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

type Artist = {
    name: string
}

type SpotifyTopArtistProps = {
    node: {
        name: string
        genres: string[]
        id: string
        image: Image
        external_urls: {
            spotify: string
        }
    }
}

type SpotifyTopTrackProps = {
    node: {
        name: string
        id: string
        image: Image
        artists: Artist[]
        external_urls: {
            spotify: string
        }
    }
}

const HomePage = (props: HomePageProps) => {
    const { title, description } = props.data.site.siteMetadata
    const tracks = props.data.allSpotifyTopTrack.edges
    const artists = props.data.allSpotifyTopArtist.edges
    return (
        <Layout>
            <Seo
                pageTitle="Start"
                siteTitle={title}
                description={description}
                blockIndex={true}
            />
            {renderTrackSection(tracks)}
            {renderArtistSection(artists)}
        </Layout>
    )
}

const renderTrackSection = (tracks: SpotifyTopTrackProps[]) => {
    return (
        <section>
            <h2>Top tracks</h2>
            <Grid>{renderList(tracks)}</Grid>
        </section>
    )
}

const renderArtistSection = (artists: SpotifyTopArtistProps[]) => {
    return (
        <section>
            <h2>Top artists</h2>
            <Grid>{renderList(artists)}</Grid>
        </section>
    )
}

const renderList = (
    items: SpotifyTopTrackProps[] | SpotifyTopArtistProps[]
) => {
    return items.map(item => {
        return (
            <Link
                key={item.node.id}
                to={item.node.external_urls.spotify}
                className="bg-gray-200 dark:bg-gray-700 capitalize p-8"
            >
                <GatsbyImage
                    loading="lazy"
                    className="u-ratio-square"
                    fluid={item.node.image.localFile.childImageSharp.fluid}
                />
                <div className="mt-4">
                    <p>{item.node.name}</p>
                    <p className="italic text-xs">
                        {item.node.artists
                            ? item.node.artists[0].name
                            : item.node.genres[0]}
                    </p>
                </div>
            </Link>
        )
    })
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
                    external_urls {
                        spotify
                    }
                }
            }
        }
        allSpotifyTopTrack(sort: { fields: order }, limit: 6) {
            edges {
                node {
                    name
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
                    artists {
                        name
                    }
                    external_urls {
                        spotify
                    }
                }
            }
        }
    }
`

export default HomePage

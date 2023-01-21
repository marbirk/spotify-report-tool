import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, PageProps } from 'gatsby'
import StaticImage from 'gatsby-image'
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
                <h2>Top tracks</h2>
                <Grid>{renderTopTrackList()}</Grid>
            </section>
            <section>
                <h2>Top artists</h2>
                <Grid>{renderTopArtistList()}</Grid>
            </section>
        </Layout>
    )

    function renderTopTrackList() {
        return props.data.allSpotifyTopTrack.edges.map(track => {
            return (
                <Link
                    key={track.node.id}
                    to={track.node.external_urls.spotify}
                    className="bg-gray-200 dark:bg-gray-700 capitalize p-8"
                >
                    <StaticImage
                        loading="lazy"
                        className="u-ratio-square"
                        fluid={track.node.image.localFile.childImageSharp.fluid}
                    />
                    <div className="mt-4">
                        <p>{track.node.name}</p>
                        <p className="italic text-xs">
                            {track.node.artists[0].name}
                        </p>
                    </div>
                </Link>
            )
        })
    }

    function renderTopArtistList() {
        return props.data.allSpotifyTopArtist.edges.map(artist => {
            return (
                <Link
                    key={artist.node.id}
                    to={artist.node.external_urls.spotify}
                    className="bg-gray-200 dark:bg-gray-700 capitalize p-8"
                >
                    <StaticImage
                        loading="lazy"
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
                </Link>
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

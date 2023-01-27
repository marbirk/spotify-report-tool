import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Grid from '../components/grid/Grid'
import Seo from '../components/Seo'
import Link from '../components/link/Link'
import { useEffect } from 'react'
import { useState } from 'react'

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
}

type Image = {
    localFile: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData
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
    const [shows, setShows] = useState([])
    const { title, description } = props.data.site.siteMetadata
    const tracks = props.data.allSpotifyTopTrack.edges
    const artists = props.data.allSpotifyTopArtist.edges

    useEffect(() => {
        const eventsUrl = 'https://api.songkick.com/api/3.0/events.json'
        const apiKey = process.env.SONGKICK_API_KEY
        const location = 'geo:53.55,10.0'

        artists.map(artist => {
            const artistName = artist.node.name.toLowerCase().replace(/ /g, '-')
            const encodedArtistName = encodeURIComponent(artistName)

            const fetchUrl = `${eventsUrl}?apikey=${apiKey}&location=${location}&artist_name=${encodedArtistName}`
            fetch(fetchUrl)
                .then(r =>
                    r.json().then(data => ({ status: r.status, body: data }))
                )
                .then(obj => {
                    if (obj.body.resultsPage.totalEntries > 0) {
                        setShows(
                            obj.body.resultsPage.results.event[0].displayName
                        )
                    }
                })
        })
    }, [])

    console.log(shows)

    return (
        <Layout>
            <Seo
                pageTitle="Home"
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
                    alt={item.node.name}
                    image={
                        item.node.image.localFile.childImageSharp
                            .gatsbyImageData
                    }
                />
                <div className="mt-4">
                    <p>{item.node.name}</p>
                    <p className="italic text-xs">
                        {item.node.artists
                            ? item.node.artists[0].name
                            : item.node.genres[0]}
                    </p>
                </div>
                <div className="mt-4">
                    <p>Shows around me:</p>
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
                                gatsbyImageData(layout: CONSTRAINED)
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
                                gatsbyImageData(layout: CONSTRAINED)
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

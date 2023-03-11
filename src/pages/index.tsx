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

const HomePage = (props: HomePageProps) => {
    const [shows, setShows] = useState<object[]>([])
    const { title, description } = props.data.site.siteMetadata
    const artists = props.data.allSpotifyTopArtist.edges

    useEffect(() => {
        const eventsUrl = 'https://api.songkick.com/api/3.0/events.json'
        const apiKey = process.env.SONGKICK_API_KEY
        const hamburg = 'geo:53.55,10.0'
        const hannover = 'geo:52.3667,9.71667'

        artists.map(artist => {
            const artistName = artist.node.name.toLowerCase().replace(/ /g, '-')
            const encodedArtistName = encodeURIComponent(artistName)
            const showsList: object[] = []

            const fetchUrl = `${eventsUrl}?apikey=${apiKey}&location=${hamburg}&artist_name=${encodedArtistName}`
            fetch(fetchUrl)
                .then(r =>
                    r.json().then(data => ({ status: r.status, body: data }))
                )
                .then(obj => {
                    console.log(obj.body.resultsPage)
                    if (obj.body.resultsPage.totalEntries > 0) {
                        showsList.push({
                            artistName: artistName,
                            ...obj.body.resultsPage.results.event[0],
                        })
                        setShows(showsList)
                    }
                })
        })
    }, [])

    return (
        <Layout>
            <Seo
                pageTitle="Home"
                siteTitle={title}
                description={description}
                blockIndex={true}
            />
            {renderArtistSection(artists, shows)}
        </Layout>
    )
}

const renderArtistSection = (
    artists: SpotifyTopArtistProps[],
    shows: object[]
) => {
    return (
        <section>
            <h2>Top Spotify artists</h2>
            <Grid>{renderList(artists, shows)}</Grid>
        </section>
    )
}

const renderList = (items: SpotifyTopArtistProps[], shows?: object[]) => {
    return items.map(item => {
        const artistName = item.node.name.toLowerCase().replace(/ /g, '-')
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
                    <p className="italic text-xs">{item.node.genres[0]}</p>
                </div>
                <div className="mt-4 text-xs">
                    <p>Shows around me:</p>
                    {shows && renderShowsOfArtist(shows, artistName)}
                </div>
            </Link>
        )
    })
}

const renderShowsOfArtist = (shows: object[], artistName: string) => {
    const showsOfArtist = shows.find(show => show.artistName === artistName)
    console.log(showsOfArtist, artistName)
}

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        allSpotifyTopArtist(sort: { fields: order }, limit: 12) {
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
    }
`

export default HomePage

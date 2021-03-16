import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import Link from '../components/link/Link'
import Grid from '../components/grid/Grid'
import Seo from '../components/Seo'
import HighlightedText from '../components/highlightedText/HighlightedText'
import { networkText } from './network'

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
    const masterDegree =
        'https://www.th-luebeck.de/hochschule/fachbereich-elektrotechnik-und-informatik/studiengaenge/medieninformatik-online-msc/uebersicht/'
    return (
        <Layout>
            <Seo
                pageTitle="Home"
                siteTitle={title}
                description={description}
                siteUrl={siteUrl}
            />
            <section>
                <p>
                    I live next to Hamburg. My job as a Frontend Engineer
                    (B.Sc.) for{' '}
                    <Link to="https://www.steinberg.net/">
                        Steinberg Media Technologies GmbH
                    </Link>{' '}
                    combines two passions of me. I love everything around music
                    and I'm fascinated of modern web technologies. Steinberg, as
                    a part of Yamaha Corporation, is well known for its{' '}
                    <Link to="https://de.wikipedia.org/wiki/Cubase">
                        Digital Audio Workstation Cubase
                    </Link>
                    . A company full with musicians provides the possibility to
                    live both passions.
                </p>
            </section>
            <section>
                <p>
                    Next to my job I'm doing my{' '}
                    <Link to={`${masterDegree}`}>
                        M.Sc. degree of computer science and media applications
                    </Link>{' '}
                    at Technical University of Applied Sciences Lübeck. User
                    experience, modern software development, clean coding and
                    data science are part of my master degree. My last
                    scientific project was formed in corporation with Steinberg
                    Media Technologies GmbH. It was a interdisciplinary project
                    with focus on persona methods, web analytics and data
                    science approaches:
                </p>
                <HighlightedText>
                    Personas in e-commerce - evaluation of the data-driven
                    persona method as a basis for product recommendations in
                    online retail for customers with musical interest
                </HighlightedText>
            </section>
            <section>
                <p>
                    {networkText}{' '}
                    <Link to="/network">Check out the network page</Link> to
                    discover their passions and creative skills.
                </p>
            </section>
            <section>
                <p>
                    While I'm coding I listen to music every day. Mainly I like
                    punk, ska and metal, but I'm always interested in new bands
                    and extraordinary genres. The following list contains my
                    current favourite artists on spotify:
                </p>
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

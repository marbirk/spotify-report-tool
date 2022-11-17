import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import Link from '../components/link/Link'
import Grid from '../components/grid/Grid'
import Seo from '../components/Seo'
import HighlightedText from '../components/highlightedText/HighlightedText'
/* import { networkText } from './network' */

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
                pageTitle="Start"
                siteTitle={title}
                description={description}
                siteUrl={siteUrl}
            />
            <section>
                <p>
                    I love to work and live in the area of Hamburg. My job as a
                    Lead Web Developer for{' '}
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
                    Neben meinem Job studiere ich den{' '}
                    <Link to={`${masterDegree}`}>
                        Master of Science im Bereich Medieninformatik
                    </Link>{' '}
                    an der Technischen Hochschule Lübeck. User Experience,
                    moderne Softwareentwicklung, Clean Coding und Data Science
                    sind Teil meines Masterstudiums. Mein letztes
                    wissenschaftliches Projekt entstand in Zusammenarbeit mit
                    der Steinberg Media Technologies GmbH. Es war ein
                    interdisziplinäres Projekt mit Fokus auf Persona-Methoden,
                    Web-Analytics und Data-Science:
                </p>
                <HighlightedText>
                    Personas im E-Commerce – Evaluation der datengetriebenen
                    Persona Methode als Grundlage für Produktempfehlungen im
                    Onlinehandel für musikaffine Kunden
                </HighlightedText>
            </section>
            {/* <section>
                <p>
                    {networkText}{' '}
                    <Link to="/network">Check out the network page</Link> to
                    discover their passions and creative skills.
                </p>
            </section> */}
            <section>
                <p>
                    Während der Arbeit, höre ich jeden Tag Musik. Hauptsächlich
                    mag ich verschiedene Arten von Rock, bin aber immer an neuen
                    Bands und außergewöhnlichen Genres interessiert. Die
                    folgende Liste enthält meine aktuellen Lieblingskünstler auf
                    Spotify:
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

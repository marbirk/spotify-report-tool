import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import Link from '../components/link/Link'
import Grid from '../components/grid/Grid'
import Seo from '../components/Seo'
import HighlightedText from '../components/highlightedText/HighlightedText'
/* import { networkText } from './network' */
import { useIntl } from 'gatsby-plugin-intl'

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
    const intl = useIntl()
    const masterDegree =
        'https://www.th-luebeck.de/hochschule/fachbereich-elektrotechnik-und-informatik/studiengaenge/medieninformatik-online-msc/uebersicht/'
    return (
        <Layout>
            <Seo
                pageTitle={intl.formatMessage({ id: 'home' })}
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
                    {intl.formatMessage({ id: 'study_part_one' })}{' '}
                    <Link to={`${masterDegree}`}>
                        {intl.formatMessage({ id: 'study_name' })}
                    </Link>{' '}
                    {intl.formatMessage({ id: 'study_part_two' })}:
                </p>
                <HighlightedText>
                    {intl.formatMessage({ id: 'project_title' })}
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
                <p>{intl.formatMessage({ id: 'music_section' })}:</p>
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

import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import ExternalLink from '../components/ExternalLink'
import Grid from '../components/Grid'

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

interface SiteMetadataProps {
    title: string
    description: string
    keywords: Array<string>
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
    const { title, description, keywords } = props.data.site.siteMetadata
    return (
        <Layout location={props.location}>
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
            <section>
                <p>
                    I live next to Hamburg. My job as a Frontend Engineer
                    (B.Sc.) for{' '}
                    <ExternalLink href="https://www.steinberg.net/">
                        Steinberg Media Technologies GmbH
                    </ExternalLink>{' '}
                    combines two passions of me. I love music and I'm fascinated
                    of modern web technologies. Steinberg, as a part of Yamaha
                    Corporation, is well known for its{' '}
                    <ExternalLink href="https://de.wikipedia.org/wiki/Cubase">
                        Digital Audio Workstation Cubase
                    </ExternalLink>
                    . A company full with musicians provides the possibility to
                    live both passions.
                </p>
            </section>
            <section>
                <p>
                    Next to my job I'm doing studies of computer science and
                    media applications (M.Sc.) at Technical University of
                    Applied Sciences Lübeck. User experience, modern software
                    development, clean coding and data science are part of my
                    master degree. My last scientific project was formed in
                    corporation with Steinberg. It was a interdisciplinary
                    project with focus on persona methods, web analytics and
                    data science approaches:
                </p>
                <p className="p-10">
                    Personas in e-commerce - evaluation of the data-driven
                    persona method as a basis for product recommendations in
                    online retail for customers with musical interest
                </p>
            </section>
            <section>
                <p>
                    During the last years of studing and working in several
                    different projects I've crossed the way of many talented
                    people, which loves what they do. Many of them turned into
                    good friends. Check out the{' '}
                    <Link to="/network">network page</Link> to discover their
                    passions and creative skills.
                </p>
            </section>
            <section>
                <p>
                    While I'm working I listen to music every day. Mainly I like
                    punk, ska, metal and reggea, but I'm always interested in
                    new bands and extraordinary genres. The following list
                    contains my current favourite artists on spotify:
                </p>
                <Grid>{renderBandList()}</Grid>
            </section>
            Unit tests?, font for headline and text?, filter to network?,
            Privacy-Text, Favicons, Dark mode switch klassen mit tailwind,
            gatsby-plugin-mdx?, Content über contentful?, Offline Support?,
            Manifest?
        </Layout>
    )

    function renderBandList() {
        return props.data.allSpotifyTopArtist.edges.map(artist => {
            return (
                <div
                    key={artist.node.id}
                    className="bg-gray-200 dark:bg-gray-700 capitalize p-4"
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
                keywords
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
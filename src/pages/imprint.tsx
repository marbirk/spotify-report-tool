import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, PageProps } from 'gatsby'
import { SiteMetadataProps } from './index'
import Seo from '../components/Seo'

interface ImprintPageProps extends PageProps {
    data: {
        site: {
            siteMetadata: SiteMetadataProps
        }
        allImprintJson: {
            edges: Array<SectionProps>
        }
    }
}

interface SectionProps {
    node: {
        headline: string
        subline: string
        text: Array<string>
    }
}

const ImprintPage = (props: ImprintPageProps) => {
    const { title, description, siteUrl } = props.data.site.siteMetadata
    const headline = 'Impressum'
    return (
        <Layout>
            <Seo
                pageTitle={headline}
                siteTitle={title}
                description={description}
                siteUrl={siteUrl}
            />
            <section>
                <h2>{headline}</h2>
                <img
                    src="https://ssl.greensta.de/wp-content/uploads/2019/12/100prozent_banner-250-white.png"
                    width="250"
                    height="110"
                    alt="Greensta Logo"
                />
            </section>
            {renderPageContent()}
        </Layout>
    )

    function renderPageContent() {
        return props.data.allImprintJson.edges.map(
            (section: SectionProps, index: number) => {
                return (
                    <section key={index}>
                        {section.node.headline !== '' && (
                            <h2>{section.node.headline}</h2>
                        )}
                        {section.node.subline !== '' && (
                            <h3>{section.node.subline}</h3>
                        )}
                        {section.node.text.map(
                            (string: string, index: number) => {
                                return <p key={index}>{string}</p>
                            }
                        )}
                    </section>
                )
            }
        )
    }
}

export const query = graphql`
    query ImprintPageQuery {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        allImprintJson {
            edges {
                node {
                    headline
                    subline
                    text
                }
            }
        }
    }
`

export default ImprintPage

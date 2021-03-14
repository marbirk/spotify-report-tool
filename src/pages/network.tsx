import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, PageProps } from 'gatsby'
import ExternalLink from '../components/externalLink/ExternalLink'
import Grid from '../components/grid/Grid'
import { SiteMetadataProps } from './index'
import Seo from '../components/Seo'

interface NetworkPageProps extends PageProps {
    data: {
        site: {
            siteMetadata: SiteMetadataProps
        }
        allCustomApi: {
            edges: Array<ContactProps>
        }
    }
}

interface ContactProps {
    node: {
        name: string
        id: string
        active: boolean
        web: string
        tags: Array<string>
    }
}

const NetworkPage = (props: NetworkPageProps) => {
    const { title, description, siteUrl } = props.data.site.siteMetadata
    return (
        <Layout>
            <Seo
                pageTitle="Network"
                siteTitle={title}
                description={description}
                siteUrl={siteUrl}
            />
            <section>
                <p>{networkText} Check out all contacts below:</p>
                <Grid>{renderNetworkList()}</Grid>
            </section>
        </Layout>
    )

    function renderNetworkList() {
        return props.data.allCustomApi.edges
            .sort((a, b) => a.node.name.localeCompare(b.node.name))
            .map((contact, index) => {
                return (
                    <ExternalLink
                        key={index}
                        href={contact.node.web}
                        className="w-full bg-gray-200 dark:bg-gray-700 p-8 h-auto"
                    >
                        <div className="u-ratio-square bg-gray-400 dark:bg-gray-800 text-gray-200 dark:text-gray-700 flex items-center justify-center overflow-hidden u-dynamic-font-size">
                            {getInitials(contact.node.name.toUpperCase())}
                        </div>
                        <div className="mt-4">
                            <p>{contact.node.name}</p>
                            <p className="text-xs">
                                {getTags(contact.node.tags)}
                            </p>
                        </div>
                    </ExternalLink>
                )
            })
    }

    function getInitials(name: string) {
        let initials = ''
        name.split(' ').forEach(element => {
            initials += element[0]
        })
        return initials
    }

    function getTags(tags: Array<string>) {
        return tags.map((tag, number) => {
            return (
                <span key={number} className="mr-4">
                    {tag.toLowerCase()}
                </span>
            )
        })
    }
}

export const networkText =
    'During the last years of studing and working in several different projects I have crossed the way of many talented people, which loves what they do. Many of them turned into good friends.'

export const query = graphql`
    query NetworkPageQuery {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        allCustomApi(filter: { active: { eq: true } }) {
            edges {
                node {
                    name
                    tags
                    web
                }
            }
        }
    }
`

export default NetworkPage

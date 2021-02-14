import React from 'react'
import Layout from '../components/Layout'
import { graphql, PageProps } from 'gatsby'
import ExternalLink from '../components/ExternalLink'
import Grid from '../components/Grid'

interface NetworkPageProps extends PageProps {
    data: {
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
    return (
        <Layout location={props.location}>
            <h2>Network</h2>
            <p>{networkText} Check out all contacts below:</p>
            <Grid>{renderNetworkList()}</Grid>
        </Layout>
    )

    function renderNetworkList() {
        return props.data.allCustomApi.edges
            .sort((a, b) => a.node.name.localeCompare(b.node.name))
            .map((contact, index) => {
                console.log(contact)
                return (
                    <ExternalLink
                        key={index}
                        href={contact.node.web}
                        className="w-full bg-gray-200 dark:bg-gray-700 p-8 h-auto"
                    >
                        <div className="u-ratio-square bg-gray-200 dark:bg-gray-200 text-gray-50 flex items-center justify-center overflow-hidden u-dynamic-font-size">
                            {getInitials(contact.node.name.toUpperCase())}
                        </div>
                        <div className="mt-4">
                            <p>{contact.node.name}</p>
                            <p className="text-xs">
                                {contact.node.tags.toString()}
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
}

export const networkText =
    'During the last years of studing and working in several different projects I have crossed the way of many talented people, which loves what they do. Many of them turned into good friends.'

export const query = graphql`
    query NetworkPageQuery {
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

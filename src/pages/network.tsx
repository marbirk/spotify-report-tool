import React from 'react'
import Layout from '../components/Layout'
import { graphql, PageProps } from 'gatsby'
import ExternalLink from '../components/ExternalLink'

interface NetworkPageProps extends PageProps {
    data: {
        allNetworkJson: {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {renderNetworkList()}
            </div>
        </Layout>
    )

    function renderNetworkList() {
        return props.data.allNetworkJson.edges
            .filter(contact => contact.node.active)
            .sort((a, b) => a.node.name.localeCompare(b.node.name))
            .map(contact => {
                return (
                    <ExternalLink
                        key={contact.node.id}
                        href={contact.node.web}
                        className="w-full h-32 bg-gray-200 dark:bg-gray-700 p-4"
                    >
                        {getInitials(contact.node.name)}
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

export const query = graphql`
    query NetworkPageQuery {
        allNetworkJson {
            edges {
                node {
                    name
                    id
                    active
                    web
                    tags
                }
            }
        }
    }
`

export default NetworkPage

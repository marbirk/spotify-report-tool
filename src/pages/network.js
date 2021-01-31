import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const NetworkPage = ({ location, data }) => {
    return (
        <Layout location={location}>
            <h2>Network</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {renderNetworkList()}
            </div>
        </Layout>
    )

    function renderNetworkList() {
        return data.allNetworkJson.edges
            .filter(contact => contact.node.active)
            .sort((a, b) => a.node.name.localeCompare(b.node.name))
            .map(contact => {
                const key = contact.node.name.toLowerCase().replace(/ /g, '-')
                let initials = ''
                contact.node.name.split(' ').forEach(element => {
                    initials += element[0]
                })
                return (
                    <a
                        key={key}
                        href={contact.node.web}
                        className="w-full h-32 bg-gray-200 dark:bg-gray-700 capitalize p-4"
                    >
                        {initials}
                        <div className="mt-4">
                            <p>{contact.node.name}</p>
                            <p>{contact.node.tags.toString()}</p>
                        </div>
                    </a>
                )
            })
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

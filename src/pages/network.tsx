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

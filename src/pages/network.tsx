import React from 'react'
import Layout from '../components/Layout'
import { graphql, PageProps } from 'gatsby'
import ExternalLink from '../components/ExternalLink'
import Grid from '../components/Grid'

interface NetworkPageProps extends PageProps {
    data: {
        customApi: {
            data: {
                allActiveContacts: Array<ContactProps>
            }
        }
    }
}

interface ContactProps {
    name: string
    id: string
    active: boolean
    web: string
    tags: Array<string>
}

const NetworkPage = (props: NetworkPageProps) => {
    return (
        <Layout location={props.location}>
            <h2>Network</h2>
            <Grid>{renderNetworkList()}</Grid>
        </Layout>
    )

    function renderNetworkList() {
        return props.data.customApi.data.allActiveContacts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((contact, index) => {
                console.log(contact)
                return (
                    <ExternalLink
                        key={index}
                        href={contact.web}
                        className="w-full h-32 bg-gray-200 dark:bg-gray-700 p-4"
                    >
                        {getInitials(contact.name)}
                        <div className="mt-4">
                            <p>{contact.name}</p>
                            <p className="text-xs">{contact.tags.toString()}</p>
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
        customApi {
            data {
                allActiveContacts {
                    name
                    tags
                    web
                }
            }
        }
    }
`

export default NetworkPage

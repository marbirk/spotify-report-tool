import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, PageProps } from 'gatsby'
import { SiteMetadataProps } from './index'
import Seo from '../components/Seo'

interface PrivacyPageProps extends PageProps {
    data: {
        site: {
            siteMetadata: SiteMetadataProps
        }
    }
}

const PrivacyPage = (props: PrivacyPageProps) => {
    const { title, description, siteUrl } = props.data.site.siteMetadata
    return (
        <Layout>
            <Seo
                pageTitle="Privacy"
                siteTitle={title}
                description={description}
                siteUrl={siteUrl}
            />
            <section>
                <h2>Privacy</h2>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query PrivacyPageQuery {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
    }
`

export default PrivacyPage

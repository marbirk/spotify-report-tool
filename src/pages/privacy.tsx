import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, PageProps } from 'gatsby'
import { SiteMetadataProps } from './index'
import Seo from '../components/Seo'
import { useIntl } from 'gatsby-plugin-intl'

interface PrivacyPageProps extends PageProps {
    data: {
        site: {
            siteMetadata: SiteMetadataProps
        }
    }
}

const PrivacyPage = (props: PrivacyPageProps) => {
    const { title, description, siteUrl } = props.data.site.siteMetadata
    const intl = useIntl()
    const headline = intl.formatMessage({ id: 'privacy' })
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

import React from 'react'
import Layout from '../components/layout/Layout'
import Link from '../components/link/Link'
import { graphql, PageProps } from 'gatsby'
import { SiteMetadataProps } from './index'
import Seo from '../components/Seo'
import { useIntl } from 'gatsby-plugin-intl'

interface NotFoundPageProps extends PageProps {
    data: {
        site: {
            siteMetadata: SiteMetadataProps
        }
    }
}

const NotFoundPage = (props: NotFoundPageProps) => {
    const { title, description, siteUrl } = props.data.site.siteMetadata
    const intl = useIntl()
    const headline = intl.formatMessage({ id: '404_headline' })
    const text = intl.formatMessage({ id: '404_text' })
    const link = intl.formatMessage({ id: '404_link' })
    return (
        <Layout>
            <Seo
                pageTitle="404"
                siteTitle={title}
                description={description}
                siteUrl={siteUrl}
            />
            <section>
                <h2>{headline}!</h2>
                <p>{text}.</p>
                <p>
                    <Link to="/">{link} &gt;&gt;</Link>
                </p>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query NotFoundPageQuery {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
    }
`

export default NotFoundPage

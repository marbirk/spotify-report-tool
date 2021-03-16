import React from 'react'
import Layout from '../components/layout/Layout'
import Link from '../components/link/Link'
import { graphql, PageProps } from 'gatsby'
import { SiteMetadataProps } from './index'
import Seo from '../components/Seo'

interface NotFoundPageProps extends PageProps {
    data: {
        site: {
            siteMetadata: SiteMetadataProps
        }
    }
}

const NotFoundPage = (props: NotFoundPageProps) => {
    const { title, description, siteUrl } = props.data.site.siteMetadata
    return (
        <Layout>
            <Seo
                pageTitle="404"
                siteTitle={title}
                description={description}
                siteUrl={siteUrl}
            />
            <section>
                <h2>Page not found!</h2>
                <p>This is not the page you are looking for.</p>
                <p>
                    <Link to="/">Return to home &gt;&gt;</Link>
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

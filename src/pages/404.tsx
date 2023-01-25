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
    const { title, description } = props.data.site.siteMetadata
    return (
        <Layout>
            <Seo pageTitle="404" siteTitle={title} description={description} />
            <section>
                <h2>Seite nicht gefunden!</h2>
                <p>Dies ist nicht die Seite, nach der du suchst.</p>
                <p>
                    <Link to="/">Zurück zur Startseite &gt;&gt;</Link>
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
            }
        }
    }
`

export default NotFoundPage

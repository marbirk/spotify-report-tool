import React from 'react'
import { Helmet } from 'react-helmet'

interface SeoProps {
    pageTitle: string
    siteTitle: string
    description: string
    siteUrl: string
}

const Seo = (props: SeoProps) => {
    return (
        <Helmet data-testid="seo">
            {/* General tags */}
            <title>{`${props.pageTitle} | ${props.siteTitle}`}</title>
            <meta name="description" content={props.description} />
            <html lang="en" />
            <noscript>This site runs best with JavaScript enabled.</noscript>
        </Helmet>
    )
}

export default Seo

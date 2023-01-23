import React from 'react'
import { Helmet } from 'react-helmet'

interface SeoProps {
    pageTitle: string
    siteTitle: string
    description: string
    blockIndex?: boolean
}

const Seo = ({
    pageTitle,
    siteTitle,
    description,
    blockIndex = false,
}: SeoProps) => {
    return (
        <Helmet data-testid="seo">
            <html lang="en" />
            <title>{`${pageTitle} | ${siteTitle}`}</title>
            <meta name="description" content={description} />
            {blockIndex && <meta name="robots" content="noindex, nofollow" />}
            <noscript>This site runs best with JavaScript enabled.</noscript>
        </Helmet>
    )
}

export default Seo

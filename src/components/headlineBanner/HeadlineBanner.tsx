import React from 'react'
import Typewriter from 'typewriter-effect'
import Link from '../link/Link'
import { useIntl } from 'gatsby-plugin-intl'

interface HeadlineBannerProps {
    pathname: string
}

const HeadlineBanner = ({ pathname }: HeadlineBannerProps) => {
    const intl = useIntl()
    const isStartPage = pathname === `/${intl.locale}/`
    return (
        <div className="mb-32 mt-24" data-testid="headline-banner">
            <Link to="/">
                <h1 className="u-squishy-text">
                    {isStartPage ? getStartPageBanner() : getDefaultBanner()}
                </h1>
            </Link>
        </div>
    )
}

const getStartPageBanner = () => {
    return (
        <>
            <span>I am</span>
            <Typewriter
                onInit={typewriter => {
                    typewriter
                        .pauseFor(2000)
                        .typeString('Marcel Birkhahn')
                        .deleteAll()
                        .typeString('Frontend Engineer')
                        .deleteAll()
                        .typeString('Studying IT Master')
                        .deleteAll()
                        .typeString('Hard Rock Fan')
                        .pauseFor(1000)
                        .start()
                }}
                options={{
                    loop: true,
                }}
            />
        </>
    )
}

const getDefaultBanner = () => {
    const getNameString = (name: string) => (
        <span className="block">{name}</span>
    )
    return (
        <>
            {getNameString('Marcel')}
            {getNameString('Birkhahn')}
        </>
    )
}

export default HeadlineBanner

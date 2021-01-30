import React from 'react'
import Typewriter from 'typewriter-effect'
import { Link } from 'gatsby'

const HeadlineBanner = props => {
    const isStartPage = props.pathname.length === 1
    return (
        <section className="mb-12 mt-6">
            <Link to="/">
                <h1 className="squishy-text">
                    {isStartPage ? getStartPageBanner() : getDefaultBanner()}
                </h1>
            </Link>
        </section>
    )
}

const getStartPageBanner = () => {
    return (
        <>
            <span>I am</span>
            <Typewriter
                options={{
                    strings: [
                        'Marcel Birkhahn',
                        'Frontend Engineer',
                        'Informatics Student',
                        'Hard Rock Enthusiast',
                        'Festival Fan',
                    ],
                    autoStart: true,
                    loop: true,
                }}
            />
        </>
    )
}

const getDefaultBanner = () => {
    const getNameString = name => <span className="block">{name}</span>
    return (
        <>
            {getNameString('Marcel')}
            {getNameString('Birkhahn')}
        </>
    )
}

export default HeadlineBanner

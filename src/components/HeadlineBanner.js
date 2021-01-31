import React from 'react'
import Typewriter from 'typewriter-effect'
import { Link } from 'gatsby'

const HeadlineBanner = props => {
    const isStartPage = props.pathname.length === 1
    return (
        <div className="mb-32 mt-24">
            <Link to="/">
                <h1 className="squishy-text">
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
                options={{
                    strings: [
                        'Marcel Birkhahn',
                        'Frontend Engineer',
                        'Studying IT Master',
                        'Hard Rock Fan',
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

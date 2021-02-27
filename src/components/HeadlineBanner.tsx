import React from 'react'
import Typewriter from 'typewriter-effect'
import { Link } from 'gatsby'
import { Location } from '../utils/types'

const HeadlineBanner = (props: Location) => {
    const isStartPage = props.pathname.length === 1
    return (
        <div className="mb-32 mt-24">
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
                onInit={() => {}}
                options={{
                    strings: [
                        'Marcel Birkhahn',
                        'Frontend Engineer',
                        'Studying IT Master',
                        'Hard Rock Fan',
                        'Nature Lover',
                    ],
                    autoStart: true,
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

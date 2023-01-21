import React from 'react'
import Typewriter from 'typewriter-effect'
import Link from '../link/Link'

const HeadlineBanner = () => {
    return (
        <div className="mb-32 mt-24" data-testid="headline-banner">
            <Link to="/">
                <h1 className="u-squishy-text">Spotify report</h1>
            </Link>
        </div>
    )
}

export default HeadlineBanner

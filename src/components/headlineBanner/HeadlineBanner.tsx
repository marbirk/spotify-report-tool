import React from 'react'
import Link from '../link/Link'

const HeadlineBanner = () => {
    return (
        <div className="mb-32 mt-24" data-testid="headline-banner">
            <Link to="/">
                <h1 className="u-squishy-text">Show finder</h1>
            </Link>
        </div>
    )
}

export default HeadlineBanner

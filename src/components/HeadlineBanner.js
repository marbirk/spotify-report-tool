import React from 'react'
import Typewriter from 'typewriter-effect'
import { Link } from 'gatsby'

const HeadlineBanner = props => {
    const isStartPage = props.pathname.length === 1
    return (
        <section className="mb-12">
            <Link to="/">
                <h1 className="text-6xl uppercase squishy-text">
                    {isStartPage ? (
                        <Typewriter
                            options={{
                                strings: [
                                    'I am Marcel Birkhahn',
                                    'Frontend Engineer',
                                    'Informatics Student',
                                    'Hard Rock Enthusiast',
                                    'Festival Fan',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    ) : (
                        'Marcel Birkhahn'
                    )}
                </h1>
            </Link>
        </section>
    )
}

export default HeadlineBanner

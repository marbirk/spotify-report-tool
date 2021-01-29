import React from 'react'
import Typewriter from 'typewriter-effect'

const HeadlineBanner = props => {
    const isStartPage = props.pathname.length === 1
    return (
        <section className="mb-12">
            <h1 className="text-5xl uppercase squishy-text">
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
        </section>
    )
}

export default HeadlineBanner

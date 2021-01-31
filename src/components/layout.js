import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeadlineBanner from './HeadlineBanner'

export default function Layout(props) {
    return (
        <main className="container mx-auto md:max-w-screen-md">
            <Header {...props.location} />
            {props.children}
            <Footer />
        </main>
    )
}

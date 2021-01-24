import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <main className="container mx-auto md:max-w-screen-md">
            <Header />
            {children}
            <Footer />
        </main>
    )
}

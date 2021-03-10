import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <main className="container mx-auto md:max-w-screen-md">
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout

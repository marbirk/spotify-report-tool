import React from 'react'
import Header from './Header'
import Footer from './footer/Footer'
import { Location } from '../utils/types'

interface LayoutProps {
    children: React.ReactNode
    location: Location | any
}

const Layout = ({ children, location }: LayoutProps) => {
    return (
        <main className="container mx-auto md:max-w-screen-md">
            <Header {...location} />
            {children}
            <Footer />
        </main>
    )
}

export default Layout

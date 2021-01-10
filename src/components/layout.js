import React from 'react'
import './layout.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <main className="container mx-auto">
            <Header />
            {children}
            <Footer />
        </main>
    )
}

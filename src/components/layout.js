import React from 'react'
import './layout.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

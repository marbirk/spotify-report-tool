import React from 'react'
import './layout.css'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <footer></footer>
        </div>
    )
}

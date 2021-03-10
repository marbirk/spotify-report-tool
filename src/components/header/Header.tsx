import React from 'react'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import HeadlineBanner from '../headlineBanner/HeadlineBanner'

export default function Header() {
    return (
        <header className="flex flex-col">
            <DarkModeToggle />
            <HeadlineBanner pathname={location.pathname} />
        </header>
    )
}
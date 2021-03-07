import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import HeadlineBanner from './HeadlineBanner'

export default function Header() {
    return (
        <header className="flex flex-col">
            <DarkModeToggle />
            <HeadlineBanner pathname={location.pathname} />
        </header>
    )
}

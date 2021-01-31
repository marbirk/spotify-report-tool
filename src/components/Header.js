import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import HeadlineBanner from './HeadlineBanner'

export default function Header(props) {
    return (
        <header className="flex flex-col">
            <DarkModeToggle />
            <HeadlineBanner {...props} />
        </header>
    )
}

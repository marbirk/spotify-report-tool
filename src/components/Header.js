import React from 'react'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
    return (
        <header className="flex h-12">
            <DarkModeToggle />
        </header>
    )
}

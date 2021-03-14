import React, { useState, useEffect } from 'react'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import HeadlineBanner from '../headlineBanner/HeadlineBanner'

export default function Header() {
    const [pathname, setPathname] = useState('/')
    useEffect(() => {
        setPathname(location.pathname)
    }, [])
    return (
        <header className="flex flex-col" data-testid="header">
            <DarkModeToggle />
            <HeadlineBanner pathname={pathname} />
        </header>
    )
}

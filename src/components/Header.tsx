import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import HeadlineBanner from './HeadlineBanner'
import { Location } from '../utils/types'

export default function Header(props: Location) {
    return (
        <header className="flex flex-col">
            <DarkModeToggle />
            <HeadlineBanner {...props} />
        </header>
    )
}

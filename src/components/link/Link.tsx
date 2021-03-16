import React from 'react'
import ExternalLink from '../externalLink/ExternalLink'
import { Link as GatsbyLink } from 'gatsby'

interface LinkProps {
    children: React.ReactNode
    to: string
    className?: string
}

const Link = ({ children, to, ...other }: LinkProps) => {
    const internal = /^\/(?!\/)/.test(to)

    if (internal) {
        return (
            <GatsbyLink to={to} {...other}>
                {children}
            </GatsbyLink>
        )
    }

    return (
        <ExternalLink href={to} {...other}>
            {children}
        </ExternalLink>
    )
}

export default Link

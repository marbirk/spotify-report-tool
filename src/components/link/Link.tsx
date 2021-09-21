import React from 'react'
import ExternalLink from '../externalLink/ExternalLink'
import { Link as IntlLink } from 'gatsby-plugin-intl'

interface LinkProps {
    children: React.ReactNode
    to: string
    className?: string
}

const Link = ({ children, to, ...other }: LinkProps) => {
    const internal = /^\/(?!\/)/.test(to)

    if (internal) {
        return (
            <IntlLink to={to} {...other}>
                {children}
            </IntlLink>
        )
    }

    return (
        <ExternalLink href={to} {...other}>
            {children}
        </ExternalLink>
    )
}

export default Link

import React from 'react'

interface ExternalLinkProps {
    children: React.ReactNode
    className?: string
    href: string
}

const ExternalLink = ({ children, ...other }: ExternalLinkProps) => (
    <a target="_blank" rel="noreferrer noopener" {...other}>
        {children}
    </a>
)

export default ExternalLink

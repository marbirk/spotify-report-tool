import React from 'react'

interface ExternalLinkProps {
    children: React.ReactNode
    className?: string
    href: string
}

const ExternalLink = ({ children, ...props }: ExternalLinkProps) => (
    <a target="_blank" rel="noreferrer noopener" {...props}>
        {children}
    </a>
)

export default ExternalLink

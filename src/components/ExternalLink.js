import React from 'react'

const ExternalLink = ({ children, ...props }) => (
    <a target="_blank" rel="noreferrer noopener" {...props}>
        {children}
    </a>
)

export default ExternalLink

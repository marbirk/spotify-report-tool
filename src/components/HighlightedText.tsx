import React from 'react'

interface HighlightedTextProps {
    children: React.ReactNode
}

const HighlightedText = ({ children, ...props }: HighlightedTextProps) => (
    <div
        className="pl-8 pr-8 mt-8 mb-8 border-l-4 border-highlight-600 dark:border-highlight-300 italic"
        {...props}
    >
        {children}
    </div>
)

export default HighlightedText

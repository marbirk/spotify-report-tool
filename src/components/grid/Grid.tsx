import React from 'react'

interface GridProps {
    children: React.ReactNode
}

const Grid = ({ children, ...props }: GridProps) => (
    <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6"
        {...props}
    >
        {children}
    </div>
)

export default Grid

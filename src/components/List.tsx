import React from 'react'

interface ListProps {
    children: React.ReactNode
    className?: string
}

const List = ({ children, ...props }: ListProps) => (
    <ul {...props}>{children}</ul>
)

export default List

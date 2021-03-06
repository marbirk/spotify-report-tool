import React from 'react'

interface ListElementProps {
    children: React.ReactNode
}

const ListElement = ({ children, ...props }: ListElementProps) => (
    <li className="pr-2 pl-2" {...props}>
        {children}
    </li>
)

export default ListElement

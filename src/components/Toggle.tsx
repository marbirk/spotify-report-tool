import React from 'react'

interface ToggleProps {
    checked: boolean
    onChange: () => void
}

const Toggle = ({ checked, onChange }: ToggleProps) => (
    <span className="flex relative items-center pt-0 pr-1 pl-1">
        <input
            className="bg-gray-500 relative w-10 h-3 rounded-md cursor-pointer appearance-none outline-none dmcheck"
            type="checkbox"
            checked={checked}
            onChange={onChange}
            id="dmcheck"
        />
        <label htmlFor="dmcheck" />
    </span>
)

export default Toggle

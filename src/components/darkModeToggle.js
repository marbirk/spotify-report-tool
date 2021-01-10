import React from 'react'
import useDarkMode from 'use-dark-mode'
import Toggle from './Toggle'

const DarkModeToggle = () => {
    const darkModeConfig = {
        classNameDark: 'dark',
        classNameLight: 'light',
    }
    const darkMode = useDarkMode(false, darkModeConfig)

    return (
        <div className="dark-mode-toggle">
            <button type="button" onClick={darkMode.disable}>
                ☀
            </button>
            <Toggle
                type="checkbox"
                checked={darkMode.value}
                onChange={darkMode.toggle}
            />
            <button type="button" onClick={darkMode.enable}>
                ☾
            </button>
        </div>
    )
}

export default DarkModeToggle

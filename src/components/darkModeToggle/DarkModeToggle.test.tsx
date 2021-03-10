import React from 'react'
import { render, screen } from '@testing-library/react'

import DarkModeToggle from './DarkModeToggle'

describe('DarkModeToggle', () => {
    test('renders correctly', () => {
        render(<DarkModeToggle />)
        const component = screen.queryByTestId('dark-mode-toggle')
        expect(component).toBeInTheDocument()
        expect(component).toMatchSnapshot()
    })
})

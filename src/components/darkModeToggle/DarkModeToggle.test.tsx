import React from 'react'
import { render } from '@testing-library/react'

import DarkModeToggle from './DarkModeToggle'

describe('DarkModeToggle', () => {
    test('renders correctly', () => {
        const { container, getByText } = render(<DarkModeToggle />)
        expect(getByText('☀')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})

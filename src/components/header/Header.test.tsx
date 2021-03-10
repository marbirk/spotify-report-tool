import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
    test('renders correctly', () => {
        render(<Header />)
        const component = screen.queryByTestId('header')
        expect(component).toBeInTheDocument()
        expect(component).toMatchSnapshot()
    })
})

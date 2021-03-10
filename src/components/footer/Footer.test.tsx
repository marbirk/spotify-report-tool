import React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer', () => {
    test('renders correctly', () => {
        render(<Footer />)
        const component = screen.getByTestId('footer')
        expect(component).toBeInTheDocument()
        expect(component).toMatchSnapshot()
    })
})

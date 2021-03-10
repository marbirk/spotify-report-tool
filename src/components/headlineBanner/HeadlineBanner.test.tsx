import React from 'react'
import { render, screen } from '@testing-library/react'

import HeadlineBanner from './HeadlineBanner'

describe('HeadlineBanner', () => {
    test('renders on home correctly', () => {
        render(<HeadlineBanner pathname="/" />)
        const component = screen.getByTestId('headline-banner')
        expect(component).toBeInTheDocument()
        expect(component).toMatchSnapshot()
    })
    test('renders on other pages correctly', () => {
        render(<HeadlineBanner pathname="/about" />)
        const component = screen.getByTestId('headline-banner')
        expect(component).toBeInTheDocument()
        expect(component).toMatchSnapshot()
    })
})

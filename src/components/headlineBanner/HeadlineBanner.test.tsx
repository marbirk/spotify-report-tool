import React from 'react'
import { render } from '@testing-library/react'

import HeadlineBanner from './HeadlineBanner'

describe('HeadlineBanner', () => {
    test('renders on home correctly', () => {
        const { container, getByText } = render(<HeadlineBanner pathname="/" />)
        expect(getByText('I am')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
    test('renders on other pages correctly', () => {
        const { container, getByText } = render(
            <HeadlineBanner pathname="/about" />
        )
        expect(getByText('Marcel')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})

import React from 'react'
import { render } from '@testing-library/react'

import Footer from './Footer'

describe('Footer', () => {
    test('renders correctly', () => {
        const { container, getByText } = render(<Footer />)
        expect(getByText('Contact')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})

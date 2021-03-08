import React from 'react'
import { render } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
    test('renders correctly', () => {
        const { container, getByText } = render(<Header />)
        expect(getByText('I am')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})

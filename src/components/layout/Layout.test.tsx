import React from 'react'
import { render, screen } from '@testing-library/react'

import Layout from './Layout'

describe('Layout', () => {
    test('renders correctly', () => {
        render(<Layout>Layout children</Layout>)
        const component = screen.queryByText('Layout children')
        expect(component).toBeInTheDocument()
        expect(component).toMatchSnapshot()
    })
})

import React from 'react'
import { render } from '@testing-library/react'

import Layout from './Layout'

describe('Layout', () => {
    test('renders correctly', () => {
        const { container, getByText } = render(
            <Layout>Layout children</Layout>
        )
        expect(getByText('Layout children')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})

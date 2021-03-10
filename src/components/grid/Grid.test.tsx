import React from 'react'
import { render } from '@testing-library/react'

import Grid from './Grid'

describe('Grid', () => {
    test('renders correctly', () => {
        const { container, getByText } = render(<Grid>Grid children</Grid>)
        expect(getByText('Grid children')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})

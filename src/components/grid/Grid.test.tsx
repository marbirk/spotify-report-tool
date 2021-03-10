import React from 'react'
import { render, screen } from '@testing-library/react'

import Grid from './Grid'

describe('Grid', () => {
    test('renders correctly', () => {
        render(<Grid>Grid children</Grid>)
        const component = screen.getByText('Grid children')
        expect(component).toBeInTheDocument()
        expect(component).toMatchSnapshot()
    })
})

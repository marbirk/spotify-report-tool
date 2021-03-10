import React from 'react'
import { render, screen } from '@testing-library/react'

import Toggle from './Toggle'

describe('Toggle', () => {
    test('renders correctly', () => {
        render(<Toggle checked={true} onChange={() => {}} />)
        const component = screen.getByTestId('toggle')
        expect(component).toBeInTheDocument()
        expect(component).toMatchSnapshot()
    })
})

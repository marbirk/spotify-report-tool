import React from 'react'
import { render } from '@testing-library/react'

import Toggle from './Toggle'

describe('Toggle', () => {
    test('renders correctly', () => {
        const { container, getByTestId } = render(
            <Toggle checked={true} onChange={() => {}} />
        )
        expect(getByTestId('toggle')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})

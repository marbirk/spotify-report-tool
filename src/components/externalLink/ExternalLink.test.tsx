import React from 'react'
import { render, screen } from '@testing-library/react'

import ExternalLink from './ExternalLink'

describe('ExternalLink', () => {
    test('renders correctly', () => {
        render(
            <ExternalLink href="https://test-url.de">
                External Link
            </ExternalLink>
        )
        const component = screen.getByText('External Link')
        expect(component).toBeInTheDocument()
        expect(component).toMatchSnapshot()
    })
})

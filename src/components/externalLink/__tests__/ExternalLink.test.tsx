import React from 'react'
import { render } from '@testing-library/react'

import ExternalLink from '../ExternalLink'

describe('ExternalLink', () => {
    test('renders correctly', () => {
        const { container, getByText } = render(
            <ExternalLink href="https://test-url.de">
                External Link
            </ExternalLink>
        )
        expect(getByText('External Link')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})

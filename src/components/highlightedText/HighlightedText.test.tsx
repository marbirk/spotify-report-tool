import React from 'react'
import { render } from '@testing-library/react'

import HighlightedText from './HighlightedText'

describe('HighlightedText', () => {
    test('renders correctly', () => {
        const { container, getByText } = render(
            <HighlightedText>Highlighted Text</HighlightedText>
        )
        expect(getByText('Highlighted Text')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})

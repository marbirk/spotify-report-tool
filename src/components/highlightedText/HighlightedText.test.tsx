import React from 'react'
import { render, screen } from '@testing-library/react'

import HighlightedText from './HighlightedText'

describe('HighlightedText', () => {
    test('renders correctly', () => {
        render(<HighlightedText>Highlighted Text</HighlightedText>)
        const component = screen.queryByText('Highlighted Text')
        expect(component).toBeInTheDocument()
        expect(component).toMatchSnapshot()
    })
})

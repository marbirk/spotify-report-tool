import React from 'react'
import { render, screen } from '@testing-library/react'

import Link from './Link'

describe('Link', () => {
    test('renders correctly gatsby link', () => {
        render(<Link to="/network">Internal Link</Link>)
        const link = screen.getByRole('link')
        expect(link.getAttribute('target')).toBe(null)
        expect(link).toMatchSnapshot()
    })
    test('renders correctly external link', () => {
        render(<Link to={'https://test-url.de'}>External Link</Link>)
        const link = screen.getByRole('link')
        expect(link.getAttribute('target')).toBe('_blank')
        expect(link).toMatchSnapshot()
    })
})

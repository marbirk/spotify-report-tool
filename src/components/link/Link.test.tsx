import React from 'react'
import { render, screen } from '@testing-library/react'

import Link from './Link'

describe('Link', () => {
    test('renders correctly gatsby link', () => {
        render(<Link to="/network">Internal Link</Link>)
        const component = screen.getByText('Internal Link')
        expect(component.getAttribute('target')).toBe(null)
        expect(component).toMatchSnapshot()
    })
    test('renders correctly external link', () => {
        render(<Link to={'https://test-url.de'}>External Link</Link>)
        const component = screen.getByText('External Link')
        expect(component.getAttribute('target')).toBe('_blank')
        expect(component).toMatchSnapshot()
    })
})

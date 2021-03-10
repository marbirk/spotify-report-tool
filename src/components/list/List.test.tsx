import React from 'react'
import { render, screen } from '@testing-library/react'

import List from './List'

describe('List', () => {
    const entries = ['entry 1', 'entry 2', 'entry 3']
    test('renders correctly', () => {
        render(
            <List>
                {entries.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </List>
        )
        const component = screen.getByText('entry 1')
        expect(component).toBeInTheDocument()
        expect(component.parentNode).toMatchSnapshot()
    })
})

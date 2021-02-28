import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import List from '../List'

describe('List', () => {
    const entries = ['entry 1', 'entry 2', 'entry 3']
    test('renders correctly', () => {
        const { container, getByText } = render(
            <List>
                {entries.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </List>
        )
        expect(getByText('entry 1')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})

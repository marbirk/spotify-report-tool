import React from 'react'
import { render } from '@testing-library/react'

import ListElement from './ListElement'

describe('ListElement', () => {
    test('renders correctly', () => {
        const { container, getByText } = render(
            <ListElement>List Element</ListElement>
        )
        expect(getByText('List Element')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})

import React from 'react'
import { render, screen } from '@testing-library/react'

import ListElement from './ListElement'

describe('ListElement', () => {
    test('renders correctly', () => {
        render(<ListElement>List Element</ListElement>)
        const component = screen.getByText('List Element')
        expect(component).toBeInTheDocument()
        expect(component).toMatchSnapshot()
    })
})

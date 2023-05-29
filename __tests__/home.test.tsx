import { Home } from '@screens'

import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />)

		const heading = screen.getByRole('heading', {
			name: /welcome/i,
		})

		expect(heading).toBeInTheDocument()
	})
})

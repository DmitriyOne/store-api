import mockRouter from 'next-router-mock'

import { ActiveLink } from '@components'

import { render, screen } from '@testing-library/react'

jest.mock('next/router', () => require('next-router-mock'))

describe('ActiveLink', () => {
	it('should render a link with the provided children', () => {
		render(
			<ActiveLink href="/example">
				<span>Example Link</span>
			</ActiveLink>
		)

		const linkElement = screen.getByRole('link', { name: /example link/i })
		expect(linkElement).toBeInTheDocument()
		expect(linkElement.getAttribute('href')).toBe('/example')
	})

	it('should add active styles to the link when the current path matches href or as', () => {
		mockRouter.setCurrentUrl('/example')

		render(
			<ActiveLink href="/example">
				<span>Example Link</span>
			</ActiveLink>
		)

		const linkElement = screen.getByText(/example link/i)
		expect(linkElement.classList.contains('active')).toBe(true)
	})

	it('should not add active styles to the link when the current path does not match href or as', () => {
		mockRouter.setCurrentUrl('/another-page')

		render(
			<ActiveLink href="/example">
				<span>Example Link</span>
			</ActiveLink>
		)

		const linkElement = screen.getByText(/example link/i)
		expect(linkElement.classList.contains('active')).toBe(false)
	})
})

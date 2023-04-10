import { FC, ReactNode } from 'react'

import { Container } from '@components'

import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

interface IProps {
	children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="py-6">
				<Container variant="column" align="start">
					{children}
				</Container>
			</main>
			<Footer />
		</>
	)
}

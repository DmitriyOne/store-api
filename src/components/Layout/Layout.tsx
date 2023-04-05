import { FC, ReactNode } from 'react'

import { Container } from '../Container'

import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

interface IProps {
	children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				<Container size="m">
					{children}
				</Container>
			</main>
			<Footer />
		</>
	)
}

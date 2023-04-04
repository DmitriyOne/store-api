import { FC, ReactNode } from 'react'

import { Container } from '../Container'

import { Footer } from './Footer/Footer'
import { MyHeader } from './Header/Header'

interface IProps {
	children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<MyHeader />
			<main>
				<Container size="m">
					{children}
				</Container>
			</main>
			<Footer />
		</>
	)
}

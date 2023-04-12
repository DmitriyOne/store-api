import { FC, ReactNode } from 'react'

import { Container } from '@chakra-ui/react'

import { Footer } from './Footer'
import { Header } from './Header'

import { mainStyles } from './layout.styles'

interface IProps {
	children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			<Container
				as="main"
				{...mainStyles}
			>
				{children}
			</Container>
			<Footer />
		</>
	)
}

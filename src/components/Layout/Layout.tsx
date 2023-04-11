import { FC, ReactNode } from 'react'

import { Container } from '@chakra-ui/react'

import { Footer } from './Footer'
import { Header } from './Header'

interface IProps {
	children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			<Container
				maxW="container.xl"
				as="main"
				pt={{ base: 6, md: 10 }}
				px={4}
				pb={{ base: 10, md: 20 }}
			>
				{children}
			</Container>
			<Footer />
		</>
	)
}

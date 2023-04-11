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
			<Container maxW="container.xl" as="main" p={4}>
				{children}
			</Container>
			<Footer />
		</>
	)
}

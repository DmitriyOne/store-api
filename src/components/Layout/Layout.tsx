import { FC, ReactNode } from 'react'

import { Box } from '@chakra-ui/react'

import { Header } from './Header/Header'

interface IProps {
	children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			<Box as="main" p={4}>
				{children}
			</Box>
		</>
	)
}

import { Box, Flex, useColorModeValue } from '@chakra-ui/react'

import { Account } from './Account'
import { Navbar } from './Navbar'

export const Header = () => {
	return (
		<Box
			as="header"
			bg={useColorModeValue('gray.100', 'gray.900')}
			px={4}
		>
			<Flex
				h={16}
				justifyContent="space-between"
				alignItems="center"
				maxW="container.xl"
				margin="0 auto"
			>
				<Navbar />
				<Account />

				{/* 

				<MenuAccount /> */}
			</Flex>
		</Box>
	)
}

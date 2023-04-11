import { Box, Flex } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { Account } from './Account'
import { Navbar } from './Navbar'

export const Header = () => {
	const { headerBoxStyles } = useCustomStyles()

	return (
		<Box
			as="header"
			px={4}
			{...headerBoxStyles}
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
			</Flex>
		</Box>
	)
}

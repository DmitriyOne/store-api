import { Box, Flex } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { Account } from './Account'
import { Navbar } from './Navbar'

import { flexStyles, headerStyles } from './header.styles'

export const Header = () => {
	const { headerBoxStyles } = useCustomStyles()

	return (
		<Box
			as="header"
			{...headerStyles}
			{...headerBoxStyles}
		>
			<Flex {...flexStyles}>
				<Navbar />
				<Account />
			</Flex>
		</Box>
	)
}

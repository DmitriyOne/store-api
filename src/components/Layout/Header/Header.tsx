import { Box, Flex } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { Account } from './Account'
import { flexStyles, headerStyles } from './header.styles'
import { Navbar } from './Navbar'

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

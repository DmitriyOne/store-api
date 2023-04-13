import { Box, Flex } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { MenuAccount } from './MenuAccount'
import { MenuCart } from './MenuCart'
import { MenuMode } from './MenuMode'
import { Navbar } from './Navbar'

import {  flexRightStyles, flexWrapStyles, headerStyles } from './header.styles'

export const Header = () => {
	const { headerBoxStyles } = useCustomStyles()

	return (
		<Box
			as="header"
			{...headerStyles}
			{...headerBoxStyles}
		>
			<Flex {...flexWrapStyles}>
				<Navbar />

				<Flex {...flexRightStyles}>
					<MenuMode />
					<MenuCart />
					<MenuAccount />
				</Flex>
			</Flex>
		</Box>
	)
}

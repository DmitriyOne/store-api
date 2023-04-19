import { useContext } from 'react'
import { AuthContext } from 'src/context'

import { Box, Flex } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { MenuAccount } from './MenuAccount'
import { MenuCart } from './MenuCart'
import { MenuLogin } from './MenuLogin'
import { MenuMode } from './MenuMode'
import { Navbar } from './Navbar'

import { flexRightStyles, flexWrapStyles, headerStyles } from './header.styles'

export const Header = () => {
	const { headerBoxStyles } = useCustomStyles()
	const { isAuth } = useContext(AuthContext)

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
					{isAuth ? <MenuAccount /> : <MenuLogin />}
				</Flex>
			</Flex>
		</Box>
	)
}

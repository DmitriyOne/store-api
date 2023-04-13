import { HStack } from '@chakra-ui/react'

import { Logo } from '../Logo'

import { MenuBurger } from './MenuBurger'
import { MenuDesktop } from './MenuDesktop'
import { MenuMobile } from './MenuMobile'

import { hStackStyles } from './navbar.styles'

export const Navbar = () => {

	return (
		<HStack {...hStackStyles}>
			<Logo />
			<MenuBurger />
			<MenuDesktop />
			<MenuMobile />
		</HStack>
	)
}

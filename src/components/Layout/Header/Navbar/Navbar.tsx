import { HStack, useDisclosure } from '@chakra-ui/react'

import { Logo } from '../Logo'

import { MenuBurger } from './MenuBurger'
import { MenuDesktop } from './MenuDesktop'
import { MenuMobile } from './MenuMobile'

import { hStackStyles } from './navbar.styles'

export const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<HStack {...hStackStyles}>
			<Logo />

			<MenuBurger
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
			/>

			<MenuDesktop />

			<MenuMobile
				isOpen={isOpen}
				onClose={onClose}
			/>
		</HStack>
	)
}

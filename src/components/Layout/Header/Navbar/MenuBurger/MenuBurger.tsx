import { useContext } from 'react'

import { IconButton } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

import { HeaderContext } from '@context'

import { iconStyles } from './menu-burger.styles'

export const MenuBurger = () => {
	const { isOpenNav, onOpenNav, onCloseNav } = useContext(HeaderContext)

	return (
		<IconButton
			onClick={isOpenNav ? onCloseNav : onOpenNav}
			icon={isOpenNav ? <CloseIcon /> : <HamburgerIcon />}
			{...iconStyles}
		/>
	)
}

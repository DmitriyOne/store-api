import { useContext } from 'react'
import { HeaderContext } from 'src/context'

import { IconButton } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

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

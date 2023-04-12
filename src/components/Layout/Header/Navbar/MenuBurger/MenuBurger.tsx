import { FC } from 'react'

import { IconButton } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

import { iconStyles } from './menu-burger.styles'

interface IProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

export const MenuBurger: FC<IProps> = ({ isOpen, onOpen, onClose }) => {

	return (
		<IconButton
			onClick={isOpen ? onClose : onOpen}
			icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
			{...iconStyles}
		/>
	)
}

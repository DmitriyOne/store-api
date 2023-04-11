import { FC } from 'react'

import { IconButton } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

interface IProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

export const MenuBurger: FC<IProps> = ({ isOpen, onOpen, onClose }) => {

	return (
		<IconButton
			size="md"
			icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
			aria-label="Open Menu"
			display={{ md: 'none' }}
			onClick={isOpen ? onClose : onOpen}
		/>
	)
}

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
			onClick={isOpen ? onClose : onOpen}

			size="md"
			icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
			display={{ md: 'none' }}
			zIndex="99"
			aria-label="Open Menu"
		/>
	)
}

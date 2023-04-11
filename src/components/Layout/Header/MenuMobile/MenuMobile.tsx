import React, { FC } from 'react'

import { Box, IconButton, Stack, useDisclosure } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

import { menuItem } from '../menu'
import { NavLink } from '../NavLink'

interface IProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

export const MenuMobile: FC<IProps> = ({ isOpen, onOpen, onClose }) => {

	return (
		<>
			<IconButton
				size="md"
				icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
				aria-label="Open Menu"
				display={{ md: 'none' }}
				onClick={isOpen ? onClose : onOpen}
			/>
		</>
	)
}

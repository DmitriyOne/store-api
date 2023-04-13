import { FC } from 'react'

import { Box, Flex } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { menuItem } from '../menu'
import { NavLink } from '../NavLink'

import { navActiveStyles, navStyles, ulStyles } from './menu-mobile.styles'

interface IProps {
	isOpen: boolean
	onClose: () => void
}

export const MenuMobile: FC<IProps> = ({ isOpen, onClose }) => {
	const { menuMobBoxStyles } = useCustomStyles()

	const activeClass = isOpen && { ...navActiveStyles }
	return (
		<Box
			as="nav"
			{...navStyles}
			{...activeClass}
			{...menuMobBoxStyles}
		>
			<Flex
				as="ul"
				{...ulStyles}
			>
				{menuItem.map((item, idx) => (
					<NavLink
						key={idx}
						menu={item}
						onClick={onClose}
					/>
				))}
			</Flex>
		</Box>
	)
}

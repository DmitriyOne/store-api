import { FC } from 'react'

import { Box, Flex } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { menuItem } from '../menu'
import { NavLink } from '../NavLink'

import { navStyles, ulStyles } from './menu-mobile.styles'

interface IProps {
	onClose: () => void
}

export const MenuMobile: FC<IProps> = ({ onClose }) => {
	const { menuMobBoxStyles } = useCustomStyles()

	return (
		<Box
			as="nav"
			{...navStyles}
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

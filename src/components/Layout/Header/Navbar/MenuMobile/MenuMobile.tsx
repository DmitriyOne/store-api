import { useContext } from 'react'
import { HeaderContext } from 'src/context'

import { Box, Flex } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { menuItem } from '../menu'
import { NavLink } from '../NavLink'

import { navActiveStyles, navStyles, ulStyles } from './menu-mobile.styles'

export const MenuMobile = () => {
	const { menuMobBoxStyles } = useCustomStyles()
	const { isOpenNav, onCloseNav } = useContext(HeaderContext)

	const activeClass = isOpenNav && { ...navActiveStyles }
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
						onClick={onCloseNav}
					/>
				))}
			</Flex>
		</Box>
	)
}

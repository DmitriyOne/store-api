import { HStack } from '@chakra-ui/react'

import { menuItem } from '../menu'
import { NavLink } from '../NavLink'

import { navStyles, ulStyles } from './menu-desktop.styles'

export const MenuDesktop = () => {

	return (
		<HStack
			as="nav"
			{...navStyles}
		>
			<HStack
				as="ul"
				{...ulStyles}
			>
				{menuItem.map((item, idx) =>
					<NavLink
						key={idx}
						menu={item}
					/>
				)}
			</HStack>
		</HStack>
	)
}

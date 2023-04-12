import { HStack } from '@chakra-ui/react'

import { Logo } from '../../Logo'
import { menuItem } from '../menu'
import { NavLink } from '../NavLink'

import { hStackStyles, navStyles, ulStyles } from './menu-desktop.styles'

export const MenuDesktop = () => {

	return (
		<HStack
			{...hStackStyles}
		>
			<Logo />

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
		</HStack>
	)
}

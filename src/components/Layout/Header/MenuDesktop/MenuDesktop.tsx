import React from 'react'

import { HStack } from '@chakra-ui/react'

import { menuItem } from '../menu'
import { NavLink } from '../NavLink'

export const MenuDesktop = () => {

	return (
		<HStack
			as="nav"
			spacing={8}
			alignItems="center"
			display={{ base: 'none', md: 'flex' }}
		>
			<HStack
				as="ul"
				spacing={4}
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

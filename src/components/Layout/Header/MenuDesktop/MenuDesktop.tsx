import { HStack } from '@chakra-ui/react'

import { Logo } from '../Logo'
import { menuItem } from '../menu'
import { NavLink } from '../NavLink'

export const MenuDesktop = () => {

	return (
		<HStack
			spacing={8}
			alignItems="center"
		>
			<Logo />
			
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
		</HStack>
	)
}

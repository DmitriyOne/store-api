import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { buttonStyles } from './menu-account.styles'

export const MenuAccount = () => {

	return (
		<Menu>
			<MenuButton
				as={Button}
				variant="link"
				{...buttonStyles}
			>
				<Avatar size="sm" />
			</MenuButton>
			<MenuList>
				<MenuItem>Link 1</MenuItem>
				<MenuItem>Link 2</MenuItem>
			</MenuList>
		</Menu>
	)
}

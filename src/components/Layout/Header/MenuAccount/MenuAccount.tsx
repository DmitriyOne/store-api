import NextLink from 'next/link'

import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { menuItem } from './menu'

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
				{menuItem.map(item =>
					<MenuItem
						as={NextLink}
						key={item.href}
						href={item.href}
					>
						{item.title}
					</MenuItem>
				)}
			</MenuList>
		</Menu>
	)
}

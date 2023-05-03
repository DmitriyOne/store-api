import NextLink from 'next/link'

import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { useAppActions, useAppSelector } from '@hooks'

import { menuItem } from './menu'

import { buttonStyles } from './menu-account.styles'

export const MenuAccount = () => {
	const { user } = useAppSelector(state => state)
	const { removeUser } = useAppActions()

	const userName = user.name.toLowerCase().replace(/\s+/g, '').trim()

	const handlerLogout = (e: any) => {
		e.preventDefault()
		removeUser()
	}

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
						href={{
							pathname: item.href,
							query: { displayName: userName },
						}}
					>
						{item.title}
					</MenuItem>
				)}
			</MenuList>
		</Menu>
	)
}

import NextLink from 'next/link'

import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { useAuth } from '@hooks'

import { menuItem } from './menu'

import { buttonStyles } from './menu-account.styles'

export const MenuAccount = () => {
	const { user, logout } = useAuth()

	const userName = user.name.toLowerCase().replace(/\s+/g, '').trim()

	return (
		<Menu>
			<MenuButton
				as={Button}
				variant="link"
				{...buttonStyles}
			>
				<Avatar
					size="sm"
					name={user.name}
					src={user.avatar}
				/>
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
				<MenuItem
					as="button"
					onClick={logout}
				>
					Logout
				</MenuItem>

			</MenuList>
		</Menu>
	)
}

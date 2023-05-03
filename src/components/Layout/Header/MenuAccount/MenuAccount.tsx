import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'firebase/auth'

import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useAppActions, useAppSelector } from '@hooks'

import { menuItem } from './menu'

import { buttonStyles } from './menu-account.styles'

import { auth } from '@fb'

export const MenuAccount = () => {
	const { user } = useAppSelector(state => state)
	const { removeUser } = useAppActions()
	const route = useRouter()

	const userName = user.name.toLowerCase().replace(/\s+/g, '').trim()

	const logout = () => {
		signOut(auth).then(() => {
			route.push(STORE_ROUTES.SHOP)
			removeUser()
		}).catch((error) => {
			console.log(error)
		})
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

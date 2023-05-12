import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { useAuth } from '@hooks'

import { ActiveLink } from '@components'

import { buttonStyles } from './menu-account.styles'

export const MenuAccount = () => {
	const { user, logout } = useAuth()

	const userName = user.name?.toLowerCase().replace(/\s+/g, '').trim()

	return (
		<Menu>
			<MenuButton
				as={Button}
				variant="link"
				{...buttonStyles}
			>
				{user.avatar
					?
					<Avatar
						size="sm"
						src={user.avatar}
					/>
					:
					<Avatar
						size="sm"
						name={user.name}
						src={undefined}
					/>
				}
			</MenuButton>
			<MenuList>
				<ActiveLink
					href={`/account/${userName}`}
					activeClassName="dropdown-menu-link_active"
				>
					<MenuItem as="span">
						Account
					</MenuItem>
				</ActiveLink>
				<ActiveLink
					href={`/account/${userName}/orders`}
					activeClassName="dropdown-menu-link_active"
				>
					<MenuItem as="span">
						My orders
					</MenuItem>
				</ActiveLink>
				<ActiveLink
					href={`/account/${userName}/settings`}
					activeClassName="dropdown-menu-link_active"
				>
					<MenuItem as="span">
						Setting
					</MenuItem>
				</ActiveLink>
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

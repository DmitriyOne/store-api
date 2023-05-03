import { MouseEvent } from 'react'
import NextLink from 'next/link'
import { useSelector } from 'react-redux'

import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { useAppActions, useAppSelector } from '@hooks'

import { menuItem } from './menu'

import { buttonStyles } from './menu-account.styles'

export const MenuAccount = () => {
	const { user } = useAppSelector(state => state)
	const { removeUser } = useAppActions()

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
							query: { displayName: user.name.toLowerCase() },
						}}
					>
						{item.title}
					</MenuItem>
				)}
			</MenuList>
		</Menu>
	)
}

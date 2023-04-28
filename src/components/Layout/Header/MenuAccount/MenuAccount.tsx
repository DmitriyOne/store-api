import { MouseEvent } from 'react'
import NextLink from 'next/link'

import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { useAppActions } from '@hooks'

import { menuItem } from './menu'

import { buttonStyles } from './menu-account.styles'

export const MenuAccount = () => {
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
						href={item.href}
						onClick={(e) => handlerLogout(e)}
					>
						{item.title}
					</MenuItem>
				)}
			</MenuList>
		</Menu>
	)
}

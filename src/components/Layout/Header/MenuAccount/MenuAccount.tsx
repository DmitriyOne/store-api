import React from 'react'

import { Avatar, Button, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import avatarSrc from '@images/avatar-placeholder.jpeg'

export const MenuAccount = () => {

	return (
		<Flex alignItems={'center'}>
			<Menu>
				<MenuButton
					as={Button}
					rounded={'full'}
					variant={'link'}
					cursor={'pointer'}
					minW={0}>
					<Avatar
						size={'sm'}
						src={avatarSrc}
					/>
				</MenuButton>
				<MenuList>
					<MenuItem>Link 1</MenuItem>
					<MenuItem>Link 2</MenuItem>
				</MenuList>
			</Menu>
		</Flex>

	)
}

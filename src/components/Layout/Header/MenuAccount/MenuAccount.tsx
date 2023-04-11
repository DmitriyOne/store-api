import { Avatar, Button, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

export const MenuAccount = () => {

	return (
		<Flex alignItems="center">
			<Menu>
				<MenuButton
					as={Button}
					rounded="full"
					variant="link"
					cursor="pointer"
					minW={0}
				>
					<Avatar size="sm" />
				</MenuButton>
				<MenuList>
					<MenuItem>Link 1</MenuItem>
					<MenuItem>Link 2</MenuItem>
				</MenuList>
			</Menu>
		</Flex>

	)
}

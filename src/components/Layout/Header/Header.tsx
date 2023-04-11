import { Box, Flex, HStack, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react'

import { Logo } from './Logo'
import { menuItem } from './menu'
import { MenuAccount } from './MenuAccount'
import { MenuDesktop } from './MenuDesktop'
import { MenuMobile } from './MenuMobile'
import { NavLink } from './NavLink'

export const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box
			as="header"
			bg={useColorModeValue('gray.100', 'gray.900')}
			px={4}
		>
			<Flex
				h={16}
				alignItems="center"
				justifyContent="space-between"
			>
				<MenuMobile isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
				<HStack spacing={8} alignItems={'center'}>
					<Logo />
					<MenuDesktop />
				</HStack>
				<MenuAccount />

			</Flex>

			{isOpen ? (
				<Box as="nav" pb={4} display={{ md: 'none' }}>
					<Stack as="ul" spacing={4}>
						{menuItem.map((item, idx) => (
							<NavLink key={idx} menu={item} />
						))}
					</Stack>
				</Box>
			) : null}
		</Box>
	)
}

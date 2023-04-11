import { Box, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react'

import { MenuAccount } from './MenuAccount'
import { MenuBurger } from './MenuBurger'
import { MenuDesktop } from './MenuDesktop'
import { MenuMobile } from './MenuMobile'

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
				justifyContent="space-between"
				alignItems="center"
				maxW="container.xl"
				margin="0 auto"
			>
				<MenuBurger
					isOpen={isOpen}
					onOpen={onOpen}
					onClose={onClose}
				/>
				<MenuDesktop />
				<MenuAccount />
			</Flex>

			{isOpen && <MenuMobile onClose={onClose} />}
		</Box>
	)
}

import { Button, Flex, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { MenuAccount } from './MenuAccount'

export const Account = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex alignItems="center">
			<Button
				onClick={toggleColorMode}
				marginRight="2"
			>
				{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			</Button>

			<MenuAccount />
		</Flex>
	)
}

import { Button, Flex, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { buttonStyles, flexStyles } from './account.styles'
import { MenuAccount } from './MenuAccount'

export const Account = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex {...flexStyles}>
			<Button
				onClick={toggleColorMode}
				{...buttonStyles}
			>
				{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			</Button>

			<MenuAccount />
		</Flex>
	)
}

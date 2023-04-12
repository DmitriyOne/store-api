import { Button, Flex, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { MenuAccount } from './MenuAccount'

import { buttonStyles, flexStyles } from './account.styles'

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

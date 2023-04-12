import { Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { componentStyles } from './menu-mode.styles'

export const MenuMode = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Button
			onClick={toggleColorMode}
			
			{...componentStyles}
		>
			{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
		</Button>
	)
}

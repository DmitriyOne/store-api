import { IconButtonProps } from '@chakra-ui/react'

export const iconStyles: IconButtonProps = {
	bg: 'transparent',
	size: 'md',
	display: { base: 'block', md: 'none' },
	zIndex: '100',
	mr: { base: '1rem !important', md: 0 },
	'aria-label': 'Open Menu',
	_hover: {
		bg: 'transparent',
	},
}

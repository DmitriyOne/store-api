import { AlertProps } from '@chakra-ui/react'

export const componentStyles: AlertProps = {
	position: 'absolute',
	top: 0,
	right: { base: '10px', md: '20px' },
	maxW: { base: '250px', md: '300px' },
	zIndex: 999999999,
	mt: { base: 3, md: 8 },
	variant: 'left-accent',
	fontSize: { base: 'xs', md: 'sm' },
}

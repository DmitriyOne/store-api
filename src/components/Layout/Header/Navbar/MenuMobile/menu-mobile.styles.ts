import { BoxProps, FlexProps } from '@chakra-ui/react'

export const navStyles: BoxProps = {
	pb: 4,
	display: { md: 'none' },
	position: 'fixed',
	top: '0',
	left: '0',
	width: 'full',
	height: 'full',
}

export const ulStyles: FlexProps = {
	direction: 'column',
	justify: 'center',
	align: 'center',
	height: 'full',
}

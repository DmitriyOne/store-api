import { BoxProps, FlexProps } from '@chakra-ui/react'

export const navStyles: BoxProps = {
	pb: 4,
	display: { md: 'none' },
	position: 'fixed',
	top: '0',
	left: '-100%',
	width: 'full',
	height: 'full',
	zIndex: '99',
	transition: 'all .4s',
}

export const navActiveStyles: BoxProps = {
	left: '0',
}

export const ulStyles: FlexProps = {
	direction: 'column',
	justify: 'center',
	align: 'center',
	height: 'full',
}

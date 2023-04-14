import { BoxProps, ButtonProps, IconProps } from '@chakra-ui/react'

export const tooltipStyles: BoxProps = {
	bg: 'white',
	color: 'gray.800',
	fontSize: '1em',
}

export const buttonStyles: ButtonProps = {
	display: 'flex',
	position: 'absolute',
	top: { base: '1', lg: '2' },
	right: { base: '1', lg: '2' },
	p: '2',
	bg: 'transparent',
	_hover: {
		bg: 'transparent',
	},
	_disabled: {
		opacity: 1,
	},
}

export const iconStylesDefault: IconProps = {
	h: 5,
	w: 5,
	fill: 'transparent',
	stroke: 'red.400',
	alignSelf: 'center',
	transition: 'all .3s',
}

export const iconStylesActive: IconProps = {
	h: 5,
	w: 5,
	fill: 'red.500',
	stroke: 'red.500',
	alignSelf: 'center',
	transition: 'all .2s',
}

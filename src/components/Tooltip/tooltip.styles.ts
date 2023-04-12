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
}

export const iconStyles: IconProps = {
	h: 5,
	w: 5,
	alignSelf: 'center',
}

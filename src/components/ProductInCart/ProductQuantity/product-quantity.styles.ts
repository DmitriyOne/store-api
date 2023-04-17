import { ButtonProps, FlexProps, IconProps, TextProps } from '@chakra-ui/react'

export const componentStyles: FlexProps = {
	w: 'full',
	maxWidth: '200px',
	alignItems: 'center',
	justifyContent: 'center',
	mt: { base: '3', md: 0 },
}

export const buttonStyles: ButtonProps = {
	p: 0,
	bg: 'transparent',
	_hover: {
		bg: 'transparent',
	},
}

export const iconStyles: IconProps = {
	w: 5,
	h: 5,
}

export const textStyles: TextProps = {
	fontSize: { base: 'xs', md: 'lg' },
	pl: 2,
	pr: 2,
}

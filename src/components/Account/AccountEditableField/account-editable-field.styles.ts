import { BoxProps, ButtonProps, FlexProps, FormControlProps, IconProps, InputProps, InputRightElementProps, TextProps } from '@chakra-ui/react'

export const componentStyles: FormControlProps = {
	pb: 4,
}

export const textTitleStyles: TextProps = {
	fontSize: '2xl',
	cursor: 'default',
}

export const textDefaultStyles: TextProps = {
	fontSize: { base: 'md', md: 'lg' },
	cursor: 'default',
}

export const inputWrapperStyles: FlexProps = {
	flexDirection: 'column',
	w: 'full',
}

export const inputStyles: InputProps = {
	variant: 'flushed',
}

export const inputBtnWrapperStyles: BoxProps = {
	display: 'block',
}

export const inputBtnCancelStyles: ButtonProps = {
	bg: 'gray.100',
	color: 'red.500',
	cursor: 'pointer',
	h: 'auto',
	fontSize: 'xs',
	pt: 1,
	pb: 1,
	pl: 2,
	pr: 2,
	_hover: {
		bg: 'gray.100',
		textDecoration: 'underline',
	},
}

export const inputBtnSaveStyles: ButtonProps = {
	bg: 'green.100',
	color: 'green.600',
	cursor: 'pointer',
	ml: '2',
	h: 'auto',
	fontSize: 'xs',
	pt: 1,
	pb: 1,
	pl: 2,
	pr: 2,
	_hover: {
		bg: 'green.100',
		textDecoration: 'underline',
	},
}

export const iconWrapperStyles: InputRightElementProps = {
	cursor: 'pointer',
	pos: 'relative',
	h: 'auto',
	w: 'auto',
	ml: 2,
}

export const iconStyles: IconProps = {
	color: 'gray.500',
}

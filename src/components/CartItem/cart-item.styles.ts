import { ButtonProps, FlexProps } from '@chakra-ui/react'

export const componentStyles: FlexProps = {
	direction: { base: 'column', md: 'row' },
	justify: 'space-between',
	align: 'center',
}

export const flexStyles: FlexProps = {
	direction: { base: 'column', md: 'row' },
	justify: 'space-between',
	align: 'center',
}

export const flexOnDesktopStyles: FlexProps = {
	// width: 'full',
	display: { base: 'none', md: 'flex' },
	align: 'center',
	justify: 'space-between',
	flex: 1
}

export const flexOnMobileStyles: FlexProps = {
	width: 'full',
	display: { base: 'flex', md: 'none' },
	justify: 'space-between',
	align: 'center',
	mt: '4',
}

export const buttonOnMobileStyles: ButtonProps = {
	bg: 'transparent',
	color: 'red.500',
	h: 'auto',
	p: 0,
	fontSize: 12,
	textDecoration: 'underline',
}

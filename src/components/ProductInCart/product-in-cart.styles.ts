import { ButtonProps, FlexProps } from '@chakra-ui/react'

export const componentStyles: FlexProps = {
	w: 'full',
	direction: { base: 'column', md: 'row' },
	justify: 'space-between',
	align: 'center',
	boxShadow: { base: 'md', md: 'none' },
	py: { base: 2, md: 0 },
	px: { base: 4, md: 0 },
	rounded: 'md',
}

export const flexStyles: FlexProps = {
	direction: { base: 'column', md: 'row' },
	justify: 'space-between',
	align: 'center',
}

export const flexOnDesktopStyles: FlexProps = {
	display: { base: 'none', md: 'flex' },
	align: 'center',
	justify: 'space-between',
	flex: 1,
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

import { ButtonProps, FlexProps } from '@chakra-ui/react'

export const componentStyles: FlexProps = {
	w: 'full',
	maxW: 'container.md',
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

export const buttonOnMobileStyles: ButtonProps = {
	bg: 'transparent',
	color: 'red.500',
	h: 'auto',
	p: 0,
	fontSize: 12,
	textDecoration: 'underline',
	mt: 3,
	ml: 'auto',
}

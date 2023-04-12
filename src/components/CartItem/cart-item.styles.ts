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

export const flexOnMobileStyles: FlexProps = {
	mt: '4',
	align: 'center',
	width: 'full',
	justify: 'space-between',
	display: { base: 'flex', md: 'none' },
}

export const buttonOnMobileStyles: ButtonProps = {
	bg: 'transparent',
	color: 'red.500',
	h: 'auto',
	p: 0,
	fontSize: 12,
	textDecoration: 'underline',
}

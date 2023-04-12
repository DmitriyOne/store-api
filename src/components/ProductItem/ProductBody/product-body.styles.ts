import { FlexProps, HeadingProps } from '@chakra-ui/react'

export const flexMainStyles: FlexProps = {
	h: 'full',
	direction: 'column',
	justifyContent: 'space-between',
}

export const titleStyles: HeadingProps = {
	fontSize: { base: 'md', md: 'lg', lg: 'xl' },
	fontWeight: 'semibold',
	lineHeight: 'tight',
	textAlign: 'center',
	mb: 1,
}

export const flex2Styles: FlexProps = {
	direction: { base: 'column', md: 'column' },
	justifyContent: 'space-between',
	alignItems: 'center',
}

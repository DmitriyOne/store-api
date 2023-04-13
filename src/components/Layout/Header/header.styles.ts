import { BoxProps, FlexProps } from '@chakra-ui/react'

export const headerStyles: BoxProps = {
	pr: 4,
	pl: { base: 1, md: 4 },
}

export const flexWrapStyles: FlexProps = {
	h: 16,
	justifyContent: 'space-between',
	alignItems: 'center',
	maxW: 'container.xl',
	margin: '0 auto',
}

export const flexLeftStyles: FlexProps = {
	alignItems: 'center',
}

export const flexRightStyles: FlexProps = {
	alignItems: 'center',
	position: 'relative',
	zIndex: '100',
}

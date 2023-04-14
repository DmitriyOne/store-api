import { BoxProps, ImageProps, StackProps, TextProps } from '@chakra-ui/react'

export const componentStyles: StackProps = {
	direction: 'row',
	spacing: '5',
	width: { base: 'full', md: 'auto' },
	flex: 2.5,
}

export const boxStyles: BoxProps = {
	pt: '4',
}

export const imageStyles: ImageProps = {
	width: { base: '80px', md: '120px' },
	minW: { base: '80px', md: '120px' },
	height: { base: '80px', md: '120px' },
	draggable: 'false',
	objectFit: 'contain',
}

export const stackStyles: StackProps = {
	spacing: '0.5',
}

export const titleStyles: TextProps = {
	fontSize: { base: 'sm', md: 'md' },
	fontWeight: 'medium',
	maxW: { base: 'full', md: '60' },
}

export const categoryStyles: TextProps = {
	fontSize: { base: 'xs', md: 'sm' },
}

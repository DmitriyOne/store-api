import { ButtonProps, FlexProps, HeadingProps, IconProps, ImageProps, StackProps, TextProps } from '@chakra-ui/react'

export const componentStyles: FlexProps = {
	flexDirection: { base: 'column', md: 'row' },
}

export const imageWrapStyles: FlexProps = {
	pos: 'relative',
	w: 'full',
	maxW: { base: 'full', md: '35%', lg: '25%' },
	mr: { base: 0, md: '8', lg: '16' },
	mb: { base: 4, md: 0 },
	justifyContent: { base: 'center', md: 'start' },
}

export const imageStyles: ImageProps = {
	maxH: { base: 250, md: 350, lg: 450 },
	objectFit: 'contain',
}

export const contextWrapStyles: FlexProps = {
	maxW: { base: 'full', md: '65%', lg: '75%' },
	direction: 'column',
	alignItems: 'start',
}

export const titleStyles: HeadingProps = {
	fontSize: { base: 'lg', md: '2xl', lg: '3xl' },
	maxW: { base: 'full', md: 600 },
}

export const categoryWrapStyles: FlexProps = {
	pb: { base: 6, md: 4 },
	lineHeight: { base: '100%', md: '130%' },
}

export const categoryTextStyles: TextProps = {
	fontSize: { base: 'xs', md: 'md' },
	lineHeight: { base: '100%', md: '130%' },
}

export const descriptionWrapStyles: FlexProps = {
	pb: 2,
}

export const descriptionTextStyles: TextProps = {
	fontSize: { base: 'sm', md: 'md' },
}

export const rateWrapStyles: FlexProps = {
	pb: 2,
}

export const rateCountTextStyles: TextProps = {
	fontSize: { base: 'xs', md: 'sm' },
}

export const priceWrapStyles: FlexProps = {
	pb: { base: 5, md: 8 },
}

export const priceTextStyles: TextProps = {
	fontSize: 'xl',
}

export const priceTextThroughStyles: TextProps = {
	textDecoration: 'line-through',
	color: 'slategray',
}

export const btnWrapStyles: StackProps = {
	spacing: { base: 0, md: 3 },
	direction: 'row',
	align: 'center',
	w: { base: 'full', md: 'auto' },
}

export const btnCartDefaultStyles: ButtonProps = {
	variant: 'solid',
	w: { base: 'full', md: 'auto' },
}

export const btnCartDisabledStyles: ButtonProps = {
	variant: 'solid',
	w: { base: 'full', md: 'auto' },
	bg: 'blackAlpha.200',
	color: 'gray.400',
	cursor: 'no-drop',
	_hover: {
		bg: 'blackAlpha.200',
	},
}

export const iconCartStyles: IconProps = {
	h: { base: 6, md: 4 },
	w: { base: 6, md: 4 },
	alignSelf: 'center',
	transition: 'all .3s',
	mr: 2,
}

export const btnFavoritesStyles: ButtonProps = {
	variant: { base: 'unstyled', md: 'outline' },
	display: 'flex',
	h: { base: '25px', md: '100%' },
	minW: { base: '25px', md: 'auto' },
	minH: { base: '25px', md: '100%' },
	position: { base: 'absolute', md: 'relative' },
	top: { base: '0', md: '0' },
	right: { base: '0', md: '0' },
	px: { base: 0, md: 4 },
}

export const iconFavDefaultStyles: IconProps = {
	h: { base: 6, md: 4 },
	w: { base: 6, md: 4 },
	fill: 'transparent',
	stroke: 'red.400',
	alignSelf: 'center',
	transition: 'all .3s',
	ml: { base: 0, md: 2 },
}

export const iconFavActiveStyles: IconProps = {
	h: { base: 6, md: 4 },
	w: { base: 6, md: 4 },
	fill: 'red.400',
	stroke: 'red.400',
	alignSelf: 'center',
	transition: 'all .3s',
	ml: { base: 0, md: 2 },
}

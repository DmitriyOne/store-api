import { AvatarProps, BoxProps, ButtonProps, FlexProps, IconProps } from '@chakra-ui/react'

export const componentStyles: FlexProps = {
	flexDirection: 'column',
	pos: 'relative',
}

export const avatarWrapperStyles: BoxProps = {
	pos: 'relative',
}

export const avatarRemoveBtnStyles: ButtonProps = {
	p: 0,
	bg: 'transparent',
}

export const avatarStyles: AvatarProps = {
	size: '2xl',
	bg: '#6a7f8f',
}

export const buttonIconStyles: IconProps = {
	mr: 2,
}

export const uploadWrapperStyles: BoxProps = {
	mt: 2,
	display: { base: 'flex', md: 'block' },
}

export const uploadButtonStyles: ButtonProps = {
	display: 'block',
	minW: { base: '90px', md: '104px' },
	variant: 'outline',
	fontSize: { base: 'xs', md: 'sm' },
	h: 'auto',
	pl: { base: 2, md: 4 },
	pr: { base: 2, md: 4 },
	pt: 2,
	pb: 2,
	ml: { base: 0, md: 'auto' },
	mr: { base: 0, md: 'auto' },
}

export const removeButtonStyles: ButtonProps = {
	display: 'block',
	variant: 'outline',
	minW: { base: '90px', md: '104px' },
	fontSize: { base: 'xs', md: 'sm' },
	h: 'auto',
	pl: { base: 2, md: 4 },
	pr: { base: 2, md: 4 },
	pt: 2,
	pb: 2,
	ml: { base: '10px', md: 'auto' },
	mr: { base: 0, md: 'auto' },
	mt: { base: 0, md: '10px' },
	bg: 'transparent',
	color: 'red.500',
	_hover: {
		bg: 'red.50',
	},
}

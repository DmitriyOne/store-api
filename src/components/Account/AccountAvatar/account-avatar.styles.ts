import { AvatarProps, BoxProps, ButtonProps, FlexProps, IconProps } from '@chakra-ui/react'

export const componentStyles: FlexProps = {
	flexDirection: 'column',
	pos: 'relative',
}

export const avatarStyles: AvatarProps = {
	size: '2xl',
}

export const buttonIconStyles: IconProps = {
	mr: 2,
}

export const uploadWrapperStyles: BoxProps = {
	mt: 2,
}

export const uploadButtonStyles: ButtonProps = {
	display: 'block',
	variant: 'outline',
	fontSize: { base: 'xs', md: 'sm' },
	h: 'auto',
	pl: { base: 2, md: 4 },
	pr: { base: 2, md: 4 },
	pt: 2,
	pb: 2,
	ml: 'auto',
	mr: 'auto',
}

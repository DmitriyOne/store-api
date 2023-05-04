import { AvatarProps, BoxProps, ButtonProps, FlexProps, IconProps } from '@chakra-ui/react'

export const componentStyles: FlexProps = {
	flexDirection: 'column',
	pos: 'relative',
}

export const avatarMarginRStyles: AvatarProps = {
	size: '2xl',
	mr: 4,
}

export const avatarMarginLStyles: AvatarProps = {
	size: '2xl',
	ml: { base: 3, md: 8 },
}

export const buttonIconStyles: IconProps = {
	mr: 2,
}

export const uploadWrapperStyles: BoxProps = {
	mt: 2,
}

export const uploadButtonStyles: ButtonProps = {
	variant: 'outline',
	fontSize: { base: 'xs', md: 'md' },
	h: 'auto',
	pl: { base: 2, md: 4 },
	pr: { base: 2, md: 4 },
	pt: 2,
	pb: 2,
}

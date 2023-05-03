import { FlexProps, IconProps, TextProps } from '@chakra-ui/react'

export const componentStyles = {
	pl: { base: 0, md: 6 },
	pt: { base: 4, md: 0 },
}

export const emailWrapperStyles: FlexProps = {
	align: 'center',
	pb: 2,
}

export const nameStyles: TextProps = {
	fontSize: '2xl',
	pb: 4,
}

export const iconStyles: IconProps = {
	mr: 2,
}

export const textStyles: TextProps = {
	fontSize: { base: 'md', md: 'lg' },
	color: 'gray.600',
}

export const phoneWrapperStyles: TextProps = {
	fontSize: { base: 'md', md: 'lg' },
	color: 'gray.600',
	pb: 2,
}

export const textSmallStyles: TextProps = {
	fontSize: 'xs',
	mt: 0,
}

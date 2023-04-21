import { StackProps, TextProps } from '@chakra-ui/react'

export const spacingBigStyles: StackProps = {
	spacing: '5',
}

export const spacingSmallStyles: StackProps = {
	spacing: '3',
}

export const formStyles: StackProps = {
	py: { base: '0', sm: '8' },
	px: { base: '4', sm: '10' },
	bg: { base: 'transparent', sm: 'whiteAlpha.300' },
	boxShadow: { base: 'none', sm: 'md' },
	borderRadius: { base: 'none', sm: 'xl' },
	spacing: '6',
}

export const textForgotStyles: TextProps = {
	fontSize: { base: 'xs', md: 'md' },
}

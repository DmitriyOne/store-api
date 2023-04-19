import { BoxProps, ContainerProps, StackProps } from '@chakra-ui/react'

export const componentStyles: ContainerProps = {
	maxW: 'lg',
	py: { base: '12', md: '24' },
	px: { base: '0', sm: '8' },
}

export const wrapperStyles: StackProps = {
	spacing: '8',
}

export const formStyles: BoxProps = {
	py: { base: '0', sm: '8' },
	px: { base: '4', sm: '10' },
	bg: { base: 'transparent', sm: 'whiteAlpha.300' },
	boxShadow: { base: 'none', sm: 'md' },
	borderRadius: { base: 'none', sm: 'xl' },
}

export const formWrapStyles: StackProps = {
	spacing: '6',
}

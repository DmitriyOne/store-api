import { HeadingProps, LinkProps, StackProps, TextProps } from '@chakra-ui/react'

export const componentStyles: StackProps = {
	spacing: '6',
}

export const containerStyles: StackProps = {
	spacing: { base: '2', md: '3' },
	textAlign: 'center',
}

export const titleStyles: HeadingProps = {
	fontSize: { base: '2xl', md: '4xl' },
}

export const wrapperStyles: StackProps = {
	spacing: '1',
	justify: 'center',
}

export const textStyles: TextProps = {
	color: 'muted',
	fontSize: { base: 'sm', md: 'md' },
}

export const linkStyles: LinkProps = {
	variant: 'link',
	color: 'blue.300',
	fontSize: { base: 'sm', md: 'md' },
}

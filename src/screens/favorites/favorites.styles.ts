import { FlexProps, HeadingProps, StackProps } from '@chakra-ui/react'

export const titleStyles: HeadingProps = {
	size: {base: 'lg', md: 'xl'},
	pb: { base: 7, md: 14 },
}

export const containerStyles: StackProps = {
	w: 'full',
	direction:   'column',
	align: { lg: 'flex-start' },
	spacing: { base: '8', md: '16' },
}

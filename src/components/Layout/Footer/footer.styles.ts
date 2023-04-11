import { StackProps } from '@chakra-ui/react'

export const containerStyles: StackProps = {
	maxW: 'container.xl',
	py: 4,
	direction: { base: 'column', md: 'row' },
	justify: { base: 'center', md: 'space-between' },
	align: { base: 'center', md: 'center' },
	spacing: 4,
}

export const stackStyles: StackProps = {
	direction: 'row',
	spacing: 6,
}

import { FlexProps, HeadingProps, StackProps } from '@chakra-ui/react'

export const titleStyles: HeadingProps = {
	size: {base: 'lg', md: 'xl'},
	pb: { base: 7, md: 14 },
}

export const containerStyles: StackProps = {
	direction: { base: 'column', lg: 'row' },
	align: { lg: 'flex-start' },
	spacing: { base: '8', md: '16' },
}

export const itemWrapperStyles: StackProps = {
	spacing: { base: '8', md: '10' },
	flex: '2',
}

export const continueShopContainerStyles: FlexProps = {
	direction: 'column',
	align: 'center',
	flex: '1',
}

export const continueShopWrapStyles: StackProps = {
	mt: '6',
	fontWeight: 'semibold',
}

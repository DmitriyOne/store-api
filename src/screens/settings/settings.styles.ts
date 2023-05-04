import { FlexProps } from '@chakra-ui/react'

export const componentStyles: FlexProps = {
	direction: 'row',
	align: 'stretch',
	mx: 'auto',
	pt: { base: '6', md: '12' },
	pb: '8',
}

export const contentStyles: FlexProps = {
	flexDirection: { base: 'column', md: 'column' },
	flex: '1',
	pl: { base: '0', md: '8', lg: '12' },
}

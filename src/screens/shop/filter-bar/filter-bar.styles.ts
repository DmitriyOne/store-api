import { FlexProps } from '@chakra-ui/react'

export const componentStyles: FlexProps = {
	w: 'full',
	flexDirection: { base: 'column-reverse', md: 'row' },
	alignItems: { base: 'flex-end', md: 'center' },
	justifyContent: { base: 'flex-end', md: 'space-between' },
	mb: { base: '10px', md: '20px', lg: '20px' },
}

import { FlexProps, SimpleGridProps } from '@chakra-ui/react'

export const gridStyles: SimpleGridProps = {
	columns: { base: 2, md: 3, lg: 4 },
	spacing: { base: '10px', md: '20px', lg: '20px' },
	alignItems: 'stretch',
}

export const rowFiltersStyles: FlexProps = {
	w: 'full',
	justifyContent: 'flex-end',
	mb: { base: '10px', md: '20px', lg: '20px' },
}


import { BoxProps, StackProps } from '@chakra-ui/react'

export const componentStyles: BoxProps = {
	pos: 'sticky',
	top: 0,
	minH: '50vh',
	borderRightWidth: '1px',
	borderColor: 'gray.200',
	w: 'full',
	maxW: { base: '140px', lg: '170px' },
	pr: '4',
	pt: '8',
}

export const wrapperStyles: StackProps = {
	spacing: '24px',
	align: 'flex-start',
}

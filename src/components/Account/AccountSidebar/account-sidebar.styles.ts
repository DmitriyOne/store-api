import { BoxProps, StackProps } from '@chakra-ui/react'

export const componentStyles: BoxProps = {
	pos: 'sticky',
	top: 0,
	minH: '50vh',
	borderRightWidth: '1px',
	borderColor: 'gray.200',
	bg: 'white',
	w: '60',
	pr: '8',
	pt: '10',
}

export const wrapperStyles: StackProps = {
	spacing: '24px',
	align: 'flex-start',
}

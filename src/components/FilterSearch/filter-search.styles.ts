import { InputGroupProps, InputLeftElementProps, InputProps } from '@chakra-ui/react'

export const componentStyles: InputGroupProps = {
	maxW: { base: '100%', md: '613px' },
	mr: { base: 0, md: '20px' },
	mb: { base: '10px', md: 0 },
}

export const inputIconStyles: InputLeftElementProps = {
	width: 2,
	height: 2,
	top: '50%',
	left: '14px',
	transform: 'translateY(-50%)',
}

export const inputStyles: InputProps = {
	fontSize: { base: 'xs', md: 'md' },
	h: { base: 8, md: 10 },
}

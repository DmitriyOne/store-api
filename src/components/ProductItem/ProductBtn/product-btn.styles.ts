import { ButtonProps, FlexProps } from '@chakra-ui/react'

export const flexStyles: FlexProps = {
	justifyContent: 'space-between',
	alignItems: 'center',
}

export const buttonStyles: ButtonProps = {
	width: 'full',
	maxW: '52',
	ml: 'auto',
	mr: 'auto',
	color: 'black.300',
}

// Disabled
export const buttonDisabledStyles: ButtonProps = {
	bg: 'blackAlpha.200',
	color: 'gray.400',
	cursor: 'no-drop',
	_hover: {
		bg: 'blackAlpha.200',
	},
}

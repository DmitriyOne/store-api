import { ButtonProps, HeadingProps, ModalContentProps } from '@chakra-ui/react'

export const contentStyles: ModalContentProps = {
	px: 6,
	py: 8,
}

export const titleStyles: HeadingProps = {
	fontSize: 'xl',
	fontWeight: 'bold',
	pb: 2,
}

export const btnCancelStyles: ButtonProps = {
	_focusVisible: {
		boxShadow: 'none',
	},
}

export const btnSaveStyles: ButtonProps = {
	minW: '70px',
	bg: 'green.100',
	color: 'green.600',
	ml: 3,
	_hover: {
		bg: 'green.200',
	},
	_focusVisible: {
		boxShadow: 'none',
	},
}

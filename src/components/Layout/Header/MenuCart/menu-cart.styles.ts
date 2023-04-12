import { BoxProps, ButtonProps } from '@chakra-ui/react'

export const componentStyles: ButtonProps = {
	position: 'relative',
}

export const iconStyles: ButtonProps = {
	bg: 'transparent',
	h: 'auto',
	minW: 'auto',
	p: 2,
	marginRight: '2',
	fontSize: '26px',
	_hover: {
		bg: 'transparent',
	},
}

export const countStyles: BoxProps = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'absolute',
	bottom: '0',
	left: '0',
	rounded: 'full',
	backgroundColor: 'green.300',
	color: 'blackAlpha.800',
	fontSize: 'md',
	fontWeight: 'medium',
	fontFamily: 'monospace',
	lineHeight: '100%',
	minW: '20px',
	minH: '20px',
	pointerEvents: 'none',
}

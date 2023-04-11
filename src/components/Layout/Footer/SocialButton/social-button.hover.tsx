import { ButtonProps, useColorModeValue } from '@chakra-ui/react'

export const useSocialsBgHover = () => {
	const bgDefault = useColorModeValue('blackAlpha.100', 'blackAlpha.500')
	const bgHover = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')

	const bg: ButtonProps = {
		bg: bgDefault,
		_hover: {
			bg: bgHover,
		},
	}

	return bg
}

import { BoxProps, ButtonProps, LinkProps, TextProps, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'

export const useCustomStyles = () => {
	// Header
	const bgHeaderBoxDefault = useColorModeValue('gray.100', 'gray.900')
	const headerBoxStyles: BoxProps = {
		bg: bgHeaderBoxDefault,
	}

	// Logo
	const colorLogoBoxDefault = useColorModeValue('gray.800', 'white')
	const logoTextStyles: TextProps = {
		textAlign: useBreakpointValue({ base: 'center', md: 'left' }),
		color: colorLogoBoxDefault,
	}

	// MenuMobile
	const bgMenuMobBoxDefault = useColorModeValue('gray.100', 'gray.900')
	const menuMobBoxStyles: BoxProps = {
		bg: bgMenuMobBoxDefault,
	}

	// NavLink
	const bgNavLinkDefault = 'transparent'
	const bgNavLinkHover = useColorModeValue('gray.200', 'gray.700')
	const navLinkButtonStyles: LinkProps = {
		bg: bgNavLinkDefault,
		_hover: {
			textDecoration: 'none',
			bg: bgNavLinkHover,
		},
	}

	// ProductItem
	const bgProductItemBoxDefault = useColorModeValue('white', 'gray.800')
	const productItemBoxStyles: BoxProps = {
		bg: bgProductItemBoxDefault,
	}

	// ProductBody
	const bgProductBodyDefault = useColorModeValue('green.100', 'green.700')
	const bgProductBodyHover = useColorModeValue('green.200', 'green.600')
	const productBodyButtonStyles: ButtonProps = {
		bg: bgProductBodyDefault,
		_hover: {
			bg: bgProductBodyHover,
		},
	}

	// ProductPrice
	const colorProductPriceBoxDefault = useColorModeValue('gray.800', 'white')
	const productPriceBoxStyles: BoxProps = {
		color: colorProductPriceBoxDefault,
	}

	// Tooltip
	const bgTooltipDefault = useColorModeValue('red.50', 'transparent')
	const bgTooltipHover = useColorModeValue('red.100', 'transparent')
	const tooltipButtonStyles: ButtonProps = {
		bg: bgTooltipDefault,
		_hover: {
			bg: bgTooltipHover,
		},
	}

	// Footer
	const bgFooterBoxDefault = useColorModeValue('gray.50', 'gray.900')
	const colorFooterBoxDefault = useColorModeValue('gray.700', 'gray.200')
	const footerBoxStyles: BoxProps = {
		bg: bgFooterBoxDefault,
		color: colorFooterBoxDefault,
	}

	// Social
	const bgSocialDefault = useColorModeValue('blackAlpha.100', 'blackAlpha.500')
	const bgSocialHover = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
	const socialButtonStyles: ButtonProps = {
		bg: bgSocialDefault,
		_hover: {
			bg: bgSocialHover,
		},
	}

	return {
		headerBoxStyles,
		logoTextStyles,
		menuMobBoxStyles,
		navLinkButtonStyles,
		productItemBoxStyles,
		productBodyButtonStyles,
		productPriceBoxStyles,
		tooltipButtonStyles,
		footerBoxStyles,
		socialButtonStyles,
	}
}

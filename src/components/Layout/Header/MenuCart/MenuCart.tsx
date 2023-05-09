import { useContext } from 'react'
import NextLink from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

import { Box, IconButton, useColorMode } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useAppSelector } from '@hooks'
import { HeaderContext } from '@context'

import { componentStyles, countStyles, iconStyles } from './menu-cart.styles'

export const MenuCart = () => {
	const { onCloseNav } = useContext(HeaderContext)
	const { colorMode } = useColorMode()
	const { cart } = useAppSelector(state => state)
	const fill = colorMode === 'light' ? '#000' : '#ffffff'

	return (
		<Box {...componentStyles}>
			<IconButton
				as={NextLink}
				href={STORE_ROUTES.CART}
				aria-label="Go to cart"
				onClick={onCloseNav}
				icon={<AiOutlineShopping fill={fill} />}
				{...iconStyles}
			/>
			<Box as="span" {...countStyles}>
				{cart.items.length}
			</Box>
		</Box>
	)
}

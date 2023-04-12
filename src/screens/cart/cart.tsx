import NextLink from 'next/link'

import { Flex, HStack, Link, Stack } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useAppSelector, useCustomStyles } from '@hooks'

import { CartItem, CartOrderSummary, Heading } from '@components'

import { containerStyles, continueShopContainerStyles, continueShopWrapStyles, itemWrapperStyles, titleStyles } from './cart.styles'

export const Cart = () => {
	const { contShoppingLinkStyles } = useCustomStyles()
	const { cart } = useAppSelector(state => state)

	const cartItems = cart.items.map(item => item.id)
	console.log('cartItems: ', cartItems)

	return (
		<>
			<Heading {...titleStyles}>
				Shopping Cart ({cart.items.length} items)
			</Heading>

			<Stack {...containerStyles}>
				<Stack {...itemWrapperStyles}>
					{cart.items.map((product) => (
						<CartItem
							key={product.id}
							product={product}
						/>
					))}
				</Stack>

				<Flex {...continueShopContainerStyles}>
					<CartOrderSummary />
					<HStack {...continueShopWrapStyles}>
						<span>or</span>
						<Link
							as={NextLink}
							href={STORE_ROUTES.SHOP}
							{...contShoppingLinkStyles}
						>
							Continue shopping
						</Link>
					</HStack>
				</Flex>
			</Stack>
		</>
	)
}

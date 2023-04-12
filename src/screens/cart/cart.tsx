
import { Flex, Stack, Text } from '@chakra-ui/react'

import { useAppSelector } from '@hooks'

import { CartItem, CartOrderSummary, ContinueShopping, Heading } from '@components'

import { containerStyles, continueShopContainerStyles, itemWrapperStyles, titleStyles } from './cart.styles'

export const Cart = () => {
	const { cart } = useAppSelector(state => state)

	return (
		<>
			<Heading {...titleStyles}>
				Shopping Cart ({cart.items.length} items)
			</Heading>

			{cart.items.length >= 1
				?
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
						<ContinueShopping textSpan="or" />
					</Flex>
				</Stack>
				:
				<>
					<Text>
						Sorry, you don&rsquo;t have items in cart.
					</Text>
					<ContinueShopping />
				</>
			}
		</>
	)
}


import { Flex, Stack, Text } from '@chakra-ui/react'

import { useAppSelector } from '@hooks'

import { CartOrderSummary, Heading, ShortProductItem } from '@components'

import { Shopping } from './shopping'

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
							<ShortProductItem
								key={product.id}
								product={product}
								variant="cart"
							/>
						))}
					</Stack>

					<Flex {...continueShopContainerStyles}>
						<CartOrderSummary />
						<Shopping textSpan="or" textLink="Continue shopping" />
					</Flex>
				</Stack>
				:
				<>
					<Text>
						Sorry, you don&rsquo;t have items in cart.
					</Text>
					<Shopping textLink="Go to shopping" />
				</>
			}
		</>
	)
}

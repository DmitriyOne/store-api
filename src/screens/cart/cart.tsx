
import { Flex, Stack, Text } from '@chakra-ui/react'

import { useAppSelector } from '@hooks'

import { CartOrderSummary, Heading, MessageWithButton, ProductInCart } from '@components'

import { containerStyles, continueShopContainerStyles, itemWrapperStyles, titleStyles } from './cart.styles'

export const Cart = () => {
	const { cart } = useAppSelector(state => state)
	const messageBtn = cart.items.length ? 'Continue shopping' : 'Go to shopping'

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
							<ProductInCart
								key={product.id}
								product={product}
							/>
						))}
					</Stack>

					<Flex {...continueShopContainerStyles}>
						<CartOrderSummary />
						<MessageWithButton textSpan="or" textLink={messageBtn} />
					</Flex>
				</Stack>
				:
				<>
					<Text>
						Sorry, you don&rsquo;t have items in cart.
					</Text>
					<MessageWithButton textLink={messageBtn} />
				</>
			}
		</>
	)
}

import { FaArrowRight } from 'react-icons/fa'

import { Button, Heading, Stack } from '@chakra-ui/react'

import { useAppSelector } from '@hooks'

import { OrderSummaryItem } from './OrderSummaryItem'

import { buttonStyles, componentStyles } from './cart-order-summary.styles'

export const CartOrderSummary = () => {
	const { cart } = useAppSelector(state => state)
	console.log(cart.items)

	return (
		<Stack {...componentStyles}>
			<Heading size="md">
				Order Summary
			</Heading>

			<Stack spacing="6">
				<OrderSummaryItem
					label="Subtotal"
					price={cart.totalPrice}
				/>
				<OrderSummaryItem
					label="Total"
					price={cart.totalPrice}
					fontSize="xl"
					fontWeightLabel="semibold"
					fontWeightPrice="extrabold"
				/>
			</Stack>

			<Button
				rightIcon={<FaArrowRight />}
				{...buttonStyles}
			>
				Checkout
			</Button>
		</Stack>
	)
}

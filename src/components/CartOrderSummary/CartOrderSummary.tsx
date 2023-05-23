import { FaArrowRight } from 'react-icons/fa'

import { Button, Heading, Stack } from '@chakra-ui/react'

import { useAppSelector } from '@hooks'

import { OrderPriceItem } from './OrderPriceItem'
import { OrderSummaryItem } from './OrderSummaryItem'

import { buttonStyles, componentStyles } from './cart-order-summary.styles'

export const CartOrderSummary = () => {
	const { cart } = useAppSelector(state => state)

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
				<OrderPriceItem
					items={cart.items}
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
				isDisabled
				{...buttonStyles}
			>
				Checkout
			</Button>
		</Stack>
	)
}

import { FaArrowRight } from 'react-icons/fa'

import { Button, Heading, Stack } from '@chakra-ui/react'

import { useAppSelector } from '@hooks'

import { OrderSummaryItem } from './OrderSummaryItem'

export const CartOrderSummary = () => {
	const { cart } = useAppSelector(state => state)

	return (
		<Stack
			spacing="8"
			borderWidth="1px"
			rounded="lg"
			padding="8"
			width="full"
		>
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
				colorScheme="blue"
				size="lg"
				fontSize="md"
				rightIcon={<FaArrowRight />}
			>
				Checkout
			</Button>
		</Stack>
	)
}

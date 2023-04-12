import {
	Box,
	Flex,
	HStack,
	Link,
	Stack,
	useColorModeValue as mode,
} from '@chakra-ui/react'

import { useAppSelector } from '@hooks'

import { CartItem, CartOrderSummary, Heading } from '@components'

export const Cart = () => {
	const { cart } = useAppSelector(state => state)

	const cartItems = cart.map(item => item.id)
	console.log('cartItems: ', cartItems)

	return (
		<>
			<Heading size="xl">
				Cart page
			</Heading>

			<Box
				maxW={{ base: '3xl', lg: '7xl' }}
				mx="auto"
				px={{ base: '4', md: '8', lg: '12' }}
				py={{ base: '6', md: '8', lg: '12' }}
			>
				<Stack
					direction={{ base: 'column', lg: 'row' }}
					align={{ lg: 'flex-start' }}
					spacing={{ base: '8', md: '16' }}
				>
					<Stack spacing={{ base: '8', md: '10' }} flex="2">
						<Heading fontSize="2xl" fontWeight="extrabold">
							Shopping Cart ( items)
						</Heading>

						<Stack spacing="6">
							{cart.map((product) => (
								<CartItem
									key={product.id}
									product={product}
								/>
							))}
						</Stack>
					</Stack>

					<Flex direction="column" align="center" flex="1">
						<CartOrderSummary />
						<HStack mt="6" fontWeight="semibold">
							<p>or</p>
							<Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
						</HStack>
					</Flex>
				</Stack>
			</Box>
		</>
	)
}

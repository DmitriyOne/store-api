import { Flex } from '@chakra-ui/react'

import { useAuth, useWindowSize } from '@hooks'

import { Heading, Sidebar } from '@components'

import { componentStyles, contentStyles } from './my-orders.styles'

export const MyOrders = () => {
	const { user } = useAuth()
	const { isDesktop } = useWindowSize()

	return (
		<>
			<Heading size="xl">
				Welcome, {user.name}!
			</Heading>

			<Flex {...componentStyles}>
				{isDesktop && <Sidebar />}
				<Flex {...contentStyles}>
					<div>
						No items
					</div>
				</Flex>
			</Flex>
		</>
	)
}

import { Flex } from '@chakra-ui/react'

import { useAuth } from '@hooks'

import { Heading, Sidebar, Spinner } from '@components'

import { componentStyles, contentStyles } from './my-orders.styles'

export const MyOrders = () => {
	const { user, loading, isAuth } = useAuth()

	if (loading && !isAuth) {
		return <Spinner />
	}

	return (
		<>
			<Heading size="xl">
				Welcome, {user.name}!
			</Heading>

			<Flex {...componentStyles}>
				<Sidebar />
				<Flex {...contentStyles}>
					<div>
						No items
					</div>
				</Flex>
			</Flex>
		</>
	)
}

import { Flex } from '@chakra-ui/react'

import { useAuth } from '@hooks'

import { AccountAvatar, AccountBody, Heading, Sidebar } from '@components'

import { componentStyles, contentStyles } from './account.styles'

export const Account = () => {
	const { user } = useAuth()

	return (
		<>
			<Heading size="xl">
				Welcome, {user.name}
			</Heading>

			<Flex {...componentStyles}>
				<Sidebar />
				<Flex {...contentStyles}>
					<AccountAvatar {...user} />
					<AccountBody {...user} />
				</Flex>
			</Flex>
		</>
	)
}

import { Flex } from '@chakra-ui/react'

import { useAuth } from '@hooks'

import { AccountAvatar, AccountBody, Heading, Sidebar, Spinner } from '@components'

import { componentStyles, contentStyles } from './settings.styles'

export const Settings = () => {
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
					<AccountAvatar isSettingPage {...user} />
					<AccountBody isSettingPage {...user} />
				</Flex>
			</Flex>
		</>
	)
}

import { Flex } from '@chakra-ui/react'

import { useAuth } from '@hooks'

import { AccountAvatar, AccountBody, Heading, Sidebar, Spinner } from '@components'

import { componentStyles, contentStyles } from './settings.styles'

export const Settings = () => {
	const { user, isAuth, loading } = useAuth()

	if (loading && !isAuth) {
		return <Spinner />
	}

	if (!loading && user.id === null) {
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
					<AccountAvatar
						avatar={user.avatar}
						name={user.name}
						isSettingPage
					/>
					<AccountBody
						user={user}
						isSettingPage
					/>
				</Flex>
			</Flex>
		</>
	)
}

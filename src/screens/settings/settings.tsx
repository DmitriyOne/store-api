import { Flex } from '@chakra-ui/react'

import { useAuth, useWindowSize } from '@hooks'

import { AccountAvatar, AccountBody, Heading, Sidebar } from '@components'

import { componentStyles, contentStyles } from './settings.styles'

export const Settings = () => {
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
					<AccountAvatar isSettingPage {...user} />
					<AccountBody isSettingPage {...user} />
				</Flex>
			</Flex>
		</>
	)
}

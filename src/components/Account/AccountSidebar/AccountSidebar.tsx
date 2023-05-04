import { Box, Stack } from '@chakra-ui/react'

import { useAuth } from '@hooks'

import { SidebarItem } from './SidebarItem'

import { componentStyles, wrapperStyles } from './account-sidebar.styles'

export const Sidebar = () => {
	const { user, logout } = useAuth()

	const userName = user.name?.toLowerCase().replace(/\s+/g, '').trim()

	return (
		<Box
			as="nav"
			{...componentStyles}
		>
			<Stack {...wrapperStyles}>
				<SidebarItem
					label="My Account"
					href={`/account/${userName}`}
				/>
				<SidebarItem
					label="My Orders"
					href={`/account/${userName}/orders`}
				/>
				<SidebarItem
					label="Settings"
					href={`/account/${userName}/settings`}
				/>
				<SidebarItem
					isButton
					label="Logout"
					onClick={logout}
				/>
			</Stack>
		</Box>
	)
}

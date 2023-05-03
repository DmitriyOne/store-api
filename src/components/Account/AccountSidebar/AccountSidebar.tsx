import { useState } from 'react'

import { Box, Stack } from '@chakra-ui/react'

import { SidebarItem } from './SidebarItem'

import { componentStyles, wrapperStyles } from './account-sidebar.styles'

export const Sidebar = () => {
	const [activeLink, setActiveLink] = useState('My Account')

	const handleSidebarItemClick = (label: string) => {
		setActiveLink(label)
	}

	return (
		<Box
			as="nav"
			{...componentStyles}
		>
			<Stack {...wrapperStyles}>
				<SidebarItem
					label="My Account"
					active={activeLink === 'My Account'}
					onClick={() => handleSidebarItemClick('My Account')}
				/>
				<SidebarItem
					label="Settings"
					active={activeLink === 'Settings'}
					onClick={() => handleSidebarItemClick('Settings')}
				/>
				<SidebarItem
					label="My Orders"
					active={activeLink === 'My Orders'}
					onClick={() => handleSidebarItemClick('My Orders')}
				/>
				<SidebarItem
					label="Logout"
					active={activeLink === 'Logout'}
					onClick={() => handleSidebarItemClick('Logout')}
				/>
			</Stack>
		</Box>
	)
}

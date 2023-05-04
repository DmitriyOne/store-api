import { FC } from 'react'

import { Text } from '@chakra-ui/react'

import { ActiveLink } from '@components'

interface IProps {
	label: string;
	href: string
}

export const SidebarItem: FC<IProps> = ({ label, href }) => {

	return (
		<ActiveLink
			href={href}
			activeClassName="sidebar-link_active"
		>
			<Text>
				{label}
			</Text>
		</ActiveLink>
	)
}

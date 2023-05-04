import { FC } from 'react'

import { Button, Text } from '@chakra-ui/react'

import { ActiveLink } from '@components'

interface IProps {
	label: string;
	href?: string
	isButton?: boolean
	onClick?: () => void
}

export const SidebarItem: FC<IProps> = ({ label, href, isButton, onClick }) => {

	return (
		<>
			{isButton
				?
				<Button
					onClick={onClick}
					outline="none"
					p={0}
					h="auto"
					bg="transparent"
					fontWeight="normal"
					_hover={{
						bg: 'transparent',
					}}
				>
					{label}
				</Button>
				:
				<ActiveLink
					href={href}
					activeClassName="sidebar-link_active"
				>
					<Text>
						{label}
					</Text>
				</ActiveLink>
			}
		</>
	)
}

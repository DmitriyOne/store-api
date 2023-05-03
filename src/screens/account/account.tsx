import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { FaCheck, FaTimes, FaUser } from 'react-icons/fa'

import { Avatar, Box, Flex, Icon, Link, Spacer, Stack, Text } from '@chakra-ui/react'

import { useAuth } from '@hooks'

import { Heading } from '@components'

interface ISidebarItemProps {
	label: string;
	active?: boolean;
	onClick: () => void;
}

const SidebarItem: FC<ISidebarItemProps> = ({ label, active, onClick }) => {
	return (
		<Link
			href="#"
			fontWeight={active ? 'bold' : 'normal'}
			color={active ? 'blue.500' : 'gray.500'}
			onClick={onClick}
		>
			{label}
		</Link>
	)
}

const Sidebar = () => {
	const [activeLink, setActiveLink] = useState('My Account')

	const handleSidebarItemClick = (label: string) => {
		setActiveLink(label)
	}

	return (
		<Box
			as="nav"
			pos="sticky"
			top={0}
			minH="50vh"
			borderRightWidth="1px"
			borderColor="gray.200"
			bg="white"
			w="60"
			pr="8"
			pt="10"
		>
			<Stack spacing="24px" align="flex-start">
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

export const Account = () => {
	const { user } = useAuth()

	const date1 = new Date(user.createAccount)
	const date2 = new Date(user.lastLogin)

	return (
		<>
			<Heading size="xl">
				Welcome, {user.name}
			</Heading>

			<hr />

			<Flex
				direction="row"
				align="flex-start"
				maxW={{ xl: '1200px' }}
				mx="auto"
				px={{ base: '6', md: '8' }}
				pt="12"
				pb="8"
			>

				<Sidebar />

				<Box flex="1" pl="72px">
					<Flex align="center">
						{user.avatar ? (
							<Avatar size="2xl" name={user.name} src={user.avatar} mr={4} />
						) : (
							<Avatar size="2xl" name={user.name} mr={4} />
						)}

						<Box>
							<Heading as="h2" fontSize="3xl" fontWeight="bold">
								{user.name}
							</Heading>
							<Text display="flex" flexDirection="column" fontSize="lg" color="gray.600">
								Email: {user.email}
								{user.isEmailVerified
									?
									<Text as="small" display="flex" alignItems="center">
										your email is {user.isEmailVerified ? 'verified' : 'not verified'}
										<Icon as={FaCheck} color="green.500" ml="1" />
									</Text>
									:
									<>
										<Icon as={FaTimes} color="red.500" ml="1" />
									</>
								}
							</Text>
							{user.phone
								?
								<Text fontSize="lg" color="gray.600">
									Phone: {user.phone}
								</Text>
								:
								<Text fontSize="lg" color="gray.600">
									Phone: Не был указан номер
								</Text>
							}
							<Text fontSize="lg" color="gray.600">
								Account creation date: {date1.toLocaleString()}
							</Text>
							<Text fontSize="lg" color="gray.600">
								Last login date: {date2.toLocaleString()}
							</Text>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</>
	)
}

import { FC } from 'react'
import { FaCheck } from 'react-icons/fa'

import { Box, Flex, Icon, Text } from '@chakra-ui/react'

import { IUserState } from '@interfaces'

import { emailWrapperStyles, iconStyles, nameStyles, textSmallStyles, textStyles } from './account-body.styles'

export const AccountBody: FC<IUserState> = ({ ...user }) => {

	const date1 = new Date(user.createAccount)
	const date2 = new Date(user.lastLogin)

	return (
		<Box>
			<Text {...nameStyles}>
				{user.name}
			</Text>

			<Text {...textStyles}>
				{user.email}
			</Text>
			{user.isEmailVerified ? (
				<Flex {...emailWrapperStyles}>
					<Icon
						as={FaCheck}
						{...iconStyles}
					/>
					<Text as="small"
						{...textSmallStyles}
					>
						Email verified
					</Text>
				</Flex>
			) : (
				<Text
					as="small"
					{...textSmallStyles}
				>
					Email not verified
				</Text>
			)}

			<Text {...textStyles}>
				{user.phone ?? 'Phone number not provided'}
			</Text>

			<Text {...textStyles}>
				Account created on {date1.toLocaleString()}
			</Text>

			<Text {...textStyles}>
				Last login on {date2.toLocaleString()}
			</Text>
		</Box>

	)
}

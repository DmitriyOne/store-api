import { FC } from 'react'

import { Box, Text } from '@chakra-ui/react'

import { IUserState } from '@interfaces'

import { useWindowSize } from '@hooks'

import { AccountVerifiedData } from '../AccountVerifiedData'

import { componentPaddingNoneStyles, componentPaddingStyles, namePaddingBStyles, namePaddingXStyles, textStyles } from './account-body.styles'

interface IProps extends IUserState {
	isSettingPage?: boolean
}

export const AccountBody: FC<IProps> = ({ isSettingPage, ...user }) => {
	const { isDesktop } = useWindowSize()

	const dateCreate = new Date(user.createAccount)
	const dateLogin = new Date(user.lastLogin)

	const componentStyles = isSettingPage ? { ...componentPaddingNoneStyles } : { ...componentPaddingStyles }
	const nameStyles = isSettingPage ? { ...namePaddingXStyles } : { ...namePaddingBStyles }

	return (
		<Box {...componentStyles}>
			{isDesktop &&
				<Text {...nameStyles}>
					{user.name}
				</Text>
			}

			<Text {...textStyles}>
				<b>Email:</b> {user.email}
			</Text>
			<AccountVerifiedData variant="email" />

			<Text {...textStyles}>
				<b>Phone:</b> {user.phone ?? 'number not provided'}
			</Text>
			<AccountVerifiedData variant="phone" />

			<Text {...textStyles}>
				<b>Account created on</b> {dateCreate.toLocaleString()}
			</Text>

			<Text {...textStyles}>
				<b>Last login on</b> {dateLogin.toLocaleString()}
			</Text>
		</Box>

	)
}

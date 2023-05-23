import { FC } from 'react'

import { Box, Text } from '@chakra-ui/react'

import { IUserBody } from '@interfaces'

import { PopupConfirmPassword } from '@components'

import { AccountEditableField } from '../AccountEditableField'
import { AccountVerifiedData } from '../AccountVerifiedData'

import { componentStyles, nameStyles, textStyles } from './account-body.styles'

interface IProps {
	isSettingPage?: boolean
	user: IUserBody
}

export const AccountBody: FC<IProps> = ({ isSettingPage, user }) => {

	const dateCreate = new Date(user.createAccount)
	const dateLogin = new Date(user.lastLogin)

	return (
		<>
			<Box {...componentStyles}>

				{/* Username */}
				{isSettingPage
					?
					<AccountEditableField
						value={user.name}
						nameField="name"
						isTitle
					/>
					:
					<Text {...nameStyles}>
						{user.name}
					</Text>
				}

				{/* Email */}
				{isSettingPage
					?
					<AccountEditableField
						value={user.email}
						nameField="email"
					/>
					:
					<>
						<Text {...textStyles}>
							<b>Email:</b> {user.email}
						</Text>
						<AccountVerifiedData variant="email" />
					</>
				}

				{/* Password */}
				{isSettingPage &&
					<AccountEditableField
						value="Change your password"
						nameField="password"
					/>
				}

				{!isSettingPage && <>
					<Text {...textStyles}>
						<b>Account created on</b> {dateCreate.toLocaleString()}
					</Text>

					<Text {...textStyles}>
						<b>Last login on</b> {dateLogin.toLocaleString()}
					</Text>
				</>
				}

			</Box>

			<PopupConfirmPassword />
		</>
	)
}

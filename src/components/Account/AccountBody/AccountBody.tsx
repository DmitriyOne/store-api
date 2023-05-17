import { FC, useContext } from 'react'

import { Box, Text } from '@chakra-ui/react'

import { IUserBody } from '@interfaces'

import { useAppActions } from '@hooks'
import { ConfirmContext } from '@context'

import { PopupConfirmPassword } from '@components'

import { AccountEditableField } from '../AccountEditableField'
import { AccountVerifiedData } from '../AccountVerifiedData'

import { componentStyles, nameStyles, textStyles } from './account-body.styles'

interface IProps {
	isSettingPage?: boolean
	user: IUserBody
}

export const AccountBody: FC<IProps> = ({ isSettingPage, user }) => {
	const { updateUser } = useAppActions()
	const { isOpenConfirm, onCloseConfirm } = useContext(ConfirmContext)

	const dateCreate = new Date(user.createAccount)
	const dateLogin = new Date(user.lastLogin)

	return (
		<>

			<Box {...componentStyles}>
				
				{/* Username */}
				{isSettingPage
					?
					<AccountEditableField
						defaultValue={user.name}
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
						defaultValue={user.email}
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

				<Text {...textStyles}>
					<b>Phone:</b> {user.phone ?? 'number not provided'}
				</Text>
				<AccountVerifiedData variant="phone" />

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

			<PopupConfirmPassword
				isOpen={isOpenConfirm}
				onClose={onCloseConfirm}
			/>
		</>
	)
}

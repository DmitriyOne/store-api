import { FC, useContext, useState } from 'react'
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updateProfile } from 'firebase/auth'

import { Box, Text } from '@chakra-ui/react'

import { IUserBody } from '@interfaces'

import { useAppActions } from '@hooks'
import { auth } from '@firebase'
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
	const [newName, setNewName] = useState(user.name)
	const [newEmail, setNewEmail] = useState(user.email)
	const [newPhone, setNewPhone] = useState(user.phone)
	const { updateUser } = useAppActions()
	const { isOpenConfirm, onCloseConfirm } = useContext(ConfirmContext)

	const handleUpdateName = async (value: string) => {
		setNewName(value)
	}

	const handleUpdateEmail = async (value: string) => {
		setNewEmail(value)
	}

	const dateCreate = new Date(user.createAccount)
	const dateLogin = new Date(user.lastLogin)

	return (
		<>

			<Box {...componentStyles}>
				{/* Username */}
				{isSettingPage
					?
					<AccountEditableField
						defaultValue={newName}
						onUpdate={handleUpdateName}
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
						defaultValue={newEmail}
						onUpdate={handleUpdateEmail}
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

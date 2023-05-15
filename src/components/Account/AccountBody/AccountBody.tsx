import { FC, useState } from 'react'
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updateProfile } from 'firebase/auth'

import { Box, Text } from '@chakra-ui/react'

import { IUserBody } from '@interfaces'

import { useAppActions } from '@hooks'
import { auth } from '@firebase'

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

	const handleUpdateName = async (value: string) => {
		setNewName(value)
		await updateProfile(auth.currentUser, { displayName: value })
		updateUser({ name: value })
	}

	const handleUpdateEmail = async (value: string) => {
		setNewEmail(value)
		await updateEmail(auth.currentUser, value)
		updateUser({ name: value })
		// setNewEmail(value)
		// const user = auth.currentUser
		// if (!user) return

		// const credential = EmailAuthProvider.credential(user.email, '123456')
		// await reauthenticateWithCredential(user, credential)
		// await updateEmail(user, value)
	}

	const handleUpdatePhone = async (value: string) => {
		setNewPhone(value)
		await updateProfile(auth.currentUser, { displayName: value })
		updateUser({ name: value })
	}

	const dateCreate = new Date(user.createAccount)
	const dateLogin = new Date(user.lastLogin)

	return (
		<Box {...componentStyles}>

			{/* Username */}
			{isSettingPage
				?
				<AccountEditableField
					defaultValue={newName}
					onUpdate={handleUpdateName}
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

			<Text {...textStyles}>
				<b>Account created on</b> {dateCreate.toLocaleString()}
			</Text>

			<Text {...textStyles}>
				<b>Last login on</b> {dateLogin.toLocaleString()}
			</Text>
		</Box>

	)
}

import { FC, useState } from 'react'
import { updateProfile } from 'firebase/auth'

import { Box, Text } from '@chakra-ui/react'

import { IUserState } from '@interfaces'

import { useAppActions, useWindowSize } from '@hooks'
import { auth } from '@firebase'

import { AccountEditableField } from '../AccountEditableField'
import { AccountVerifiedData } from '../AccountVerifiedData'

import { componentPaddingNoneStyles, componentPaddingStyles, namePaddingBStyles, namePaddingXStyles, textStyles } from './account-body.styles'

interface IProps extends IUserState {
	isSettingPage?: boolean
}

export const AccountBody: FC<IProps> = ({ isSettingPage, ...user }) => {
	const { isDesktop } = useWindowSize()
	const [updateName, setUpdateName] = useState(user.name)
	const { updateUser } = useAppActions()

	const handleUpdateName = async (value: string) => {
		setUpdateName(value)
		await updateProfile(auth.currentUser, { displayName: value })
		updateUser({ name: value })
	}

	const dateCreate = new Date(user.createAccount)
	const dateLogin = new Date(user.lastLogin)

	const componentStyles = isSettingPage ? { ...componentPaddingNoneStyles } : { ...componentPaddingStyles }
	const nameStyles = isSettingPage ? { ...namePaddingXStyles } : { ...namePaddingBStyles }

	return (
		<Box {...componentStyles}>

			{isDesktop && isSettingPage
				?
				<AccountEditableField
					defaultValue={updateName}
					onUpdate={handleUpdateName}
				/>
				:
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

import { FC, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { updateProfile } from 'firebase/auth'

import { Box, Text } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'
import { IUserBody } from '@interfaces'

import { useAppActions, useAuth, useFormSubmit } from '@hooks'
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
	const [updateName, setUpdateName] = useState(user.name)
	const [updateEmail, setUpdateEmail] = useState(user.email)
	const { isOpenConfirm, onCloseConfirm } = useContext(ConfirmContext)
	const { updateUser } = useAppActions()
	const { handlerCurrentUserFB } = useAuth()
	const router = useRouter()

	const handlerUpdateName = (value: string) => {
		const userName = value.toLowerCase().replace(/\s+/g, '').trim()
		const user = handlerCurrentUserFB()
		setUpdateName(value)
		updateProfile(user, {
			displayName: value,
		})
		updateUser({ name: value })
		router.push({
			pathname: STORE_ROUTES.SETTINGS,
			query: { displayName: userName },
		},
		undefined, { shallow: true }
		)
	}

	const handlerUpdateEmail = (value: string) => {
		setUpdateEmail(value)
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
						defaultValue={updateName}
						nameField="name"
						onUpdate={handlerUpdateName}
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
						defaultValue={updateEmail}
						nameField="email"
						onUpdate={handlerUpdateEmail}
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

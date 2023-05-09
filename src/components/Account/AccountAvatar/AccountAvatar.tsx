/* eslint-disable no-console */
import { ChangeEvent, FC, useContext } from 'react'
import Link from 'next/link'
import { updateProfile } from 'firebase/auth'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { FaEdit, FaUpload } from 'react-icons/fa'

import { Avatar, Box, Button, Flex, Icon } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'
import { IUserState } from '@interfaces'

import { useAppActions, useFormSubmit, useWindowSize } from '@hooks'
import { auth, storage } from '@firebase'
import { AlertContext } from '@context'

import { avatarMarginLStyles, avatarMarginRStyles, buttonIconStyles, componentStyles, uploadButtonStyles, uploadWrapperStyles } from './account-avatar.styles'

interface IProps extends IUserState {
	isSettingPage?: boolean
}

export const AccountAvatar: FC<IProps> = ({
	isSettingPage = false,
	...user
}) => {
	const { isMobile } = useWindowSize()
	const alert = useContext(AlertContext)
	const { handlerTimer } = useFormSubmit(alert)
	const { updateUser } = useAppActions()

	const userName = user.name?.toLowerCase().replace(/\s+/g, '').trim()

	const handleAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) {
			return
		}

		const storageRef = ref(storage, `${userName}/avatar/${file.name}`)
		const snapshot = await uploadBytes(storageRef, file)

		const downloadURL = await getDownloadURL(storageRef)

		try {
			await updateProfile(auth.currentUser, { photoURL: downloadURL })
			updateUser({ avatar: downloadURL })
		} catch (error) {
			console.error('Failed to update user profile:', error)
		}
	}
	const avatarStyles = isSettingPage ? { ...avatarMarginLStyles } : { ...avatarMarginRStyles }

	return (
		<Flex {...componentStyles}>
			{user.avatar ? (
				<Avatar
					name={user.name}
					src={user.avatar}
					{...avatarStyles}
				/>
			) : (
				<Avatar
					name={user.name}
					src={user.avatar ?? undefined}
					{...avatarStyles}
				/>
			)}

			{isSettingPage &&
				<Box {...uploadWrapperStyles}>
					<input
						type="file"
						id="avatar-upload"
						style={{ display: 'none' }}
						onChange={handleAvatarChange}
					/>
					<Button
						onClick={() => document.getElementById('avatar-upload')?.click()}
						{...uploadButtonStyles}
					>
						<Icon
							as={FaUpload}
							{...buttonIconStyles}
						/>
						Upload your photo
					</Button>
				</Box>
			}

			{!isSettingPage && isMobile &&
				<Link
					href={{
						pathname: STORE_ROUTES.SETTINGS,
						query: { displayName: userName },
					}}
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
						display: 'flex',
						alignItems: 'center',
						color: '#2b6cb0',
						fontSize: '14px',
					}}
				>
					<Icon
						as={FaEdit}
						mr={1}
					/>
					Edit
				</Link>}
		</Flex>
	)
}

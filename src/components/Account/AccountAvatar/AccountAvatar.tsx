/* eslint-disable no-console */
import { ChangeEvent, FC, useContext } from 'react'
import Link from 'next/link'
import { updateProfile } from 'firebase/auth'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { FaEdit, FaUpload } from 'react-icons/fa'

import { Avatar, Box, Button, Flex, Icon } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useAppActions, useFormSubmit, useWindowSize } from '@hooks'
import { auth, storage } from '@firebase'
import { AlertContext } from '@context'

import { avatarStyles, buttonIconStyles, componentStyles, uploadButtonStyles, uploadWrapperStyles } from './account-avatar.styles'

interface IProps {
	isSettingPage?: boolean
	name: string
	avatar: string | null
}

export const AccountAvatar: FC<IProps> = ({
	isSettingPage = false,
	name,
	avatar,
}) => {
	const { isMobile } = useWindowSize()
	const alert = useContext(AlertContext)
	const { handlerTimer } = useFormSubmit(alert)
	const { updateUser } = useAppActions()

	const userName = name?.toLowerCase().replace(/\s+/g, '').trim()

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

	return (
		<Flex {...componentStyles}>
			{avatar ? (
				<Avatar
					as="div"
					src={avatar}
					{...avatarStyles}
				/>
			) : (
				<Avatar
					as="div"
					name={name}
					src={avatar ?? undefined}
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
						Upload
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
					Edit your profile
				</Link>}
		</Flex>
	)
}

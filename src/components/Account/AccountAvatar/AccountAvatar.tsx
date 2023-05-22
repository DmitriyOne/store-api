/* eslint-disable no-console */
import { ChangeEvent, FC, useState } from 'react'
import Link from 'next/link'
import { updateProfile } from 'firebase/auth'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { FaEdit, FaUpload } from 'react-icons/fa'

import { Avatar, Box, Button, CircularProgress, Flex, Icon } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useAppActions, useWindowSize } from '@hooks'
import { auth, storage } from '@firebase'

import { avatarStyles, buttonIconStyles, componentStyles, removeButtonStyles, uploadButtonStyles, uploadWrapperStyles } from './account-avatar.styles'

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
	const [isLoading, setIsLoading] = useState(false)
	const { isMobile } = useWindowSize()
	const { updateUser } = useAppActions()

	const userName = name?.toLowerCase().replace(/\s+/g, '').trim()

	const handleAddAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true)
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
			// setNewAvatar(file.name)
			setIsLoading(false)
		} catch (error) {
			console.error('Failed to update user profile:', error)
			setIsLoading(false)
		}
	}

	return (
		<Flex {...componentStyles}>
			{avatar ? (
				<Avatar
					as="div"
					name={name}
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
						onChange={handleAddAvatar}
					/>
					<Button
						onClick={() => document.getElementById('avatar-upload')?.click()}
						isDisabled={isLoading}
						{...uploadButtonStyles}
					>
						{isLoading
							?
							<CircularProgress
								isIndeterminate
								size="24px"
								color="gray.800"
							/>
							:
							<>
								<Icon
									as={FaUpload}
									{...buttonIconStyles}
								/>
								Upload
							</>
						}
					</Button>
					<Button
						onClick={null}
						isDisabled={isLoading}
						{...removeButtonStyles}
					>
						{isLoading
							?
							<CircularProgress
								isIndeterminate
								size="24px"
								color="gray.800"
							/>
							:
							'Remove'
						}
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

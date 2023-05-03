import { ChangeEvent, FC, useState } from 'react'
import Link from 'next/link'
import { FaEdit, FaUpload } from 'react-icons/fa'

import { Avatar, Box, Button, Flex, Icon } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'
import { IUserState } from '@interfaces'

import { useWindowSize } from '@hooks'

import { avatarStyles, buttonIconStyles, buttonStyles, componentStyles } from './account-avatar.styles'

interface IProps extends IUserState {
	isSettingPage?: boolean
}

export const AccountAvatar: FC<IProps> = ({
	isSettingPage = false,
	...user
}) => {
	const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
	const { isMobile } = useWindowSize()

	const userName = user.name?.toLowerCase().replace(/\s+/g, '').trim()

	const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setAvatarPreview(reader.result as string)
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<Flex {...componentStyles}>
			{avatarPreview ? (
				<Avatar
					name={user.name}
					src={avatarPreview}
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
				<Box>
					<input
						type="file"
						id="avatar-upload"
						style={{ display: 'none' }}
						onChange={handleAvatarChange}
					/>
					<Button
						onClick={() => document.getElementById('avatar-upload')?.click()}
						{...buttonStyles}
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

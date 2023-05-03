import { ChangeEvent, FC, useState } from 'react'
import { FaUpload } from 'react-icons/fa'

import { Avatar, Box, Button, Flex, Icon } from '@chakra-ui/react'

import { IUserState } from '@interfaces'

import { avatarStyles, buttonIconStyles, buttonStyles, componentStyles } from './account-avatar.styles'

export const AccountAvatar: FC<IUserState> = ({ ...user }) => {
	const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

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
		</Flex>
	)
}

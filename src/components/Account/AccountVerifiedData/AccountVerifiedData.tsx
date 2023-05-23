import { FC } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

import { Flex, Icon, Text } from '@chakra-ui/react'

import { useAuth } from '@hooks'

import { componentStyles, iconStyles, textSmallStyles } from './account-verified-data.styles'

interface IProps {
	variant: 'email' | 'phone'
}

export const AccountVerifiedData: FC<IProps> = ({ variant }) => {
	const { user } = useAuth()

	const isVerified = variant === 'email' ? user.isEmailVerified : user.isPhoneVerified

	return (
		<>
			{isVerified
				?
				<Flex {...componentStyles}>
					<Text as="small"
						{...textSmallStyles}
					>
						your {variant === 'email' ? 'email' : 'phone'} verified
					</Text>
					<Icon
						as={FaCheck}
						color="green.600"
						{...iconStyles}
					/>
				</Flex>
				:
				<Flex {...componentStyles}>
					<Text as="small"
						{...textSmallStyles}
					>
						your {variant === 'email' ? 'email' : 'phone'} not verified
					</Text>
					<Icon
						as={FaTimes}
						color="red.600"
						{...iconStyles}
					/>
				</Flex>
			}
		</ >
	)
}

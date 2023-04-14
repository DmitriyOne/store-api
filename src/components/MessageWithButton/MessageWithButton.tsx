import { FC } from 'react'
import NextLink from 'next/link'

import { HStack, Link } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useCustomStyles } from '@hooks'

import { componentStyles } from './msg-with-btn.styles'

interface IProps {
	textLink: string
	textSpan?: string
}

export const MessageWithButton: FC<IProps> = ({ textLink, textSpan }) => {
	const { buttonWithMsgStyles } = useCustomStyles()

	return (
		<HStack as="span" {...componentStyles}>
			{textSpan &&
				<span>
					{textSpan}
				</span>
			}

			<Link
				as={NextLink}
				href={STORE_ROUTES.SHOP}
				{...buttonWithMsgStyles}
			>
				{textLink}
			</Link>
		</HStack>
	)
}

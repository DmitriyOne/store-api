import { FC } from 'react'
import NextLink from 'next/link'

import { HStack, Link } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useCustomStyles } from '@hooks'

import { componentStyles } from './shopping.styles'

interface IProps {
	textLink: string
	textSpan?: string
}

export const Shopping: FC<IProps> = ({ textLink, textSpan }) => {
	const { contShoppingLinkStyles } = useCustomStyles()

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
				{...contShoppingLinkStyles}
			>
				{textLink}
			</Link>
		</HStack>
	)
}

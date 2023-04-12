import { FC } from 'react'
import NextLink from 'next/link'

import { HStack, Link } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useCustomStyles } from '@hooks'

import { componentStyles } from './continue-shopping.styles'

interface IProps {
	textSpan?: string
}

export const ContinueShopping: FC<IProps> = ({ textSpan }) => {
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
				Continue shopping
			</Link>
		</HStack>
	)
}

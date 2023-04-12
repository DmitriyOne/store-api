import Link from 'next/link'

import { Box, Text } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useCustomStyles } from '@hooks'

import { textStyles } from './logo.styles'

export const Logo = () => {
	const { logoTextStyles } = useCustomStyles()
	return (
		<Box>
			<Text
				as="span"
				{...textStyles}
				{...logoTextStyles}
			>
				<Link
					href={STORE_ROUTES.HOME}
					passHref
				>
					Logo
				</Link>
			</Text>
		</Box>
	)
}

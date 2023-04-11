import Link from 'next/link'

import { Box, Text, useBreakpointValue } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useCustomStyles } from '@hooks'

export const Logo = () => {
	const { logoTextStyles } = useCustomStyles()
	return (
		<Box>
			<Text
				as="span"
				textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
				fontFamily={'heading'}
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

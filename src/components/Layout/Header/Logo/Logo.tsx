import Link from 'next/link'

import { Box, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

export const Logo = () => {

	return (
		<Box>
			<Text
				as="span"
				
				textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
				fontFamily={'heading'}
				color={useColorModeValue('gray.800', 'white')}
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

import NavLink from 'next/link'

import { HStack, Link } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

export const FormForgotPass = () => {
	return (
		<HStack justify="space-between">
			<Link
				as={NavLink}
				href={STORE_ROUTES.FORGOT_PASS}
				variant="link"
				colorScheme="blue"
				size="sm"
			>
				Forgot password?
			</Link>
		</HStack>
	)
}

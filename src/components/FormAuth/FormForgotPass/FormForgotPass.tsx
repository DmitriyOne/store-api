import NavLink from 'next/link'

import { HStack, Link } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { componentStyles, linkStyles } from './form-forgot-pass.styles'

export const FormForgotPass = () => (
	<HStack {...componentStyles}>
		<Link
			as={NavLink}
			href={STORE_ROUTES.FORGOT_PASS}
			{...linkStyles}
		>
			Forgot password?
		</Link>
	</HStack>
)

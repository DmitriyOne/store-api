import NavLink from 'next/link'

import { Heading, HStack, Link, Stack, Text } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { componentStyles, containerStyles, linkStyles, textStyles, titleStyles, wrapperStyles } from './form-header.styles'

export const FormHeader = () => {

	return (
		<Stack {...componentStyles}>
			<Stack {...containerStyles}>
				<Heading
					as="h1"
					{...titleStyles}
				>
					Log in to your account
				</Heading>
				<HStack {...wrapperStyles}>
					<Text {...textStyles}>
						Don&rsquo;t have an account?
					</Text>
					<Link
						as={NavLink}
						href={STORE_ROUTES.REGISTRATION}
						{...linkStyles}
					>
						Sign up
					</Link>
				</HStack>
			</Stack>
		</Stack>

	)
}

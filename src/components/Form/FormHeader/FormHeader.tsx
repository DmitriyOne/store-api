import NavLink from 'next/link'

import { Heading, HStack, Link, Stack, Text } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

export const FormHeader = () => {

	return (
		<Stack spacing="6">
			<Stack
				spacing={{ base: '2', md: '3' }}
				textAlign="center"
			>
				<Heading
					as="h1"
					fontSize={{ base: 'sm', md: '4xl' }}
				>
					Log in to your account
				</Heading>
				<HStack spacing="1" justify="center">
					<Text color="muted">
						Don&rsquo;t have an account?
					</Text>
					<Link
						as={NavLink}
						href={STORE_ROUTES.REGISTRATION}
						variant="link"
						color="blue.300"
					>
						Sign up
					</Link>
				</HStack>
			</Stack>
		</Stack>

	)
}

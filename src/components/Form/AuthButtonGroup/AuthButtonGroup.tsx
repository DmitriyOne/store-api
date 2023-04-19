import { Button, ButtonGroup, Text } from '@chakra-ui/react'

import { GoogleIcon } from '../ProviderIcon'

const providers = [
	{ name: 'Google', icon: <GoogleIcon boxSize="5" /> },
]

export const AuthButtonGroup = () => (
	<ButtonGroup variant="outline" spacing="4" width="full">
		{providers.map(({ name, icon }) => (
			<Button key={name} width="full">
				{icon}
				<Text as="span" ml={4}>Sign in with {name}</Text>
			</Button>
		))}
	</ButtonGroup>
)

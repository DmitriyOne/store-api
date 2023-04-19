import { Button, ButtonGroup, Text } from '@chakra-ui/react'

import { GoogleIcon } from '../ProviderIcon'

import { btnStyles, componentStyles, textStyles } from './auth-btn-group.styles'

const providers = [
	{ name: 'Google', icon: <GoogleIcon boxSize="5" /> },
]

export const AuthButtonGroup = () => (
	<ButtonGroup {...componentStyles}>
		{providers.map(({ name, icon }) => (
			<Button key={name} {...btnStyles}>
				{icon}
				<Text as="span" {...textStyles}>Sign in with {name}</Text>
			</Button>
		))}
	</ButtonGroup>
)

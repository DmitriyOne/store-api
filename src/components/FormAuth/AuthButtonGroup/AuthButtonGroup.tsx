import { useContext } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AlertContext } from 'src/context'

import { Button, ButtonGroup, Text } from '@chakra-ui/react'

import { GoogleIcon } from '../../ProviderIcon'

import { btnStyles, componentStyles, textStyles } from './auth-btn-group.styles'

import { auth } from '@fb'

const providers = [
	{ name: 'Google', icon: <GoogleIcon boxSize="5" /> },
]

export const AuthButtonGroup = () => {
	const provider = new GoogleAuthProvider()
	const alert = useContext(AlertContext)

	const onClick = () => {
		console.log(auth)

		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result)
			}).catch((error) => {
				console.error(error)
			})
	}

	return (
		<ButtonGroup {...componentStyles}>
			{providers.map(({ name, icon }) => (
				<Button key={name}
					onClick={onClick}
					{...btnStyles}
				>
					{icon}
					<Text as="span" {...textStyles}>Sign in with {name}</Text>
				</Button>
			))}
		</ButtonGroup>
	)
}

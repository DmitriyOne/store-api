import { useContext } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AlertContext } from 'src/context'

import { Button, ButtonGroup, Text } from '@chakra-ui/react'

import { useAppActions } from '@hooks'

import { GoogleIcon } from '../../ProviderIcon'

import { btnStyles, componentStyles, textStyles } from './auth-btn-group.styles'

import { auth } from '@fb'

const providers = [
	{ name: 'Google', icon: <GoogleIcon boxSize="5" /> },
]

export const AuthButtonGroup = () => {
	const { addUser } = useAppActions()
	const provider = new GoogleAuthProvider()
	const alert = useContext(AlertContext)

	const onClick = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result.user)
				const fbuser = result.user
				addUser({
					id: fbuser.uid,
					name: fbuser.displayName,
					email: fbuser.email,
					isEmailVerified: fbuser.emailVerified,
					avatar: fbuser.photoURL,
					phone: fbuser.phoneNumber,
					createAccount: fbuser.metadata.creationTime,
					lastLogin: fbuser.metadata.lastSignInTime,
					token: fbuser.refreshToken,
				})
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

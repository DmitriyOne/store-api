import { useContext } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AlertContext } from 'src/context'

import { Button, ButtonGroup, Text } from '@chakra-ui/react'

import { GoogleIcon } from '../../ProviderIcon'

import { btnStyles, componentStyles, textStyles } from './auth-btn-group.styles'

const providers = [
	{ name: 'Google', icon: <GoogleIcon boxSize="5" /> },
]

export const AuthButtonGroup = () => {
	const auth = getAuth()
	const provider = new GoogleAuthProvider()
	const alert = useContext(AlertContext)

	const onClick = () => {
		console.log(auth);
		
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential.accessToken
				// The signed-in user info.
				const user = result.user
				console.log('google user: ', user)

				// IdP data available using getAdditionalUserInfo(result)
				// ...
			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				// The email of the user's account used.
				const email = error.customData.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error)

				console.error(error)

				// ...
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

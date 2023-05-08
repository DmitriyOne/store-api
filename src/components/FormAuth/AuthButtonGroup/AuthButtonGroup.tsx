import { useContext } from 'react'
import { useRouter } from 'next/router'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AlertContext } from 'src/context'

import { Button, ButtonGroup, Text } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'

import { useAppActions, useFormSubmit } from '@hooks'
import { auth } from '@firebase'

import { GoogleIcon } from '../../ProviderIcon'

import { btnStyles, componentStyles, textStyles } from './auth-btn-group.styles'

const providers = [
	{ name: 'Google', icon: <GoogleIcon boxSize="5" /> },
]

export const AuthButtonGroup = () => {
	const { addUser } = useAppActions()
	const provider = new GoogleAuthProvider()
	const alert = useContext(AlertContext)
	const router = useRouter()
	const { handlerTimer, sleep } = useFormSubmit(alert)

	const onClick = () => {
		signInWithPopup(auth, provider)
			.then(async (result) => {
				const fbuser = result.user
				const userName = fbuser.displayName.toLowerCase().replace(/\s+/g, '').trim()
				addUser({
					id: fbuser.uid,
					name: fbuser.displayName,
					email: fbuser.email,
					isEmailVerified: fbuser.emailVerified,
					avatar: fbuser.photoURL,
					phone: fbuser.phoneNumber,
					createAccount: fbuser.metadata.creationTime,
					lastLogin: fbuser.metadata.lastSignInTime,
					isPhoneVerified: false,
					token: fbuser.refreshToken,
				})
				await sleep(500)
				router.push({
					pathname: STORE_ROUTES.ACCOUNT,
					query: { displayName: userName },
				})
				alert.visible = true
				alert.show('You have successfully logged into your account.', 'success')
				handlerTimer()
			}).catch((error) => {
				console.error(error)
				alert.visible = true
				alert.show('An error has occurred.', 'error')
				handlerTimer()
				return
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

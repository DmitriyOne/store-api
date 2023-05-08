import { useContext } from 'react'
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { AlertContext } from 'src/context'

import { STORE_ROUTES } from '@constants'
import { IFormHeader, IUser } from '@interfaces'

import { useAppActions, useFormSubmit } from '@hooks'

import { FormAuth } from '@components'

import { auth } from '@fb'

export const Login = () => {
	const alert = useContext(AlertContext)
	const { addUser } = useAppActions()
	const { handleSubmit, formState: { errors, isSubmitting }, reset, control } = useForm<IUser>({ mode: 'onChange' })
	const { handlerTimer, sleep } = useFormSubmit(alert)
	const router = useRouter()


	const onSubmit = async (data: IUser) => {
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then(async (userCredential) => {
				const fbuser = userCredential.user
				const userName = fbuser.displayName.toLowerCase().replace(/\s+/g, '').trim()
				addUser({
					id: fbuser.uid,
					name: fbuser.displayName,
					email: fbuser.email,
					isEmailVerified: fbuser.emailVerified,
					avatar: fbuser.photoURL,
					phone: fbuser.phoneNumber,
					isPhoneVerified: false,
					createAccount: fbuser.metadata.creationTime,
					lastLogin: fbuser.metadata.lastSignInTime,
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
				reset()
			})
			.catch((error) => {
				alert.visible = true
				if (error.code === 'auth/user-not-found') {
					alert.show('This user does not exist. Go to the registration page.', 'error')
					handlerTimer()
					return
				}
				if (error.code === 'auth/wrong-password') {
					alert.show('Wrong password entered. Try Again.', 'error')
					handlerTimer()
					return
				}
				alert.show('An error has occurred.', 'error')
				handlerTimer()
				return
			})
	}

	const header: IFormHeader = {
		title: 'Log in to your account',
		text: 'Don\'t have an account?',
		linkText: 'Register',
		href: `${STORE_ROUTES.REGISTRATION}`,
	}

	return (
		<FormAuth
			variant="login"
			header={header}
			btnText="Login"
			onSubmit={onSubmit}
			handleSubmit={handleSubmit}
			errors={errors}
			control={control}
			isLoading={isSubmitting}
		/>
	)
}

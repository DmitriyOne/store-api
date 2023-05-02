import { useContext } from 'react'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { AlertContext } from 'src/context'

import { STORE_ROUTES } from '@constants'
import { IFormHeader, IUser } from '@interfaces'

import { useAppActions, useFormSubmit } from '@hooks'

import { FormAuth } from '@components'

export const Login = () => {
	const auth = getAuth()
	const alert = useContext(AlertContext)
	const { addUser } = useAppActions()
	const { handleSubmit, formState: { errors, isSubmitting }, reset, control, getValues, setError } = useForm<IUser>({ mode: 'onChange' })
	const { handlerTimer, sleep } = useFormSubmit(alert)

	const onSubmit = async (data: IUser) => {
		console.log(data)

		signInWithEmailAndPassword(auth, data.email, data.password)
			.then(async (userCredential) => {
				const fbuser = userCredential.user
				addUser({
					id: fbuser.uid,
					name: fbuser.displayName,
					email: fbuser.email,
					token: fbuser.accessToken,
				})
				await sleep(500)
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

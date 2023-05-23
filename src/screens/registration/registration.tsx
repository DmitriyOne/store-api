import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useForm } from 'react-hook-form'

import { STORE_ROUTES } from '@constants'
import { IFormHeader, IUser } from '@interfaces'

import { useAppActions, useFormSubmit } from '@hooks'
import { auth } from '@firebase'
import { AlertContext } from '@context'

import { FormAuth } from '@components'

export const Registration = () => {
	const [isLoading, setIsLoading] = useState(false)
	const alert = useContext(AlertContext)
	const { addUser } = useAppActions()
	const { handleSubmit, formState: { errors }, reset, control, getValues, setError } = useForm<IUser>({ mode: 'onChange' })
	const { handlerTimer, sleep } = useFormSubmit(alert)
	const router = useRouter()

	const onSubmit = async (data: IUser) => {
		const { password, confirm_password } = getValues()

		if (password !== confirm_password) {
			setError('confirm_password', { type: 'manual', message: 'Passwords do not match' })
			return
		}

		setIsLoading(true)
		await createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(async (userCredential) => {
				const fbuser = userCredential.user
				await updateProfile(userCredential.user, {
					displayName: data.name,
				})
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
				router.push({
					pathname: STORE_ROUTES.ACCOUNT,
					query: { displayName: userName },
				})
				await sleep(700)
				alert.visible = true
				alert.show('The account has been created. You have successfully registered.', 'success')
				handlerTimer()
				reset()
			})
			.catch((error) => {
				console.log(error.code)

				alert.visible = true
				if (error.code === 'auth/email-already-in-use') {
					alert.show('The email address you provided is already in use.', 'error')
					handlerTimer()
					return
				}
				alert.show('An error has occurred.', 'error')
				handlerTimer()
				return
			})

		setIsLoading(false)
	}

	const header: IFormHeader = {
		title: 'Register your account',
		text: 'You have an account?',
		linkText: 'Log in',
		href: `${STORE_ROUTES.LOGIN}`,
	}

	return (
		<FormAuth
			variant="registration"
			header={header}
			btnText="Register"
			onSubmit={onSubmit}
			handleSubmit={handleSubmit}
			errors={errors}
			control={control}
			isLoading={isLoading}
		/>
	)
}

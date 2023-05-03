import { useContext } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { AlertContext } from 'src/context'

import { STORE_ROUTES } from '@constants'
import { IFormHeader, IUser } from '@interfaces'

import { useAppActions, useFormSubmit } from '@hooks'

import { FormAuth } from '@components'

import { auth } from '@fb'

export const Registration = () => {
	const alert = useContext(AlertContext)
	const { addUser } = useAppActions()
	const { handleSubmit, formState: { errors, isSubmitting }, reset, control, getValues, setError } = useForm<IUser>({ mode: 'onChange' })
	const { handlerTimer, sleep } = useFormSubmit(alert)

	const onSubmit = async (data: IUser) => {
		console.log(data)
		const { password, confirm_password } = getValues()

		if (password !== confirm_password) {
			setError('confirm_password', { type: 'manual', message: 'Passwords do not match' })
			return
		}

		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(async (userCredential) => {
				const fbuser = userCredential.user
				console.log(fbuser);
				updateProfile(userCredential.user, {
					displayName: data.name,
				})
				addUser({
					id: fbuser.uid,
					name: data.name,
					email: fbuser.email,
					token: fbuser.refreshToken,
				})
				await sleep(700)
				alert.visible = true
				alert.show('The account has been created. You have successfully registered.', 'success')
				handlerTimer()
				reset()
			})
			.catch((error) => {
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
			isLoading={isSubmitting}
		/>
	)
}

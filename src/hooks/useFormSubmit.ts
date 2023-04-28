import { useCallback, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { EForm } from '@enums'
import { IAlert, IUser } from '@interfaces'

import { useAppActions } from './useAppActions'

const messages: any = {
	login: 'You have successfully logged into your account.',
	registration: 'The account has been created. You have successfully registered.',
	forgot: 'A one-time password has been sent to your email.',
}

export const useFormSubmit = (
	variant: keyof typeof EForm,
	alert: IAlert,
	reset: any,
	setError: any,
	getValues: any,
) => {
	const [isLoading, setIsLoading] = useState(false)
	const { addUser } = useAppActions()
	const auth = getAuth()

	const handlerTimer = () => {
		const alertTimeout = setTimeout(() => {
			alert.visible = false
			alert.hide!()
			clearTimeout(alertTimeout)
		}, 3000)
	}

	const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

	const handlerLogin = (user: IUser) => {
		signInWithEmailAndPassword(auth, user.email, user.password)
			.then((userCredential) => {
				const fbuser = userCredential.user
				console.log(fbuser)

				addUser({
					id: fbuser.uid,
					name: fbuser.displayName,
					email: fbuser.email,
					token: fbuser.accessToken,
				})
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
			})
	}

	const handlerRegister = (user: IUser) => {
		createUserWithEmailAndPassword(auth, user.email, user.password)
			.then((userCredential) => {
				const fbuser = userCredential.user
				updateProfile(userCredential.user, {
					displayName: user.name,
				})
				console.log(fbuser)
				addUser({
					id: fbuser.uid,
					name: user.name,
					email: fbuser.email,
					token: fbuser.accessToken,
				})
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				// ..
			})
	}

	const onSubmit = useCallback(async (data: IUser) => {
		console.log(data)
		setIsLoading(true)
		const { password, confirm_password } = getValues()

		if (password !== confirm_password && variant === 'registration') {
			setError('confirm_password', { type: 'manual', message: 'Passwords do not match' })
			return
		}

		if (variant === 'login') {
			handlerLogin(data)
		}

		if (variant === 'registration') {
			handlerRegister(data)
		}

		await sleep(1000)
		setIsLoading(false)
		alert.visible = true
		alert.show(messages[variant], 'success')
		handlerTimer()
		reset()

	}, [variant, alert, getValues, reset, setError])

	return { isLoading, onSubmit }
}

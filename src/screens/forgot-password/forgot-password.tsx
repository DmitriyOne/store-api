import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useForm } from 'react-hook-form'

import { STORE_ROUTES } from '@constants'
import { IFormHeader, IUser } from '@interfaces'

import { useFormSubmit } from '@hooks'
import { auth } from '@firebase'
import { AlertContext } from '@context'

import { FormAuth } from '@components'

export const ForgotPassword = () => {
	const [isLoading, setIsLoading] = useState(false)
	const alert = useContext(AlertContext)
	const { handleSubmit, formState: { errors }, reset, control } = useForm<IUser>({ mode: 'onChange' })
	const { handlerTimer, sleep } = useFormSubmit(alert)
	const router = useRouter()

	const onSubmit = async (data: IUser) => {
		setIsLoading(true)
		await sendPasswordResetEmail(auth, data.email)
			.then(async () => {
				await sleep(400)
				reset()
				router.push(STORE_ROUTES.LOGIN)
			})
			.catch((error) => {
				alert.visible = true
				if (error.code === 'auth/user-not-found') {
					alert.show('It is not possible to reset the password because the user does not exist. Go to the registration page.', 'error')
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
		title: 'Recover your password',
		text: 'Don\'t have an account?',
		linkText: 'Register',
		href: `${STORE_ROUTES.REGISTRATION}`,
	}

	return (
		<FormAuth
			variant="forgot"
			header={header}
			btnText="Send"
			onSubmit={onSubmit}
			handleSubmit={handleSubmit}
			errors={errors}
			control={control}
			isLoading={isLoading}
		/>
	)
}

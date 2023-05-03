import { useContext } from 'react'
import { useRouter } from 'next/router'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { AlertContext } from 'src/context'

import { STORE_ROUTES } from '@constants'
import { IFormHeader, IUser } from '@interfaces'

import { useFormSubmit } from '@hooks'

import { FormAuth } from '@components'

import { auth } from '@fb'

export const ForgotPassword = () => {
	const alert = useContext(AlertContext)
	const { handleSubmit, formState: { errors, isSubmitting }, reset, control } = useForm<IUser>({ mode: 'onChange' })
	const { handlerTimer, sleep } = useFormSubmit(alert)
	const router = useRouter()

	const onSubmit = async (data: IUser) => {
		console.log(data)

		sendPasswordResetEmail(auth, data.email)
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
			isLoading={isSubmitting}
		/>
	)
}

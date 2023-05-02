import { useContext } from 'react'
import { useRouter } from 'next/router'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { AlertContext } from 'src/context'

import { STORE_ROUTES } from '@constants'
import { IFormHeader, IUser } from '@interfaces'

import { useAuth, useFormSubmit } from '@hooks'

import { FormAuth } from '@components'

export const ForgotPassword = () => {
	const alert = useContext(AlertContext)
	const { handleSubmit, formState: { errors, isSubmitting }, reset, control } = useForm<IUser>({ mode: 'onChange' })
	const { handlerTimer } = useFormSubmit(alert)
	const router = useRouter()
	const { myAuth } = useAuth()
	
	const onSubmit = async (data: IUser) => {
		console.log(data)

		sendPasswordResetEmail(myAuth, data.email)
			.then(() => {
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

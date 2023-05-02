import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AlertContext } from 'src/context'

import { STORE_ROUTES } from '@constants'
import { IFormHeader, IUser } from '@interfaces'

import { useFormSubmit } from '@hooks'

import { FormAuth } from '@components'

export const Login = () => {
	const alert = useContext(AlertContext)
	const { handleSubmit, formState: { errors }, reset, control, getValues, setError } = useForm<IUser>({ mode: 'onChange' })
	const { onSubmit, isLoading } = useFormSubmit('login', alert, reset, setError, getValues)

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
			isLoading={isLoading}
		/>
	)
}

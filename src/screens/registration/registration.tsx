import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AlertContext } from 'src/context'

import { STORE_ROUTES } from '@constants'
import { IFormHeader, IUser } from '@interfaces'

import { useFormSubmit } from '@hooks'

import { FormAuth } from '@components'

export const Registration = () => {
	const alert = useContext(AlertContext)
	const { handleSubmit, formState: { errors }, reset, control, getValues, setError } = useForm<IUser>({ mode: 'onChange' })
	const { onSubmit, isLoading } = useFormSubmit('registration', alert, reset, setError, getValues)

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

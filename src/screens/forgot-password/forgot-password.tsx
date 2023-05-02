import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AlertContext } from 'src/context'

import { STORE_ROUTES } from '@constants'
import { IFormHeader, IUser } from '@interfaces'

import { useFormSubmit } from '@hooks'

import { FormAuth } from '@components'

export const ForgotPassword = () => {
	const alert = useContext(AlertContext)
	const { handleSubmit, formState: { errors }, reset, control, getValues, setError } = useForm<IUser>({ mode: 'onChange' })
	const { onSubmit, isLoading } = useFormSubmit('forgot', alert, reset, setError, getValues)

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

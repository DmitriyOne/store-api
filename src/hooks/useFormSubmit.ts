import { useCallback } from 'react'

import { IAlert, IValidation } from '@interfaces'

const messages: any = {
	login: 'You have successfully logged into your account.',
	registration: 'The account has been created. You have successfully registered.',
	forgot: 'A one-time password has been sent to your email.',
}

export const useFormSubmit = (variant: string, alert: IAlert, reset: any, setError: any, getValues: any) => {
	const handlerTimer = () => {
		const alertTimeout = setTimeout(() => {
			alert.visible = false
			alert.hide!()
			clearTimeout(alertTimeout)
		}, 3000)
	}

	return useCallback((data: IValidation) => {
		console.log(data)
		const { password, confirm_password } = getValues()

		if (password !== confirm_password && variant === 'registration') {
			setError('confirm_password', { type: 'manual', message: 'Passwords do not match' })
			return
		}

		alert.visible = true
		alert.show(messages[variant], 'success')
		handlerTimer()
		reset()

	}, [variant, alert, getValues, reset, setError])
}

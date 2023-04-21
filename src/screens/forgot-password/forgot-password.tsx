import { STORE_ROUTES } from '@constants'
import { IFormHeader } from '@interfaces'

import { FormAuth } from '@components'

export const ForgotPassword = () => {

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
		/>
	)
}

import { STORE_ROUTES } from '@constants'
import { IFormHeader } from '@interfaces'

import { FormAuth } from '@components'

export const Registration = () => {

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
		/>
	)
}

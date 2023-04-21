import { STORE_ROUTES } from '@constants'
import { IFormHeader } from '@interfaces'

import { FormAuth } from '@components'

export const Login = () => {

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
		/>
	)
}

import { NextPage } from 'next'

import { HeadTitleDynamic } from '@components'

import { ForgotPassword } from '@screens'

export const ForgotPasswordPage: NextPage = () => {

	return (
		<>
			<HeadTitleDynamic />
			<ForgotPassword />
		</>
	)
}

export default ForgotPasswordPage

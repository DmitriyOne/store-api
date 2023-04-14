import { NextPage } from 'next'

import { HeadTitleDynamic } from '@components'

import { Login } from '@screens'

export const LoginPage: NextPage = () => {

	return (
		<>
			<HeadTitleDynamic pageTitle="Fake" />
			<Login />
		</>
	)
}

export default LoginPage

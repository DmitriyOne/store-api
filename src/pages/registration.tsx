import { NextPage } from 'next'

import { HeadTitleDynamic } from '@components'

import { Registration } from '@screens'

export const RegistrationPage: NextPage = () => {

	return (
		<>
			<HeadTitleDynamic pageTitle="Fake" />
			<Registration />
		</>
	)
}

export default RegistrationPage

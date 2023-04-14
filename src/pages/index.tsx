import { NextPage } from 'next'

import { HeadTitleDynamic } from '@components'

import { Home } from '@screens'

export const HomePage: NextPage = () => {

	return (
		<>
			<HeadTitleDynamic pageTitle="Fake" />
			<Home />
		</>
	)
}

export default HomePage

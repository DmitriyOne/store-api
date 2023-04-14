import { NextPage } from 'next'

import { HeadTitleDynamic } from '@components'

import { About } from '@screens'

export const AboutPage: NextPage = () => {
	
	return (
		<>
			<HeadTitleDynamic pageTitle="About" />
			<About />
		</>
	)
}

export default AboutPage

import { NextPage } from 'next'

import { HeadTitleDynamic } from '@components'

import { Settings } from '@screens'

export const SettingsPage: NextPage = () => {

	return (
		<>
			<HeadTitleDynamic pageTitle="Settings" />
			<Settings />
		</>
	)
}

export default SettingsPage

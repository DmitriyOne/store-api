import { NextPage } from 'next'

import { useAuth } from '@hooks'

import { HeadTitleDynamic } from '@components'

import { Account } from '@screens'

export const AccountPage: NextPage = () => {
	const { user } = useAuth()

	const userName = user.name?.replace(/\s+/g, '').trim()

	return (
		<>
			<HeadTitleDynamic pageTitle={userName} />
			<Account />
		</>
	)
}

export default AccountPage

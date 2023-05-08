import { GetServerSideProps, NextPage } from 'next'

import { Account } from '@screens'

interface Props {
	user: any
}

export const AccountPage: NextPage<Props> = ({ user }) => {
	console.log('user page: ', user)

	return (
		<Account />
	)
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
	console.log('user ssr: ',)

	return {
		props: {},
	}
}

export default AccountPage

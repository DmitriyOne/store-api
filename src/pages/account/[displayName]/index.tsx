import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'

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

// export const getServerSideProps: GetServerSideProps = async (context) => {

// }

export default AccountPage

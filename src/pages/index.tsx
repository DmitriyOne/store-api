import { NextPage } from 'next'
import { signOut } from 'firebase/auth'

import { useAuth } from '@hooks'

import { HeadTitleDynamic } from '@components'

import { Home } from '@screens'

export const HomePage: NextPage = () => {
	const { myAuth } = useAuth()

	const logout = () => {
		signOut(myAuth).then((e) => {
			console.log(e)
		}).catch((error) => {
			console.log(error)
		})
	}

	return (
		<>
			<HeadTitleDynamic pageTitle="Fake" />
			<Home />
			<button onClick={logout}>Logout</button>
		</>
	)
}

export default HomePage

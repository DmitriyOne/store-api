import { NextPage } from 'next'
import { signOut } from 'firebase/auth'

import { HeadTitleDynamic } from '@components'

import { Home } from '@screens'

import { auth } from '@fb'

export const HomePage: NextPage = () => {

	const logout = () => {
		signOut(auth).then((e) => {
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

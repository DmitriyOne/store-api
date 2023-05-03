import { NextPage } from 'next'
import { signOut } from 'firebase/auth'

import { useAppActions } from '@hooks'

import { HeadTitleDynamic } from '@components'

import { Home } from '@screens'

import { auth } from '@fb'

export const HomePage: NextPage = () => {
	const { removeUser } = useAppActions()

	const logout = () => {
		signOut(auth).then((e) => {
			console.log(e)
			removeUser()
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

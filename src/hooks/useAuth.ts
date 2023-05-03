import { useEffect } from 'react'

import { useAppActions } from './useAppActions'
import { useAppSelector } from './useAppSelector'

import { auth } from '@fb'

export const useAuth = () => {
	const { ...user } = useAppSelector(state => state.user)
	const { addUser, removeUser } = useAppActions()

	useEffect(() => {
		auth.onAuthStateChanged((fbUser) => {
			if (fbUser) {
				localStorage.setItem('currentUser', JSON.stringify(fbUser))
				addUser({
					id: fbUser.uid,
					name: fbUser.displayName,
					email: fbUser.email,
					isEmailVerified: fbUser.emailVerified,
					avatar: fbUser.photoURL,
					phone: fbUser.phoneNumber,
					createAccount: fbUser.metadata.creationTime,
					lastLogin: fbUser.metadata.lastSignInTime,
					token: fbUser.refreshToken,
				})
			} else {
				localStorage.removeItem('currentUser')
				removeUser()
			}
		})
	}, [])

	return {
		isAuth: !!user.email,
		user,
	}
}

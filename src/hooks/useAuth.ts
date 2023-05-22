/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { signOut, User } from 'firebase/auth'

import { STORE_ROUTES } from '@constants'

import { useAppActions, useAppSelector, useLoading } from '@hooks'
import { auth } from '@firebase'

export const useAuth = () => {
	const { ...user } = useAppSelector(state => state.user)
	const { addUser, removeUser, updateUser } = useAppActions()
	const router = useRouter()
	const { loading } = useLoading()

	const memoizedUser = useMemo(() => user, [user])

	const handleAuthStateChanged = useCallback((fbUser: User) => {

		if (fbUser) {
			localStorage.setItem('currentUser', JSON.stringify(fbUser))
			addUser({
				id: fbUser.uid,
				name: fbUser.displayName,
				email: fbUser.email,
				isEmailVerified: fbUser.emailVerified,
				avatar: fbUser.photoURL ?? null,
				phone: fbUser.phoneNumber,
				isPhoneVerified: false,
				createAccount: fbUser.metadata.creationTime,
				lastLogin: fbUser.metadata.lastSignInTime,
				token: fbUser.refreshToken,
			})
		} else {
			localStorage.removeItem('currentUser')
			removeUser()
		}
	}, [loading, addUser, removeUser, updateUser])

	useEffect(() => {
		if (loading) {
			return
		}
		const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged)
		return () => unsubscribe()
	}, [handleAuthStateChanged])

	const logout = async () => {
		router.push(STORE_ROUTES.SHOP)
		signOut(auth).then(async () => {
			removeUser()
		}).catch((error) => {
			console.error(error)
		})
	}

	const handlerCurrentUserFB = (): User => {
		const user = auth.currentUser
		if (!user) return

		return user
	}

	const isAuth = useMemo(() => !!user.email, [user.email])

	return {
		isAuth,
		user: memoizedUser,
		logout,
		loading,
		handlerCurrentUserFB,
	}
}

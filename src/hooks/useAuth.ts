/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { signOut, User } from 'firebase/auth'

import { STORE_ROUTES } from '@constants'

import { auth } from '@firebase'

import { useAppActions } from './useAppActions'
import { useAppSelector } from './useAppSelector'
import { useFormSubmit } from './useFormSubmit'

export const useAuth = () => {
	const { ...user } = useAppSelector(state => state.user)
	const { addUser, removeUser } = useAppActions()
	const router = useRouter()
	const { sleep } = useFormSubmit()

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
	}, [addUser, removeUser])

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged)
		return () => unsubscribe()
	}, [handleAuthStateChanged])

	const logout = async () => {
		router.push(STORE_ROUTES.SHOP)
		await sleep(1000)
		signOut(auth).then(async () => {
			removeUser()
		}).catch((error) => {
			console.error(error)
		})
	}

	const isAuth = useMemo(() => !!user.email, [user.email])

	return {
		isAuth,
		user: memoizedUser,
		logout,
	}
}

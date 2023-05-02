import { getAuth } from 'firebase/auth'

import { useAppSelector } from './useAppSelector'

export const useAuth = () => {
	const { email, ...user } = useAppSelector(state => state.user)
	const myAuth = getAuth()

	return {
		isAuth: !!email,
		user,
		myAuth,
	}
}

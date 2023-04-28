import { useAppSelector } from './useAppSelector'

export const useAuth = () => {
	const { email, ...user } = useAppSelector(state => state.user)

	return {
		isAuth: !!email,
		user,
	}
}

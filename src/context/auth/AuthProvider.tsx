import { FC, ReactNode, useState } from 'react'

import { AuthContext } from './AuthContext'

interface IProps {
	children: ReactNode
}

export const AuthProvider: FC<IProps> = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false)

	const value = {
		isAuth,
	}

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}

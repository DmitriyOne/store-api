import { createContext } from 'react'

import { IAuth } from '@interfaces'

const defaultValue: IAuth = {
	isAuth: false,
}

export const AuthContext = createContext<IAuth>(defaultValue)

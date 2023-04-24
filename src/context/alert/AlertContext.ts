import { createContext } from 'react'

import { IAlert } from '@interfaces'

const defaultValue: IAlert = {
	message: '',
	visible: false,
	status: 'success',
	show: () => { },
	hide: () => { },
}

export const AlertContext = createContext<IAlert>(defaultValue)

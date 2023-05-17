import { createContext } from 'react'

import { IConfirm } from '@interfaces'

const defaultValue: IConfirm = {
	isOpenConfirm: false,
	onCloseConfirm: () => { },
	onOpenConfirm: () => { },
	isError: false,
	setIsError: () => { },
}

export const ConfirmContext = createContext<IConfirm>(defaultValue)

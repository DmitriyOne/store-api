import { createContext } from 'react'

import { IConfirm } from '@interfaces'

const defaultValue: IConfirm = {
	isOpenConfirm: false,
	onCloseConfirm: () => { },
	onOpenConfirm: () => { },
	errorConfirmMsg: '',
	setErrorConfirmMsg: () => { },
}

export const ConfirmContext = createContext<IConfirm>(defaultValue)

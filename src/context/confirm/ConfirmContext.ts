import { createContext } from 'react'

import { IConfirm } from '@interfaces'

const defaultValue: IConfirm = {
	isOpenConfirm: false,
	onCloseConfirm: () => { },
	onOpenConfirm: () => { },
	errorConfirmMsg: '',
	setErrorConfirmMsg: () => { },
	isSuccess: false,
	setIsSuccess: () => { },
}

export const ConfirmContext = createContext<IConfirm>(defaultValue)

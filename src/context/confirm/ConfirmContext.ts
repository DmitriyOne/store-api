import { createContext } from 'react'

import { IConfirm } from '@interfaces'

const defaultValue: IConfirm = {
	isOpenUpdateName: false,
	isOpenUpdateEmail: false,
	isOpenUpdatePassword: false,
	onCloseConfirm: () => { },
	onOpenConfirm: () => { },
	errorConfirmMsg: '',
	setErrorConfirmMsg: () => { },
}

export const ConfirmContext = createContext<IConfirm>(defaultValue)

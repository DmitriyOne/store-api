/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction } from 'react'

export interface IConfirm {
	isOpenUpdateName: boolean,
	isOpenUpdateEmail: boolean,
	isOpenUpdatePassword: boolean,
	onCloseConfirm: () => void,
	onOpenConfirm: (value: string) => void,
	errorConfirmMsg: string
	setErrorConfirmMsg: Dispatch<SetStateAction<string>>
}

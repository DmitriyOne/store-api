import { Dispatch, SetStateAction } from 'react'

export interface IConfirm {
	isOpenConfirm: boolean,
	onCloseConfirm: () => void,
	onOpenConfirm: () => void,
	errorConfirmMsg: string
	setErrorConfirmMsg: Dispatch<SetStateAction<string>>
	isSuccess: boolean
	setIsSuccess: Dispatch<SetStateAction<boolean>>
}

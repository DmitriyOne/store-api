import { Dispatch, SetStateAction } from 'react'

export interface IConfirm {
	isOpenConfirm: boolean,
	onCloseConfirm: () => void,
	onOpenConfirm: () => void,
	isError: boolean
	setIsError: Dispatch<SetStateAction<boolean>>
}

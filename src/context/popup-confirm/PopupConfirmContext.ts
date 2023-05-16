import { createContext } from 'react'

import { IPopupConfirm } from '@interfaces'

const defaultValue: IPopupConfirm = {
	isOpenPopup: false,
	onClosePopup: () => { },
	onOpenPopup: () => { },
}

export const PopupConfirmContext = createContext<IPopupConfirm>(defaultValue)

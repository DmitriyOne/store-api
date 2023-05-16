import { FC, ReactNode } from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { PopupConfirmContext } from './PopupConfirmContext'

interface IProps {
	children: ReactNode
}

export const PopupConfirmProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const value = {
		isOpenPopup: isOpen,
		onOpenPopup: onOpen,
		onClosePopup: onClose,
	}

	return (
		<PopupConfirmContext.Provider value={value}>
			{children}
		</PopupConfirmContext.Provider>
	)
}

import { FC, ReactNode } from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { ConfirmContext } from './ConfirmContext'

interface IProps {
	children: ReactNode
}

export const ConfirmProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const value = {
		isOpenConfirm: isOpen,
		onCloseConfirm: onClose,
		onOpenConfirm: onOpen,
	}

	return (
		<ConfirmContext.Provider value={value}>
			{children}
		</ConfirmContext.Provider>
	)
}

import { FC, ReactNode, useState } from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { ConfirmContext } from './ConfirmContext'

interface IProps {
	children: ReactNode
}

export const ConfirmProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [errorConfirmMsg, setErrorConfirmMsg] = useState('')

	const value = {
		isOpenConfirm: isOpen,
		onCloseConfirm: onClose,
		onOpenConfirm: onOpen,
		errorConfirmMsg,
		setErrorConfirmMsg,
	}

	return (
		<ConfirmContext.Provider value={value}>
			{children}
		</ConfirmContext.Provider>
	)
}
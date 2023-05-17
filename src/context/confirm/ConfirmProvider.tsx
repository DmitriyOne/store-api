import { FC, ReactNode, useState } from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { ConfirmContext } from './ConfirmContext'

interface IProps {
	children: ReactNode
}

export const ConfirmProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [isError, setIsError] = useState(false)

	const value = {
		isOpenConfirm: isOpen,
		onCloseConfirm: onClose,
		onOpenConfirm: onOpen,
		isError,
		setIsError,
	}

	return (
		<ConfirmContext.Provider value={value}>
			{children}
		</ConfirmContext.Provider>
	)
}

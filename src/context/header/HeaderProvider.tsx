import { FC, ReactNode } from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { HeaderContext } from './HeaderContext'

interface IProps {
	children: ReactNode
}

export const HeaderProvider: FC<IProps> = ({ children }) => {
	const { isOpen: isOpenNav, onOpen: onOpenNav, onClose: onCloseNav } = useDisclosure()

	const value = {
		isOpenNav,
		onOpenNav,
		onCloseNav,
	}

	return (
		<HeaderContext.Provider value={value}>
			{children}
		</HeaderContext.Provider>
	)
}

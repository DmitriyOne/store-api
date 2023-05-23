import { FC, ReactNode, useState } from 'react'

import { ConfirmContext } from './ConfirmContext'

interface IProps {
	children: ReactNode
}

export const ConfirmProvider: FC<IProps> = ({ children }) => {
	const [isOpenUpdateName, setIsOpenUpdateName] = useState(false)
	const [isOpenUpdateEmail, setIsOpenUpdateEmail] = useState(false)
	const [isOpenUpdatePassword, setIsOpenUpdatePassword] = useState(false)
	const [errorConfirmMsg, setErrorConfirmMsg] = useState('')

	const onOpen = (value: string) => {
		if (value === 'name') {
			setIsOpenUpdateName(true)
		} else if (value === 'email') {
			setIsOpenUpdateEmail(true)
		} else if (value === 'password') {
			setIsOpenUpdatePassword(true)
		}
	}

	const onClose = () => {
		setIsOpenUpdateName(false)
		setIsOpenUpdateEmail(false)
		setIsOpenUpdatePassword(false)
	}

	const value = {
		isOpenUpdateName,
		isOpenUpdateEmail,
		isOpenUpdatePassword,
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

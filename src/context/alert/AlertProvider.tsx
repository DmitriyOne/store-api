import { FC, ReactNode, useState } from 'react'

import { AlertStatus } from '@chakra-ui/react'

import { IAlert } from '@interfaces'

import { Alert } from '@components'

import { AlertContext } from './AlertContext'

interface IProps extends IAlert {
	children: ReactNode
}

export const AlertProvider: FC<IProps> = ({
	message,
	children,
	status,
}) => {
	const [alertText, setAlertText] = useState<string | undefined>(message)
	const [alertType, setAlertType] = useState(status)
	const [alertOpen, setAlertOpen] = useState<boolean>(false)

	const openAlert = (text: string, type: AlertStatus) => {
		setAlertText(text)
		setAlertType(type)
		setAlertOpen(true)
	}
	const closeAlert = () => setAlertOpen(false)

	const value = {
		message: alertText,
		show: openAlert,
		hide: closeAlert,
		status: alertType,
		visible: alertOpen,
	}
	return (
		<AlertContext.Provider value={value}>
			<Alert message={alertText} />
			{children}
		</AlertContext.Provider>
	)
}

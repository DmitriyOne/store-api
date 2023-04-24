/* eslint-disable no-unused-vars */
import { AlertStatus } from '@chakra-ui/react'

export interface IAlert {
	visible?: boolean
	message?: string
	status?: AlertStatus
	show?: (text: string, type: AlertStatus) => void
	hide?: () => void
}

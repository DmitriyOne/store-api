import { IAlert } from '@interfaces'

export const useFormSubmit = (alert?: IAlert) => {
	
	const handlerTimer = () => {
		const alertTimeout = setTimeout(() => {
			alert.visible = false
			alert.hide!()
			clearTimeout(alertTimeout)
		}, 3000)
	}

	const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

	return {
		handlerTimer,
		sleep,
	}
}

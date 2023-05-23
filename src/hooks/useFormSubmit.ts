/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updatePassword, updateProfile } from 'firebase/auth'
import { useForm } from 'react-hook-form'

import { STORE_ROUTES } from '@constants'
import { IAlert, IUser } from '@interfaces'

import { useAppActions, useAuth } from '@hooks'
import { ConfirmContext } from '@context'

export const useFormSubmit = (
	alert?: IAlert,
	onClose?: () => void,
) => {
	const { handleSubmit, formState: { errors, isSubmitting }, reset, control } = useForm<IUser>({ mode: 'onChange' })
	const { setErrorConfirmMsg, onCloseConfirm, isOpenUpdateName, isOpenUpdateEmail, isOpenUpdatePassword } = useContext(ConfirmContext)
	const { handlerCurrentUserFB } = useAuth()
	const { updateUser } = useAppActions()
	const router = useRouter()

	const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

	const onSubmit = async (data: IUser) => {
		const user = handlerCurrentUserFB()
		const credential = EmailAuthProvider.credential(user.email, data.current_password)

		await reauthenticateWithCredential(user, credential).then(async (e) => {
			if (isOpenUpdateName) {
				const userName = data.name.toLowerCase().replace(/\s+/g, '').trim()
				const user = handlerCurrentUserFB()
				await updateProfile(user, {
					displayName: data.name,
				})
				updateUser({ name: data.name })
				router.push({
					pathname: STORE_ROUTES.SETTINGS,
					query: { displayName: userName },
				}, undefined, { shallow: true }
				)
			}

			if (isOpenUpdateEmail) {
				await updateEmail(user, data.email)
				updateUser({ email: data.email })
			}

			if (isOpenUpdatePassword) {
				await updatePassword(user, data.new_password)
			}

			reset()
			onCloseConfirm()
			onClose()
		}).catch((error) => {
			// eslint-disable-next-line no-console
			console.error(error)
			if (error.code === 'auth/wrong-password') {
				setErrorConfirmMsg('Incorrect password. Try again.')
				return
			}
			if (error.code === 'auth/too-many-requests') {
				setErrorConfirmMsg('Lots of tries. Try later..')
				return
			}
			setErrorConfirmMsg('An error has occurred. Try again.')
		})

	}

	const handlerTimer = () => {
		const alertTimeout = setTimeout(() => {
			alert.visible = false
			alert.hide!()
			clearTimeout(alertTimeout)
		}, 3000)
	}

	return {
		handlerTimer,
		sleep,
		handleSubmit,
		errors,
		isSubmitting,
		control,
		onSubmit,
	}
}

/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import { EmailAuthProvider, reauthenticateWithCredential, updateProfile } from 'firebase/auth'
import { useForm } from 'react-hook-form'

import { IAlert, IUser } from '@interfaces'

import { useAppActions, useAuth } from '@hooks'
import { auth } from '@firebase'
import { ConfirmContext, EditContext } from '@context'

enum ETypeUpdate {
	name = 'name',
	email = 'email',
	phone = 'phone'
}

export const useFormSubmit = (
	alert?: IAlert,
	onClose?: () => void,
	name?: string
) => {
	const { handleSubmit, formState: { errors, isSubmitting }, reset, control } = useForm<IUser>({ mode: 'onChange' })
	const { updateUser } = useAppActions()
	const { setErrorConfirmMsg, setIsSuccess } = useContext(ConfirmContext)
	const { stopEditing } = useContext(EditContext)
	const { handlerCurrentUserFB } = useAuth()

	const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

	const onSubmit = async (data: IUser) => {
		const user = handlerCurrentUserFB()
		const credential = EmailAuthProvider.credential(user.email, data.password)

		await reauthenticateWithCredential(user, credential).then((e) => {
			setIsSuccess(true)
			setErrorConfirmMsg('')
			stopEditing()
			onClose()
			reset()
		}).catch((error) => {
			console.error(error)
			setIsSuccess(false)
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

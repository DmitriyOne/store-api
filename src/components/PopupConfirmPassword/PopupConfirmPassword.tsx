import { FC, useRef } from 'react'
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail } from 'firebase/auth'
import { useForm } from 'react-hook-form'

import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogOverlay, Button, Stack } from '@chakra-ui/react'

import { VALIDATION } from '@constants'
import { IUser } from '@interfaces'

import { useAppActions } from '@hooks'
import { auth } from '@firebase'

import { CustomInput, Heading } from '@components'

import { btnSaveStyles, contentStyles, titleStyles } from './popup-confirm-password.styles'

interface IProps {
	isOpen: boolean
	onClose: () => void
	newEmail: string
	newName: string
	newPhone: string
	newPassword: string
}

export const PopupConfirmPassword: FC<IProps> = ({
	isOpen,
	onClose,
	newEmail,
	newName,
	newPassword,
	newPhone,
}) => {
	const cancelRef = useRef()
	const { handleSubmit, formState: { errors, isSubmitting }, reset, control } = useForm<IUser>({ mode: 'onChange' })
	const { updateUser } = useAppActions()

	const onSubmit = async (data: IUser) => {
		// const user = auth.currentUser
		// if (!user) return
		// const credential = EmailAuthProvider.credential(user.email, data.password)
		// try {
		// 	await reauthenticateWithCredential(user, credential)
		// 	await updateEmail(user, value)
		// 	updateUser({ email: value })
		// 	onSave()
		// 	reset()
		// } catch (error) {
		// 	console.log('error: ', error)
		// }
	}

	return (
		<AlertDialog
			isOpen={isOpen}
			leastDestructiveRef={cancelRef}
			onClose={onClose}
		>
			<AlertDialogOverlay>
				<AlertDialogContent {...contentStyles}>
					<Heading as="h3" {...titleStyles}>
						Update profile
					</Heading>

					<Stack
						as="form"
						onSubmit={handleSubmit(onSubmit)}
					>
						<CustomInput
							name="password"
							label="Enter your account password"
							type="password"
							rules={VALIDATION.password}
							errors={errors.password}
							control={control}
						/>
						<AlertDialogFooter p={0}>
							<Button
								ref={cancelRef}
								onClick={onClose}
							>
								Cancel
							</Button>
							<Button
								type="submit"
								disabled={isSubmitting}
								{...btnSaveStyles}
							>
								Save
							</Button>
						</AlertDialogFooter>
					</Stack>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	)
}

import { FC, useContext, useRef } from 'react'
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail } from 'firebase/auth'
import { useForm } from 'react-hook-form'

import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogOverlay, Button, Stack } from '@chakra-ui/react'

import { VALIDATION } from '@constants'
import { IUser } from '@interfaces'

import { useAppActions } from '@hooks'
import { auth } from '@firebase'
import { ConfirmContext, EditContext } from '@context'

import { CustomInput, Heading } from '@components'

import { btnSaveStyles, contentStyles, titleStyles } from './popup-confirm-password.styles'

interface IProps {
	isOpen: boolean
	onClose: () => void
}

export const PopupConfirmPassword: FC<IProps> = ({
	isOpen,
	onClose,
}) => {
	const cancelRef = useRef()
	const { handleSubmit, formState: { errors, isSubmitting }, reset, control } = useForm<IUser>({ mode: 'onChange' })
	const { updateUser } = useAppActions()
	const { isOpenConfirm } = useContext(ConfirmContext)
	const { stopEditing } = useContext(EditContext)

	const onSubmit = async (data: IUser) => {
		const user = auth.currentUser
		if (!user) return
		const credential = EmailAuthProvider.credential(user.email, data.password)

		await reauthenticateWithCredential(user, credential).then((e) => {
			onClose()
			stopEditing()
		}).catch((e) => {
			console.log('re auth err: ', e)
		})
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

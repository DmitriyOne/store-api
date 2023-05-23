import { useContext, useRef } from 'react'

import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogOverlay, Button, CircularProgress, Stack } from '@chakra-ui/react'

import { VALIDATION } from '@constants'

import { useFormSubmit } from '@hooks'
import { ConfirmContext } from '@context'

import { CustomInput, Heading } from '@components'

import { btnCancelStyles, btnSaveStyles, contentStyles, titleStyles } from './popup-confirm-password.styles'

export const PopupConfirmPassword = () => {
	const cancelRef = useRef()
	const { setErrorConfirmMsg, isOpenUpdateName, isOpenUpdateEmail, isOpenUpdatePassword, onCloseConfirm } = useContext(ConfirmContext)
	const { handleSubmit, onSubmit, errors, control, isSubmitting } = useFormSubmit(undefined, onCloseConfirm)

	const handlerClose = () => {
		setErrorConfirmMsg('')
		onCloseConfirm()
	}

	const isOpen = isOpenUpdateName || isOpenUpdateEmail || isOpenUpdatePassword

	return (
		<AlertDialog
			isOpen={isOpen}
			leastDestructiveRef={cancelRef}
			onClose={!isSubmitting ? onCloseConfirm : null}
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
						{isOpenUpdateName &&
							<CustomInput
								name="name"
								label="Enter your new username"
								type="text"
								rules={VALIDATION.name}
								errors={errors.name}
								control={control}
							/>
						}
						{isOpenUpdateEmail &&
							<CustomInput
								name="email"
								label="Enter your new email"
								type="email"
								rules={VALIDATION.email}
								errors={errors.email}
								control={control}
							/>
						}
						{isOpenUpdatePassword &&
							<CustomInput
								name="new_password"
								label="Enter your new password"
								type="password"
								rules={VALIDATION.password}
								errors={errors.new_password}
								control={control}
							/>
						}
						<CustomInput
							name="current_password"
							label="Enter your current password"
							type="password"
							rules={VALIDATION.password}
							errors={errors.current_password}
							control={control}
						/>
						<AlertDialogFooter p={0}>
							<Button
								ref={cancelRef}
								onClick={handlerClose}
								isDisabled={isSubmitting}
								{...btnCancelStyles}
							>
								Cancel
							</Button>
							<Button
								type="submit"
								isDisabled={isSubmitting}
								{...btnSaveStyles}
							>
								{isSubmitting
									?
									<CircularProgress
										isIndeterminate
										size="24px"
										color="green.700"
									/>
									:
									'Save'
								}
							</Button>
						</AlertDialogFooter>
					</Stack>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	)
}

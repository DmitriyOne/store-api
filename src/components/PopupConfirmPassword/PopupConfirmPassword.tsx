import { FC, useContext, useRef } from 'react'

import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogOverlay, Button, Stack } from '@chakra-ui/react'

import { VALIDATION } from '@constants'

import { useFormSubmit } from '@hooks'
import { ConfirmContext } from '@context'

import { CustomInput, Heading } from '@components'

import { btnSaveStyles, contentStyles, titleStyles } from './popup-confirm-password.styles'

interface IProps {
	isOpen: boolean
	onClose: () => void
	name: string
}

export const PopupConfirmPassword: FC<IProps> = ({
	isOpen,
	onClose,
	name
}) => {
	const cancelRef = useRef()
	const { setErrorConfirmMsg } = useContext(ConfirmContext)
	const { handleSubmit, onSubmit, errors, control, isSubmitting } = useFormSubmit(undefined, onClose, name)

	const handlerClose = () => {
		setErrorConfirmMsg('')
		onClose()
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
								onClick={handlerClose}
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

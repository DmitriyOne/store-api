/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { ChangeEvent, FC, ForwardedRef, forwardRef, useContext, useEffect, useRef, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { Box, Button, Flex, FormControl, FormLabel, Icon, IconButton, Input, InputGroup, InputRightElement, Text, useDisclosure, useMergeRefs } from '@chakra-ui/react'

import { ConfirmContext, EditContext } from '@context'

import { componentStyles, iconStyles, iconWrapperStyles, inputBtnCancelStyles, inputBtnSaveStyles, inputBtnWrapperStyles, inputWrapperStyles, textDefaultStyles, textTitleStyles } from './account-editable-field.styles'

interface IProps {
	label?: string
	defaultValue: string
	isTitle?: boolean
	nameField: string
	onUpdate: (value: string) => void
	isPassword?: boolean
}

export const AccountEditableField = forwardRef(({
	label,
	defaultValue = '',
	isTitle,
	nameField,
	onUpdate,
	isPassword,
}: IProps, ref: ForwardedRef<HTMLInputElement>) => {
	const [value, setValue] = useState<string>(defaultValue)
	const { onOpenConfirm, isSuccess, setIsSuccess } = useContext(ConfirmContext)
	const { editing, startEditing, stopEditing } = useContext(EditContext)
	const inputRef = useRef<HTMLInputElement>(null)
	const mergeRef = useMergeRefs(inputRef, ref)
	const { isOpen, onToggle } = useDisclosure()

	useEffect(() => {
		if (isSuccess) {
			console.log('update user info')
			onUpdate(value)
			setIsSuccess(false)
		}
	}, [isSuccess])

	const handleEdit = () => {
		startEditing(nameField)
		if (isPassword) {
			setValue('')
		}
	}

	const handleCancel = () => {
		setValue(defaultValue)
		stopEditing()
	}

	const handleSave = () => {
		onOpenConfirm()
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	const onClickReveal = () => {
		onToggle()
		if (inputRef.current) {
			inputRef.current.focus({ preventScroll: true })
		}
	}

	const isEditing = editing === nameField

	const textStyles = isTitle ? { ...textTitleStyles } : { ...textDefaultStyles }

	return (
		<>
			<FormControl
				id={label}
				{...componentStyles}
			>
				{label &&
					<FormLabel>
						{label}
					</FormLabel>
				}

				<InputGroup>
					{isEditing
						?
						<Flex {...inputWrapperStyles}>
							<InputGroup>
								{isPassword
									? <>
										<Input
											ref={mergeRef}
											type={isOpen ? 'text' : 'password'}
											value={value}
											onChange={handleChange}
											autoFocus
										/>
										<InputRightElement>
											<IconButton
												variant="link"
												aria-label={isOpen ? 'Mask password' : 'Reveal password'}
												icon={isOpen ? <HiEyeOff /> : <HiEye />}
												onClick={onClickReveal}
											/>
										</InputRightElement>
									</>
									:
									<Input
										type={'text'}
										value={value}
										onChange={handleChange}
										autoFocus
									/>
								}
							</InputGroup>

							<Box {...inputBtnWrapperStyles}>
								<Button
									onClick={handleCancel}
									{...inputBtnCancelStyles}
								>
									Cancel
								</Button>
								<Button
									onClick={handleSave}
									{...inputBtnSaveStyles}
								>
									Save
								</Button>
							</Box>
						</Flex>
						:
						<Text {...textStyles}>
							{defaultValue}
						</Text>
					}

					{!isEditing &&
						<InputRightElement
							onClick={handleEdit}
							{...iconWrapperStyles}
						>
							<Icon
								as={FaPencilAlt}
								{...iconStyles}
							/>
						</InputRightElement>
					}
				</InputGroup>
			</FormControl>
		</>
	)
})

AccountEditableField.displayName = 'AccountEditableField'

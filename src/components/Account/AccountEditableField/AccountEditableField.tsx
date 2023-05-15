/* eslint-disable no-unused-vars */
import { ChangeEvent, FC, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Text, useDisclosure } from '@chakra-ui/react'

import { PopupConfirmPassword } from '@components'

import { componentStyles, iconStyles, iconWrapperStyles, inputBtnCancelStyles, inputBtnSaveStyles, inputBtnWrapperStyles, inputWrapperStyles, textDefaultStyles, textTitleStyles } from './account-editable-field.styles'

interface IProps {
	label?: string
	defaultValue: string
	onUpdate: (value: string) => void
	isTitle?: boolean
}

export const AccountEditableField: FC<IProps> = ({
	label,
	defaultValue = '',
	onUpdate,
	isTitle,
}) => {
	const [isEditing, setIsEditing] = useState(false)
	const [value, setValue] = useState<string>(defaultValue)
	const { isOpen, onOpen, onClose } = useDisclosure()

	const handleEdit = () => {
		setIsEditing(true)
	}

	const handleCancel = () => {
		setIsEditing(false)
		onClose()
		setValue(defaultValue)
	}

	const handleSave = () => {
		setIsEditing(false)
		onUpdate(value)
		onClose()
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

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
							<Input
								value={value}
								onChange={handleChange}
								autoFocus
							/>

							<Box {...inputBtnWrapperStyles}>
								<Button
									onClick={handleCancel}
									{...inputBtnCancelStyles}
								>
									Cancel
								</Button>
								<Button
									onClick={onOpen}
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

			<PopupConfirmPassword
				isOpen={isOpen}
				onClose={onClose}
				onSave={handleSave}
				value={value}
			/>
		</>
	)
}

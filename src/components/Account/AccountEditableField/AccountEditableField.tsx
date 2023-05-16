/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { ChangeEvent, FC, use, useContext, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'

import { ConfirmContext, EditContext } from '@context'

import { componentStyles, iconStyles, iconWrapperStyles, inputBtnCancelStyles, inputBtnSaveStyles, inputBtnWrapperStyles, inputWrapperStyles, textDefaultStyles, textTitleStyles } from './account-editable-field.styles'

interface IProps {
	label?: string
	defaultValue: string
	onUpdate: (value: string) => void
	isTitle?: boolean
	nameField: string
}

export const AccountEditableField: FC<IProps> = ({
	label,
	defaultValue = '',
	onUpdate,
	isTitle,
	nameField,
}) => {
	const [value, setValue] = useState<string>(defaultValue)
	const { onOpenConfirm } = useContext(ConfirmContext)
	const [selectedField, setSelectedField] = useState(null)
	const { editing, startEditing, stopEditing } = useContext(EditContext)

	const handleEdit = () => {
		startEditing(nameField)
	}

	const handleCancel = () => {
		setValue(defaultValue)
		stopEditing()
	}

	const handleSave = () => {
		onUpdate(value)
		onOpenConfirm()
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
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
}

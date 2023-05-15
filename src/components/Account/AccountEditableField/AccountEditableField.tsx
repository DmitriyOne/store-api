/* eslint-disable no-unused-vars */
import { ChangeEvent, FC, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'

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

	const handleEdit = () => {
		setIsEditing(true)
	}

	const handleCancel = () => {
		setIsEditing(false)
		setValue(defaultValue)
	}

	const handleUpdate = () => {
		setIsEditing(false)
		onUpdate(value)
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	const textStyles = isTitle ? { ...textTitleStyles } : { ...textDefaultStyles }

	return (
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
								onClick={handleUpdate}
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
	)
}

import { ChangeEvent, FC, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import { Box, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'

interface IProps {
	label?: string
	defaultValue: string
	onUpdate: (value: string) => void
}

export const AccountEditableField: FC<IProps> = ({
	label,
	defaultValue = 'j',
	onUpdate,
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

	return (
		<FormControl id={label}>
			{label && <FormLabel>{label}</FormLabel>}
			<InputGroup>
				{isEditing
					?
					<>
						<Input
							value={value}
							onChange={handleChange}
							autoFocus
							variant="flushed"
						/>
						<Box display="inline-block" ml="2">
							<Text
								color="gray.500"
								cursor="pointer"
								onClick={handleCancel}
							>
								Cancel
							</Text>
							<Text
								color="primary.500"
								cursor="pointer"
								ml="4"
								onClick={handleUpdate}
							>
								Save
							</Text>
						</Box>
					</>
					:
					<Text cursor="default">{defaultValue}</Text>
				}
				<InputRightElement
					// pointerEvents="none"
					onClick={handleEdit}
					cursor="pointer"
					pos="relative"
					h="auto"
					w="auto"
					ml={2}
				>
					<Icon as={FaPencilAlt} color="gray.500" />
				</InputRightElement>
			</InputGroup>
		</FormControl>
	)
}

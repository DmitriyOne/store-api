import { FC, useContext } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import { Box, Flex, Icon, Text } from '@chakra-ui/react'

import { ConfirmContext } from '@context'

import { componentStyles, iconStyles, iconWrapperStyles, textDefaultStyles, textTitleStyles } from './account-editable-field.styles'

interface IProps {
	value: string
	isTitle?: boolean
	nameField: string
}

export const AccountEditableField: FC<IProps> = ({
	value,
	isTitle,
	nameField,
}) => {
	const { onOpenConfirm } = useContext(ConfirmContext)

	const handleEdit = () => {
		onOpenConfirm(nameField)
	}

	const textStyles = isTitle ? { ...textTitleStyles } : { ...textDefaultStyles }

	return (
		<Flex {...componentStyles}>
			<Text {...textStyles}>
				{value}
			</Text>
			<Box
				as="div"
				onClick={handleEdit}
				{...iconWrapperStyles}
			>
				<Icon
					as={FaPencilAlt}
					{...iconStyles}
				/>
			</Box>
		</Flex>
	)
}

import { FC } from 'react'

import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

import { EFontSize, EFontWeight } from '@enums'

interface IProps {
	label: string
	price: number
	fontSize?: keyof typeof EFontSize
	fontWeightLabel?: keyof typeof EFontWeight
	fontWeightPrice?: keyof typeof EFontWeight
}

export const OrderSummaryItem: FC<IProps> = ({
	label,
	price,
	fontSize = 'md',
	fontWeightLabel = 'medium',
	fontWeightPrice = 'medium',
}) => {

	return (
		<Flex
			justify="space-between"
			fontSize={fontSize}
		>
			<Text
				fontWeight={fontWeightLabel}
				color={useColorModeValue('gray.600', 'gray.100')}
			>
				{label}
			</Text>
			<Text fontWeight={fontWeightPrice}>
				{price}$
			</Text>
		</Flex>
	)
}

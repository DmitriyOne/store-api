import { FC } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { EFontSize, EFontWeight } from '@enums'

import { useCustomStyles } from '@hooks'

import { componentStyles } from './order-summary-item.styles'

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
	const { orderSumItemTextStyles } = useCustomStyles()

	return (
		<Flex
			fontSize={fontSize}
			{...componentStyles}
		>
			<Text
				fontWeight={fontWeightLabel}
				{...orderSumItemTextStyles}
			>
				{label}
			</Text>
			<Text fontWeight={fontWeightPrice}>
				{price.toFixed(2)}$
			</Text>
		</Flex>
	)
}

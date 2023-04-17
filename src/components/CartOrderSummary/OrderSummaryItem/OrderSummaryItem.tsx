import { FC } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { EFontSize, EFontWeight } from '@enums'

import { useCustomStyles } from '@hooks'

import { Heading } from '@components'

import { componentStyles, textStyles, titleStyles } from './order-summary-item.styles'

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
			<Heading
				as="h4"
				fontWeight={fontWeightLabel}
				{...titleStyles}
				{...orderSumItemTextStyles}
			>
				{label}
			</Heading>
			<Text
				fontWeight={fontWeightPrice}
				{...textStyles}
			>
				{price.toFixed(2)}$
			</Text>
		</Flex>
	)
}

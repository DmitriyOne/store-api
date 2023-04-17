import { FC } from 'react'

import { HStack, Text } from '@chakra-ui/react'

import { componentStyles, textStyles } from './product-price.styles'

interface IProps {
	price: number
	quantity: number
}

export const ProductPrice: FC<IProps> = ({ price, quantity }) => {

	return (
		<HStack {...componentStyles}>
			<Text
				as="span"
				{...textStyles}
			>
				{(price * quantity).toFixed(2)}$
			</Text>
		</HStack>
	)
}

import { FC } from 'react'

import { HStack, Text } from '@chakra-ui/react'

import { componentStyles, textStyles } from './product-price.styles'

interface IProps {
	price: number
}

export const ProductPrice: FC<IProps> = ({ price }) => {

	return (
		<HStack {...componentStyles}>
			<Text
				as="span"
				{...textStyles}
			>
				{price}$
			</Text>
		</HStack>
	)
}

import { FC } from 'react'

import { Box, Text } from '@chakra-ui/react'

import { priceTextStyles, priceTextThroughStyles, priceWrapStyles } from '../product-details.styles'

interface IProps {
	price: number
}

export const ProductPrice: FC<IProps> = ({ price }) => {
	const priceSale = price + 20

	return (
		<Box {...priceWrapStyles}>
			<Text as="p" {...priceTextStyles}>
				<Text as="span" {...priceTextThroughStyles}>
					{priceSale}$
				</Text>
				<b>
					&nbsp;{price}$
				</b>
			</Text>
		</Box>
	)
}

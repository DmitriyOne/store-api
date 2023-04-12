import { FC } from 'react'

import { Box } from '@chakra-ui/react'

import { useCustomStyles } from '@hooks'

import { boxSpanStyles, boxStyles } from './product-price.styles'

interface IProps {
	price: number
}

export const ProductPrice: FC<IProps> = ({ price }) => {
	const { productPriceBoxStyles } = useCustomStyles()

	return (
		<Box
			{...boxStyles}
			{...productPriceBoxStyles}
		>
			<Box
				as="span"
				{...boxSpanStyles}
				{...productPriceBoxStyles}
			>
				£
			</Box>
			{price}
		</Box>
	)
}

import { FC } from 'react'

import { Box } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import { useCustomStyles } from '@hooks'

import { ProductBody } from './ProductBody'
import { ProductImage } from './ProductImage'
import { ProductTooltip } from './ProductTooltip'

import { boxStyles } from './product-item.styles'

interface IProps {
	product: IProduct
}

export const ProductItem: FC<IProps> = ({ product }) => {
	const { productItemBoxStyles } = useCustomStyles()

	return (
		<Box
			key={product.id}
			{...boxStyles}
			{...productItemBoxStyles}
		>
			<ProductTooltip product={product} />
			<ProductImage product={product} />
			<ProductBody product={product} />
		</Box>
	)
}

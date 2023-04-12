import { FC } from 'react'
import { FiHeart } from 'react-icons/fi'

import { Box } from '@chakra-ui/react'

import { Tooltip } from '@components'

import { useCustomStyles } from '@hooks'

import { IProduct } from '@interfaces'

import { boxStyles } from './product-item.styles'
import { ProductBody } from './ProductBody'
import { ProductImage } from './ProductImage'

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
			<ProductImage product={product} />
			<ProductBody product={product} />

			<Tooltip
				label="Add to favorites"
				icon={FiHeart}
			/>
		</Box>
	)
}

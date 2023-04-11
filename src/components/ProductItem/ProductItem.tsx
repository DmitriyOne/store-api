import { FC } from 'react'
import { FiHeart } from 'react-icons/fi'

import { Box } from '@chakra-ui/react'

import { Tooltip } from '@components'

import { useCustomStyles } from '@hooks'

import { IProduct } from '@interfaces'

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
			maxW="full"
			borderWidth="1px"
			rounded="lg"
			shadow="lg"
			p={4}
			display="flex"
			flexDirection="column"
			position="relative"
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

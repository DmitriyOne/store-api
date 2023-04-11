import { FC } from 'react'

import { Box, useColorModeValue } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import { ProductBody } from './ProductBody'
import { ProductImage } from './ProductImage'

interface IProps {
	product: IProduct
}

export const ProductItem: FC<IProps> = ({ product }) => {
	const bg = useColorModeValue('white', 'gray.800')

	return (
		<Box
			key={product.id}
			bg={bg}
			maxW="full"
			borderWidth="1px"
			rounded="lg"
			shadow="lg"
			p={6}
		>
			<ProductImage product={product} />
			<ProductBody product={product} />
		</Box>
	)
}

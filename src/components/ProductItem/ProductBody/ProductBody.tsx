import { FC } from 'react'
import { FiShoppingCart } from 'react-icons/fi'

import { Box, Flex } from '@chakra-ui/react'

import { Tooltip } from '@components'

import { IProduct } from '@interfaces'

import { ProductPrice } from '../ProductPrice'
import { ProductRating } from '../ProductRating'

interface IProps {
	product: IProduct
}

export const ProductBody: FC<IProps> = ({ product }) => {

	return (
		<Box pt="6">
			<Flex
				mt="1"
				justifyContent="space-between"
				alignContent="center"
			>
				<Box
					fontSize="2xl"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
				>
					{product.title}
				</Box>

				<Tooltip
					label="Add to cart"
					icon={FiShoppingCart}
				/>
			</Flex>

			<Flex
				justifyContent="space-between"
				alignContent="center"
			>
				<ProductRating
					rating={product.rating.rate}
				/>
				<ProductPrice
					price={product.price}
				/>
			</Flex>
		</Box>
	)
}

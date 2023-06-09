import { FC } from 'react'
import Link from 'next/link'

import { Box, Flex } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'
import { IProduct } from '@interfaces'

import { Heading } from '@components'

import { ProductBtn } from '../ProductBtn'
import { ProductPrice } from '../ProductPrice'
import { ProductRating } from '../ProductRating'

import { flex2Styles, flexMainStyles, titleStyles } from './product-body.styles'

interface IProps {
	product: IProduct
}

export const ProductBody: FC<IProps> = ({ product }) => {
	
	const href = product.id.toString()

	return (
		<Flex {...flexMainStyles}>
			<Box mb={3}>
				<Heading
					as="h4"
					className="text-one-line"
					{...titleStyles}
				>
					<Link
						href={`${STORE_ROUTES.PRODUCT}/${href}`}
						className="block"
					>
						{product.title}
					</Link>
				</Heading>
				<Flex {...flex2Styles}>
					<ProductRating
						rating={product.rating.rate}
					/>
					<ProductPrice
						price={product.price}
					/>
				</Flex>
			</Box>
			<ProductBtn product={product} />
		</Flex>
	)
}

import { FC } from 'react'

import { SimpleGrid } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import { useGetAllProductsQuery } from '@services/product'

import { Heading, ProductItem } from '@components'

import { gridStyles } from './shop.styles'

// interface IProps {
// 	products: IProduct[]
// }

export const Shop = () => {
	const { data: products, isFetching,isLoading } = useGetAllProductsQuery()

	return (
		<>
			<Heading size="xl" pb={6}>
				Shop page
			</Heading>
			{products || isFetching || isLoading
				?
				<SimpleGrid {...gridStyles}>
					{products?.map(product =>
						<ProductItem
							key={product.id}
							product={product}
						/>
					)}
				</SimpleGrid>
				:
				<div>Loading...</div>
			}
		</>
	)
}

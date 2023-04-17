import { SimpleGrid } from '@chakra-ui/react'

import { useGetAllProductsQuery } from '@services/product'

import { Heading, ProductItem } from '@components'

import { gridStyles } from './shop.styles'

export const Shop = () => {
	const { data: products, isFetching, isLoading } = useGetAllProductsQuery()

	if (isFetching || isLoading) {
		return <div>Loading...</div>
	}

	return (
		<>
			<Heading size="xl" pb={6}>
				Shop page
			</Heading>
			{products
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
				<div>Something went wrong...</div>
			}
		</>
	)
}

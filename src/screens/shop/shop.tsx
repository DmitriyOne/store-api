import { SimpleGrid } from '@chakra-ui/react'

import { useGetAllProductsQuery } from '@services/product'

import { Heading, ProductItem } from '@components'

import { gridStyles } from './shop.styles'

export const Shop = () => {
	const { data } = useGetAllProductsQuery()

	return (
		<>
			<Heading size="xl" pb={6}>
				Shop page
			</Heading>
			{data
				?
				<SimpleGrid {...gridStyles}>
					{data.map(product =>
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

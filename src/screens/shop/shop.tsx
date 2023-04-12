import { SimpleGrid } from '@chakra-ui/react'

import { useGetAllProductsQuery } from '@services/product'

import { Heading, ProductItem } from '@components'

export const Shop = () => {
	const { data } = useGetAllProductsQuery()

	return (
		<>
			<Heading size="xl" pb={6}>
				Shop page
			</Heading>
			{data
				?
				<SimpleGrid
					columns={{ base: 2, md: 3, lg: 4 }}
					spacing={{ base: '10px', md: '20px', lg: '20px' }}
					alignItems="stretch"
				>
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

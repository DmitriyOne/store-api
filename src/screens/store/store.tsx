import { SimpleGrid } from '@chakra-ui/react'

import { Heading, ProductItem } from '@components'

import { useGetAllProductsQuery } from '@services/product'

export const Store = () => {
	const { data } = useGetAllProductsQuery()

	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<>
			<Heading size="xl" pb={6}>
				Store page
			</Heading>
			<SimpleGrid
				columns={{ base: 2, md: 3, lg: 4 }}
				spacing={{ sm: '10px', md: '20px', lg: '20px' }}
			>
				{data.map(product =>
					<ProductItem
						key={product.id}
						product={product}
					/>
				)}
			</SimpleGrid>
		</>
	)
}

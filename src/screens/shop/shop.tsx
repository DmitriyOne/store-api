import { ChangeEvent, useState } from 'react'

import { Flex, SimpleGrid } from '@chakra-ui/react'

import { EFilter } from '@enums'

import { useFilter } from '@hooks'
import { useGetAllProductsQuery } from '@services/product'

import { FilterSelect, Heading, ProductItem } from '@components'

import { gridStyles, rowFiltersStyles } from './shop.styles'

export const Shop = () => {
	const [filter, setFilter] = useState<keyof typeof EFilter>('None')
	const { data: products, isFetching, isLoading } = useGetAllProductsQuery()
	const filteredProducts = useFilter(products ?? [], filter)

	if (isFetching || isLoading) {
		return <div>Loading...</div>
	}

	const onFilter = (e: ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value as keyof typeof EFilter)
	}

	return (
		<>
			<Heading size="xl" pb={6}>
				Shop page
			</Heading>
			<Flex {...rowFiltersStyles}>
				<FilterSelect value={filter} onChange={onFilter} />
			</Flex>
			{products
				?
				<SimpleGrid {...gridStyles}>
					{filteredProducts.map(product =>
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

import { Flex, SimpleGrid } from '@chakra-ui/react'

import { useFilter, usePagination } from '@hooks'
import { useGetAllProductsQuery } from '@services/product'

import { FilterSearch, FilterSelect, Heading, Pagination, ProductItem } from '@components'

import { gridStyles, rowFiltersStyles } from './shop.styles'

export const Shop = () => {
	const { data: products, isFetching, isLoading } = useGetAllProductsQuery()

	const { filteredProducts, filterValue, onFilter } = useFilter(products ?? [])
	const { productsSlice, pageCount, handlePageClick } = usePagination(filteredProducts)

	if (isFetching || isLoading) {
		return <div>Loading...</div>
	}

	return (
		<>
			<Heading size="xl" pb={6}>
				Shop page
			</Heading>
			<Flex {...rowFiltersStyles}>
				<FilterSearch />
				<FilterSelect value={filterValue} onChange={onFilter} />
			</Flex>
			{products
				?
				<>
					<SimpleGrid {...gridStyles}>
						{productsSlice.map(product =>
							<ProductItem
								key={product.id}
								product={product}
							/>
						)}
					</SimpleGrid>
					<Pagination
						pageCount={pageCount}
						handlePageClick={handlePageClick}
					/>
				</>
				:
				<div>Something went wrong...</div>
			}
		</>
	)
}

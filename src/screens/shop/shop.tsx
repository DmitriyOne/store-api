import { Flex, SimpleGrid } from '@chakra-ui/react'

import { useFilter, usePagination } from '@hooks'
import { useSearch } from '@hooks/useSearch'
import { useGetAllProductsQuery } from '@services/product'

import { FilterSearch, FilterSelect, Heading, Pagination, ProductItem, ProductsError } from '@components'

import { gridStyles, rowFiltersStyles } from './shop.styles'

export const Shop = () => {
	const { data, isFetching, isLoading, isError } = useGetAllProductsQuery()
	const { products, valueSearch, onChangeValueSearch } = useSearch(data ?? [])
	const { filteredProducts, filterValue, onFilter } = useFilter(products)
	const { pageProducts, pageCount, handlePageClick } = usePagination(filteredProducts)

	if (isFetching || isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <ProductsError isError />
	}

	return (
		<>
			<Heading size="xl" pb={6}>
				Shop page
			</Heading>
			<Flex {...rowFiltersStyles}>
				<FilterSearch value={valueSearch} onChange={onChangeValueSearch} />
				<FilterSelect value={filterValue} onChange={onFilter} />
			</Flex>
			{pageProducts.length !== 0
				?
				<>
					<SimpleGrid {...gridStyles}>
						{pageProducts.map(product =>
							<ProductItem
								key={product.id}
								product={product}
							/>
						)}
					</SimpleGrid>
					{pageCount !== 1 &&
						<Pagination
							pageCount={pageCount}
							handlePageClick={handlePageClick}
						/>
					}
				</>
				:
				<ProductsError isNotFound />
			}
		</>
	)
}

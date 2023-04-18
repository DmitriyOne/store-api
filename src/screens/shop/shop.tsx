import { ChangeEvent, useEffect, useState } from 'react'

import { Flex, SimpleGrid } from '@chakra-ui/react'

import { useFilter, usePagination } from '@hooks'
import { useGetAllProductsQuery } from '@services/product'

import { FilterSearch, FilterSelect, Heading, Pagination, ProductItem } from '@components'

import { gridStyles, rowFiltersStyles } from './shop.styles'

export const Shop = () => {
	const [valueSearch, setValueSearch] = useState('')
	const { data, isFetching, isLoading } = useGetAllProductsQuery()
	const { filteredProducts, filterValue, onFilter } = useFilter(data ?? [])
	const [products, setProducts] = useState(filteredProducts)
	const { pageProducts, pageCount, handlePageClick } = usePagination(products)

	useEffect(() => {
		setProducts(filteredProducts.filter(product => product.title.toLocaleLowerCase().includes(valueSearch.toLocaleLowerCase())))
	}, [valueSearch])

	if (isFetching || isLoading) {
		return <div>Loading...</div>
	}

	const onChangeValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setValueSearch(e.target.value)
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
			{data
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

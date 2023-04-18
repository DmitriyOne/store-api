import { ChangeEvent, useState } from 'react'
import ReactPaginate from 'react-paginate'

import { Flex, SimpleGrid } from '@chakra-ui/react'

import { EFilter } from '@enums'

import { useFilter } from '@hooks'
import { useGetAllProductsQuery } from '@services/product'

import { FilterSelect, Heading, ProductItem } from '@components'

import { gridStyles, rowFiltersStyles } from './shop.styles'

export const Shop = () => {
	const [currentPage, setCurrentPage] = useState(0)
	const [filter, setFilter] = useState<keyof typeof EFilter>('None')
	const { data: products, isFetching, isLoading } = useGetAllProductsQuery()
	const filteredProducts = useFilter(products ?? [], filter)

	if (isFetching || isLoading) {
		return <div>Loading...</div>
	}

	const handlePageClick = ({ selected }: { selected: number }) => {
		setCurrentPage(selected)
	}

	const perPage = 8
	const offset = currentPage * perPage
	const pageCount = Math.ceil(filteredProducts.length / perPage)

	const slice = filteredProducts.slice(offset, offset + perPage)

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
				<>
					<SimpleGrid {...gridStyles}>
						{slice.map(product =>
							<ProductItem
								key={product.id}
								product={product}
							/>
						)}
					</SimpleGrid>
					<ReactPaginate
						pageCount={pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={handlePageClick}
						containerClassName={'pagination'}
						activeClassName={'active'}
					/>
				</>
				:
				<div>Something went wrong...</div>
			}
		</>
	)
}

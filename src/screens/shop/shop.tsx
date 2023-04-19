import { useFilter, useSearch } from '@hooks'
import { useGetAllProductsQuery } from '@services/product'

import { Heading } from '@components'

import { FilterBar } from './filter-bar'
import { GridCards } from './grid-cards'

export const Shop = () => {
	const { data, isLoading, isError } = useGetAllProductsQuery()
	const { products, valueSearch, onChangeValueSearch } = useSearch(data ?? [])
	const { filteredProducts, filterValue, onFilter } = useFilter(products)

	return (
		<>
			<Heading size="xl" pb={6}>
				Shop page
			</Heading>

			<FilterBar
				valueSearch={valueSearch}
				filterValue={filterValue}
				onChangeValue={onChangeValueSearch}
				onFilter={onFilter}
			/>

			<GridCards
				isLoading={isLoading}
				isError={isError}
				products={filteredProducts}
			/>
		</>
	)
}

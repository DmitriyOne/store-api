import { useFilter, useSearch } from '@hooks'

import { Heading } from '@components'

import { FilterBar } from './filter-bar'
import { GridCards } from './grid-cards'

export const Shop = () => {
	// const { data, isLoading, isError } = useGetAllProductsQuery()
	// const { products, valueSearch, onChangeValueSearch } = useSearch([])
	// const { filteredProducts, filterValue, onFilter } = useFilter(products)

	return (
		<>
			<Heading size="xl" pb={6}>
				Shop page
			</Heading>

			<FilterBar
				valueSearch={''}
				filterValue={''}
				onChangeValue={() => { }}
				onFilter={() => { }}
			/>

			<GridCards
				isLoading={false}
				isError={false}
				products={[]}
			/>
		</>
	)
}

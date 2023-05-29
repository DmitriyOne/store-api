import useSWR from 'swr/immutable'

import { API } from '@constants'
import { IProduct } from '@interfaces'

import { useFilter, useSearch } from '@hooks'
import { axiosFetcher } from '@helpers'

import { Heading, ProductsError, Spinner } from '@components'

import { FilterBar } from './filter-bar'
import { GridCards } from './grid-cards'

export const Shop = () => {
	const { data, error: isError, isLoading } = useSWR<IProduct[]>(API.PRODUCTS.ALL, axiosFetcher)
	const { products, valueSearch, onChangeValueSearch } = useSearch(data ?? [])
	const { filteredProducts, filterValue, onFilter } = useFilter(products)

	if (isLoading) {
		return <Spinner />
	}

	if (isError) {
		return <ProductsError isError />
	}

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
				products={filteredProducts}
			/>
		</>
	)
}

/* eslint-disable indent */
import { ChangeEvent, useState } from 'react'

import { EFilter } from '@enums'
import { IProduct } from '@interfaces'

type TFilter = keyof typeof EFilter

export const useFilter = (
	products: IProduct[]
) => {
	const [filterValue, setFilterValue] = useState<TFilter>('None')
	const filteredProducts = [...products]

	const onFilter = (e: ChangeEvent<HTMLSelectElement>) => {
		setFilterValue(e.target.value as keyof typeof EFilter)
	}

	switch (filterValue) {
		case EFilter.None:
			products
			break
		case EFilter.AZ:
			filteredProducts.sort((a, b) => a.title.localeCompare(b.title))
			break
		case EFilter.PriceUp:
			filteredProducts.sort((a, b) => b.price - a.price)
			break
		case EFilter.PriceDown:
			filteredProducts.sort((a, b) => a.price - b.price)
			break
		default:
			break
	}

	return { filteredProducts, filterValue, onFilter }
}

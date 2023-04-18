/* eslint-disable indent */
import { EFilter } from '@enums'
import { IProduct } from '@interfaces'

type Filter = keyof typeof EFilter

export const useFilter = (products: IProduct[], filter: Filter): IProduct[] => {
	const sortedProducts = [...products]
	
	switch (filter) {
		case EFilter.None:
			return products
		case EFilter.AZ:
			sortedProducts.sort((a, b) => a.title.localeCompare(b.title))
			break
		case EFilter.PriceUp:
			sortedProducts.sort((a, b) => b.price - a.price)
			break
		case EFilter.PriceDown:
			sortedProducts.sort((a, b) => a.price - b.price)
			break
		default:
			return []
	}

	return sortedProducts
}

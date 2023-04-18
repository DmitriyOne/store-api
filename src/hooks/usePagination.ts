import { useState } from 'react'

import { IProduct } from '@interfaces'

export const usePagination = (products: IProduct[]) => {
	const [currentPage, setCurrentPage] = useState(0)
	const perPage = 8
	const offset = currentPage * perPage
	const pageCount = Math.ceil(products.length / perPage)

	const productsSlice = products.slice(offset, offset + perPage)

	const handlePageClick = ({ selected }: { selected: number }) => {
		setCurrentPage(selected)
	}

	return { productsSlice, pageCount, handlePageClick }
}

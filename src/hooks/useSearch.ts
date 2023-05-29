/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from 'react'

import { IProduct } from '@interfaces'

import { useDebounce } from '@hooks'

export const useSearch = (productsData: IProduct[]) => {
	const [valueSearch, setValueSearch] = useState('')
	const [products, setProducts] = useState(productsData)
	const debounce = useDebounce(valueSearch, 500)

	useEffect(() => {
		if(products.length < 1) {
			return
		}
		setProducts(productsData.filter(product => product.title.toLocaleLowerCase().includes(valueSearch.toLocaleLowerCase())))
	}, [debounce, productsData])

	const onChangeValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setValueSearch(e.target.value)
	}

	return { products, valueSearch, onChangeValueSearch }
}

import { useRouter } from 'next/router'
import { skipToken } from '@reduxjs/toolkit/dist/query'

import { useGetCurrentProductQuery } from '@services/product'

import { ProductDetails } from '@components'

import { titleStyles } from './product.styles'

export const Product = () => {
	const router = useRouter()
	const { id } = router.query
	const idToNumber = Number(id)

	const { data } = useGetCurrentProductQuery(typeof idToNumber === 'number'
		? idToNumber
		: skipToken, { skip: router.isFallback }
	)

	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<>
			<ProductDetails product={data} />
		</>
	)
}

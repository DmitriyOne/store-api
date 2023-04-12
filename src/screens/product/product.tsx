import { useRouter } from 'next/router'
import { skipToken } from '@reduxjs/toolkit/dist/query'

import { useGetCurrentProductQuery } from '@services/product'

import { Heading } from '@components'

export const Product = () => {
	const router = useRouter()
	const { id } = router.query
	const idToNumber = Number(id)

	const { data } = useGetCurrentProductQuery(typeof idToNumber === 'number'
		? idToNumber
		: skipToken, { skip: router.isFallback }
	)

	return (
		<>
			<Heading size="xl">
				Your change:
			</Heading>
			<div>
				{data?.title}
			</div>
		</>
	)
}

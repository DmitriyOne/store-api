import { useRouter } from 'next/router'

import { skipToken } from '@reduxjs/toolkit/dist/query'

import { Heading } from '@components'

import { useGetCurrentProductQuery } from '@services/product'

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
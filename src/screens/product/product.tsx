import { useRouter } from 'next/router'

import { skipToken } from '@reduxjs/toolkit/dist/query'

import { MyHeading } from '@components'

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
			<MyHeading size="xl">
				Your change:
			</MyHeading>
			<div>
				{data?.title}
			</div>
		</>
	)
}

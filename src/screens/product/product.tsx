import React from 'react'
import { useRouter } from 'next/router'
import { skipToken } from '@reduxjs/toolkit/dist/query'

import { TagH1 } from '@components'

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
			<TagH1 title="Your change:" />
			<div>
				{data?.title}
			</div>
		</>
	)
}

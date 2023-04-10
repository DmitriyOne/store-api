import React from 'react'

import { TagH1 } from '@components'

import { useGetAllProductsQuery } from '@services/product'

export const Store = () => {
	const { data } = useGetAllProductsQuery()

	return (
		<>
			<TagH1 title="Store" />
			{data?.map(data => <div key={data.id}>{data.title}</div>)}
		</>
	)
}

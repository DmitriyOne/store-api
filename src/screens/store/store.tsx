import { Heading } from '@components'

import { useGetAllProductsQuery } from '@services/product'

export const Store = () => {
	const { data } = useGetAllProductsQuery()

	return (
		<>
			<Heading size="xl">
				Store page
			</Heading>
			<div>
				{data?.map(product =>
					product.title
				)}
			</div>
		</>
	)
}

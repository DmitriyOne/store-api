import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { HeadTitleDynamic } from '@components'

import { Product } from '@screens'

export const ProductPage: NextPage = () => {
	const route = useRouter()
	const { id } = route.query

	return (
		<>
			<HeadTitleDynamic pageTitle={id?.toString()} />
			<Product />
		</>
	)
}

export default ProductPage

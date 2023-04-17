import { NextPage } from 'next'

import { IBreadcrumb } from '@interfaces'

import { makeStore, wrapper } from '@services'
import { getAllProducts, getCurrentProduct, getRQTProduct } from '@services/product'

import { HeadTitleDynamic } from '@components'

import { Product } from '@screens'

interface IProps {
	id: string
	breadcrumbs: IBreadcrumb[]
}

export const ProductPage: NextPage<IProps> = ({ id, breadcrumbs }) => {
	
	return (
		<>
			<HeadTitleDynamic pageTitle={id} />
			<Product breadcrumbs={breadcrumbs} />
		</>
	)
}

export async function getStaticPaths() {
	const store = makeStore()
	const result = await store.dispatch(getAllProducts.initiate())

	return {
		paths: result.data?.map((product) => `/products/${product.id}`),
		fallback: true,
	}
}

export const getStaticProps = wrapper.getStaticProps(
	(store) => async (context) => {
		const id = context.params?.id

		store.dispatch(getCurrentProduct.initiate(Number(id)))
		const data: any = await Promise.all(store.dispatch(getRQTProduct()))

		const breadcrumbs = [
			{ label: 'Home', href: '/' },
			{ label: 'Shop', href: '/shop' },
			{ label: data[0].data.id, href: `/products/${id}` },
		]

		return {
			props: {
				id,
				breadcrumbs,
			},
		}
	}
)

export default ProductPage

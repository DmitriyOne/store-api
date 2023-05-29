import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { SWRConfig } from 'swr'

import { API, STORE_ROUTES } from '@constants'
import { IBreadcrumb, IProduct } from '@interfaces'

import { axiosFetcher } from '@helpers'

import { HeadTitleDynamic } from '@components'

import { Product } from '@screens'

interface IProps {
	breadcrumbs: IBreadcrumb[]
	fallback: any
	id: string
}

export const ProductPage: NextPage<IProps> = ({ breadcrumbs, fallback, id }) => {

	return (
		<SWRConfig value={{ fallback }}>
			<HeadTitleDynamic pageTitle={id} />
			<Product breadcrumbs={breadcrumbs} id={id} />
		</SWRConfig>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const result: IProduct[] = await axiosFetcher(API.PRODUCTS.ALL)

	return {
		paths: result.map((product) => `/products/${product.id}`),
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id
	const idToString = id.toString()
	const data: IProduct = await axiosFetcher(API.PRODUCTS.BY_ID(idToString))

	const breadcrumbs = [
		{ label: 'Home', href: STORE_ROUTES.HOME },
		{ label: 'Shop', href: STORE_ROUTES.SHOP },
		{ label: data.id, href: `/products/${id}` },
	]

	return {
		props: {
			id: idToString,
			breadcrumbs,
			fallback: {
				[API.PRODUCTS.BY_ID(idToString)]: data,
			},
		},
	}
}

export default ProductPage

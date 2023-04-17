import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import { IBreadcrumb } from '@interfaces'

import { HeadTitleDynamic, MyBreadcrumbs } from '@components'

import { Product } from '@screens'

interface IProps {
	breadcrumbs: IBreadcrumb[]
}

export const ProductPage: NextPage<IProps> = ({ breadcrumbs }) => {
	const route = useRouter()
	const { id } = route.query

	return (
		<>
			<HeadTitleDynamic pageTitle={id?.toString()} />
			<MyBreadcrumbs breadcrumbs={breadcrumbs} />
			<Product />
		</>
	)
}

export default ProductPage

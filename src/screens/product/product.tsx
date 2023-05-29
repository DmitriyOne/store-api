import { FC } from 'react'
import useSWR from 'swr/immutable'

import { API } from '@constants'
import { IBreadcrumb, IProduct } from '@interfaces'

import { axiosFetcher } from '@helpers'

import { MyBreadcrumbs, ProductDetails, Spinner } from '@components'

import { breadcrumbsStyles } from './product.styles'

interface IProps {
	breadcrumbs: IBreadcrumb[]
	id: string
}

export const Product: FC<IProps> = ({ breadcrumbs, id }) => {
	const { data: product, error: isError, isLoading } = useSWR<IProduct>(API.PRODUCTS.BY_ID(id), axiosFetcher)

	if (isLoading) {
		return <Spinner />
	}

	if (isError) {
		return <div>Error..</div>
	}

	return (
		<>
			<MyBreadcrumbs breadcrumbs={breadcrumbs} {...breadcrumbsStyles} />
			<ProductDetails product={product} />
		</>
	)
}

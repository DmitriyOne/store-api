import { FC } from 'react'
import { useRouter } from 'next/router'

import { IBreadcrumb } from '@interfaces'

import { MyBreadcrumbs, ProductDetails } from '@components'

import { breadcrumbsStyles } from './product.styles'

interface IProps {
	breadcrumbs: IBreadcrumb[]
}

export const Product: FC<IProps> = ({ breadcrumbs }) => {
	const router = useRouter()
	const { id } = router.query
	const idToNumber = Number(id)
	const data: any = []

	// const { data } = useGetCurrentProductQuery(typeof idToNumber === 'number'
	// 	? idToNumber
	// 	: skipToken, { skip: router.isFallback }
	// )

	// if (!data) {
	// 	return <div>Loading...</div>
	// }

	return (
		<>
			<MyBreadcrumbs breadcrumbs={breadcrumbs} {...breadcrumbsStyles} />
			<ProductDetails product={data} />
		</>
	)
}

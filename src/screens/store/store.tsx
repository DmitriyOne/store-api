import React from 'react'

import { ProductCard, TagH1 } from '@components'

import { useGetAllProductsQuery } from '@services/product'

import styles from './store.module.scss'

export const Store = () => {
	const { data } = useGetAllProductsQuery()

	return (
		<>
			<TagH1 title="Store" />
			<div className={styles.container}>
				{data?.map(product =>
					<ProductCard key={product.id} product={product} />
				)}
			</div>
		</>
	)
}

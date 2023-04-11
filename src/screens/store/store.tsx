import { MyHeading, ProductCard } from '@components'

import { useGetAllProductsQuery } from '@services/product'

import styles from './store.module.scss'

export const Store = () => {
	const { data } = useGetAllProductsQuery()

	return (
		<>
			<MyHeading size="xl">
				Store page
			</MyHeading>
			<div className={styles.container}>
				{data?.map(product =>
					<ProductCard key={product.id} product={product} />
				)}
			</div>
		</>
	)
}

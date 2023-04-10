import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { STORE_ROUTES } from '@constants'

import { IProduct } from '@interfaces'

import styles from './product-card.module.scss'

interface IProps {
	product: IProduct
}

export const ProductCard: FC<IProps> = ({ product }) => {
	return (
		<div className={styles.component}>
			<div className={styles.imageWrapper}>
				<Image
					src={product.image}
					alt={product.title}
					className={styles.image}
					fill
					sizes="auto"
				/>
			</div>
			<div className={styles.body}>
				<Link
					href={`${STORE_ROUTES.PRODUCT}/${product.id}`}
					className={styles.title}
				>
					{product.title}
				</Link>
				<div className={styles.price}>
					${product.price}
				</div>

				<button
					className={styles.button}
				// onClick={() => !isExistsInCart && addItem(product)}
				>
					{/* {isExistsInCart ? 'Already in cart' : 'Add to cart'} */}
					Add to cart
				</button>
			</div>
		</div>
	)
}

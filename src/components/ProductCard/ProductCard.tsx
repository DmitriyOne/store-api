import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

import { Button } from '@components/Button'

import { STORE_ROUTES } from '@constants'

import { useAppActions, useAppSelector } from '@hooks'

import { IProduct } from '@interfaces'

import styles from './product-card.module.scss'

interface IProps {
	product: IProduct
}

export const ProductCard: FC<IProps> = ({ product }) => {
	const { cart } = useAppSelector(state => state)
	const { addItem } = useAppActions()

	const isExistsInCart = cart.some(item => item.id === product.id)

	const addProduct = () => {
		if (!isExistsInCart) {
			addItem(product)
		}
	}

	const buttonClassName = classNames(styles.button, {
		[styles.disabled]: isExistsInCart,
	})

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

				<Button
					className={buttonClassName}
					onClick={addProduct}
					disabled={isExistsInCart}
				>
					{isExistsInCart ? 'Already in cart' : 'Add to cart'}
				</Button>
			</div>
		</div>
	)
}

import { FC } from 'react'
import Link from 'next/link'

import { Box, Button, Flex } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import { useAppActions, useAppSelector, useCustomStyles } from '@hooks'

import { Heading } from '@components'

import { ProductPrice } from '../ProductPrice'
import { ProductRating } from '../ProductRating'

import { buttonDisabledStyles, buttonStyles, buttonWrapStyles, flex2Styles, flexMainStyles, titleStyles } from './product-body.styles'
import styles from './product-body.module.scss'

interface IProps {
	product: IProduct
}

export const ProductBody: FC<IProps> = ({ product }) => {
	const { productBodyButtonStyles } = useCustomStyles()
	const { cart } = useAppSelector(state => state)
	const { addItem } = useAppActions()
	const isExistInCart = cart.some(item => item.id === product.id)

	const addToCart = () => {
		if (isExistInCart) {
			return
		}
		addItem(product)
	}
	const href = product.id.toString()

	const disabled = isExistInCart ? { ...buttonDisabledStyles } : {...productBodyButtonStyles}

	return (
		<Flex {...flexMainStyles}>
			<Box mb={3}>
				<Heading
					as="h4"
					className={styles.title}
					{...titleStyles}
				>
					<Link
						href={href}
						className="block"
					>
						{product.title}
					</Link>
				</Heading>
				<Flex {...flex2Styles}>
					<ProductRating
						rating={product.rating.rate}
					/>
					<ProductPrice
						price={product.price}
					/>
				</Flex>
			</Box>

			<Flex {...buttonWrapStyles}>
				<Button
					onClick={addToCart}
					disabled={isExistInCart}
					{...buttonStyles}
					{...disabled}
				>
					{isExistInCart ? 'Already in cart' : 'Add to cart'}
				</Button>
			</Flex>
		</Flex>
	)
}

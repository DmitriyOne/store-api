import { FC } from 'react'
import Link from 'next/link'

import { Box, Button, Flex } from '@chakra-ui/react'

import { Heading } from '@components'

import { useCustomStyles } from '@hooks'

import { IProduct } from '@interfaces'

import { ProductPrice } from '../ProductPrice'
import { ProductRating } from '../ProductRating'

import { buttonStyles, buttonWrapStyles, flex2Styles, flexMainStyles, titleStyles } from './product-body.styles'

import styles from './product-body.module.scss'

interface IProps {
	product: IProduct
}

export const ProductBody: FC<IProps> = ({ product }) => {
	const { productBodyButtonStyles } = useCustomStyles()

	const href = product.id.toString()

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
					{...buttonStyles}
					{...productBodyButtonStyles}
				>
					Add to cart
				</Button>
			</Flex>
		</Flex>
	)
}

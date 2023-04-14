import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Box } from '@chakra-ui/react'

import { STORE_ROUTES } from '@constants'
import { IProduct } from '@interfaces'

import { boxStyles } from './product-image.styles'
import styles from './product-image.module.scss'

interface IProps {
	product: IProduct
}

export const ProductImage: FC<IProps> = ({ product }) => {

	const href = product.id.toString()

	return (
		<Box
			className={styles.component}
			{...boxStyles}
		>
			<Link
				href={`${STORE_ROUTES.PRODUCT}/${href}`}
				className="block h-full relative"
			>
				<Image
					className={styles.image}
					src={product.image}
					alt={`Picture of ${product.title}`}
					fill
					sizes="auto"
				/>
			</Link>
		</Box>
	)
}

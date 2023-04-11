import { FC } from 'react'
import Image from 'next/image'

import { Box } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import styles from './product-image.module.scss'

interface IProps {
	product: IProduct
}

export const ProductImage: FC<IProps> = ({ product }) => {

	return (
		<Box
			className={styles.component}
			mt={6}
			mb={4}
		>
			<Image
				className={styles.image}
				src={product.image}
				alt={`Picture of ${product.title}`}
				fill
			/>
		</Box>
	)
}

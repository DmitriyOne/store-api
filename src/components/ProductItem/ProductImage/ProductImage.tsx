import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Box } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import styles from './product-image.module.scss'

interface IProps {
	product: IProduct
}

export const ProductImage: FC<IProps> = ({ product }) => {

	const href = product.id.toString()

	return (
		<Box
			className={styles.component}
			mt={6}
			mb={4}
		>
			<Link href={href} className="block h-full">
				<Image
					className={styles.image}
					src={product.image}
					alt={`Picture of ${product.title}`}
					fill
				/>
			</Link>
		</Box>
	)
}

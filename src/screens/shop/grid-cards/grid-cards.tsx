import { FC } from 'react'

import { SimpleGrid } from '@chakra-ui/react'

import { IProduct } from '@interfaces'

import { usePagination } from '@hooks'

import { Pagination, ProductItem } from '@components'

import { componentStyles } from './grid-cards.styles'

interface IProps {
	products: IProduct[]
}

export const GridCards: FC<IProps> = ({ products }) => {
	const { pageProducts, pageCount, handlePageClick } = usePagination(products)

	return (
		<>
			<SimpleGrid {...componentStyles}>
				{pageProducts.map(product =>
					<ProductItem
						key={product.id}
						product={product}
					/>
				)}
			</SimpleGrid>

			{pageCount >= 2 &&
				<Pagination
					pageCount={pageCount}
					handlePageClick={handlePageClick}
				/>
			}
		</>
	)
}
